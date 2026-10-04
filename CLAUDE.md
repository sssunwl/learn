# learn — SS 學習站

卡片式學習網站,GitHub Pages 部署(repo `sssunwl/learn`,GitHub Actions 建置)。純靜態零相依(HTML/CSS/JS,無框架無後端)。

## 架構(唯一真相來源:`data.js`)

四層:**學科(subject)→ 主題(topic)→ Level → Card**

```
SUBJECTS = [
  { id, icon, title, subtitle, lang, topics: [
      { id, icon, title, subtitle, levels: [
          { id, icon, title, subtitle, cards: [
              { id, kind, zh, en?, ja, romaji?, note? }
          ]}
      ]}
  ]}
]
```

- `ja` 呢個欄位名係 v1(淨係日文)遺留,實際意思係「目標語言文字」,任何學科都填喺呢個欄位,唔會另開欄位
- `kind`:`text`(長文閱讀/說明,`ja` 可留空) / `vocab`(詞彙) / `sentence`(情境例句) / `qna`(模擬問答) / `grammar`(文法句型,`note` 寫用法重點)
- **日文專用**:字串內嘅括號讀音(如「確認（かくにん）」)係刻意保留嘅格式,直接顯示俾使用者睇,唔額外做 ruby 拆字;每個含漢字嘅 `ja`/`note` 都要標晒讀音,唔可以淨係得羅馬字
- **泰文專用**:唔用括號讀音,`romaji` 欄位統一用 à/á/â/ǎ(低/高/降/升調,中平調無符號)標聲調,唔可以自創第二套標法;拼音冇十足把握就喺 `note` 標「待核對」,唔可以靠估
- `en`(可選):英文對照,有填就喺卡片正面中文下面顯示(用喺 Rundown 呢類英文原稿嘅中英日對照)
- topic 可選 `bodyMap`({front, back} 部位點陣列,app.js `renderBodyMap` 畫人體圖,可遮住日文自測)、`flowMaps`(陣列,每張 {id, icon, title, plan, places, steps};plan 揀 app.js `FLOW_PLANS` 入面嘅底圖 chapel/banquet/beach,`renderFlowMap` 畫俯視平面圖逐步走,step 可填 time/at/path)同 `crosses`(十字連結記憶:中心共用字 type「字」或共用開頭音 type「音」+ 四個詞 + 一句 story 串埋,`renderCross` 按日期每日輪一組;可選 `set` 欄位分組,多過一組自動出分頁);兩樣都係 topic 主頁上面嘅圖像記憶區,冇填就唔顯示。部位/十字詞嘅讀音放獨立 `kana`/`r` 欄位,唔用括號格式
- `subject.lang`(BCP-47,例如 `ja-JP`/`th-TH`)俾 `app.js` 嘅 `speak()` 揀 TTS 語音,加新學科一定要填呢個欄位
- 進度(已識/再溫習)存喺 `localStorage`,key 係 `topicId:cardId`,per-device 唔會同步
- 每個主題(topic)自動有一頁「總覽」(`app.js` 嘅 `renderSummary`):將成個主題所有 level 嘅卡片攤平,分「用詞」/「用句與長文」兩節顯示,方便面試前快速預習/複習,唔使逐張 flip。呢個係頁面邏輯自動生成,加新內容唔使額外維護總覽頁

## 加新內容

- **加新主題**(同一學科內,例如日文下面加「日常會話」):喺 `data.js` 起一個新嘅 `XXX_LEVELS` 陣列,再喺對應 subject 嘅 `topics` 加一項 `{id, icon, title, subtitle, levels: XXX_LEVELS}`
- **加新學科**(例如其他語言/其他技能):喺 `SUBJECTS` 加一個新嘅 subject 物件,記得填 `lang`;內容多嘅話可以好似泰文咁獨立開一個 `data-xxx.js`,喺 `index.html` 用 `<script>` 喺 `data.js` 之前載入
- `index.html`/`app.js`/`style.css` 一般唔存內容,淨係改 `data.js`(或者新學科獨立嘅 `data-xxx.js`)

## 部署

- 本機用 `preview_start name:learn`(`.claude/launch.json` 已設定,port 5299)睇
- Push 去 `main` 分支,GitHub Actions(`.github/workflows/deploy.yml`)自動建置部署到 GitHub Pages
- 網址:https://sssunwl.github.io/learn/(待第一次部署後確認)

## 目前內容(日文學科,`data.js`)

- **沖繩婚禮中日口譯**:面試準備/教堂流程(詞彙已補英文)/教堂用詞・中英日對照(41 張)/婚宴(詞彙已補英文)/婚宴用詞・中英日對照(37 張)/攝影/家屬與確認溝通/突發情況/寒暄與基本應對/交通住宿與後勤/宴會 Rundown・After Party(2026-10-02 加,56 張,中英日對照,來自 SS 真實工作 rundown;新人姓名、場地名唔入 repo)/二次會用詞・中英日對照(38 張);主頁有教堂儀式流程圖(`WEDDING_CHAPEL_MAP`,13 步)、婚宴＋二次會流程圖(`WEDDING_BANQUET_MAP`,18 步,跟 10/3 真實 rundown 時間,含 MC/音響 cue)同沙灘二次會流程圖(`WEDDING_BEACH_MAP`,14 步,仙女棒花道/安全/滅火提醒;rundown 冇寫嘅細節係常見做法,以現場為準),都係俯視平面圖標位置同路線、中英日+口譯提示,同 30 組婚禮十字連結記憶(`WEDDING_CROSSES`,分「教堂・婚禮」「婚宴」「二次會」三組各 10 組)
- **日常會話**:日常寒暄與基本應對/餐廳會話・店員篇/餐廳會話・食客篇(含大量味道、口感詞彙)
- **日常用詞與文法**:常用文法句型(20 個核心句型)/日常生活用詞(時間、家庭稱謂、常用動詞、常用形容詞)
- **職場敬語與商業日文**:敬語動詞對照(尊敬語/謙譲語)/職場常用敬語句/對客 vs 對同事嘅語氣分別(解答「同教堂/宴會工作人員溝通應該用敬語定商業語」呢類問題)
- **整骨・整體**(2026-10-02 加,主頁有人體圖 + 13 組十字連結記憶):整骨院/整體院基本(兩者分別、健保、姿勢指示)/身體部位/常見症狀(肩こり、寝違え、ぎっくり腰、猫背⋯)/身體感覺擬聲擬態語(ズキズキ、ピリピリ、ガチガチ、パンパン、重だるい⋯)/擬態語進階・中英日對照(39 張:ガンガン、バキバキ、クラクラ、ムズムズ、ふわふわ⋯ 按感覺類型分組)/向師傅講自己狀況/施術中對話(力度、痛唔痛、做完感覺)/按摩・放鬆店(揉み返し、足つぼ、加鐘、指名)/按摩用詞・中英日對照(36 張:按摩種類、店內用品、力度、預約付款)/整骨用詞・中英日對照(38 張:療法、診所種類、身體組織、冰敷熱敷);全部詞彙卡已補英文

## 目前內容(泰文學科,`data-thai.js`)

2026-09-24 由 Codex 實作(工單 `docs/CODEX_THAI.md`)、Claude review 後上線,從零基礎教到旅遊實戰,159 張卡:

- **泰文入門基礎**:聲調與拼音入門(5 聲調標示法)/打招呼與基本禮貌(含 ครับ/ค่ะ 男女敬語助詞解釋)/數字與基本問句
- **旅遊實景會話**:機場與入境/交通(的士跳錶、嘟嘟車議價、BTS/MRT)/飯店住宿/餐廳點餐與辣度口味(24 張,泰菜辣度詞彙較豐富)/購物與殺價/問路與方向/緊急狀況與求助(旅遊警察 1155、報警 191、醫療 1669)

**待覆核**:6 張含外來語(咖啡機、Wi-Fi、信用卡等)嘅卡喺 `note` 標咗「待核對」,拼音未 100% 確認,搵到泰文母語者可以順便核實——`tt-air-10`、`tt-trans-03`、`tt-trans-04`、`tt-hotel-02`、`tt-hotel-07`、`tt-shop-10`。未做:基本泰式禮儀(合掌禮/寺廟衣著)呢個 level,Codex 完工報告提議但規格冇要求,值唔值得加未定案。
