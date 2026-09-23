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
    <div class="level-grid">${cards}</div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => go("subject", { subjectId: state.subjectId }));
  document.getElementById("summary-btn").addEventListener("click", () => go("summary"));
  app.querySelectorAll(".level-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      go("level", { levelId: btn.dataset.level, mode: "study", index: 0, flipped: false, quiz: null });
    });
  });
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
