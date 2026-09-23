# learn — SS 學習站

卡片式學習網站,GitHub Pages 部署(repo `sssunwl/learn`,GitHub Actions 建置)。純靜態零相依(HTML/CSS/JS,無框架無後端)。

## 架構(唯一真相來源:`data.js`)

四層:**學科(subject)→ 主題(topic)→ Level → Card**

```
SUBJECTS = [
  { id, icon, title, subtitle, topics: [
      { id, icon, title, subtitle, levels: [
          { id, icon, title, subtitle, cards: [
              { id, kind, zh, ja, romaji?, note? }
          ]}
      ]}
  ]}
]
```

- `kind`:`text`(長文閱讀/說明,`ja` 可留空) / `vocab`(詞彙) / `sentence`(情境例句) / `qna`(模擬問答) / `grammar`(文法句型,`note` 寫用法重點)
- 日文字串內嘅括號讀音(如「確認（かくにん）」)係刻意保留嘅格式,直接顯示俾使用者睇,唔額外做 ruby 拆字。**每個含漢字嘅 `ja`/`note` 都要標晒讀音**,唔可以淨係得羅馬字
- 進度(已識/再溫習)存喺 `localStorage`,key 係 `topicId:cardId`,per-device 唔會同步
- 每個主題(topic)自動有一頁「總覽」(`app.js` 嘅 `renderSummary`):將成個主題所有 level 嘅卡片攤平,分「用詞」/「用句與長文」兩節顯示,方便面試前快速預習/複習,唔使逐張 flip。呢個係頁面邏輯自動生成,加新內容唔使額外維護總覽頁

## 加新內容

- **加新主題**(同一學科內,例如日文下面加「日常會話」):喺 `data.js` 起一個新嘅 `XXX_LEVELS` 陣列,再喺對應 subject 嘅 `topics` 加一項 `{id, icon, title, subtitle, levels: XXX_LEVELS}`
- **加新學科**(例如其他語言/其他技能):喺 `SUBJECTS` 加一個新嘅 subject 物件
- `index.html`/`app.js`/`style.css` 唔存內容,淨係改 `data.js`

## 部署

- 本機用 `preview_start name:learn`(`.claude/launch.json` 已設定,port 5299)睇
- Push 去 `main` 分支,GitHub Actions(`.github/workflows/deploy.yml`)自動建置部署到 GitHub Pages
- 網址:https://sssunwl.github.io/learn/(待第一次部署後確認)

## 目前內容(日文學科)

- **沖繩婚禮中日口譯**:面試準備/教堂流程/婚宴/攝影/家屬與確認溝通/突發情況/寒暄與基本應對/交通住宿與後勤
- **日常會話**:日常寒暄與基本應對/餐廳會話・店員篇/餐廳會話・食客篇(含大量味道、口感詞彙)
- **日常用詞與文法**:常用文法句型(20 個核心句型)/日常生活用詞(時間、家庭稱謂、常用動詞、常用形容詞)
- **職場敬語與商業日文**:敬語動詞對照(尊敬語/謙譲語)/職場常用敬語句/對客 vs 對同事嘅語氣分別(解答「同教堂/宴會工作人員溝通應該用敬語定商業語」呢類問題)
