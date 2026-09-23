# 派工單:新增「泰文」學科(從零基礎到旅遊實戰)

> 規劃/審查:Claude｜實作:Codex
> 工作目錄:`/Users/sws/Sun/Claude/learn`
> **動工前必讀(只呢兩份,唔使睇工作區根目錄嘅 CLAUDE.md,同呢個 task 無關)**:`CLAUDE.md`、`data.js`(睇完成個檔,了解現有嘅日文內容同資料形狀)

## 背景

呢個係一個卡片式語言學習靜態網站(GitHub Pages,repo `sssunwl/learn`,已上線 https://sssunwl.github.io/learn/)。純 HTML/CSS/JS,零框架零 build,靠 `<script>` tag 直接載入。

現有架構(四層):**學科(subject)→ 主題(topic)→ Level → Card**,全部資料喺 `data.js`,渲染邏輯喺 `app.js`。目前得一個學科「日文」,底下有 4 個主題(沖繩婚禮口譯、日常會話、日常用詞與文法、職場敬語與商業日文)。

**你嘅任務:加一個新學科「泰文」**,俾一個完全唔識泰文嘅人由零開始學,情境以**旅遊**為主。

## 資料形狀(唔可以改)

```js
const SUBJECTS = [
  { id, icon, title, subtitle, lang, topics: [
      { id, icon, title, subtitle, levels: [
          { id, icon, title, subtitle, cards: [
              { id, kind, zh, ja, romaji?, note? }
          ]}
      ]}
  ]}
]
```

- `kind`:`vocab`(詞彙) / `sentence`(情境例句) / `qna`(模擬問答) / `grammar`(文法/概念說明,`note` 寫用法重點) / `text`(長文說明,`ja` 可留空字串)
- **`ja` 呢個欄位名係歷史遺留(v1 淨係得日文)**,但佢實際意思係「目標語言文字」,唔係淨係得日文專用。**泰文內容一樣填喺 `ja` 欄位,唔好改欄位名、唔好加新欄位。**
- `romaji` 同樣係「羅馬拼音/讀音輔助」嘅通用欄位,泰文嘅羅馬拼音都填喺呢度。
- 日文嘅 `ja` 入面會有全形括號夾住假名讀音(例如「確認（かくにん）」)——**呢個係日文漢字專用格式,泰文唔使跟,亦都唔應該用呢種括號格式**。泰文純粹係:`ja` = 泰文字,`romaji` = 拼音(格式規定見下面「聲調標示法」)。

## 技術改動(只准做呢幾樣)

### 1. 新開檔案 `data-thai.js`(泰文內容獨立一個檔,唔好寫入 `data.js`)

喺呢個新檔度定義兩個 level 陣列常數(named export 唔使,plain `const` global 就得,同 `data.js` 入面 `WEDDING_INTERPRETER_LEVELS` 呢啲常數做法一樣):

```js
const THAI_BASICS_LEVELS = [ /* 見下面「內容規格」 */ ];
const THAI_TRAVEL_LEVELS = [ /* 見下面「內容規格」 */ ];
```

### 2. `index.html`:加一行 `<script>`,喺 `data.js` **之前**

```html
<script src="data-thai.js"></script>
<script src="data.js"></script>
<script src="app.js"></script>
```

(順序要啱:`data-thai.js` 要喺 `data.js` 前面載入,因為 `data.js` 嘅 `SUBJECTS` 會引用 `THAI_BASICS_LEVELS`/`THAI_TRAVEL_LEVELS`。)

### 3. `data.js`:只准改兩處

a) 現有 `japanese` 呢個 subject 物件,加一行 `lang: "ja-JP"`(其他內容一個字都唔准改):

```js
const SUBJECTS = [
  {
    id: "japanese",
    icon: "🇯🇵",
    title: "日文",
    subtitle: "情境會話、口譯、工作日文",
    lang: "ja-JP",   // ← 加呢一行
    topics: [ /* 原本內容,唔准動 */ ]
  },
  {
    id: "thai",
    icon: "🇹🇭",
    title: "泰文",
    subtitle: "從零基礎到旅遊實戰",
    lang: "th-TH",
    topics: [
      {
        id: "thai-basics",
        icon: "🔤",
        title: "泰文入門基礎",
        subtitle: "聲調、招呼語、數字",
        levels: THAI_BASICS_LEVELS
      },
      {
        id: "thai-travel",
        icon: "🧳",
        title: "旅遊實景會話",
        subtitle: "機場、交通、飯店、餐廳、購物、問路、求助",
        levels: THAI_TRAVEL_LEVELS
      }
    ]
  }
];
```

b) 加埋新嘅 `thai` subject 物件(如上)。**`WEDDING_INTERPRETER_LEVELS`、`DAILY_CONVERSATION_LEVELS`、`DAILY_VOCAB_GRAMMAR_LEVELS`、`BUSINESS_KEIGO_LEVELS` 呢四個常數,同埋 `japanese` subject 入面嘅 `topics` 內容,一個字都唔准改。**

### 4. `app.js`:`speak()` 要支援多語言(唔好改呢個 function 以外嘅其他嘢)

而家 `speak()` 寫死 `utter.lang = "ja-JP"`。要改成用返嗰個 subject 自己嘅 `lang`:

```js
function speak(text, lang) {
  if (!("speechSynthesis" in window)) return;
  const clean = text.replace(/（[^）]*）/g, "");
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = lang || "ja-JP";
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}
```

調用嗰邊(`renderStudy` 入面 `speak-btn` 個 click handler)要改做傳埋 lang 落去,例如:

```js
speakBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const subject = findSubject(state.subjectId);
  speak(card.ja, subject && subject.lang);
});
```

`findSubject` 呢個 function 已經存在,直接用。

### 5. Thai 字體:`style.css` 加 Google Fonts + `:lang` 規則(只准加呢啲,唔好郁其他樣式)

泰文聲調符號(vowel/tone marks)用中文字體會顯示錯位甚至消失,一定要加 `Noto Sans Thai`:

1. 喺 `style.css` 開頭嗰句 `@import url("https://fonts.googleapis.com/css2?family=...")`,加多個 family:`Noto+Sans+Thai:wght@400;500;700`(用 `&` 接落現有 query string,唔好開多條 `@import`)
2. 加呢幾條 CSS 規則(放喺檔尾就得):
```css
[lang="th"] {
  font-family: "Noto Sans Thai", "Noto Sans TC", sans-serif;
}
```

同時要喺 `app.js` 渲染泰文字嘅地方加 `lang="th"` 屬性,等瀏覽器揀啱字體:
- `renderStudy` 入面 `.card-ja` 嗰個 div:`<div class="card-ja" lang="${subject.lang ? subject.lang.split('-')[0] : 'ja'}">${card.ja}</div>` (`subject` 要喺呢個 function 攞返:`findSubject(state.subjectId)`)
- `renderSummary` 入面 `.summary-ja` 嗰個 div,做法一樣

## 內容規格

### 聲調標示法(全部泰文卡片嘅 `romaji` 欄位都要跟呢個系統,唔可以自己發明第二套)

泰文係聲調語言,5 個聲調用喺元音上面加符號表示(呢個係通用嘅旅遊書拼音系統):

| 聲調 | 符號 | 例子 |
|---|---|---|
| 中平調 mid | 冇符號 | `ma` |
| 低調 low | 重音 à | `màk` |
| 降調 falling | 揚抑符 â | `mâi` |
| 高調 high | 銳音 á | `máa` |
| 升調 rising | 抑揚符 ǎ | `ǎo` |

**第一個 level 一定要有一張卡專門解釋呢個符號系統**(`kind: "grammar"`),俾用家對照。可以用經典例句 `แม่ม้ามาไหม`(媽媽/馬/來/嗎)做示範,話俾用家知同一個音 `ma` 加五個唔同聲調會變五個唔同意思。

如果去到某個字你唔夠把握個聲調準唔準,**寧願喺 `note` 加一句「聲調待核對」,都唔好亂標**。完工報告要列低邊幾張卡係咁樣。

### Topic 1:泰文入門基礎(`THAI_BASICS_LEVELS`)

三個 level,每個 level 最少 12 張卡:

1. **聲調與拼音入門**(`kind: grammar` 為主):5 聲調符號表(見上)、聲調示範字組、泰文字母大致介紹(唔使教到識寫全部 44 個子音,講清楚「泰文字由子音+母音+聲調符號組成,呢個 app 用羅馬拼音幫你讀」呢個概念就夠)
2. **打招呼與基本禮貌**:你好(สวัสดีครับ/ค่ะ)、多謝、唔該/唔好意思、冇問題、係/唔係、～嗎(ไหม)。**一定要有一張卡專門解釋 ครับ/ค่ะ 呢個性別敬語助詞**(男講 ครับ、女講 ค่ะ,呢個係泰文初學者最常搞錯嘅野,要用 `kind: text` 講清楚,之後所有例句先按情境揀返岩性別嘅版本,或者兩個都寫出嚟)
3. **數字與基本問句**:0-10(加埋 20、100 呢類常用整數)、幾多錢(เท่าไหร่)、呢個/嗰個、邊度(ที่ไหน)

### Topic 2:旅遊實景會話(`THAI_TRAVEL_LEVELS`)

七個 level,每個 level 最少 10 張卡,情境要貼地(真係去泰國旅行用得著嗰啲):

1. **機場與入境**:登機證、護照、海關申報、行李、兌換泰銖
2. **交通**:的士(要識同司機講去邊/唔跳錶點算)、嘟嘟車(tuk-tuk)議價、BTS/MRT 買票、水上的士
3. **飯店住宿**:check-in/check-out、有冇房、要求換房、冷氣壞咗
4. **餐廳點餐 + 辣度／口味詞彙**:呢個 level 要仲豐富過其他,起碼 18 張卡。一定要有一組「辣度／口味」vocab(辣/唔辣/少辣、甜、酸、鹹、唔要香菜呢類,好似 learn 網站入面日文「餐廳會話・食客篇」個做法咁),因為泰菜出名辣,呢個係用家最想學嗰部分
5. **購物與殺價**:平啲得唔得、太貴、有冇第二個顏色/size、可唔可以刷卡
6. **問路與方向**:呢度去邊、直行、轉左/右、遠唔遠、可唔可以行到
7. **緊急狀況與求助**:唔舒服、要睇醫生、報警、唔見咗嘢、大使館

如果做完仲有餘力,可以加多一個 level「基本泰式禮儀」(`kind: text` 為主),解釋合掌禮(ไหว้)幾時用、邊個先鞠躬、寺廟衣著規矩——呢個係加分項,唔係必做,規格入面冇寫嘅其他 level **唔好自己加**,有諗法寫喺完工報告最後「建議」。

## 驗收清單(交付前自己逐條檢查,喺回報入面逐項打勾;冇實際試過嘅唔好講試過)

1. `python3 -m http.server 8010`(喺 `/Users/sws/Sun/Claude/learn` 目錄跑),瀏覽器開 `http://localhost:8010/`
2. 首頁「揀一個學科開始」而家有兩張卡:日文、泰文
3. 撳入泰文 → 見到兩個主題:泰文入門基礎、旅遊實景會話
4. 每個 level 入面:學習卡(flip 見到泰文+羅馬拼音+`note`)、測驗(4 選 1)兩個 tab 都用得
5. 揀任何一張泰文卡撳 🔊,唔會報錯(有泰文語音包嘅裝置會聽到聲,冇嘅靜音都算過)
6. 泰文卡嘅文字睇落聲調符號冇被切到/唔會同下一行疊埋(即係 Noto Sans Thai 字體生效咗)
7. 每個主題嘅「📋 總覽全部內容」照樣分「用詞」/「用句與長文」兩節,顯示晒泰文內容
8. 撳返去日文個學科,原本 4 個主題嘅內容、卡數、進度顯示完全冇變(證明冇手殘改壞日文部分)
9. 375px 手機寬度冇橫向捲動
10. DevTools console 冇 error

## 不要做的事

- **唔准改** `WEDDING_INTERPRETER_LEVELS`、`DAILY_CONVERSATION_LEVELS`、`DAILY_VOCAB_GRAMMAR_LEVELS`、`BUSINESS_KEIGO_LEVELS`,或者 `SUBJECTS` 入面 `japanese` 呢個 subject 嘅 `topics` 內容
- **唔准改** `app.js` 除咗 `speak()`、佢嘅 call site、同埋 `.card-ja`/`.summary-ja` 加 `lang` 屬性呢幾處以外嘅任何 function
- **唔准** git init / commit / push(做完留低俾我 review,我審查完自己 commit)
- **唔准**加 npm、build 工具、任何框架,維持純 `<script>` tag 靜態結構
- **唔准**改 `CLAUDE.md`(我審查完自己更新)
- **唔准**自己加規格冇寫嘅 level/主題;想加嘅諗法寫喺回報最後「建議」就好
- 泰文羅馬拼音如果冇十足把握,唔好靠估硬砌,寧願喺 `note` 標「待核對」

## 完工回報要包含

1. 驗收清單逐條打勾結果
2. 兩個 topic 各自做咗幾多個 level、每個 level 幾多張卡(總數)
3. 邊幾張卡嘅聲調/羅馬拼音你冇十足把握,列低嚟等我覆核
4. 「建議」:規格冇寫、但你覺得之後值得加嘅內容
