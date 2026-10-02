const STORAGE_KEY = "learn-progress-v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    /* private mode / storage blocked: fail silently */
  }
}

let progress = loadProgress();

function progressKey(topicId, cardId) {
  return `${topicId}:${cardId}`;
}

function isKnown(topicId, cardId) {
  return !!progress[progressKey(topicId, cardId)];
}

function toggleKnown(topicId, cardId) {
  const key = progressKey(topicId, cardId);
  if (progress[key]) delete progress[key];
  else progress[key] = true;
  saveProgress(progress);
}

function levelStats(topicId, level) {
  const total = level.cards.length;
  const known = level.cards.filter((c) => isKnown(topicId, c.id)).length;
  return { total, known };
}

function topicStats(topic) {
  return topic.levels.reduce(
    (acc, level) => {
      const { total, known } = levelStats(topic.id, level);
      acc.total += total;
      acc.known += known;
      return acc;
    },
    { total: 0, known: 0 }
  );
}

function subjectStats(subject) {
  return subject.topics.reduce(
    (acc, topic) => {
      const s = topicStats(topic);
      acc.total += s.total;
      acc.known += s.known;
      return acc;
    },
    { total: 0, known: 0 }
  );
}

function speak(text, lang) {
  if (!("speechSynthesis" in window)) return;
  const clean = text.replace(/（[^）]*）/g, "");
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = lang || "ja-JP";
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

const app = document.getElementById("app");

let state = {
  view: "home", // home | subject | topic | level
  subjectId: null,
  topicId: null,
  levelId: null,
  mode: "study",
  index: 0,
  flipped: false,
  quiz: null
};

function go(view, opts = {}) {
  state = { ...state, view, ...opts };
  render();
}

function findSubject(id) {
  return SUBJECTS.find((s) => s.id === id);
}
function findTopic(subjectId, topicId) {
  const subject = findSubject(subjectId);
  return subject && subject.topics.find((t) => t.id === topicId);
}
function findLevel(subjectId, topicId, levelId) {
  const topic = findTopic(subjectId, topicId);
  return topic && topic.levels.find((l) => l.id === levelId);
}

function render() {
  if (state.view === "home") return renderHome();
  if (state.view === "subject") return renderSubject();
  if (state.view === "topic") return renderTopic();
  if (state.view === "summary") return renderSummary();
  if (state.view === "level") return renderLevel();
}

function progressBarHtml(known, total) {
  const pct = total ? Math.round((known / total) * 100) : 0;
  return `
    <div class="progress-bar"><div style="width:${pct}%"></div></div>
    <div class="progress-label">已識 ${known} / ${total}</div>
  `;
}

/* ---- Level 1: 學科 (Subjects) ---- */
function renderHome() {
  const cards = SUBJECTS.map((subject) => {
    const { total, known } = subjectStats(subject);
    return `
      <button class="level-card" data-subject="${subject.id}">
        <div class="level-icon">${subject.icon}</div>
        <div class="level-info">
          <h2>${subject.title}</h2>
          <p class="sub">${subject.subtitle}</p>
          ${progressBarHtml(known, total)}
        </div>
      </button>`;
  }).join("");

  app.innerHTML = `
    <header class="top">
      <h1>SS 學習站</h1>
      <p>揀一個學科開始</p>
    </header>
    <div class="level-grid">${cards}</div>
    <footer class="hint">答案記憶只存喺呢部裝置</footer>
  `;

  app.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      go("subject", { subjectId: btn.dataset.subject });
    });
  });
}

/* ---- Level 2: 主題 (Topics within a subject) ---- */
function renderSubject() {
  const subject = findSubject(state.subjectId);
  if (!subject) return go("home");

  const cards = subject.topics
    .map((topic) => {
      const { total, known } = topicStats(topic);
      return `
        <button class="level-card" data-topic="${topic.id}">
          <div class="level-icon">${topic.icon}</div>
          <div class="level-info">
            <h2>${topic.title}</h2>
            <p class="sub">${topic.subtitle}</p>
            ${progressBarHtml(known, total)}
          </div>
        </button>`;
    })
    .join("");

  app.innerHTML = `
    <div class="toolbar">
      <button class="btn ghost" id="back-btn">← 返回</button>
      <h2 class="level-title">${subject.icon} ${subject.title}</h2>
      <span style="width:64px"></span>
    </div>
    <div class="level-grid">${cards}</div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => go("home"));
  app.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      go("topic", { topicId: btn.dataset.topic });
    });
  });
}

/* ---- Level 3: Levels within a topic ---- */
function renderTopic() {
  const topic = findTopic(state.subjectId, state.topicId);
  if (!topic) return go("home");

  const cards = topic.levels
    .map((level) => {
      const { total, known } = levelStats(topic.id, level);
      return `
        <button class="level-card" data-level="${level.id}">
          <div class="level-icon">${level.icon}</div>
          <div class="level-info">
            <h2>${level.title}</h2>
            <p class="sub">${level.subtitle}</p>
            ${progressBarHtml(known, total)}
          </div>
        </button>`;
    })
    .join("");

  app.innerHTML = `
    <div class="toolbar">
      <button class="btn ghost" id="back-btn">← 返回</button>
      <h2 class="level-title">${topic.icon} ${topic.title}</h2>
      <span style="width:64px"></span>
    </div>
    <button class="btn summary-link" id="summary-btn">📋 總覽全部內容(快速預習/複習)</button>
    ${topic.bodyMap ? `<section class="visual-section"><h3>🧍 人體圖・部位名稱</h3><div id="body-map"></div></section>` : ""}
    ${topic.crosses ? `<section class="visual-section"><h3>✚ 十字連結記憶</h3><div id="cross-box"></div></section>` : ""}
    ${topic.bodyMap || topic.crosses ? `<h3 class="levels-heading">📚 學習卡</h3>` : ""}
    <div class="level-grid">${cards}</div>
  `;

  if (topic.bodyMap) renderBodyMap(topic);
  if (topic.crosses) renderCross(topic);

  document.getElementById("back-btn").addEventListener("click", () => go("subject", { subjectId: state.subjectId }));
  document.getElementById("summary-btn").addEventListener("click", () => go("summary"));
  app.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      go("level", { levelId: btn.dataset.level, mode: "study", index: 0, flipped: false, quiz: null });
    });
  });
}

/* ---- 人體圖:正面/背面,標籤點擊發音;遮住模式用嚟自測 ---- */
const bodyMapState = { view: "front", hide: false, revealed: new Set() };

const BODY_FIGURE = `
  <g class="fig">
    <ellipse cx="210" cy="60" rx="30" ry="36" />
    <line x1="210" y1="88" x2="210" y2="126" stroke-width="28" />
    <path d="M158,122 Q210,110 262,122 Q268,165 256,205 Q250,240 254,262 L260,300 Q210,318 160,300 L166,262 Q170,240 164,205 Q152,165 158,122 Z" />
    <polyline points="160,132 140,205 130,280" stroke-width="24" />
    <polyline points="260,132 280,205 290,280" stroke-width="24" />
    <circle cx="127" cy="298" r="12" /><circle cx="293" cy="298" r="12" />
    <polyline points="186,298 180,400 178,478" stroke-width="34" />
    <polyline points="234,298 240,400 242,478" stroke-width="34" />
    <ellipse cx="174" cy="494" rx="17" ry="9" /><ellipse cx="246" cy="494" rx="17" ry="9" />
  </g>`;

const BODY_BACK_DETAIL = `
  <g class="fig-detail">
    <line x1="210" y1="118" x2="210" y2="292" stroke-dasharray="3 5" />
    <path d="M176,140 L200,146 L194,184 Z" /><path d="M244,140 L220,146 L226,184 Z" />
    <path d="M168,290 Q210,306 252,290" />
    <line x1="210" y1="292" x2="210" y2="312" />
  </g>`;

function layoutLabels(points) {
  // 每邊按點嘅高度排,標籤之間至少隔 GAP,避免重疊
  const GAP = 46;
  const out = [];
  ["left", "right"].forEach((side) => {
    let prev = -Infinity;
    points
      .map((p, i) => ({ ...p, i }))
      .filter((p) => p.side === side)
      .sort((a, b) => a.y - b.y)
      .forEach((p) => {
        const ly = Math.max(p.y, prev + GAP, 22);
        prev = ly;
        out.push({ ...p, ly });
      });
  });
  return out;
}

function renderBodyMap(topic) {
  const box = document.getElementById("body-map");
  if (!box) return;
  const s = bodyMapState;
  const points = topic.bodyMap[s.view];
  const labels = layoutLabels(points);

  const svgLabels = labels
    .map((p) => {
      const key = `${s.view}:${p.i}`;
      const shown = !s.hide || s.revealed.has(key);
      const left = p.side === "left";
      const tx = left ? 118 : 302;
      const lineEnd = left ? 122 : 298;
      const anchor = left ? "end" : "start";
      return `
        <g class="bm-label ${shown ? "" : "hidden-ans"}" data-key="${key}" data-i="${p.i}">
          <line class="bm-leader" x1="${p.x}" y1="${p.y}" x2="${lineEnd}" y2="${p.ly - 5}" />
          <circle class="bm-dot" cx="${p.x}" cy="${p.y}" r="5" />
          <rect class="bm-hit" x="${left ? 0 : 296}" y="${p.ly - 20}" width="124" height="42" />
          <text class="bm-ja" x="${tx}" y="${p.ly}" text-anchor="${anchor}" lang="ja">${shown ? p.ja : "？"}</text>
          ${shown && p.kana ? `<text class="bm-kana" x="${tx}" y="${p.ly + 13}" text-anchor="${anchor}" lang="ja">${p.kana}</text>` : ""}
          <text class="bm-zh" x="${tx}" y="${p.ly + (shown && p.kana ? 26 : 14)}" text-anchor="${anchor}">${p.zh}</text>
        </g>`;
    })
    .join("");

  box.innerHTML = `
    <div class="bm-controls">
      <div class="seg">
        <button data-view="front" class="${s.view === "front" ? "active" : ""}">正面</button>
        <button data-view="back" class="${s.view === "back" ? "active" : ""}">背面</button>
      </div>
      <button class="btn ${s.hide ? "primary" : ""}" id="bm-hide">${s.hide ? "👀 顯示全部" : "🙈 遮住日文自測"}</button>
    </div>
    <svg class="body-svg" viewBox="0 0 420 520" role="img" aria-label="人體部位圖(${s.view === "front" ? "正面" : "背面"})">
      ${BODY_FIGURE}
      ${s.view === "back" ? BODY_BACK_DETAIL : ""}
      ${svgLabels}
    </svg>
    <p class="bm-hint">${s.hide ? "諗一諗個位日文叫咩,再點一下揭曉" : "點部位名稱聽發音"}</p>
  `;

  box.querySelectorAll(".seg button").forEach((btn) =>
    btn.addEventListener("click", () => {
      s.view = btn.dataset.view;
      renderBodyMap(topic);
    })
  );
  box.querySelector("#bm-hide").addEventListener("click", () => {
    s.hide = !s.hide;
    s.revealed.clear();
    renderBodyMap(topic);
  });
  box.querySelectorAll(".bm-label").forEach((g) =>
    g.addEventListener("click", () => {
      const key = g.dataset.key;
      const p = points[Number(g.dataset.i)];
      if (s.hide && !s.revealed.has(key)) {
        s.revealed.add(key);
        renderBodyMap(topic);
      }
      speak(p.kana ? p.kana.replace(/ /g, "") : p.ja, "ja-JP");
    })
  );
}

/* ---- 十字連結記憶:中間共用字/音,四邊四個詞,一句故事串埋 ---- */
const crossStates = {}; // 每個 topic 各自記住睇緊邊組

function highlightShared(cross, word) {
  if (cross.type === "字") {
    return escapeHtml(word.w).split(cross.center).join(`<mark>${cross.center}</mark>`);
  }
  return escapeHtml(word.w);
}

function readingHtml(cross, word) {
  if (cross.type === "音" && word.r.startsWith(cross.center)) {
    return `<mark>${cross.center}</mark>${word.r.slice(cross.center.length)}`;
  }
  return word.r;
}

function renderCross(topic) {
  const box = document.getElementById("cross-box");
  if (!box) return;
  const list = topic.crosses;
  const s = (crossStates[topic.id] ||= { index: null, hide: false, revealed: new Set() });
  // 每日輪一組:按日數揀,之後用 ← → 自己睇其他組
  const today = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  if (s.index === null) s.index = today % list.length;
  const isToday = s.index === today % list.length;
  const cross = list[s.index];
  const pos = ["top", "right", "bottom", "left"];

  const arms = cross.words
    .map((word, i) => {
      const shown = !s.hide || s.revealed.has(i);
      return `
        <button class="cross-cell arm ${pos[i]} ${shown ? "" : "hidden-ans"}" data-i="${i}" lang="ja">
          ${shown ? `<span class="cw">${highlightShared(cross, word)}</span><span class="cr">${readingHtml(cross, word)}</span>` : `<span class="cw">？</span>`}
          <span class="cz">${word.zh}</span>
        </button>`;
    })
    .join("");

  box.innerHTML = `
    <div class="cross-head">
      <button class="btn ghost" id="cross-prev">←</button>
      <div class="cross-meta">${isToday ? "今日一組" : "第 " + (s.index + 1) + " 組"} · ${s.index + 1}/${list.length}</div>
      <button class="btn ghost" id="cross-next">→</button>
    </div>
    <div class="cross-grid">
      ${arms}
      <div class="cross-cell center" lang="ja">
        <span class="cc">${cross.center}</span>
        <span class="ct">${cross.type === "字" ? "同一個字" : "同一個開頭音"}</span>
      </div>
    </div>
    <div class="cross-story">
      <div class="story-ja" lang="ja">${cross.story}</div>
      <div class="story-zh">${cross.storyZh}</div>
      ${cross.tip ? `<div class="story-tip">💡 ${cross.tip}</div>` : ""}
      <div class="story-actions">
        <button class="btn speak" id="cross-speak" title="播放故事句">🔊</button>
        <button class="btn ${s.hide ? "primary" : ""}" id="cross-hide">${s.hide ? "👀 顯示全部" : "🙈 遮住日文自測"}</button>
      </div>
    </div>
  `;

  const move = (d) => {
    s.index = (s.index + d + list.length) % list.length;
    s.revealed.clear();
    renderCross(topic);
  };
  box.querySelector("#cross-prev").addEventListener("click", () => move(-1));
  box.querySelector("#cross-next").addEventListener("click", () => move(1));
  box.querySelector("#cross-speak").addEventListener("click", () => speak(cross.story, "ja-JP"));
  box.querySelector("#cross-hide").addEventListener("click", () => {
    s.hide = !s.hide;
    s.revealed.clear();
    renderCross(topic);
  });
  box.querySelectorAll(".cross-cell.arm").forEach((btn) =>
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.i);
      if (s.hide && !s.revealed.has(i)) {
        s.revealed.add(i);
        renderCross(topic);
      }
      speak(cross.words[i].r, "ja-JP");
    })
  );
}

/* ---- 總覽頁:成個主題所有內容,分「用詞」「用句」一次睇晒 ---- */
function renderSummary() {
  const topic = findTopic(state.subjectId, state.topicId);
  if (!topic) return go("home");
  const subject = findSubject(state.subjectId);

  const vocabRows = [];
  const sentenceRows = [];

  topic.levels.forEach((level) => {
    level.cards.forEach((card) => {
      const row = { level, card };
      if (card.kind === "vocab") vocabRows.push(row);
      else sentenceRows.push(row);
    });
  });

  const renderRows = (rows) => {
    let lastLevelId = null;
    return rows
      .map(({ level, card }) => {
        let heading = "";
        if (level.id !== lastLevelId) {
          heading = `<h4 class="summary-group">${level.icon} ${level.title}</h4>`;
          lastLevelId = level.id;
        }
        return `
          ${heading}
          <div class="summary-row">
            <div class="summary-zh">${card.zh}</div>
            ${card.en ? `<div class="summary-en" lang="en">${escapeHtml(card.en)}</div>` : ""}
            ${card.ja ? `<div class="summary-ja" lang="${subject.lang ? subject.lang.split('-')[0] : 'ja'}">${card.ja}</div>` : ""}
            ${card.romaji ? `<div class="summary-romaji">${card.romaji}</div>` : ""}
            ${card.note ? `<div class="summary-note">${escapeHtml(card.note)}</div>` : ""}
          </div>`;
      })
      .join("");
  };

  app.innerHTML = `
    <div class="toolbar">
      <button class="btn ghost" id="back-btn">← 返回</button>
      <h2 class="level-title">📋 ${topic.title} 總覽</h2>
      <span style="width:64px"></span>
    </div>
    <p class="summary-intro">呢頁將成個主題嘅內容集中晒,方便面試前快速預習或複習。用詞喺前,用句/長文喺後。</p>
    <section class="summary-section">
      <h3>🔤 用詞總覽(${vocabRows.length})</h3>
      ${renderRows(vocabRows)}
    </section>
    <section class="summary-section">
      <h3>💬 用句與長文總覽(${sentenceRows.length})</h3>
      ${renderRows(sentenceRows)}
    </section>
  `;

  document.getElementById("back-btn").addEventListener("click", () => go("topic", { topicId: state.topicId }));
}

/* ---- Level 4: Cards (study / quiz) ---- */
function renderLevel() {
  const level = findLevel(state.subjectId, state.topicId, state.levelId);
  if (!level) return go("home");

  app.innerHTML = `
    <div class="app-level">
      <div class="toolbar">
        <button class="btn ghost" id="back-btn">← 返回</button>
        <h2 class="level-title">${level.icon} ${level.title}</h2>
        <span style="width:64px"></span>
      </div>
      <div class="mode-tabs">
        <button data-mode="study" class="${state.mode === "study" ? "active" : ""}">學習卡</button>
        <button data-mode="quiz" class="${state.mode === "quiz" ? "active" : ""}">測驗</button>
      </div>
      <div id="mode-body"></div>
    </div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => go("topic", { topicId: state.topicId }));
  app.querySelectorAll(".mode-tabs button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "quiz") {
        go("level", { mode, quiz: buildQuiz(level) });
      } else {
        go("level", { mode, index: 0, flipped: false });
      }
    });
  });

  if (state.mode === "study") renderStudy(level);
  else renderQuiz(level);
}

function renderStudy(level) {
  const body = document.getElementById("mode-body");
  const subject = findSubject(state.subjectId);
  const idx = Math.min(state.index, level.cards.length - 1);
  const card = level.cards[idx];
  const known = isKnown(state.topicId, card.id);

  body.innerHTML = `
    <div class="card-progress">第 ${idx + 1} / ${level.cards.length} 張</div>
    <div class="flashcard ${state.flipped ? "flipped" : ""}" id="flashcard">
      <span class="card-kind">${kindLabel(card.kind)}</span>
      <div class="card-zh">${card.zh}</div>
      ${card.en ? `<div class="card-en" lang="en">${escapeHtml(card.en)}</div>` : ""}
      <div class="card-hint">${card.ja ? "點卡片睇答案 →" : "點卡片睇詳細說明 →"}</div>
      <div class="card-back">
        ${card.ja ? `<div class="card-ja" lang="${subject.lang ? subject.lang.split('-')[0] : 'ja'}">${card.ja}</div>` : ""}
        ${card.romaji ? `<div class="card-romaji">${card.romaji}</div>` : ""}
        ${card.note ? `<div class="card-note">${escapeHtml(card.note)}</div>` : ""}
      </div>
    </div>
    <div class="card-actions">
      ${card.ja ? `<button class="btn speak" id="speak-btn" title="播放發音">🔊</button>` : ""}
      <button class="btn known ${known ? "active" : ""}" id="known-btn">${known ? "✅ 已識" : "標記已識"}</button>
    </div>
    <div class="nav-row">
      <button class="btn" id="prev-btn" ${idx === 0 ? "disabled" : ""}>← 上一張</button>
      <button class="btn primary" id="next-btn" ${idx === level.cards.length - 1 ? "disabled" : ""}>下一張 →</button>
    </div>
  `;

  document.getElementById("flashcard").addEventListener("click", () => {
    go("level", { flipped: !state.flipped });
  });
  const speakBtn = document.getElementById("speak-btn");
  if (speakBtn) {
    speakBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const subject = findSubject(state.subjectId);
      speak(card.ja, subject && subject.lang);
    });
  }
  document.getElementById("known-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleKnown(state.topicId, card.id);
    render();
  });
  document.getElementById("prev-btn").addEventListener("click", () => {
    go("level", { index: idx - 1, flipped: false });
  });
  document.getElementById("next-btn").addEventListener("click", () => {
    go("level", { index: idx + 1, flipped: false });
  });
}

function kindLabel(kind) {
  return { vocab: "詞彙", sentence: "情境例句", text: "長文", qna: "模擬問答", grammar: "文法" }[kind] || "";
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuiz(level) {
  const pool = level.cards.filter((c) => c.kind !== "text" && c.kind !== "qna" && c.ja);
  const questions = shuffle(pool).map((card) => {
    const distractors = shuffle(pool.filter((c) => c.id !== card.id)).slice(0, 3);
    const options = shuffle([card, ...distractors]);
    return { card, options };
  });
  return { questions, qIndex: 0, score: 0, answered: false, picked: null };
}

function renderQuiz(level) {
  const body = document.getElementById("mode-body");
  const quiz = state.quiz;

  if (!quiz.questions.length) {
    body.innerHTML = `<p style="text-align:center;color:var(--ink-soft)">呢個 Level 未夠題目出測驗。</p>`;
    return;
  }

  if (quiz.qIndex >= quiz.questions.length) {
    const pct = Math.round((quiz.score / quiz.questions.length) * 100);
    body.innerHTML = `
      <div class="quiz-result">
        <div class="score">${quiz.score} / ${quiz.questions.length}</div>
        <p>答對 ${pct}%</p>
        <button class="btn primary" id="retry-btn">再測一次</button>
      </div>
    `;
    document.getElementById("retry-btn").addEventListener("click", () => {
      go("level", { quiz: buildQuiz(level) });
    });
    return;
  }

  const q = quiz.questions[quiz.qIndex];
  const options = q.options
    .map((opt) => {
      let cls = "";
      if (quiz.answered) {
        if (opt.id === q.card.id) cls = "correct";
        else if (opt.id === quiz.picked) cls = "wrong";
      }
      return `<button class="quiz-option ${cls}" data-id="${opt.id}" ${quiz.answered ? "disabled" : ""}>${opt.ja}</button>`;
    })
    .join("");

  body.innerHTML = `
    <div class="quiz-progress">第 ${quiz.qIndex + 1} / ${quiz.questions.length} 題 · 目前 ${quiz.score} 分</div>
    <div class="quiz-q">
      <span class="card-kind">${kindLabel(q.card.kind)}</span>
      <div class="card-zh">${q.card.zh}</div>
      ${q.card.en ? `<div class="card-en" lang="en">${escapeHtml(q.card.en)}</div>` : ""}
    </div>
    <div class="quiz-options">${options}</div>
    ${quiz.answered ? '<div class="nav-row"><button class="btn primary" id="next-q-btn" style="flex:1">下一題 →</button></div>' : ""}
  `;

  if (!quiz.answered) {
    body.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const picked = btn.dataset.id;
        const correct = picked === q.card.id;
        quiz.answered = true;
        quiz.picked = picked;
        if (correct) quiz.score += 1;
        go("level", { quiz });
      });
    });
  } else {
    document.getElementById("next-q-btn").addEventListener("click", () => {
      quiz.qIndex += 1;
      quiz.answered = false;
      quiz.picked = null;
      go("level", { quiz });
    });
  }
}

render();
