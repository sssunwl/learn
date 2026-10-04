// 唯一真相來源:所有學習內容都喺呢個檔。見 CLAUDE.md。
// 結構:SUBJECTS(學科,例如日文) → topics(主題,例如沖繩婚禮口譯) → levels → cards
const WEDDING_INTERPRETER_LEVELS = [
  {
    id: "interview",
    icon: "🎤",
    title: "面試準備",
    subtitle: "自我介紹 + 必背 10 詞 + 模擬問答",
    cards: [
      {
        id: "int-01",
        kind: "text",
        zh: "面試自我介紹(整段背熟,面試官問「點解適合做」時用)",
        ja: "香港（ホンコン）出身（しゅっしん）で、広東語（かんとんご）と中国語（ちゅうごくご）、日本語（にほんご）でのコミュニケーションが可能（かのう）です。香港（ホンコン）・台湾（たいわん）からのお客様（きゃくさま）と、日本人（にほんじん）スタッフの間（あいだ）に入（はい）って、できるだけ正確（せいかく）で分（わ）かりやすく通訳（つうやく）することを心（こころ）がけています。結婚式（けっこんしき）は時間管理（じかんかんり）や細（こま）かい確認（かくにん）がとても大切（たいせつ）だと思（おも）いますので、単純（たんじゅん）に言葉（ことば）を訳（やく）すだけではなく、双方（そうほう）が安心（あんしん）できるようにサポートしたいと思（おも）っています。",
        note: "中文意思:我來自香港,可以用廣東話、中文及日文溝通。我希望在香港、台灣客人與日本工作人員之間,提供準確而容易理解的口譯。婚禮非常重視時間管理和細節確認,所以我認為不只是逐字翻譯,而是要令雙方都安心。"
      },
      { id: "int-02", kind: "vocab", zh: "婚禮儀式", ja: "挙式（きょしき）" },
      { id: "int-03", kind: "vocab", zh: "婚宴", ja: "披露宴（ひろうえん）" },
      { id: "int-04", kind: "vocab", zh: "新郎", ja: "新郎（しんろう）" },
      { id: "int-05", kind: "vocab", zh: "新娘", ja: "新婦（しんぷ）" },
      { id: "int-06", kind: "vocab", zh: "流程／進度", ja: "進行（しんこう）" },
      { id: "int-07", kind: "vocab", zh: "流程安排", ja: "段取り（だんどり）" },
      { id: "int-08", kind: "vocab", zh: "新人準備(妝髮更衣)", ja: "お支度（おしたく）" },
      { id: "int-09", kind: "vocab", zh: "確認", ja: "確認（かくにん）" },
      { id: "int-10", kind: "vocab", zh: "引導／帶領", ja: "ご案内（ごあんない）" },
      { id: "int-11", kind: "vocab", zh: "口譯", ja: "通訳（つうやく）" },
      {
        id: "int-12",
        kind: "qna",
        zh: "面試官可能問:你認為作為翻譯最重要的是什麼?",
        ja: "通訳（つうやく）として一番（いちばん）大切（たいせつ）なことは何（なん）だと思（おも）いますか？",
        romaji: "Tsūyaku toshite ichiban taisetsu na koto wa nan da to omoimasu ka?",
        note: "建議答案:\n正確（せいかく）さと、双方（そうほう）が安心（あんしん）してコミュニケーションできることだと思（おも）います。特（とく）に結婚式（けっこんしき）では時間（じかん）や段取（だんど）りが決（き）まっているので、曖昧（あいまい）な内容（ないよう）は必（かなら）ず確認（かくにん）し、勝手（かって）に判断（はんだん）しないことを大切（たいせつ）にしたいです。\n\n(中文:我認為最重要的是準確,以及令雙方都能安心溝通。尤其婚禮有固定時間和流程,遇到不清楚的內容,我一定會確認,不會擅自判斷。)"
      },
      {
        id: "int-13",
        kind: "qna",
        zh: "面試官可能問:如果日本工作人員講得太快,你聽唔清楚點算?",
        ja: "日本（にほん）のスタッフの話（はな）すスピードが速（はや）くて聞（き）き取（と）れない場合（ばあい）、どうしますか？",
        romaji: "Nihon no sutaffu no hanasu supīdo ga hayakute kikitorenai baai, dō shimasu ka?",
        note: "建議答案:\n分（わ）からないまま通訳（つうやく）することは避（さ）けたいので、「申（もう）し訳（わけ）ございません。正確（せいかく）に通訳（つうやく）したいので、もう一度（いちど）お願（ねが）いできますか」と確認（かくにん）します。\n\n(中文:我不會在未聽清楚的情況下就自己猜測翻譯。我會說:不好意思,為了準確翻譯,可以麻煩再說一次嗎?)"
      }
    ]
  },
  {
    id: "chapel",
    icon: "⛪",
    title: "教堂流程",
    subtitle: "現場確認、帶領客人、教堂儀式詞彙與例句",
    cards: [
      { id: "cha-01", kind: "sentence", zh: "可以讓我確認一下嗎?(萬用句)", ja: "確認（かくにん）させていただけますか？", romaji: "Kakunin sasete itadakemasu ka?" },
      { id: "cha-02", kind: "sentence", zh: "可以告訴我接下來的流程嗎?", ja: "この後（あと）の流（なが）れを教（おし）えていただけますか？", romaji: "Kono ato no nagare o oshiete itadakemasu ka?" },
      { id: "cha-03", kind: "sentence", zh: "下一個流程幾點開始?", ja: "次（つぎ）の進行（しんこう）は何時（なんじ）からでしょうか？", romaji: "Tsugi no shinkō wa nanji kara deshō ka?" },
      { id: "cha-04", kind: "sentence", zh: "可以讓我確認一下當日流程表嗎?", ja: "当日（とうじつ）の進行表（しんこうひょう）を確認（かくにん）させていただけますか？", romaji: "Tōjitsu no shinkōhyō o kakunin sasete itadakemasu ka?" },
      { id: "cha-05", kind: "sentence", zh: "需要在幾點前準備好?", ja: "何時（なんじ）までに準備（じゅんび）すればよろしいでしょうか？", romaji: "Nanji made ni junbi sureba yoroshii deshō ka?" },
      { id: "cha-06", kind: "sentence", zh: "請在這裡稍等。", ja: "こちらで少々（しょうしょう）お待（ま）ちください。", romaji: "Kochira de shōshō omachi kudasai." },
      { id: "cha-07", kind: "sentence", zh: "準備好之後,我們會再帶您過去／通知您。", ja: "準備（じゅんび）が整（ととの）いましたら、ご案内（あんない）いたします。", romaji: "Junbi ga totonoimashitara, go-annai itashimasu." },
      { id: "cha-08", kind: "sentence", zh: "接下來先請您更衣。", ja: "これから先（さき）にお着替（きが）えをしていただきます。", romaji: "Kore kara saki ni okigae o shite itadakimasu." },
      { id: "cha-09", kind: "sentence", zh: "工作人員準備好後會再帶大家過去。", ja: "スタッフの準備（じゅんび）が整（ととの）いましたら、ご案内（あんない）いたします。", romaji: "Sutaffu no junbi ga totonoimashitara, go-annai itashimasu." },
      { id: "cha-v01", kind: "vocab", zh: "教堂", en: "Chapel", ja: "チャペル" },
      { id: "cha-v02", kind: "vocab", zh: "新人", en: "Bride and groom", ja: "新郎新婦（しんろうしんぷ）" },
      { id: "cha-v03", kind: "vocab", zh: "牧師", en: "Minister / Pastor", ja: "牧師（ぼくし）" },
      { id: "cha-v04", kind: "vocab", zh: "證婚人／司式者", en: "Officiant", ja: "司式者（ししきしゃ）" },
      { id: "cha-v05", kind: "vocab", zh: "入場", en: "Entrance / Processional", ja: "入場（にゅうじょう）" },
      { id: "cha-v06", kind: "vocab", zh: "退場", en: "Exit / Recessional", ja: "退場（たいじょう）" },
      { id: "cha-v07", kind: "vocab", zh: "彩排", en: "Rehearsal", ja: "リハーサル" },
      { id: "cha-v08", kind: "vocab", zh: "結婚誓詞", en: "Wedding vows", ja: "誓（ちか）いの言葉（ことば）" },
      { id: "cha-v09", kind: "vocab", zh: "交換戒指", en: "Ring exchange", ja: "指輪交換（ゆびわこうかん）" },
      { id: "cha-v10", kind: "vocab", zh: "結婚戒指", en: "Wedding ring", ja: "結婚指輪（けっこんゆびわ）" },
      { id: "cha-v11", kind: "vocab", zh: "婚紗", en: "Wedding dress", ja: "ウェディングドレス" },
      { id: "cha-v12", kind: "vocab", zh: "頭紗", en: "Veil", ja: "ベール" },
      { id: "cha-v13", kind: "vocab", zh: "捧花", en: "Bouquet", ja: "ブーケ" },
      { id: "cha-10", kind: "sentence", zh: "現在開始進行婚禮彩排。", ja: "これから挙式（きょしき）のリハーサルを行（おこな）います。", romaji: "Kore kara kyoshiki no rihāsaru o okonaimasu." },
      { id: "cha-11", kind: "sentence", zh: "首先會請新郎入場。", ja: "まず新郎様（しんろうさま）からご入場（にゅうじょう）いただきます。", romaji: "Mazu shinrō-sama kara go-nyūjō itadakimasu." },
      { id: "cha-12", kind: "sentence", zh: "之後新娘會和爸爸一起入場。", ja: "その後（あと）、新婦様（しんぷさま）がお父様（とうさま）と一緒（いっしょ）にご入場（にゅうじょう）されます。", romaji: "Sono ato, shinpu-sama ga otō-sama to issho ni go-nyūjō saremasu." },
      { id: "cha-13", kind: "sentence", zh: "到時工作人員會提示時間。", ja: "タイミングはスタッフからご案内（あんない）いたします。", romaji: "Taimingu wa sutaffu kara go-annai itashimasu." },
      { id: "cha-14", kind: "sentence", zh: "交換戒指後會拍照。", ja: "指輪交換（ゆびわこうかん）の後（あと）に写真撮影（しゃしんさつえい）があります。", romaji: "Yubiwa kōkan no ato ni shashin satsuei ga arimasu." },
      { id: "cha-15", kind: "sentence", zh: "婚禮儀式會按原定時間開始嗎?", ja: "挙式（きょしき）は予定通（よていどお）り開始（かいし）しますか？", romaji: "Kyoshiki wa yotei dōri kaishi shimasu ka?" }
    ]
  },
  {
    id: "chapel-terms",
    icon: "📖",
    title: "教堂用詞・中英日對照",
    subtitle: "儀式角色、物品、環節 + 現場廣播句",
    cards: [
      { id: "ct-v01", kind: "vocab", zh: "婚禮儀式(教堂嗰part)", en: "Wedding ceremony", ja: "挙式（きょしき）" },
      { id: "ct-v02", kind: "vocab", zh: "神父(天主教)", en: "Priest", ja: "神父（しんぷ）", note: "同「新婦（しんぷ）」同音!度假村教堂多數係基督教「牧師（ぼくし）」。" },
      { id: "ct-v03", kind: "vocab", zh: "聖歌隊", en: "Choir", ja: "聖歌隊（せいかたい）" },
      { id: "ct-v04", kind: "vocab", zh: "風琴手", en: "Organist", ja: "オルガニスト" },
      { id: "ct-v05", kind: "vocab", zh: "祭壇", en: "Altar", ja: "祭壇（さいだん）" },
      { id: "ct-v06", kind: "vocab", zh: "教堂走道(新娘行嗰條)", en: "Aisle", ja: "バージンロード", note: "和製英語,英文唔講 virgin road,講 aisle。" },
      { id: "ct-v07", kind: "vocab", zh: "觀禮賓客", en: "Guests attending the ceremony", ja: "参列者（さんれつしゃ）" },
      { id: "ct-v08", kind: "vocab", zh: "男家座位/女家座位", en: "Groom's side / Bride's side", ja: "新郎側（しんろうがわ）／新婦側（しんぷがわ）", note: "面向祭壇:右邊新郎側,左邊新婦側。" },
      { id: "ct-v09", kind: "vocab", zh: "婚禮統籌/貼身助理", en: "Wedding planner / Bridal attendant", ja: "ウェディングプランナー／アテンダー", note: "「アテンダー」(介添人（かいぞえにん）)係全程跟住新娘幫手執裙嘅工作人員。" },
      { id: "ct-v10", kind: "vocab", zh: "新娘休息室", en: "Bridal room", ja: "新婦控室（しんぷひかえしつ）" },
      { id: "ct-v11", kind: "vocab", zh: "戒指枕", en: "Ring pillow", ja: "リングピロー" },
      { id: "ct-v12", kind: "vocab", zh: "戒指童", en: "Ring bearer", ja: "リングボーイ／リングガール" },
      { id: "ct-v13", kind: "vocab", zh: "花童", en: "Flower girl", ja: "フラワーガール" },
      { id: "ct-v14", kind: "vocab", zh: "拖紗童", en: "Train bearer", ja: "ベールボーイ／ベールガール" },
      { id: "ct-v15", kind: "vocab", zh: "婚紗拖尾", en: "Train (of the dress)", ja: "トレーン／ドレスの裾（すそ）" },
      { id: "ct-v16", kind: "vocab", zh: "挽住手", en: "Arm in arm", ja: "腕（うで）を組（く）む" },
      { id: "ct-v17", kind: "vocab", zh: "爸爸將新娘交俾新郎", en: "Giving away the bride", ja: "新婦（しんぷ）の引（ひ）き渡（わた）し" },
      { id: "ct-v18", kind: "vocab", zh: "媽媽幫新娘落頭紗", en: "Veil-down (by the mother)", ja: "ベールダウン" },
      { id: "ct-v19", kind: "vocab", zh: "揭頭紗", en: "Veil lifting", ja: "ベールアップ" },
      { id: "ct-v20", kind: "vocab", zh: "聖詩", en: "Hymn", ja: "讃美歌（さんびか）" },
      { id: "ct-v21", kind: "vocab", zh: "聖經", en: "Bible", ja: "聖書（せいしょ）" },
      { id: "ct-v22", kind: "vocab", zh: "祈禱", en: "Prayer", ja: "祈（いの）り／祈祷（きとう）" },
      { id: "ct-v23", kind: "vocab", zh: "誓約之吻", en: "The kiss", ja: "誓（ちか）いのキス" },
      { id: "ct-v24", kind: "vocab", zh: "結婚證書", en: "Marriage certificate", ja: "結婚証明書（けっこんしょうめいしょ）" },
      { id: "ct-v25", kind: "vocab", zh: "簽名", en: "Signature / Signing", ja: "署名（しょめい）" },
      { id: "ct-v26", kind: "vocab", zh: "證婚人/見證人", en: "Witness", ja: "証人（しょうにん）" },
      { id: "ct-v27", kind: "vocab", zh: "宣佈結婚成立", en: "Pronouncement of marriage", ja: "結婚成立宣言（けっこんせいりつせんげん）" },
      { id: "ct-v28", kind: "vocab", zh: "撒花瓣", en: "Flower shower", ja: "フラワーシャワー" },
      { id: "ct-v29", kind: "vocab", zh: "拋花球", en: "Bouquet toss", ja: "ブーケトス" },
      { id: "ct-v30", kind: "vocab", zh: "敲鐘", en: "Ring the bell", ja: "鐘（かね）を鳴（な）らす", note: "好多沖繩教堂儀式後新人會一齊敲鐘。" },
      { id: "ct-v31", kind: "vocab", zh: "禁止用閃光燈", en: "No flash photography", ja: "フラッシュ撮影（さつえい）禁止（きんし）" },
      { id: "ct-01", kind: "sentence", zh: "儀式即將開始。", en: "The ceremony will begin shortly.", ja: "まもなく挙式（きょしき）が始（はじ）まります。", romaji: "Mamonaku kyoshiki ga hajimarimasu." },
      { id: "ct-02", kind: "sentence", zh: "請將手機調至靜音。", en: "Please set your phones to silent.", ja: "携帯電話（けいたいでんわ）はマナーモードにお願（ねが）いします。", romaji: "Keitai denwa wa manā mōdo ni onegaishimasu." },
      { id: "ct-03", kind: "sentence", zh: "儀式期間請勿使用閃光燈。", en: "Please refrain from using flash during the ceremony.", ja: "挙式中（きょしきちゅう）のフラッシュ撮影（さつえい）はご遠慮（えんりょ）ください。", romaji: "Kyoshikichū no furasshu satsuei wa goenryo kudasai." },
      { id: "ct-04", kind: "sentence", zh: "請各位起立。", en: "Please rise.", ja: "皆様（みなさま）、ご起立（きりつ）ください。", romaji: "Minasama, go-kiritsu kudasai." },
      { id: "ct-05", kind: "sentence", zh: "請坐。", en: "Please be seated.", ja: "ご着席（ちゃくせき）ください。", romaji: "Go-chakuseki kudasai." },
      { id: "ct-06", kind: "sentence", zh: "請跟住牧師讀。", en: "Please repeat after the minister.", ja: "牧師（ぼくし）の後（あと）に続（つづ）けてお読（よ）みください。", romaji: "Bokushi no ato ni tsuzukete oyomi kudasai." },
      { id: "ct-07", kind: "sentence", zh: "新郎請轉身面向新娘。", en: "Groom, please turn to face the bride.", ja: "新郎様（しんろうさま）、新婦様（しんぷさま）の方（ほう）を向（む）いてください。", romaji: "Shinrō-sama, shinpu-sama no hō o muite kudasai." },
      { id: "ct-08", kind: "sentence", zh: "請在這裡簽名。", en: "Please sign here.", ja: "こちらにご署名（しょめい）をお願（ねが）いします。", romaji: "Kochira ni go-shomei o onegaishimasu." },
      { id: "ct-09", kind: "sentence", zh: "請喺走道兩邊排好,準備撒花瓣。", en: "Please line up on both sides of the aisle for the flower shower.", ja: "フラワーシャワーのため、両側（りょうがわ）にお並（なら）びください。", romaji: "Furawā shawā no tame, ryōgawa ni onarabi kudasai." },
      { id: "ct-10", kind: "sentence", zh: "單身女士請到前面接花球。", en: "All single ladies, please come forward for the bouquet toss.", ja: "ブーケトスを行（おこな）います。独身（どくしん）の女性（じょせい）の方（かた）は前（まえ）へどうぞ。", romaji: "Būke tosu o okonaimasu. Dokushin no josei no kata wa mae e dōzo." }
    ]
  },
  {
    id: "reception",
    icon: "🥂",
    title: "婚宴",
    subtitle: "披露宴流程、致辭祝酒、飲食過敏",
    cards: [
      { id: "rec-v01", kind: "vocab", zh: "婚宴", en: "Wedding reception / Banquet", ja: "披露宴（ひろうえん）" },
      { id: "rec-v02", kind: "vocab", zh: "婚宴場地", en: "Reception venue", ja: "披露宴会場（ひろうえんかいじょう）" },
      { id: "rec-v03", kind: "vocab", zh: "座位表", en: "Seating chart", ja: "席次表（せきじひょう）" },
      { id: "rec-v04", kind: "vocab", zh: "賓客", en: "Guests", ja: "ゲスト" },
      { id: "rec-v05", kind: "vocab", zh: "主桌", en: "Head table (couple's table)", ja: "高砂（たかさご）" },
      { id: "rec-v06", kind: "vocab", zh: "祝酒", en: "Toast", ja: "乾杯（かんぱい）" },
      { id: "rec-v07", kind: "vocab", zh: "致辭", en: "Speech", ja: "スピーチ" },
      { id: "rec-v08", kind: "vocab", zh: "切蛋糕", en: "Cake cutting", ja: "ケーキ入刀（にゅうとう）" },
      { id: "rec-v09", kind: "vocab", zh: "換裝再入場", en: "Outfit change", ja: "お色直（いろなお）し" },
      { id: "rec-v10", kind: "vocab", zh: "再次進場", en: "Re-entrance", ja: "再入場（さいにゅうじょう）" },
      { id: "rec-v11", kind: "vocab", zh: "新人致謝", en: "Couple's thank-you speech", ja: "新郎新婦謝辞（しんろうしんぷしゃじ）" },
      { id: "rec-v12", kind: "vocab", zh: "送客", en: "Send-off", ja: "お見送（みおく）り" },
      { id: "rec-v13", kind: "vocab", zh: "回禮／喜禮", en: "Wedding favors / Return gifts", ja: "引（ひ）き出物（でもの）" },
      { id: "rec-01", kind: "sentence", zh: "婚宴預計幾點開始?", ja: "披露宴（ひろうえん）は何時（なんじ）から開始予定（かいしよてい）でしょうか？", romaji: "Hirōen wa nanji kara kaishi yotei deshō ka?" },
      { id: "rec-02", kind: "sentence", zh: "祝酒之前需要翻譯嗎?", ja: "乾杯（かんぱい）の前（まえ）に通訳（つうやく）が必要（ひつよう）でしょうか？", romaji: "Kanpai no mae ni tsūyaku ga hitsuyō deshō ka?" },
      { id: "rec-03", kind: "sentence", zh: "致辭部分使用逐句／交替傳譯可以嗎?", ja: "スピーチは逐次通訳（ちくじつうやく）でよろしいでしょうか？", romaji: "Supīchi wa chikuji tsūyaku de yoroshii deshō ka?", note: "逐次通訳(ちくじつうやく)= consecutive interpreting／交替傳譯,面試值得識呢個詞。" },
      { id: "rec-v14", kind: "vocab", zh: "甲殼類", en: "Shellfish / Crustaceans", ja: "甲殻類（こうかくるい）" },
      { id: "rec-v15", kind: "vocab", zh: "蝦", en: "Shrimp / Prawn", ja: "海老（えび）" },
      { id: "rec-v16", kind: "vocab", zh: "蟹", en: "Crab", ja: "蟹（かに）" },
      { id: "rec-v17", kind: "vocab", zh: "蛋", en: "Egg", ja: "卵（たまご）" },
      { id: "rec-v18", kind: "vocab", zh: "奶類製品", en: "Dairy products", ja: "乳製品（にゅうせいひん）" },
      { id: "rec-v19", kind: "vocab", zh: "小麥", en: "Wheat", ja: "小麦（こむぎ）" },
      { id: "rec-v20", kind: "vocab", zh: "堅果類", en: "Nuts", ja: "ナッツ類（るい）" },
      { id: "rec-04", kind: "sentence", zh: "有食物敏感嗎?", ja: "食物（しょくもつ）アレルギーはございますか？", romaji: "Shokumotsu arerugī wa gozaimasu ka?" },
      { id: "rec-05", kind: "sentence", zh: "這份是過敏對應餐。", ja: "アレルギー対応（たいおう）のお料理（りょうり）はこちらです。", romaji: "Arerugī taiō no oryōri wa kochira desu." },
      { id: "rec-06", kind: "sentence", zh: "可以吃生食嗎?", ja: "生（なま）ものは召（め）し上（あ）がれますか？", romaji: "Namamono wa meshiagaremasu ka?" },
      { id: "rec-07", kind: "sentence", zh: "有一位素食客人。", ja: "ベジタリアンのお客様（きゃくさま）が一名（いちめい）いらっしゃいます。", romaji: "Bejitarian no okyakusama ga ichimei irasshaimasu." }
    ]
  },
  {
    id: "reception-terms",
    icon: "🍽️",
    title: "婚宴用詞・中英日對照",
    subtitle: "佈置物品、環節、飲食 + 現場常用句",
    cards: [
      { id: "rt-v01", kind: "vocab", zh: "歡迎牌", en: "Welcome board", ja: "ウェルカムボード" },
      { id: "rt-v02", kind: "vocab", zh: "簽名冊", en: "Guest book", ja: "芳名帳（ほうめいちょう）" },
      { id: "rt-v03", kind: "vocab", zh: "座位名牌", en: "Place card / Name card", ja: "席札（せきふだ）" },
      { id: "rt-v04", kind: "vocab", zh: "人情錢/紅包", en: "Monetary gift", ja: "ご祝儀（しゅうぎ）", note: "日本用專用信封「ご祝儀袋（しゅうぎぶくろ）」,唔係紅色利是封。" },
      { id: "rt-v05", kind: "vocab", zh: "負責簽到嘅人", en: "Reception desk staff", ja: "受付係（うけつけがかり）" },
      { id: "rt-v06", kind: "vocab", zh: "主賓", en: "Guest of honor", ja: "主賓（しゅひん）" },
      { id: "rt-v07", kind: "vocab", zh: "主賓賀辭", en: "Congratulatory speech", ja: "主賓祝辞（しゅひんしゅくじ）" },
      { id: "rt-v08", kind: "vocab", zh: "帶頭祝酒", en: "Leading the toast", ja: "乾杯（かんぱい）の発声（はっせい）", note: "日本婚宴會請一位賓客專門講「乾杯！」,叫「乾杯の発声」。" },
      { id: "rt-v09", kind: "vocab", zh: "婚禮蛋糕", en: "Wedding cake", ja: "ウェディングケーキ" },
      { id: "rt-v10", kind: "vocab", zh: "互餵第一啖蛋糕", en: "First bite", ja: "ファーストバイト", note: "新郎餵新娘用細匙羹(一世唔俾你餓親),新娘餵新郎用大匙羹(一世煮好嘢俾你食)。" },
      { id: "rt-v11", kind: "vocab", zh: "逐枱點蠟燭", en: "Candle service", ja: "キャンドルサービス" },
      { id: "rt-v12", kind: "vocab", zh: "新人暫時離場", en: "Couple steps out (temporarily)", ja: "中座（ちゅうざ）", note: "換衫前新人離開會場,通常會由家人或朋友陪住離場。" },
      { id: "rt-v13", kind: "vocab", zh: "新娘讀俾父母嘅信", en: "Bride's letter to her parents", ja: "花嫁（はなよめ）の手紙（てがみ）" },
      { id: "rt-v14", kind: "vocab", zh: "送花俾父母", en: "Flower presentation to parents", ja: "花束贈呈（はなたばぞうてい）" },
      { id: "rt-v15", kind: "vocab", zh: "兩家代表致謝", en: "Thank-you speech on behalf of both families", ja: "両家代表謝辞（りょうけだいひょうしゃじ）", note: "通常由新郎爸爸代表兩家人講。" },
      { id: "rt-v16", kind: "vocab", zh: "賀電", en: "Congratulatory telegram/message", ja: "祝電（しゅくでん）" },
      { id: "rt-v17", kind: "vocab", zh: "驚喜環節", en: "Surprise", ja: "サプライズ" },
      { id: "rt-v18", kind: "vocab", zh: "送客小禮物", en: "Petit gift (send-off favor)", ja: "プチギフト" },
      { id: "rt-v19", kind: "vocab", zh: "全餐/套餐", en: "Course meal", ja: "コース料理（りょうり）" },
      { id: "rt-v20", kind: "vocab", zh: "前菜/主菜/甜品", en: "Appetizer / Main course / Dessert", ja: "前菜（ぜんさい）／メイン／デザート" },
      { id: "rt-v21", kind: "vocab", zh: "任飲", en: "Free flow drinks", ja: "飲（の）み放題（ほうだい）／フリードリンク" },
      { id: "rt-v22", kind: "vocab", zh: "無酒精飲品", en: "Non-alcoholic drinks", ja: "ソフトドリンク／ノンアルコール" },
      { id: "rt-v23", kind: "vocab", zh: "兒童餐", en: "Kids' meal", ja: "お子様（こさま）メニュー" },
      { id: "rt-v24", kind: "vocab", zh: "BB 櫈", en: "High chair", ja: "ベビーチェア" },
      { id: "rt-v25", kind: "vocab", zh: "甜品自助餐", en: "Dessert buffet", ja: "デザートビュッフェ" },
      { id: "rt-v26", kind: "vocab", zh: "婚禮攝影師", en: "Wedding photographer", ja: "カメラマン" },
      { id: "rt-v27", kind: "vocab", zh: "錄影師", en: "Videographer", ja: "ビデオカメラマン" },
      { id: "rt-01", kind: "sentence", zh: "請喺簽名冊寫低名。", en: "Please sign the guest book.", ja: "芳名帳（ほうめいちょう）にご記入（きにゅう）をお願（ねが）いします。", romaji: "Hōmeichō ni go-kinyū o onegaishimasu." },
      { id: "rt-02", kind: "sentence", zh: "請睇座位表搵自己個位。", en: "Please check the seating chart for your seat.", ja: "席次表（せきじひょう）でお席（せき）をご確認（かくにん）ください。", romaji: "Sekijihyō de oseki o gokakunin kudasai." },
      { id: "rt-03", kind: "sentence", zh: "請各位入座,婚宴即將開始。", en: "Please take your seats. The reception will begin shortly.", ja: "まもなく披露宴（ひろうえん）が始（はじ）まります。お席（せき）にお着（つ）きください。", romaji: "Mamonaku hirōen ga hajimarimasu. Oseki ni otsuki kudasai." },
      { id: "rt-04", kind: "sentence", zh: "有冇人飲唔到酒?", en: "Is there anyone who doesn't drink alcohol?", ja: "お酒（さけ）が飲（の）めない方（かた）はいらっしゃいますか？", romaji: "Osake ga nomenai kata wa irasshaimasu ka?" },
      { id: "rt-05", kind: "sentence", zh: "請幫我加一張 BB 櫈。", en: "Could we have an extra high chair, please?", ja: "ベビーチェアを一（ひと）つ追加（ついか）していただけますか？", romaji: "Bebī chea o hitotsu tsuika shite itadakemasu ka?" },
      { id: "rt-06", kind: "sentence", zh: "新人而家暫時離場換衫。", en: "The couple will now step out for an outfit change.", ja: "新郎新婦（しんろうしんぷ）はお色直（いろなお）しのため、一旦（いったん）中座（ちゅうざ）いたします。", romaji: "Shinrō shinpu wa oironaoshi no tame, ittan chūza itashimasu." },
      { id: "rt-07", kind: "sentence", zh: "想影相嘅朋友可以出嚟前面。", en: "Anyone who wants photos, please come up to the front.", ja: "写真（しゃしん）をご希望（きぼう）の方（かた）は、どうぞ前（まえ）へお越（こ）しください。", romaji: "Shashin o gokibō no kata wa, dōzo mae e okoshi kudasai." },
      { id: "rt-08", kind: "sentence", zh: "下一道係主菜。", en: "The next dish is the main course.", ja: "次（つぎ）はメインのお料理（りょうり）です。", romaji: "Tsugi wa mein no oryōri desu." },
      { id: "rt-09", kind: "sentence", zh: "請慢慢享用。", en: "Please enjoy your meal.", ja: "どうぞごゆっくりお召（め）し上（あ）がりください。", romaji: "Dōzo goyukkuri omeshiagari kudasai." },
      { id: "rt-10", kind: "sentence", zh: "記得帶埋回禮。", en: "Please don't forget your wedding favor.", ja: "引出物（ひきでもの）をお忘（わす）れなく。", romaji: "Hikidemono o owasure naku." }
    ]
  },
  {
    id: "photo",
    icon: "📷",
    title: "攝影",
    subtitle: "拍攝時間與家族合照",
    cards: [
      { id: "pho-v01", kind: "vocab", zh: "拍照", ja: "写真撮影（しゃしんさつえい）" },
      { id: "pho-v02", kind: "vocab", zh: "集合照", ja: "集合写真（しゅうごうしゃしん）" },
      { id: "pho-01", kind: "sentence", zh: "請告訴我拍照的時間點。", ja: "撮影（さつえい）のタイミングを教（おし）えてください。", romaji: "Satsuei no taimingu o oshiete kudasai." },
      { id: "pho-02", kind: "sentence", zh: "家人希望儀式後拍一張全家福。", ja: "挙式後（きょしきご）に家族全員（かぞくぜんいん）で集合写真（しゅうごうしゃしん）を撮（と）りたいそうです。", romaji: "Kyoshiki-go ni kazoku zen'in de shūgō shashin o toritai sō desu." },
      { id: "pho-03", kind: "sentence", zh: "客人希望有多一點拍照時間。", ja: "もう少（すこ）し写真撮影（しゃしんさつえい）の時間（じかん）を取（と）りたいそうです。", romaji: "Mō sukoshi shashin satsuei no jikan o toritai sō desu." }
    ]
  },
  {
    id: "family",
    icon: "👨‍👩‍👧",
    title: "家屬與確認溝通",
    subtitle: "做翻譯必識嘅確認句 + 華人家庭常見溝通",
    cards: [
      { id: "fam-01", kind: "sentence", zh: "為安全起見,請讓我再確認一次。", ja: "念（ねん）のため、もう一度（いちど）確認（かくにん）させてください。", romaji: "Nen no tame, mō ichido kakunin sasete kudasai." },
      { id: "fam-02", kind: "sentence", zh: "我的理解是〇〇,這樣正確嗎?", ja: "〇〇という理解（りかい）でよろしいでしょうか？", romaji: "〇〇 to iu rikai de yoroshii deshō ka?" },
      { id: "fam-03", kind: "sentence", zh: "為了準確翻譯,可以麻煩您再說一次嗎?", ja: "正確（せいかく）に通訳（つうやく）したいので、もう一度（いちど）お願（ねが）いできますか？", romaji: "Seikaku ni tsūyaku shitai node, mō ichido onegai dekimasu ka?" },
      { id: "fam-04", kind: "sentence", zh: "有任何更改嗎?", ja: "変更点（へんこうてん）はございますか？", romaji: "Henkōten wa gozaimasu ka?" },
      { id: "fam-05", kind: "sentence", zh: "我亦會跟工作人員同步。", ja: "スタッフの方（かた）にも共有（きょうゆう）しておきます。", romaji: "Sutaffu no kata ni mo kyōyū shite okimasu." },
      { id: "fam-06", kind: "sentence", zh: "我會用中文向客人解釋。(台灣客人)", ja: "お客様（きゃくさま）に中国語（ちゅうごくご）で説明（せつめい）します。", romaji: "Okyakusama ni Chūgokugo de setsumei shimasu.", note: "如果係香港客人,可以改講「広東語（かんとんご）で説明（せつめい）します」(Kantongo de setsumei shimasu / 我會用廣東話解釋)。" },
      { id: "fam-07", kind: "sentence", zh: "我先向新人確認一下。", ja: "新郎新婦（しんろうしんぷ）のお二人（ふたり）に確認（かくにん）します。", romaji: "Shinrō shinpu no ofutari ni kakunin shimasu." },
      { id: "fam-08", kind: "sentence", zh: "客人有少少混亂,我會用中文再向他們解釋。", ja: "お客様（きゃくさま）が少（すこ）し混乱（こんらん）されているので、私（わたし）から中国語（ちゅうごくご）で説明（せつめい）します。", romaji: "Okyakusama ga sukoshi konran sarete iru node, watashi kara Chūgokugo de setsumei shimasu." },
      { id: "fam-09", kind: "sentence", zh: "新娘媽媽想確認什麼時候可以幫女兒整理頭紗。", ja: "新婦様（しんぷさま）のお母様（かあさま）が、いつベールを整（ととの）えてあげればいいか確認（かくにん）したいそうです。", romaji: "Shinpu-sama no okāsama ga, itsu bēru o totonoete agereba ii ka kakunin shitai sō desu." },
      { id: "fam-10", kind: "sentence", zh: "爸爸想確認什麼時候將新娘交給新郎。", ja: "お父様（とうさま）が、新婦様（しんぷさま）を新郎様（しんろうさま）へエスコートするタイミングを確認（かくにん）したいそうです。", romaji: "Otō-sama ga, shinpu-sama o shinrō-sama e esukōto suru taimingu o kakunin shitai sō desu." }
    ]
  },
  {
    id: "emergency",
    icon: "⚡",
    title: "突發情況",
    subtitle: "面試最考你臨場反應嘅一part",
    cards: [
      { id: "emg-01", kind: "sentence", zh: "客人好像遲到了少少,會影響婚禮開始時間嗎?", ja: "お客様（きゃくさま）が少（すこ）し遅（おく）れているようですが、挙式開始時間（きょしきかいしじかん）への影響（えいきょう）はありますか？", romaji: "Okyakusama ga sukoshi okurete iru yō desu ga, kyoshiki kaishi jikan e no eikyō wa arimasu ka?" },
      { id: "emg-02", kind: "sentence", zh: "新娘準備仍需要多一點時間。", ja: "新婦様（しんぷさま）のお支度（したく）にもう少（すこ）し時間（じかん）が必要（ひつよう）です。", romaji: "Shinpu-sama no oshitaku ni mō sukoshi jikan ga hitsuyō desu.", note: "お支度(おしたく)婚禮現場非常常用,指新娘化妝、髮型、更衣等整體準備。" },
      { id: "emg-03", kind: "sentence", zh: "如果下雨,拍攝地點會更改嗎?", ja: "雨（あめ）の場合（ばあい）、撮影場所（さつえいばしょ）は変更（へんこう）になりますか？", romaji: "Ame no baai, satsuei basho wa henkō ni narimasu ka?" },
      { id: "emg-04", kind: "sentence", zh: "暫時未確認到結婚戒指,請問是由工作人員保管嗎?", ja: "結婚指輪（けっこんゆびわ）がまだ確認（かくにん）できていないのですが、スタッフの方（かた）でお預（あず）かりされていますか？", romaji: "Kekkon yubiwa ga mada kakunin dekite inai no desu ga, sutaffu no kata de oazukari sarete imasu ka?" }
    ]
  },
  {
    id: "greetings",
    icon: "🙏",
    title: "寒暄與基本應對",
    subtitle: "現場問候、自我介紹、送客用語",
    cards: [
      { id: "gre-01", kind: "sentence", zh: "早安。(同客人/工作人員早上見面)", ja: "おはようございます。", romaji: "Ohayō gozaimasu." },
      { id: "gre-02", kind: "sentence", zh: "今天恭喜您/兩位。(見到新人第一句)", ja: "本日（ほんじつ）はおめでとうございます。", romaji: "Honjitsu wa omedetō gozaimasu." },
      { id: "gre-03", kind: "sentence", zh: "今天請多多指教/請多關照。", ja: "本日（ほんじつ）はよろしくお願（ねが）いいたします。", romaji: "Honjitsu wa yoroshiku onegai itashimasu." },
      { id: "gre-04", kind: "sentence", zh: "我是今天負責翻譯的,敝姓〇〇。(自我介紹)", ja: "私（わたし）が本日（ほんじつ）通訳（つうやく）を担当（たんとう）いたします、〇〇と申（もう）します。", romaji: "Watashi ga honjitsu tsūyaku o tantō itashimasu, 〇〇 to mōshimasu." },
      { id: "gre-05", kind: "sentence", zh: "有沒有不清楚的地方?", ja: "何（なに）かご不明（ふめい）な点（てん）はございますか？", romaji: "Nanika gofumei na ten wa gozaimasu ka?" },
      { id: "gre-06", kind: "sentence", zh: "洗手間在那邊。", ja: "お手洗（てあら）いはあちらです。", romaji: "Otearai wa achira desu." },
      { id: "gre-07", kind: "sentence", zh: "行李可以在這裡幫您保管。", ja: "お荷物（にもつ）はこちらでお預（あず）かりします。", romaji: "Onimotsu wa kochira de oazukari shimasu." },
      { id: "gre-08", kind: "sentence", zh: "有任何事情請立即跟我講。", ja: "何（なに）かございましたら、すぐにお声（こえ）がけください。", romaji: "Nanika gozaimashitara, sugu ni okoegake kudasai." },
      { id: "gre-09", kind: "sentence", zh: "可以請您稍等一下嗎?", ja: "少々（しょうしょう）お待（ま）ちいただけますか？", romaji: "Shōshō omachi itadakemasu ka?" },
      { id: "gre-10", kind: "sentence", zh: "辛苦了。(活動結束後向工作人員/新人講)", ja: "お疲（つか）れ様（さま）でした。", romaji: "Otsukaresama deshita." },
      { id: "gre-11", kind: "sentence", zh: "今天真的非常感謝。(送客時)", ja: "本日（ほんじつ）は誠（まこと）にありがとうございました。", romaji: "Honjitsu wa makoto ni arigatō gozaimashita." },
      { id: "gre-12", kind: "sentence", zh: "期待您下次再來。(歡送語)", ja: "またのお越（こ）しをお待（ま）ちしております。", romaji: "Mata no okoshi o omachi shite orimasu." }
    ]
  },
  {
    id: "logistics",
    icon: "🚐",
    title: "交通、住宿與後勤",
    subtitle: "接送、停車、房間、颱風備案",
    cards: [
      { id: "log-01", kind: "sentence", zh: "接送巴士幾點出發?", ja: "送迎（そうげい）バスは何時（なんじ）に出発（しゅっぱつ）しますか？", romaji: "Sōgei basu wa nanji ni shuppatsu shimasu ka?" },
      { id: "log-02", kind: "sentence", zh: "停車場在哪裡?", ja: "駐車場（ちゅうしゃじょう）はどちらでしょうか？", romaji: "Chūshajō wa dochira deshō ka?" },
      { id: "log-03", kind: "sentence", zh: "這裡是休息室/待客室。", ja: "こちらが控室（ひかえしつ）になります。", romaji: "Kochira ga hikaeshitsu ni narimasu." },
      { id: "log-04", kind: "sentence", zh: "行李之後會送到房間。", ja: "お荷物（にもつ）は後（のち）ほどお部屋（へや）にお届（とど）けします。", romaji: "Onimotsu wa nochihodo oheya ni otodoke shimasu." },
      { id: "log-05", kind: "sentence", zh: "有接送到酒店的服務嗎?", ja: "ホテルまでの送迎（そうげい）はございますか？", romaji: "Hoteru made no sōgei wa gozaimasu ka?" },
      { id: "log-06", kind: "sentence", zh: "check-in 幾點開始?", ja: "チェックインは何時（なんじ）からでしょうか？", romaji: "Chekku-in wa nanji kara deshō ka?" },
      { id: "log-07", kind: "sentence", zh: "我為您說明去會場的路線。", ja: "会場（かいじょう）までの道順（みちじゅん）をご説明（せつめい）します。", romaji: "Kaijō made no michijun o gosetsumei shimasu." },
      { id: "log-08", kind: "sentence", zh: "如果颱風,有沒有備用日期?", ja: "台風（たいふう）の場合（ばあい）、予備日（よびび）はございますか？", romaji: "Taifū no baai, yobibi wa gozaimasu ka?" },
      { id: "log-09", kind: "sentence", zh: "有沒有忘記帶東西?", ja: "忘（わす）れ物（もの）はございませんか？", romaji: "Wasuremono wa gozaimasen ka?" },
      { id: "log-10", kind: "sentence", zh: "我會先分享緊急聯絡方式。", ja: "緊急（きんきゅう）連絡先（れんらくさき）を共有（きょうゆう）しておきます。", romaji: "Kinkyū renrakusaki o kyōyū shite okimasu." }
    ]
  },
  {
    id: "rundown",
    icon: "🎉",
    title: "宴會 Rundown・After Party",
    subtitle: "中英日對照:流程表、MC/音響 cue、換衫、送客、二次會",
    cards: [
      { id: "rd-v01", kind: "vocab", zh: "流程表", en: "Rundown / Run of show", ja: "進行表（しんこうひょう）" },
      { id: "rd-v02", kind: "vocab", zh: "宴會廳", en: "Banquet hall", ja: "宴会場（えんかいじょう）／バンケット" },
      { id: "rd-v03", kind: "vocab", zh: "司儀/MC", en: "MC", ja: "司会者（しかいしゃ）／MC" },
      { id: "rd-v04", kind: "vocab", zh: "音響/控制員", en: "Operator / Sound & AV operator", ja: "音響（おんきょう）スタッフ／オペレーター" },
      { id: "rd-v05", kind: "vocab", zh: "佈置組", en: "Decoration team / Setup team", ja: "装飾（そうしょく）チーム／設営（せつえい）スタッフ" },
      { id: "rd-v06", kind: "vocab", zh: "化妝師", en: "Makeup artist", ja: "ヘアメイク(さん)" },
      { id: "rd-v07", kind: "vocab", zh: "給信號/打 cue", en: "Give a cue / Signal", ja: "キューを出（だ）す", note: "日本活動業界都講「キュー」,例:「MCからキューを出（だ）します」。" },
      { id: "rd-v08", kind: "vocab", zh: "嘉賓簽到", en: "Guest sign-in / Registration", ja: "受付（うけつけ）" },
      { id: "rd-v09", kind: "vocab", zh: "補妝/執妝", en: "Makeup touch-up", ja: "ヘアメイク直（なお）し" },
      { id: "rd-v10", kind: "vocab", zh: "換衫/換造型", en: "Outfit change", ja: "お色直（いろなお）し", note: "婚禮專用詞,新人中途換禮服就叫お色直し。" },
      { id: "rd-v11", kind: "vocab", zh: "第三套禮服", en: "3rd dress", ja: "3着目（さんちゃくめ）のドレス" },
      { id: "rd-v12", kind: "vocab", zh: "便服/輕便服裝", en: "Casual outfit", ja: "カジュアルな服装（ふくそう）／私服（しふく）" },
      { id: "rd-v13", kind: "vocab", zh: "新人", en: "Bride and groom / The couple", ja: "新郎新婦（しんろうしんぷ）／お二人（ふたり）" },
      { id: "rd-v14", kind: "vocab", zh: "新人進場", en: "March-in / Grand entrance", ja: "新郎新婦（しんろうしんぷ）入場（にゅうじょう）" },
      { id: "rd-v15", kind: "vocab", zh: "進場歌", en: "March-in song", ja: "入場曲（にゅうじょうきょく）" },
      { id: "rd-v16", kind: "vocab", zh: "歡迎致辭", en: "Welcome speech", ja: "ウェルカムスピーチ" },
      { id: "rd-v17", kind: "vocab", zh: "祝酒/乾杯", en: "Toast / Toasting", ja: "乾杯（かんぱい）" },
      { id: "rd-v18", kind: "vocab", zh: "開始上菜", en: "Start to serve dishes", ja: "お料理（りょうり）のサーブ開始（かいし）" },
      { id: "rd-v19", kind: "vocab", zh: "播片/影片", en: "Video / Play the video", ja: "映像（えいぞう）／ムービーを流（なが）す" },
      { id: "rd-v20", kind: "vocab", zh: "落螢幕/收螢幕", en: "Drop down / Scroll back the screen", ja: "スクリーンを下（お）ろす／上（あ）げる" },
      { id: "rd-v21", kind: "vocab", zh: "熄音樂/開音樂", en: "Music off / Music on", ja: "BGMを止（と）める／流（なが）す" },
      { id: "rd-v22", kind: "vocab", zh: "自由拍照時間", en: "Free flow photo taking", ja: "フォトタイム" },
      { id: "rd-v23", kind: "vocab", zh: "伴娘/兄弟", en: "Bridesmaids / Groomsmen", ja: "ブライズメイド／アッシャー", note: "日本婚禮多數叫兄弟做「アッシャー」(usher),「グルームズマン」都聽得明。" },
      { id: "rd-v24", kind: "vocab", zh: "朋友致辭", en: "Friend's speech", ja: "友人（ゆうじん）スピーチ" },
      { id: "rd-v25", kind: "vocab", zh: "遊戲/表演環節", en: "Games / Entertainment", ja: "余興（よきょう）／ゲーム" },
      { id: "rd-v26", kind: "vocab", zh: "問答遊戲", en: "Quiz / Q&A game", ja: "クイズ" },
      { id: "rd-v27", kind: "vocab", zh: "手信", en: "Souvenir", ja: "お土産（みやげ）" },
      { id: "rd-v28", kind: "vocab", zh: "盲盒", en: "Blind box", ja: "ブラインドボックス", note: "日本人未必個個識,可以補一句「中身（なかみ）が分（わ）からない箱（はこ）」(唔知入面係咩嘅盒)。" },
      { id: "rd-v29", kind: "vocab", zh: "逐枱敬酒", en: "Toasting at each table / Table rounds", ja: "テーブルラウンド" },
      { id: "rd-v30", kind: "vocab", zh: "送客", en: "Send off guests", ja: "お見送（みおく）り" },
      { id: "rd-v31", kind: "vocab", zh: "穿梭巴士", en: "Shuttle bus", ja: "シャトルバス／送迎（そうげい）バス" },
      { id: "rd-v32", kind: "vocab", zh: "二次會/After Party", en: "After party", ja: "二次会（にじかい）／アフターパーティー" },
      { id: "rd-v33", kind: "vocab", zh: "首支舞", en: "First dance", ja: "ファーストダンス" },
      { id: "rd-v34", kind: "vocab", zh: "仙女棒拍攝", en: "Sparkler shooting", ja: "スパークラー撮影（さつえい）" },
      { id: "rd-v35", kind: "vocab", zh: "謝辭/答謝致辭", en: "Thank-you speech", ja: "謝辞（しゃじ）／お礼（れい）の挨拶（あいさつ）" },
      { id: "rd-v36", kind: "vocab", zh: "帶客離場", en: "Escort guests out", ja: "ゲストのお見送（みおく）りとご案内（あんない）" },
      { id: "rd-v37", kind: "vocab", zh: "時間延誤/超時", en: "Running behind schedule", ja: "押（お）している", note: "「時間（じかん）が5分（ごふん）押（お）しています」=遲咗五分鐘。相反:「巻（ま）く」=趕返時間。" },
      { id: "rd-v38", kind: "vocab", zh: "趕返時間/加快", en: "Speed up / Catch up on time", ja: "巻（ま）く", note: "「少（すこ）し巻（ま）きでお願（ねが）いします」=麻煩快少少。" },
      { id: "rd-01", kind: "sentence", zh: "新人進場。", en: "The bride and groom are making their entrance.", ja: "新郎新婦（しんろうしんぷ）のご入場（にゅうじょう）です。", romaji: "Shinrō shinpu no go-nyūjō desu." },
      { id: "rd-02", kind: "sentence", zh: "請各位起身,拎起酒杯。", en: "Please stand and raise your glasses.", ja: "皆様（みなさま）、ご起立（きりつ）いただき、グラスをお持（も）ちください。", romaji: "Minasama, go-kiritsu itadaki, gurasu o omochi kudasai." },
      { id: "rd-03", kind: "sentence", zh: "(司儀叫)乾杯後開音樂。", en: "Music on after the MC says \"cheers!\"", ja: "司会（しかい）の「乾杯（かんぱい）」の合図（あいず）で、BGMをお願（ねが）いします。", romaji: "Shikai no \"kanpai\" no aizu de, BGM o onegaishimasu." },
      { id: "rd-04", kind: "sentence", zh: "請熄音樂。", en: "Music off, please.", ja: "BGMを止（と）めてください。", romaji: "BGM o tomete kudasai." },
      { id: "rd-05", kind: "sentence", zh: "請落螢幕。", en: "Please drop down the screen.", ja: "スクリーンを下（お）ろしてください。", romaji: "Sukurīn o oroshite kudasai." },
      { id: "rd-06", kind: "sentence", zh: "司儀簡單介紹後,請播片。", en: "After the MC's brief intro, please play the video.", ja: "司会（しかい）の紹介（しょうかい）の後（あと）、映像（えいぞう）を流（なが）してください。", romaji: "Shikai no shōkai no ato, eizō o nagashite kudasai." },
      { id: "rd-07", kind: "sentence", zh: "片播完請收返螢幕。", en: "Please scroll the screen back up after the video.", ja: "映像（えいぞう）が終（お）わったら、スクリーンを上（あ）げてください。", romaji: "Eizō ga owattara, sukurīn o agete kudasai." },
      { id: "rd-08", kind: "sentence", zh: "請各位出嚟前面一齊影相。", en: "Everyone, please come up to the front for photos.", ja: "写真撮影（しゃしんさつえい）をしますので、皆様（みなさま）前（まえ）へお越（こ）しください。", romaji: "Shashin satsuei o shimasu node, minasama mae e okoshi kudasai." },
      { id: "rd-09", kind: "sentence", zh: "而家有少少遲,大約遲咗五分鐘。", en: "We're running about 5 minutes behind.", ja: "現在（げんざい）、5分（ごふん）ほど押（お）しています。", romaji: "Genzai, gofun hodo oshite imasu." },
      { id: "rd-10", kind: "sentence", zh: "時間準時。", en: "We're on schedule.", ja: "時間通（じかんどお）りです。", romaji: "Jikan dōri desu." },
      { id: "rd-11", kind: "sentence", zh: "新人換衫後幾點返嚟?", en: "What time will the couple be back after the outfit change?", ja: "お色直（いろなお）しの後（あと）、お二人（ふたり）は何時（なんじ）に戻（もど）られますか？", romaji: "Oironaoshi no ato, ofutari wa nanji ni modoraremasu ka?" },
      { id: "rd-12", kind: "sentence", zh: "請各位盡快上穿梭巴士。", en: "Please get on the shuttle bus as soon as possible.", ja: "シャトルバスにお早（はや）めにご乗車（じょうしゃ）ください。", romaji: "Shatoru basu ni ohayame ni go-jōsha kudasai." },
      { id: "rd-13", kind: "sentence", zh: "開始送客時,請通知佈置組同二次會司儀。", en: "Let the setup team and the after-party MC know when sending off guests.", ja: "お見送（みおく）りが始（はじ）まったら、装飾（そうしょく）チームと二次会（にじかい）の司会者（しかいしゃ）に連絡（れんらく）してください。", romaji: "Omiokuri ga hajimattara, sōshoku chīmu to nijikai no shikaisha ni renraku shite kudasai." },
      { id: "rd-14", kind: "sentence", zh: "新人會坐車去沙灘,大約 30 分鐘。", en: "The couple will drive to the beach, about 30 minutes.", ja: "お二人（ふたり）は車（くるま）でビーチへ移動（いどう）します。30分（さんじゅっぷん）ほどかかります。", romaji: "Ofutari wa kuruma de bīchi e idō shimasu. Sanjuppun hodo kakarimasu." },
      { id: "rd-15", kind: "sentence", zh: "仙女棒拍攝由 9 點到 9 點半。", en: "Sparkler shooting is from 9:00 to 9:30.", ja: "スパークラー撮影（さつえい）は21時（にじゅういちじ）から21時半（にじゅういちじはん）までです。", romaji: "Supākurā satsuei wa nijūichi-ji kara nijūichi-ji han made desu." },
      { id: "rd-16", kind: "sentence", zh: "時間只供參考,會場可能會調整。", en: "Times are for reference only and may be adjusted by the venue.", ja: "時間（じかん）は目安（めやす）です。会場（かいじょう）の都合（つごう）で調整（ちょうせい）される場合（ばあい）があります。", romaji: "Jikan wa meyasu desu. Kaijō no tsugō de chōsei sareru baai ga arimasu." },
      { id: "rd-17", kind: "sentence", zh: "人數 80 位,包括新人。", en: "80 guests, including the bride and groom.", ja: "新郎新婦（しんろうしんぷ）を含（ふく）めて80名（はちじゅうめい）です。", romaji: "Shinrō shinpu o fukumete hachijū-mei desu." },
      { id: "rd-18", kind: "sentence", zh: "今日多謝大家,請慢慢行。", en: "Thank you all for coming today. Please take care on your way.", ja: "本日（ほんじつ）は誠（まこと）にありがとうございました。お気（き）をつけてお帰（かえ）りください。", romaji: "Honjitsu wa makoto ni arigatō gozaimashita. Oki o tsukete okaeri kudasai." }
    ]
  },
  {
    id: "afterparty-terms",
    icon: "🏖️",
    title: "二次會用詞・中英日對照",
    subtitle: "沙灘、仙女棒、遊戲、散場 + 現場常用句",
    cards: [
      { id: "at-v01", kind: "vocab", zh: "二次會負責人/搞手", en: "Party organizer", ja: "幹事（かんじ）" },
      { id: "at-v02", kind: "vocab", zh: "參加費", en: "Party fee", ja: "会費（かいひ）", note: "日本二次會多數唔收人情,改收固定「会費」。" },
      { id: "at-v03", kind: "vocab", zh: "遊戲", en: "Games", ja: "ゲーム" },
      { id: "at-v04", kind: "vocab", zh: "獎品", en: "Prizes", ja: "景品（けいひん）" },
      { id: "at-v05", kind: "vocab", zh: "賓果", en: "Bingo", ja: "ビンゴ" },
      { id: "at-v06", kind: "vocab", zh: "咪/麥克風", en: "Microphone", ja: "マイク" },
      { id: "at-v07", kind: "vocab", zh: "燈光", en: "Lighting", ja: "照明（しょうめい）" },
      { id: "at-v08", kind: "vocab", zh: "飲品枱/吧枱", en: "Drink counter / Bar", ja: "ドリンクカウンター" },
      { id: "at-v09", kind: "vocab", zh: "添飲/再嚟一杯", en: "Refill / Another drink", ja: "おかわり" },
      { id: "at-v10", kind: "vocab", zh: "沙灘", en: "Sandy beach", ja: "砂浜（すなはま）" },
      { id: "at-v11", kind: "vocab", zh: "海邊水線位", en: "Water's edge / Shoreline", ja: "波打（なみう）ち際（ぎわ）" },
      { id: "at-v12", kind: "vocab", zh: "漲潮/退潮", en: "High tide / Low tide", ja: "満潮（まんちょう）／干潮（かんちょう）" },
      { id: "at-v13", kind: "vocab", zh: "驅蚊噴霧", en: "Insect repellent", ja: "虫除（むしよ）け" },
      { id: "at-v14", kind: "vocab", zh: "手電筒", en: "Flashlight / Torch", ja: "懐中電灯（かいちゅうでんとう）" },
      { id: "at-v15", kind: "vocab", zh: "披肩/外套", en: "Something to wear over (shawl, jacket)", ja: "羽織（はお）るもの", note: "海邊夜晚凍,可以問「羽織（はお）るものはありますか？」。" },
      { id: "at-v16", kind: "vocab", zh: "涼鞋/拖鞋", en: "Sandals", ja: "サンダル／ビーチサンダル" },
      { id: "at-v17", kind: "vocab", zh: "毛巾", en: "Towel", ja: "タオル" },
      { id: "at-v18", kind: "vocab", zh: "點火槍/打火機", en: "Lighter", ja: "ライター／チャッカマン", note: "「チャッカマン」本身係牌子名,但日本人都用嚟叫長嘴點火槍。" },
      { id: "at-v19", kind: "vocab", zh: "用火要小心", en: "Handle fire with care", ja: "火（ひ）の取（と）り扱（あつか）い注意（ちゅうい）" },
      { id: "at-v20", kind: "vocab", zh: "大合照", en: "Group photo", ja: "集合写真（しゅうごうしゃしん）" },
      { id: "at-v21", kind: "vocab", zh: "自拍", en: "Selfie", ja: "自撮（じど）り" },
      { id: "at-v22", kind: "vocab", zh: "手機電筒", en: "Phone flashlight", ja: "スマホのライト" },
      { id: "at-v23", kind: "vocab", zh: "散場/完場", en: "End of the party", ja: "お開（ひら）き", note: "婚禮忌講「終（お）わる」,所以完場講「お開き」。" },
      { id: "at-v24", kind: "vocab", zh: "收尾/壓軸", en: "Closing", ja: "締（し）め" },
      { id: "at-v25", kind: "vocab", zh: "一齊拍手收尾", en: "Closing hand-clap", ja: "一本締（いっぽんじ）め", note: "「よーっ、パン!」一下拍手收尾,日本聚會常見。" },
      { id: "at-v26", kind: "vocab", zh: "解散", en: "Dismissal / Everyone heads off", ja: "解散（かいさん）" },
      { id: "at-v27", kind: "vocab", zh: "尾班車", en: "Last shuttle", ja: "最終便（さいしゅうびん）" },
      { id: "at-v28", kind: "vocab", zh: "失物", en: "Lost item", ja: "落（お）とし物（もの）" },
      { id: "at-01", kind: "sentence", zh: "二次會開始喇!", en: "The after party is starting!", ja: "二次会（にじかい）、スタートです！", romaji: "Nijikai, sutāto desu!" },
      { id: "at-02", kind: "sentence", zh: "飲品喺吧枱,隨便攞。", en: "Drinks are at the counter. Help yourselves.", ja: "お飲（の）み物（もの）はカウンターにございます。ご自由（じゆう）にどうぞ。", romaji: "Onomimono wa kauntā ni gozaimasu. Gojiyū ni dōzo." },
      { id: "at-03", kind: "sentence", zh: "唔好行太近水邊。", en: "Please don't go too close to the water.", ja: "波打（なみう）ち際（ぎわ）には近（ちか）づかないでください。", romaji: "Namiuchigiwa ni wa chikazukanaide kudasai." },
      { id: "at-04", kind: "sentence", zh: "有冇驅蚊噴霧?", en: "Do you have any insect repellent?", ja: "虫除（むしよ）けはありますか？", romaji: "Mushiyoke wa arimasu ka?" },
      { id: "at-05", kind: "sentence", zh: "暗,請用手機電筒照路。", en: "It's dark, please use your phone flashlight.", ja: "暗（くら）いので、スマホのライトで足元（あしもと）を照（て）らしてください。", romaji: "Kurai node, sumaho no raito de ashimoto o terashite kudasai." },
      { id: "at-06", kind: "sentence", zh: "每人一枝仙女棒。", en: "One sparkler per person.", ja: "スパークラーはお一人（ひとり）一本（いっぽん）ずつどうぞ。", romaji: "Supākurā wa ohitori ippon zutsu dōzo." },
      { id: "at-07", kind: "sentence", zh: "大家一齊影大合照!", en: "Let's take a group photo!", ja: "皆（みな）さんで集合写真（しゅうごうしゃしん）を撮（と）りましょう！", romaji: "Minasan de shūgō shashin o torimashō!" },
      { id: "at-08", kind: "sentence", zh: "差唔多要完場喇。", en: "The party is coming to an end.", ja: "そろそろお開（ひら）きの時間（じかん）です。", romaji: "Sorosoro ohiraki no jikan desu." },
      { id: "at-09", kind: "sentence", zh: "尾班巴士 11 點開。", en: "The last shuttle leaves at 11 p.m.", ja: "最終（さいしゅう）のシャトルバスは23時（にじゅうさんじ）発（はつ）です。", romaji: "Saishū no shatoru basu wa nijūsan-ji hatsu desu.", note: "時間係例子,以現場安排為準。" },
      { id: "at-10", kind: "sentence", zh: "請記得帶齊隨身物品。", en: "Please make sure you have all your belongings.", ja: "お忘（わす）れ物（もの）のないよう、お気（き）をつけください。", romaji: "Owasuremono no nai yō, oki o tsuke kudasai." }
    ]
  }
];

const DAILY_CONVERSATION_LEVELS = [
  {
    id: "daily-greetings",
    icon: "👋",
    title: "日常寒暄與基本應對",
    subtitle: "見面、道謝、道別嘅萬用句",
    cards: [
      { id: "dg-01", kind: "sentence", zh: "你好。(日間問候)", ja: "こんにちは。", romaji: "Konnichiwa." },
      { id: "dg-02", kind: "sentence", zh: "晚上好。", ja: "こんばんは。", romaji: "Konbanwa." },
      { id: "dg-03", kind: "sentence", zh: "初次見面,你好。", ja: "はじめまして。", romaji: "Hajimemashite." },
      { id: "dg-04", kind: "sentence", zh: "請多多指教。", ja: "どうぞよろしくお願（ねが）いします。", romaji: "Dōzo yoroshiku onegaishimasu." },
      { id: "dg-05", kind: "sentence", zh: "你好嗎?", ja: "お元気（げんき）ですか？", romaji: "Ogenki desu ka?" },
      { id: "dg-06", kind: "sentence", zh: "託你的福,我很好。", ja: "おかげさまで元気（げんき）です。", romaji: "Okagesama de genki desu." },
      { id: "dg-07", kind: "sentence", zh: "好久不見。", ja: "お久（ひさ）しぶりです。", romaji: "Ohisashiburi desu." },
      { id: "dg-08", kind: "sentence", zh: "不好意思/唔該。(叫人或道歉都可以用)", ja: "すみません。", romaji: "Sumimasen." },
      { id: "dg-09", kind: "sentence", zh: "謝謝。", ja: "ありがとうございます。", romaji: "Arigatō gozaimasu." },
      { id: "dg-10", kind: "sentence", zh: "不客氣。", ja: "どういたしまして。", romaji: "Dō itashimashite." },
      { id: "dg-11", kind: "sentence", zh: "今日天氣真好呢。(閒聊常用開場白)", ja: "今日（きょう）はいい天気（てんき）ですね。", romaji: "Kyō wa ii tenki desu ne." },
      { id: "dg-12", kind: "sentence", zh: "我先走了。(離開時講,比較禮貌)", ja: "お先（さき）に失礼（しつれい）します。", romaji: "Osaki ni shitsurei shimasu." },
      { id: "dg-13", kind: "sentence", zh: "辛苦了。(日常同事/朋友之間都會用)", ja: "お疲（つか）れ様（さま）です。", romaji: "Otsukaresama desu." },
      { id: "dg-14", kind: "sentence", zh: "下次再麻煩你/下次再約。", ja: "また今度（こんど）お願（ねが）いします。", romaji: "Mata kondo onegaishimasu." },
      { id: "dg-15", kind: "sentence", zh: "小心/路上小心。", ja: "気（き）をつけて。", romaji: "Ki o tsukete." }
    ]
  },
  {
    id: "restaurant-staff",
    icon: "🧑‍🍳",
    title: "餐廳會話・店員篇",
    subtitle: "帶位、落單、上菜、埋單",
    cards: [
      { id: "rs-01", kind: "sentence", zh: "歡迎光臨。", ja: "いらっしゃいませ。", romaji: "Irasshaimase." },
      { id: "rs-02", kind: "sentence", zh: "請問幾位?", ja: "何名様（なんめいさま）でしょうか？", romaji: "Nanmei-sama deshō ka?" },
      { id: "rs-03", kind: "sentence", zh: "請這邊坐。", ja: "こちらのお席（せき）へどうぞ。", romaji: "Kochira no oseki e dōzo." },
      { id: "rs-04", kind: "sentence", zh: "決定好要點什麼可以叫我。", ja: "ご注文（ちゅうもん）がお決（き）まりになりましたら、お呼（よ）びください。", romaji: "Gochūmon ga okimari ni narimashitara, oyobi kudasai." },
      { id: "rs-05", kind: "sentence", zh: "決定好要點什麼了嗎?", ja: "ご注文（ちゅうもん）はお決（き）まりですか？", romaji: "Gochūmon wa okimari desu ka?" },
      { id: "rs-06", kind: "sentence", zh: "飲品需要什麼呢?", ja: "お飲（の）み物（もの）はいかがなさいますか？", romaji: "Onomimono wa ikaga nasaimasu ka?" },
      { id: "rs-07", kind: "sentence", zh: "這樣可以嗎?(確認點餐完畢)", ja: "以上（いじょう）でよろしいでしょうか？", romaji: "Ijō de yoroshii deshō ka?" },
      { id: "rs-08", kind: "sentence", zh: "請稍等。", ja: "少々（しょうしょう）お待（ま）ちください。", romaji: "Shōshō omachi kudasai." },
      { id: "rs-09", kind: "sentence", zh: "久等了。(上菜時講)", ja: "お待（ま）たせいたしました。", romaji: "Omatase itashimashita." },
      { id: "rs-10", kind: "sentence", zh: "這是您的〇〇。", ja: "こちら、〇〇になります。", romaji: "Kochira, 〇〇 ni narimasu." },
      { id: "rs-11", kind: "sentence", zh: "有食物過敏嗎?", ja: "アレルギーはございますか？", romaji: "Arerugī wa gozaimasu ka?" },
      { id: "rs-12", kind: "sentence", zh: "辣度也可以調整。", ja: "辛（から）さの調整（ちょうせい）も可能（かのう）です。", romaji: "Karasa no chōsei mo kanō desu." },
      { id: "rs-13", kind: "sentence", zh: "可以幫你收走嗎?", ja: "お下（さ）げしてもよろしいですか？", romaji: "Osage shite mo yoroshii desu ka?" },
      { id: "rs-14", kind: "sentence", zh: "要一起結帳還是分開?", ja: "お会計（かいけい）はご一緒（いっしょ）でしょうか、それとも別々（べつべつ）でしょうか？", romaji: "Okaikei wa goissho deshō ka, soretomo betsubetsu deshō ka?" },
      { id: "rs-15", kind: "sentence", zh: "歡迎再度光臨。", ja: "またのお越（こ）しをお待（ま）ちしております。", romaji: "Mata no okoshi o omachi shite orimasu." }
    ]
  },
  {
    id: "restaurant-guest",
    icon: "🍽️",
    title: "餐廳會話・食客篇",
    subtitle: "落單、要求 + 味道／口感詞彙",
    cards: [
      { id: "rg-01", kind: "sentence", zh: "不好意思,可以點餐嗎?", ja: "すみません、注文（ちゅうもん）いいですか？", romaji: "Sumimasen, chūmon ii desu ka?" },
      { id: "rg-02", kind: "sentence", zh: "有什麼推薦?", ja: "おすすめは何（なん）ですか？", romaji: "Osusume wa nan desu ka?" },
      { id: "rg-03", kind: "sentence", zh: "這個辣嗎?", ja: "これは辛（から）いですか？", romaji: "Kore wa karai desu ka?" },
      { id: "rg-04", kind: "sentence", zh: "請不要弄辣。", ja: "辛（から）くしないでください。", romaji: "Karaku shinaide kudasai." },
      { id: "rg-05", kind: "sentence", zh: "可以不要香菜嗎?", ja: "パクチーを抜（ぬ）いてもらえますか？", romaji: "Pakuchī o nuite moraemasu ka?" },
      { id: "rg-06", kind: "sentence", zh: "份量可以少一點嗎?", ja: "量（りょう）を少（すく）なめにしてもらえますか？", romaji: "Ryō o sukuname ni shite moraemasu ka?" },
      { id: "rg-07", kind: "sentence", zh: "這個裡面有什麼?", ja: "これは何（なに）が入（はい）っていますか？", romaji: "Kore wa nani ga haitte imasu ka?" },
      { id: "rg-08", kind: "sentence", zh: "可以給我水嗎?", ja: "お水（みず）をいただけますか？", romaji: "Omizu o itadakemasu ka?" },
      { id: "rg-09", kind: "sentence", zh: "很好吃,謝謝款待。(吃飽後禮貌用語)", ja: "おいしかったです、ごちそうさまでした。", romaji: "Oishikatta desu, gochisōsama deshita." },
      { id: "rg-10", kind: "sentence", zh: "麻煩結帳。", ja: "お会計（かいけい）をお願（ねが）いします。", romaji: "Okaikei o onegaishimasu." },
      { id: "rg-11", kind: "sentence", zh: "麻煩分開結帳。", ja: "別々（べつべつ）でお願（ねが）いします。", romaji: "Betsubetsu de onegaishimasu." },
      { id: "rg-12", kind: "sentence", zh: "可以用信用卡嗎?", ja: "カードは使（つか）えますか？", romaji: "Kādo wa tsukaemasu ka?" },
      { id: "rg-v01", kind: "vocab", zh: "好吃／美味", ja: "美味（おい）しい" },
      { id: "rg-v02", kind: "vocab", zh: "難吃", ja: "まずい" },
      { id: "rg-v03", kind: "vocab", zh: "甜", ja: "甘（あま）い" },
      { id: "rg-v04", kind: "vocab", zh: "辣", ja: "辛（から）い" },
      { id: "rg-v05", kind: "vocab", zh: "酸", ja: "酸（す）っぱい" },
      { id: "rg-v06", kind: "vocab", zh: "苦", ja: "苦（にが）い" },
      { id: "rg-v07", kind: "vocab", zh: "鹹", ja: "塩辛（しおから）い" },
      { id: "rg-v08", kind: "vocab", zh: "味道濃／濃郁", ja: "濃（こ）い" },
      { id: "rg-v09", kind: "vocab", zh: "味道淡", ja: "薄（うす）い" },
      { id: "rg-v10", kind: "vocab", zh: "油膩", ja: "脂（あぶら）っこい" },
      { id: "rg-v11", kind: "vocab", zh: "清淡爽口", ja: "あっさり" },
      { id: "rg-v12", kind: "vocab", zh: "濃厚／重口味", ja: "こってり" },
      { id: "rg-v13", kind: "vocab", zh: "香脆／烘香", ja: "香（こう）ばしい" },
      { id: "rg-v14", kind: "vocab", zh: "新鮮", ja: "新鮮（しんせん）" },
      { id: "rg-v15", kind: "vocab", zh: "入口即化／軟嫩", ja: "とろとろ" },
      { id: "rg-v16", kind: "vocab", zh: "多汁", ja: "ジューシー" },
      { id: "rg-v17", kind: "vocab", zh: "酥脆(如薯片)", ja: "パリパリ" },
      { id: "rg-v18", kind: "vocab", zh: "酥脆(如炸物)", ja: "サクサク" },
      { id: "rg-v19", kind: "vocab", zh: "有嚼勁／Q彈", ja: "もちもち" },
      { id: "rg-v20", kind: "vocab", zh: "鬆軟", ja: "ふわふわ" },
      { id: "rg-v21", kind: "vocab", zh: "黏稠(如納豆)", ja: "ねばねば" },
      { id: "rg-v22", kind: "vocab", zh: "軟", ja: "柔（やわ）らかい" },
      { id: "rg-v23", kind: "vocab", zh: "硬／有嚼勁", ja: "硬（かた）い" },
      { id: "rg-v24", kind: "vocab", zh: "冰的／凍的", ja: "冷（つめ）たい" },
      { id: "rg-v25", kind: "vocab", zh: "溫熱的", ja: "温（あたた）かい" },
      { id: "rg-v26", kind: "vocab", zh: "燙／熱", ja: "熱（あつ）い" }
    ]
  }
];

const DAILY_VOCAB_GRAMMAR_LEVELS = [
  {
    id: "core-grammar",
    icon: "📐",
    title: "常用文法句型",
    subtitle: "20 個溝通必識嘅基本文法",
    cards: [
      { id: "gr-01", kind: "grammar", zh: "禮貌形:動詞ます形(現在/未來肯定)", ja: "毎日（まいにち）、日本語（にほんご）を勉強（べんきょう）します。", romaji: "Mainichi, nihongo o benkyō shimasu.", note: "ます形用於禮貌、正式場合嘅現在/未來肯定句。" },
      { id: "gr-02", kind: "grammar", zh: "禮貌形否定:～ません", ja: "今日（きょう）は行（い）きません。", romaji: "Kyō wa ikimasen.", note: "ます→ません,表示現在/未來否定。" },
      { id: "gr-03", kind: "grammar", zh: "過去式:～ました", ja: "昨日（きのう）、映画（えいが）を見（み）ました。", romaji: "Kinō, eiga o mimashita.", note: "ます→ました,表示過去肯定。" },
      { id: "gr-04", kind: "grammar", zh: "過去否定:～ませんでした", ja: "昨日（きのう）は雨（あめ）が降（ふ）りませんでした。", romaji: "Kinō wa ame ga furimasendeshita.", note: "ません→ませんでした,表示過去否定。" },
      { id: "gr-05", kind: "grammar", zh: "て形:連接動作／請求", ja: "窓（まど）を開（あ）けてください。", romaji: "Mado o akete kudasai.", note: "動詞て形+ください=請求對方做某事;て形亦係好多文法嘅基礎。" },
      { id: "gr-06", kind: "grammar", zh: "～ている:動作進行中或狀態持續", ja: "今（いま）、ご飯（はん）を食（た）べています。", romaji: "Ima, gohan o tabete imasu.", note: "て形+います,表示「正在做」或某狀態持續存在。" },
      { id: "gr-07", kind: "grammar", zh: "可能形:表示「能夠做到」", ja: "日本語（にほんご）が少（すこ）し話（はな）せます。", romaji: "Nihongo ga sukoshi hanasemasu.", note: "動詞可能形+ます;對象通常用「が」唔用「を」。" },
      { id: "gr-08", kind: "grammar", zh: "～たら:如果／一…就…", ja: "雨（あめ）が降（ふ）ったら、中止（ちゅうし）します。", romaji: "Ame ga futtara, chūshi shimasu.", note: "動詞た形+ら,表示條件假設。" },
      { id: "gr-09", kind: "grammar", zh: "～ましょう:一起…吧(邀請)", ja: "一緒（いっしょ）に行（い）きましょう。", romaji: "Issho ni ikimashō.", note: "ます→ましょう,語氣柔和嘅邀約。" },
      { id: "gr-10", kind: "grammar", zh: "～たいです:想要做…", ja: "沖縄（おきなわ）に行（い）きたいです。", romaji: "Okinawa ni ikitai desu.", note: "動詞ます形去ます+たいです,主要用於第一人稱或疑問句。" },
      { id: "gr-11", kind: "grammar", zh: "助詞は:主題標記", ja: "私（わたし）は学生（がくせい）です。", romaji: "Watashi wa gakusei desu.", note: "は標記句子主題,唔一定係動作嘅主語。" },
      { id: "gr-12", kind: "grammar", zh: "助詞が:主語標記／新資訊", ja: "誰（だれ）が来（き）ますか？", romaji: "Dare ga kimasu ka?", note: "が標記動作主語,或強調新資訊、疑問詞。" },
      { id: "gr-13", kind: "grammar", zh: "助詞を:動作對象(受詞)", ja: "コーヒーを飲（の）みます。", romaji: "Kōhī o nomimasu.", note: "を標記他動詞嘅直接受詞。" },
      { id: "gr-14", kind: "grammar", zh: "助詞に:時間點／目的地／對象", ja: "7時（しちじ）に起（お）きます。", romaji: "Shichiji ni okimasu.", note: "に可以標記時間點、去向、動作對象等,用途好多要靠情境判斷。" },
      { id: "gr-15", kind: "grammar", zh: "助詞で:地點(動作發生處)／手段", ja: "レストランで食事（しょくじ）をします。", romaji: "Resutoran de shokuji o shimasu.", note: "で標記動作發生嘅地點,或者用嚟表示手段、方法、材料。" },
      { id: "gr-16", kind: "grammar", zh: "助詞も:也／都", ja: "私（わたし）も行（い）きます。", romaji: "Watashi mo ikimasu.", note: "も取代は/が,表示「也」。" },
      { id: "gr-17", kind: "grammar", zh: "禮貌請求:～てください", ja: "少々（しょうしょう）お待（ま）ちください。", romaji: "Shōshō omachi kudasai.", note: "動詞て形+ください,禮貌咁請求對方做某事。" },
      { id: "gr-18", kind: "grammar", zh: "更客氣嘅請求:～ていただけますか", ja: "教（おし）えていただけますか？", romaji: "Oshiete itadakemasu ka?", note: "比てください更客氣,常用喺服務業／職場。" },
      { id: "gr-19", kind: "grammar", zh: "名詞修飾:の", ja: "これは私（わたし）の傘（かさ）です。", romaji: "Kore wa watashi no kasa desu.", note: "の連接兩個名詞,表示所屬、種類等關係。" },
      { id: "gr-20", kind: "grammar", zh: "比較:AのほうがBより…", ja: "こっちのほうが安（やす）いです。", romaji: "Kocchi no hō ga yasui desu.", note: "AのほうがBより…,表示A比B更…。" }
    ]
  },
  {
    id: "core-vocab",
    icon: "🗂️",
    title: "日常生活用詞",
    subtitle: "時間、家庭、動詞、形容詞",
    cards: [
      { id: "cv-01", kind: "vocab", zh: "今天", ja: "今日（きょう）" },
      { id: "cv-02", kind: "vocab", zh: "明天", ja: "明日（あした）" },
      { id: "cv-03", kind: "vocab", zh: "昨天", ja: "昨日（きのう）" },
      { id: "cv-04", kind: "vocab", zh: "現在", ja: "今（いま）" },
      { id: "cv-05", kind: "vocab", zh: "稍後", ja: "後（あと）で" },
      { id: "cv-06", kind: "vocab", zh: "早上", ja: "朝（あさ）" },
      { id: "cv-07", kind: "vocab", zh: "中午", ja: "昼（ひる）" },
      { id: "cv-08", kind: "vocab", zh: "晚上", ja: "夜（よる）" },
      { id: "cv-09", kind: "vocab", zh: "週末", ja: "週末（しゅうまつ）" },
      { id: "cv-10", kind: "vocab", zh: "下星期", ja: "来週（らいしゅう）" },
      { id: "cv-11", kind: "vocab", zh: "家人", ja: "家族（かぞく）" },
      { id: "cv-12", kind: "vocab", zh: "爸爸", ja: "父（ちち）" },
      { id: "cv-13", kind: "vocab", zh: "媽媽", ja: "母（はは）" },
      { id: "cv-14", kind: "vocab", zh: "哥哥", ja: "兄（あに）" },
      { id: "cv-15", kind: "vocab", zh: "姊姊", ja: "姉（あね）" },
      { id: "cv-16", kind: "vocab", zh: "弟弟", ja: "弟（おとうと）" },
      { id: "cv-17", kind: "vocab", zh: "妹妹", ja: "妹（いもうと）" },
      { id: "cv-18", kind: "vocab", zh: "小朋友", ja: "子供（こども）" },
      { id: "cv-19", kind: "vocab", zh: "去", ja: "行（い）く" },
      { id: "cv-20", kind: "vocab", zh: "來", ja: "来（く）る" },
      { id: "cv-21", kind: "vocab", zh: "吃", ja: "食（た）べる" },
      { id: "cv-22", kind: "vocab", zh: "喝", ja: "飲（の）む" },
      { id: "cv-23", kind: "vocab", zh: "看", ja: "見（み）る" },
      { id: "cv-24", kind: "vocab", zh: "聽", ja: "聞（き）く" },
      { id: "cv-25", kind: "vocab", zh: "說", ja: "話（はな）す" },
      { id: "cv-26", kind: "vocab", zh: "買", ja: "買（か）う" },
      { id: "cv-27", kind: "vocab", zh: "使用", ja: "使（つか）う" },
      { id: "cv-28", kind: "vocab", zh: "明白", ja: "分（わ）かる" },
      { id: "cv-29", kind: "vocab", zh: "大", ja: "大（おお）きい" },
      { id: "cv-30", kind: "vocab", zh: "小", ja: "小（ちい）さい" },
      { id: "cv-31", kind: "vocab", zh: "多", ja: "多（おお）い" },
      { id: "cv-32", kind: "vocab", zh: "少", ja: "少（すく）ない" },
      { id: "cv-33", kind: "vocab", zh: "貴", ja: "高（たか）い" },
      { id: "cv-34", kind: "vocab", zh: "便宜", ja: "安（やす）い" },
      { id: "cv-35", kind: "vocab", zh: "新", ja: "新（あたら）しい" },
      { id: "cv-36", kind: "vocab", zh: "舊", ja: "古（ふる）い" },
      { id: "cv-37", kind: "vocab", zh: "忙", ja: "忙（いそが）しい" },
      { id: "cv-38", kind: "vocab", zh: "有空", ja: "暇（ひま）" }
    ]
  }
];

const BUSINESS_KEIGO_LEVELS = [
  {
    id: "keigo-verbs",
    icon: "🔤",
    title: "敬語動詞對照",
    subtitle: "尊敬語(對方) vs 謙譲語(自己)",
    cards: [
      { id: "kv-01", kind: "grammar", zh: "「說」的敬語", ja: "尊敬語:おっしゃる／謙譲語:申（もう）す・申（もう）し上（あ）げる", note: "尊敬語講對方講嘅嘢,謙譲語講自己講嘅嘢,禮貌程度更高。" },
      { id: "kv-02", kind: "grammar", zh: "「去／來」的敬語", ja: "尊敬語:いらっしゃる／謙譲語:参（まい）る・伺（うかが）う", note: "「伺う」除咗「去」仲可以解「請教/拜訪」。" },
      { id: "kv-03", kind: "grammar", zh: "「在」的敬語", ja: "尊敬語:いらっしゃる／謙譲語:おる", note: "同事之間講自己「在」用「おる」,例如「只今席（せき）を外（はず）しております」。" },
      { id: "kv-04", kind: "grammar", zh: "「做」的敬語", ja: "尊敬語:なさる／謙譲語:いたす", note: "「いたします」係職場最常用嘅謙譲語之一。" },
      { id: "kv-05", kind: "grammar", zh: "「吃／喝」的敬語", ja: "尊敬語:召（め）し上（あ）がる／謙譲語:いただく", note: "請客人食嘢用「召し上がってください」,自己食就講「いただきます」。" },
      { id: "kv-06", kind: "grammar", zh: "「看」的敬語", ja: "尊敬語:ご覧（らん）になる／謙譲語:拝見（はいけん）する", note: "「資料を拝見しました」=我已經睇過資料(自謙)。" },
      { id: "kv-07", kind: "grammar", zh: "「知道」的敬語", ja: "尊敬語:ご存知（ぞんじ）だ／謙譲語:存（ぞん）じておる・存（ぞん）じ上（あ）げる", note: "問對方知唔知道:「ご存知でしょうか」。" },
      { id: "kv-08", kind: "grammar", zh: "「見面」的敬語", ja: "尊敬語:お会（あ）いになる／謙譲語:お目（め）にかかる", note: "「お目にかかれて光栄です」=好榮幸見到您。" },
      { id: "kv-09", kind: "grammar", zh: "「給予」的敬語", ja: "尊敬語:くださる／謙譲語:差（さ）し上（あ）げる、もらう→いただく", note: "對方俾你嘢用「くださる」,你俾對方嘢用「差し上げる」。" }
    ]
  },
  {
    id: "keigo-phrases",
    icon: "💼",
    title: "職場常用敬語句",
    subtitle: "道歉、回應、書面禮貌用語",
    cards: [
      { id: "kp-01", kind: "sentence", zh: "非常抱歉。(比「すみません」更正式)", ja: "申（もう）し訳（わけ）ございません。", romaji: "Mōshiwake gozaimasen." },
      { id: "kp-02", kind: "sentence", zh: "不好意思,可以請您稍等一下嗎?(商務常用開場)", ja: "恐（おそ）れ入（い）りますが、少々（しょうしょう）お待（ま）ちいただけますか。", romaji: "Osoreirimasu ga, shōshō omachi itadakemasu ka?" },
      { id: "kp-03", kind: "sentence", zh: "明白了/遵命。(對客人/上司常用回應)", ja: "かしこまりました。", romaji: "Kashikomarimashita." },
      { id: "kp-04", kind: "sentence", zh: "我明白了/知道了。(商務常用)", ja: "承知（しょうち）いたしました。", romaji: "Shōchi itashimashita." },
      { id: "kp-05", kind: "sentence", zh: "麻煩你了,拜託你了。", ja: "お手数（てすう）をおかけしますが、よろしくお願（ねが）いいたします。", romaji: "Otesū o okake shimasu ga, yoroshiku onegai itashimasu." },
      { id: "kp-06", kind: "sentence", zh: "可以請您確認一下嗎?", ja: "ご確認（かくにん）いただけますでしょうか。", romaji: "Gokakunin itadakemasu deshō ka?" },
      { id: "kp-07", kind: "sentence", zh: "非常抱歉,有一項變更。", ja: "大変（たいへん）申（もう）し訳（わけ）ございませんが、変更（へんこう）がございます。", romaji: "Taihen mōshiwake gozaimasen ga, henkō ga gozaimasu." },
      { id: "kp-08", kind: "sentence", zh: "懇請多多關照。(書面/正式場合結尾)", ja: "何（なに）とぞよろしくお願（ねが）い申（もう）し上（あ）げます。", romaji: "Nanitozo yoroshiku onegai mōshiagemasu." },
      { id: "kp-09", kind: "sentence", zh: "那我先告退了。", ja: "こちらで失礼（しつれい）いたします。", romaji: "Kochira de shitsurei itashimasu." },
      { id: "kp-10", kind: "sentence", zh: "一直以來承蒙您的照顧。(商務email/電話開場白)", ja: "お世話（せわ）になっております。", romaji: "Osewa ni natte orimasu." },
      { id: "kp-11", kind: "sentence", zh: "造成您的困擾,非常抱歉。", ja: "ご迷惑（めいわく）をおかけして申（もう）し訳（わけ）ございません。", romaji: "Gomeiwaku o okake shite mōshiwake gozaimasen." },
      { id: "kp-12", kind: "sentence", zh: "讓我確認一下,請稍候。", ja: "少々（しょうしょう）確認（かくにん）いたしますので、お待（ま）ちくださいませ。", romaji: "Shōshō kakunin itashimasu node, omachi kudasaimase." },
      { id: "kp-13", kind: "sentence", zh: "如果這樣可以的話,我就繼續進行。", ja: "こちらでよろしければ、進（すす）めさせていただきます。", romaji: "Kochira de yoroshikereba, susumesasete itadakimasu." },
      { id: "kp-14", kind: "sentence", zh: "如有任何不清楚的地方,請隨時吩咐。", ja: "ご不明（ふめい）な点（てん）がございましたら、お気軽（きがる）にお申（もう）し付（つ）けください。", romaji: "Gofumei na ten ga gozaimashitara, okigaru ni omōshitsuke kudasai." },
      { id: "kp-15", kind: "sentence", zh: "感謝您撥冗。", ja: "貴重（きちょう）なお時間（じかん）をいただき、ありがとうございました。", romaji: "Kichō na ojikan o itadaki, arigatō gozaimashita." }
    ]
  },
  {
    id: "keigo-register",
    icon: "🎚️",
    title: "對客 vs 對同事的語氣",
    subtitle: "教堂/宴會現場,幾時要用足敬語?",
    cards: [
      {
        id: "kr-01",
        kind: "text",
        zh: "同教堂／宴會工作人員溝通,應該用邊種語氣?",
        ja: "",
        note: "對新人、賓客(你嘅「客人」):要用最高規格嘅接客敬語——尊敬語講對方動作、謙譲語講自己動作,例如同新人講嘢會用「〇〇様」「いらっしゃいますか」。\n\n對教堂牧師、宴會場地職員、攝影師呢啲「同行/合作方」:唔使用到成套接客敬語,但都要維持丁寧語(です/ます)加基本敬語詞彙(恐れ入りますが、よろしくお願いいたします),表現專業同尊重。\n\n如果對方主動用返比較輕鬆嘅語氣,你都可以配合放鬆少少;但作為外部口譯人員,建議預設維持較有禮貌嘅丁寧語,再按對方反應調整,先至安全。"
      },
      { id: "kr-02", kind: "sentence", zh: "同新人講「請稍等」(接客敬語,較高規格)", ja: "少々（しょうしょう）お待（ま）ちくださいませ。", romaji: "Shōshō omachi kudasaimase." },
      { id: "kr-03", kind: "sentence", zh: "同工作人員講「請稍等」(同行間丁寧語)", ja: "少々（しょうしょう）お待（ま）ちください。", romaji: "Shōshō omachi kudasai." },
      { id: "kr-04", kind: "sentence", zh: "同新人講「明白了」(接客敬語)", ja: "かしこまりました。", romaji: "Kashikomarimashita." },
      { id: "kr-05", kind: "sentence", zh: "同工作人員講「明白了」(同行間商務用語)", ja: "承知（しょうち）いたしました。", romaji: "Shōchi itashimashita." }
    ]
  }
];

const SEITAI_LEVELS = [
  {
    id: "seitai-basics",
    icon: "🏥",
    title: "整骨院・整體院基本",
    subtitle: "兩者分別、預約、問診票、姿勢指示",
    cards: [
      {
        id: "sb-01",
        kind: "text",
        zh: "整骨院、整體院、按摩有咩分別?",
        ja: "",
        note: "整骨院（せいこついん）／接骨院（せっこついん）:由國家資格「柔道整復師（じゅうどうせいふくし）」施術,主要處理扭傷、撞傷、拉傷等急性受傷,呢類情況可以用健保(要帶保険証（ほけんしょう）)。單純肩頸痠痛、慢性疲勞一般唔用得健保。\n\n整体（せいたい）:冇國家資格,全部自費,著重調整骨盆、姿勢、身體平衡,收費同手法每間差好遠。\n\nマッサージ／リラクゼーション:放鬆為主。真正嘅「按摩」要有「あん摩（ま）マッサージ指圧師（しあつし）」資格,街上好多「リラク」店其實係放鬆店。\n\n實際用法:講自己去整體,可以講「整体（せいたい）に行（い）ってきた」;去整骨院就講「整骨院（せいこついん）に通（かよ）っている」(長期定期去用「通う」)。"
      },
      { id: "sb-v01", kind: "vocab", zh: "整骨院", en: "Osteopathic clinic (judo therapy clinic)", ja: "整骨院（せいこついん）" },
      { id: "sb-v02", kind: "vocab", zh: "整體(院)", en: "Seitai (manual body therapy)", ja: "整体（せいたい）" },
      { id: "sb-v03", kind: "vocab", zh: "施術/治療(整體院最常用的說法)", en: "Treatment / Session", ja: "施術（せじゅつ）" },
      { id: "sb-v04", kind: "vocab", zh: "問診表", en: "Intake form / Medical questionnaire", ja: "問診票（もんしんひょう）" },
      { id: "sb-v05", kind: "vocab", zh: "初診/第一次來", en: "First visit", ja: "初診（しょしん）／初（はじ）めて" },
      { id: "sb-v06", kind: "vocab", zh: "健保卡", en: "Health insurance card", ja: "保険証（ほけんしょう）" },
      { id: "sb-v07", kind: "vocab", zh: "換衣服", en: "Changing clothes", ja: "着替（きが）え" },
      { id: "sb-v08", kind: "vocab", zh: "趴著(面朝下)", en: "Lying face down (prone)", ja: "うつ伏（ぶ）せ" },
      { id: "sb-v09", kind: "vocab", zh: "仰躺(面朝上)", en: "Lying face up (supine)", ja: "仰向（あおむ）け" },
      { id: "sb-v10", kind: "vocab", zh: "側躺", en: "Lying on your side", ja: "横向（よこむ）き" },
      { id: "sb-v11", kind: "vocab", zh: "力度/強度", en: "Pressure / Strength", ja: "強（つよ）さ／力加減（ちからかげん）" },
      { id: "sb-v12", kind: "vocab", zh: "伸展", en: "Stretching", ja: "ストレッチ" },
      { id: "sb-v13", kind: "vocab", zh: "矯正", en: "Adjustment / Correction", ja: "矯正（きょうせい）" },
      { id: "sb-01s", kind: "sentence", zh: "我想預約,第一次來。", ja: "予約（よやく）をお願（ねが）いしたいんですが、初（はじ）めてです。", romaji: "Yoyaku o onegai shitai n desu ga, hajimete desu." },
      { id: "sb-02s", kind: "sentence", zh: "可以用健保嗎?", ja: "保険（ほけん）は使（つか）えますか？", romaji: "Hoken wa tsukaemasu ka?" },
      { id: "sb-03s", kind: "sentence", zh: "需要換衣服嗎?", ja: "着替（きが）えは必要（ひつよう）ですか？", romaji: "Kigae wa hitsuyō desu ka?" },
      { id: "sb-04s", kind: "sentence", zh: "(師傅講)請趴下。", ja: "うつ伏（ぶ）せになってください。", romaji: "Utsubuse ni natte kudasai." },
      { id: "sb-05s", kind: "sentence", zh: "(師傅講)請轉身仰躺。", ja: "仰向（あおむ）けになってください。", romaji: "Aomuke ni natte kudasai." }
    ]
  },
  {
    id: "seitai-body",
    icon: "🦴",
    title: "身體部位",
    subtitle: "講清楚「邊度」痛",
    cards: [
      { id: "bd-01", kind: "vocab", zh: "頸", en: "Neck", ja: "首（くび）" },
      { id: "bd-02", kind: "vocab", zh: "頸根/頸和肩交界", en: "Base of the neck", ja: "首（くび）の付（つ）け根（ね）" },
      { id: "bd-03", kind: "vocab", zh: "後腦", en: "Back of the head", ja: "後頭部（こうとうぶ）" },
      { id: "bd-04", kind: "vocab", zh: "太陽穴", en: "Temples", ja: "こめかみ" },
      { id: "bd-05", kind: "vocab", zh: "下巴/下顎", en: "Jaw", ja: "顎（あご）" },
      { id: "bd-06", kind: "vocab", zh: "膊頭/肩膀", en: "Shoulder", ja: "肩（かた）" },
      { id: "bd-07", kind: "vocab", zh: "肩胛骨", en: "Shoulder blade", ja: "肩甲骨（けんこうこつ）" },
      { id: "bd-08", kind: "vocab", zh: "背脊", en: "Back", ja: "背中（せなか）" },
      { id: "bd-09", kind: "vocab", zh: "脊椎/脊骨", en: "Spine", ja: "背骨（せぼね）" },
      { id: "bd-10", kind: "vocab", zh: "腰", en: "Lower back / Waist", ja: "腰（こし）" },
      { id: "bd-11", kind: "vocab", zh: "骨盆", en: "Pelvis", ja: "骨盤（こつばん）" },
      { id: "bd-12", kind: "vocab", zh: "屁股", en: "Buttocks", ja: "お尻（しり）" },
      { id: "bd-13", kind: "vocab", zh: "髖關節", en: "Hip joint", ja: "股関節（こかんせつ）" },
      { id: "bd-14", kind: "vocab", zh: "大腿", en: "Thigh", ja: "太（ふと）もも" },
      { id: "bd-15", kind: "vocab", zh: "大腿後側", en: "Back of the thigh (hamstrings)", ja: "太（ふと）ももの裏（うら）" },
      { id: "bd-16", kind: "vocab", zh: "膝頭", en: "Knee", ja: "膝（ひざ）" },
      { id: "bd-17", kind: "vocab", zh: "小腿肚", en: "Calf", ja: "ふくらはぎ" },
      { id: "bd-18", kind: "vocab", zh: "腳眼/腳踝", en: "Ankle", ja: "足首（あしくび）" },
      { id: "bd-19", kind: "vocab", zh: "腳底", en: "Sole of the foot", ja: "足（あし）の裏（うら）" },
      { id: "bd-20", kind: "vocab", zh: "手臂", en: "Arm", ja: "腕（うで）" },
      { id: "bd-21", kind: "vocab", zh: "上臂(拜拜肉位置)", en: "Upper arm", ja: "二（に）の腕（うで）" },
      { id: "bd-22", kind: "vocab", zh: "手踭/手肘", en: "Elbow", ja: "肘（ひじ）" },
      { id: "bd-23", kind: "vocab", zh: "手腕", en: "Wrist", ja: "手首（てくび）" },
      { id: "bd-24", kind: "vocab", zh: "右邊/左邊/兩邊", en: "Right side / Left side / Both sides", ja: "右側（みぎがわ）／左側（ひだりがわ）／両方（りょうほう）" },
      { id: "bd-25", kind: "vocab", zh: "(身體)深處/裡面", en: "Deep inside", ja: "奥（おく）" },
      { id: "bd-26", kind: "vocab", zh: "頭", en: "Head", ja: "頭（あたま）" },
      { id: "bd-27", kind: "vocab", zh: "胸口", en: "Chest", ja: "胸（むね）" },
      { id: "bd-28", kind: "vocab", zh: "肚", en: "Stomach / Belly", ja: "お腹（なか）" },
      { id: "bd-29", kind: "vocab", zh: "小腿前側", en: "Shin", ja: "すね" },
      { id: "bd-30", kind: "vocab", zh: "後頸", en: "Nape of the neck", ja: "首筋（くびすじ）" }
    ]
  },
  {
    id: "seitai-symptoms",
    icon: "🩹",
    title: "常見症狀與身體狀態",
    subtitle: "肩頸痠痛、落枕、閃到腰、寒背⋯",
    cards: [
      { id: "sy-01", kind: "vocab", zh: "肩頸痠痛/膊頭硬", en: "Stiff shoulders and neck", ja: "肩（かた）こり", note: "動詞講法:肩（かた）が凝（こ）っている。" },
      { id: "sy-02", kind: "vocab", zh: "腰痛", en: "Lower back pain", ja: "腰痛（ようつう）" },
      { id: "sy-03", kind: "vocab", zh: "頭痛", en: "Headache", ja: "頭痛（ずつう）" },
      { id: "sy-04", kind: "vocab", zh: "落枕", en: "Stiff neck from sleeping wrong", ja: "寝違（ねちが）え", note: "「寝違（ねちが）えました」=我瞓捩頸。" },
      { id: "sy-05", kind: "vocab", zh: "閃到腰(急性腰扭傷)", en: "Acute lower back strain", ja: "ぎっくり腰（ごし）" },
      { id: "sy-06", kind: "vocab", zh: "五十肩/肩周炎", en: "Frozen shoulder", ja: "四十肩（しじゅうかた）／五十肩（ごじゅうかた）" },
      { id: "sy-07", kind: "vocab", zh: "寒背/駝背", en: "Hunched back / Slouching", ja: "猫背（ねこぜ）" },
      { id: "sy-08", kind: "vocab", zh: "腰向前凹/骨盆前傾", en: "Swayback (anterior pelvic tilt)", ja: "反（そ）り腰（ごし）" },
      { id: "sy-09", kind: "vocab", zh: "頸椎變直(手機頸)", en: "Straight neck / Text neck", ja: "ストレートネック" },
      { id: "sy-10", kind: "vocab", zh: "骨盆歪斜", en: "Pelvic misalignment", ja: "骨盤（こつばん）の歪（ゆが）み" },
      { id: "sy-11", kind: "vocab", zh: "姿勢差", en: "Bad posture", ja: "姿勢（しせい）が悪（わる）い" },
      { id: "sy-12", kind: "vocab", zh: "水腫/浮腫", en: "Swelling / Edema", ja: "むくみ", note: "動詞:足（あし）がむくむ。" },
      { id: "sy-13", kind: "vocab", zh: "手腳冰冷/怕冷體質", en: "Poor circulation (always cold)", ja: "冷（ひ）え性（しょう）" },
      { id: "sy-14", kind: "vocab", zh: "麻痺/發麻", en: "Numbness / Pins and needles", ja: "しびれ", note: "動詞:手（て）がしびれる。" },
      { id: "sy-15", kind: "vocab", zh: "眼睛疲勞", en: "Eye strain", ja: "眼精疲労（がんせいひろう）" },
      { id: "sy-16", kind: "vocab", zh: "坐骨神經痛", en: "Sciatica", ja: "坐骨神経痛（ざこつしんけいつう）" },
      { id: "sy-17", kind: "vocab", zh: "扭傷", en: "Sprain", ja: "捻挫（ねんざ）", note: "整骨院可以用健保處理嘅典型受傷。" },
      { id: "sy-18", kind: "vocab", zh: "撞傷", en: "Bruise / Contusion", ja: "打撲（だぼく）" },
      { id: "sy-19", kind: "vocab", zh: "抽筋", en: "Leg cramp", ja: "足（あし）がつる", note: "「夜中（よなか）に足（あし）がつります」=半夜腳抽筋。" },
      { id: "sy-20", kind: "vocab", zh: "疲勞積累", en: "Built-up fatigue", ja: "疲（つか）れがたまる" },
      { id: "sy-21", kind: "vocab", zh: "失眠/瞓得唔好", en: "Light sleep / Poor sleep", ja: "眠（ねむ）りが浅（あさ）い", note: "「眠（ねむ）りが浅（あさ）い」=瞓得淺;「寝付（ねつ）きが悪（わる）い」=難入睡。" },
      { id: "sy-22", kind: "vocab", zh: "自律神經失調", en: "Autonomic nervous system imbalance", ja: "自律神経（じりつしんけい）の乱（みだ）れ" },
      { id: "sy-23", kind: "vocab", zh: "O型腿", en: "Bow legs", ja: "O脚（オーきゃく）" },
      { id: "sy-24", kind: "vocab", zh: "可動範圍/活動幅度", en: "Range of motion", ja: "可動域（かどういき）" }
    ]
  },
  {
    id: "seitai-feelings",
    icon: "⚡",
    title: "身體感覺擬聲擬態語",
    subtitle: "ズキズキ、ピリピリ、ガチガチ⋯ 形容痛法同感覺",
    cards: [
      {
        id: "fe-01",
        kind: "text",
        zh: "點解要識擬態語?",
        ja: "",
        note: "日本人形容身體感覺,好少講「刺痛」「鈍痛」呢類漢字詞,反而用擬態語(オノマトペ)。同師傅講「ズキズキします」比講「痛（いた）いです」準確好多,師傅一聽就知係咩類型嘅痛。\n\n基本句型:\n・〇〇がズキズキします(〇〇 + が + 擬態語 + します)\n・〇〇がガチガチです(形容狀態,用 です)\n・ズキッとしました(瞬間感覺,用「〜っと」+ した)"
      },
      { id: "fe-02", kind: "vocab", zh: "一跳一跳咁痛(搏動性痛,例如頭痛、傷口)", en: "Throbbing pain", ja: "ズキズキ", note: "例:頭（あたま）がズキズキします。" },
      { id: "fe-03", kind: "vocab", zh: "突然刺一下痛", en: "Sudden sharp twinge", ja: "ズキッ", note: "例:動（うご）かした時（とき）にズキッとします。" },
      { id: "fe-04", kind: "vocab", zh: "突然「咔」一聲扭到(閃腰嗰下)", en: "Sudden jolt / Wrench", ja: "ギクッ", note: "例:腰（こし）がギクッとなりました。「ぎっくり腰（ごし）」個名就係嚟自呢個字。" },
      { id: "fe-05", kind: "vocab", zh: "刺刺痺痺(神經性,輕微電流感)", en: "Tingling / Prickling", ja: "ピリピリ", note: "例:指先（ゆびさき）がピリピリします。" },
      { id: "fe-06", kind: "vocab", zh: "觸電咁痺(比ピリピリ強)", en: "Electric shock-like pain", ja: "ビリビリ", note: "例:腕（うで）にビリビリ響（ひび）きます。" },
      { id: "fe-07", kind: "vocab", zh: "麻麻痺痺/發熱咁麻", en: "Numb and tingly", ja: "ジンジン", note: "例:足（あし）がジンジンします。" },
      { id: "fe-08", kind: "vocab", zh: "針刺咁細細下痛", en: "Prickly / Needle-like", ja: "チクチク" },
      { id: "fe-09", kind: "vocab", zh: "硬到好似石頭(肌肉好繃)", en: "Rock-hard / Very stiff", ja: "ガチガチ／カチカチ", note: "例:肩（かた）がガチガチです。" },
      { id: "fe-10", kind: "vocab", zh: "腫脹、繃到漲晒", en: "Swollen and tight", ja: "パンパン", note: "例:ふくらはぎがパンパンです。(行完一日路/水腫)" },
      { id: "fe-11", kind: "vocab", zh: "撳落有一粒粒硬結", en: "Knotted / Lumpy", ja: "ゴリゴリ", note: "例:押（お）すとゴリゴリしています。" },
      { id: "fe-12", kind: "vocab", zh: "關節啪啪聲", en: "Cracking / Popping (joints)", ja: "ポキポキ", note: "例:首（くび）を回（まわ）すとポキポキ鳴（な）ります。" },
      { id: "fe-13", kind: "vocab", zh: "一陣陣擴散開嘅感覺(撳中穴位)", en: "Radiating sensation", ja: "ジーン", note: "例:押（お）されるとジーンと響（ひび）きます。" },
      { id: "fe-14", kind: "vocab", zh: "沉重、隱隱作痛(悶痛)", en: "Heavy, dull ache", ja: "ズーン／ずっしり", note: "例:腰（こし）がズーンと重（おも）いです。" },
      { id: "fe-15", kind: "vocab", zh: "慢慢地/漸漸(痛楚或改善)", en: "Gradually", ja: "じわじわ", note: "例:じわじわ痛（いた）くなってきました。" },
      { id: "fe-16", kind: "vocab", zh: "繃緊/有拉扯感", en: "Tight / Pulling feeling", ja: "張（は）っている／突（つ）っ張（ぱ）る", note: "例:太（ふと）ももの裏（うら）が突（つ）っ張（ぱ）る感（かん）じがします。" },
      { id: "fe-17", kind: "vocab", zh: "又重又攰", en: "Heavy and tired", ja: "重（おも）だるい", note: "整體院超常用。例:足（あし）が重（おも）だるいです。" },
      { id: "fe-18", kind: "vocab", zh: "攰、乏力", en: "Sluggish / Fatigued", ja: "だるい" },
      { id: "fe-19", kind: "vocab", zh: "痛得來好舒服", en: "Hurts so good", ja: "痛気持（いたきも）ちいい", note: "撳得啱力時講,師傅會好開心。" },
      { id: "fe-20", kind: "vocab", zh: "隱隱作痛/悶痛(漢字詞)", en: "Dull pain", ja: "鈍痛（どんつう）" },
      { id: "fe-21", kind: "vocab", zh: "怕癢/好癢", en: "Ticklish", ja: "くすぐったい" },
      { id: "fe-22", kind: "vocab", zh: "(做完)好爽、輕鬆晒", en: "Refreshed", ja: "スッキリ", note: "例:すごくスッキリしました!" },
      { id: "fe-23", kind: "vocab", zh: "(做完)暖笠笠", en: "Warm and cozy", ja: "ポカポカ", note: "例:体（からだ）がポカポカしてきました。" },
      { id: "fe-24", kind: "vocab", zh: "輕咗/鬆咗", en: "Feels lighter / Feels better", ja: "軽（かる）くなった／楽（らく）になった", note: "「楽（らく）になりました」=舒服咗、冇咁辛苦。" }
    ]
  },
  {
    id: "onomatopoeia-terms",
    icon: "🌀",
    title: "擬態語進階・中英日對照",
    subtitle: "痛、硬、攰、暈、痕、舒服 —— 再多 30 個身體感覺",
    cards: [
      {
        id: "on-01",
        kind: "text",
        zh: "擬態語點分類記?",
        ja: "",
        note: "按「感覺類型」分組記,比逐個背容易:\n\n・痛:ガンガン(頭痛)、キリキリ(胃痛)、シクシク(悶痛)、ヒリヒリ(皮膚痛)\n・硬/關節聲:バキバキ、コリコリ、ボキッ、グキッ、ギシギシ\n・攰:ヘトヘト、クタクタ、ぐったり\n・暈/唔舒服:クラクラ、フラフラ、ムカムカ、ゾクゾク\n・痕/郁動:ムズムズ、ピクピク、ビクッ\n・舒服:スーッ、じんわり、ほかほか、ふわふわ、のびのび\n\n大部分可以用「〇〇が＋擬態語＋する」,例如「頭（あたま）がガンガンする」。"
      },
      { id: "on-v01", kind: "vocab", zh: "頭痛到好似被人敲(劇烈頭痛)", en: "Pounding (headache)", ja: "ガンガン", note: "例:頭（あたま）がガンガンします。" },
      { id: "on-v02", kind: "vocab", zh: "絞住咁痛(胃痛)", en: "Sharp, gripping pain (stomach)", ja: "キリキリ", note: "例:胃（い）がキリキリ痛（いた）みます。" },
      { id: "on-v03", kind: "vocab", zh: "隱隱作痛、持續悶痛", en: "Dull, nagging ache", ja: "シクシク", note: "例:お腹（なか）がシクシク痛（いた）みます。" },
      { id: "on-v04", kind: "vocab", zh: "持續流膿咁痛/濕濕痛", en: "Lingering, oozing ache", ja: "ジクジク", note: "例:傷口（きずぐち）がジクジクします。" },
      { id: "on-v05", kind: "vocab", zh: "火辣辣、刺痛(皮膚)", en: "Stinging / Burning (skin)", ja: "ヒリヒリ", note: "例:日焼（ひや）けで肩（かた）がヒリヒリします。" },
      { id: "on-v06", kind: "vocab", zh: "熱辣辣咁麻(輕微灼熱)", en: "Burning tingle", ja: "チリチリ", note: "例:首（くび）の後（うし）ろがチリチリします。" },
      { id: "on-v07", kind: "vocab", zh: "全身硬晒、一郁就啪啪聲", en: "Super stiff / Creaky all over", ja: "バキバキ", note: "例:デスクワークで体（からだ）がバキバキです。年輕人好常講。" },
      { id: "on-v08", kind: "vocab", zh: "撳落有硬粒粒", en: "Knotty (muscle)", ja: "コリコリ", note: "例:肩（かた）がコリコリしています。" },
      { id: "on-v09", kind: "vocab", zh: "硬到凍結咁", en: "Frozen stiff", ja: "カチコチ", note: "例:緊張（きんちょう）で体（からだ）がカチコチ。" },
      { id: "on-v10", kind: "vocab", zh: "「咔」一聲(骨/關節)", en: "Crack / Snap", ja: "ボキッ／ゴキッ", note: "例:首（くび）を回（まわ）したらボキッと鳴（な）りました。" },
      { id: "on-v11", kind: "vocab", zh: "扭親(腳踝等)", en: "Twist (sprain)", ja: "グキッ", note: "例:足首（あしくび）をグキッとひねりました。" },
      { id: "on-v12", kind: "vocab", zh: "關節吱吱聲、唔順", en: "Creaky (joints)", ja: "ギシギシ", note: "例:膝（ひざ）がギシギシします。" },
      { id: "on-v13", kind: "vocab", zh: "攰到虛脫", en: "Exhausted / Worn out", ja: "ヘトヘト", note: "例:もうヘトヘトです。" },
      { id: "on-v14", kind: "vocab", zh: "攰到散晒", en: "Dead tired", ja: "クタクタ", note: "例:一日中（いちにちじゅう）歩（ある）いてクタクタです。" },
      { id: "on-v15", kind: "vocab", zh: "軟晒、冇晒力", en: "Limp / Drained", ja: "ぐったり", note: "例:暑（あつ）さでぐったりしています。" },
      { id: "on-v16", kind: "vocab", zh: "頭暈(天旋地轉)", en: "Dizzy / Lightheaded", ja: "クラクラ", note: "例:立（た）ち上（あ）がるとクラクラします。" },
      { id: "on-v17", kind: "vocab", zh: "腳步浮浮、企唔穩", en: "Unsteady / Wobbly", ja: "フラフラ", note: "例:疲（つか）れてフラフラします。" },
      { id: "on-v18", kind: "vocab", zh: "想嘔", en: "Nauseous", ja: "ムカムカ", note: "例:胃（い）がムカムカします。" },
      { id: "on-v19", kind: "vocab", zh: "發冷、打冷震", en: "Chills / Shivering", ja: "ゾクゾク", note: "例:背中（せなか）がゾクゾクします。風邪（かぜ）の前兆（ぜんちょう）かも。" },
      { id: "on-v20", kind: "vocab", zh: "起雞皮", en: "Goosebumps / Creepy-crawly", ja: "ゾワゾワ" },
      { id: "on-v21", kind: "vocab", zh: "痕痕地、坐唔定", en: "Itchy / Restless", ja: "ムズムズ", note: "例:夜（よる）になると足（あし）がムズムズします。" },
      { id: "on-v22", kind: "vocab", zh: "(眼皮/肌肉)跳", en: "Twitching", ja: "ピクピク", note: "例:まぶたがピクピクします。" },
      { id: "on-v23", kind: "vocab", zh: "嚇一跳咁縮一下", en: "Flinch / Jolt", ja: "ビクッ", note: "例:押（お）されてビクッとしました。" },
      { id: "on-v24", kind: "vocab", zh: "肚咕咕聲/眼有沙", en: "Rumbling / Gritty", ja: "ゴロゴロ", note: "例:お腹（なか）がゴロゴロします。目（め）がゴロゴロする=眼有異物感。" },
      { id: "on-v25", kind: "vocab", zh: "涼浸浸、痛楚一下消失", en: "Cool and soothing / Pain melting away", ja: "スーッ", note: "例:湿布（しっぷ）を貼（は）るとスーッとします。" },
      { id: "on-v26", kind: "vocab", zh: "慢慢暖起嚟", en: "Gently warming", ja: "じんわり", note: "例:お灸（きゅう）でじんわり温（あたた）かいです。" },
      { id: "on-v27", kind: "vocab", zh: "熱辣辣、暖烘烘(浸完浴)", en: "Toasty warm", ja: "ほかほか", note: "例:お風呂（ふろ）上（あ）がりで体（からだ）がほかほか。" },
      { id: "on-v28", kind: "vocab", zh: "輕飄飄", en: "Floaty / Light", ja: "ふわふわ", note: "例:施術（せじゅつ）の後（あと）、体（からだ）がふわふわします。" },
      { id: "on-v29", kind: "vocab", zh: "舒展、伸得好盡", en: "Stretched out / Free", ja: "のびのび", note: "例:ストレッチで体（からだ）がのびのびしました。" },
      { id: "on-v30", kind: "vocab", zh: "肚脹(凸咗出嚟)", en: "Bloated (belly)", ja: "ポッコリ", note: "例:お腹（なか）がポッコリしています。" },
      { id: "on-s01", kind: "sentence", zh: "朝早起身頭痛到好似被人敲。", en: "My head is pounding when I wake up.", ja: "朝（あさ）起（お）きると頭（あたま）がガンガンします。", romaji: "Asa okiru to atama ga gangan shimasu." },
      { id: "on-s02", kind: "sentence", zh: "坐成日,全身硬晒。", en: "I've been sitting all day, so my whole body is stiff.", ja: "一日中（いちにちじゅう）座（すわ）っていて、体（からだ）がバキバキです。", romaji: "Ichinichijū suwatte ite, karada ga bakibaki desu." },
      { id: "on-s03", kind: "sentence", zh: "起身嗰陣會頭暈。", en: "I get dizzy when I stand up.", ja: "立（た）ち上（あ）がる時（とき）にクラクラします。", romaji: "Tachiagaru toki ni kurakura shimasu." },
      { id: "on-s04", kind: "sentence", zh: "夜晚對腳痕痕咁,瞓唔著。", en: "My legs feel restless at night and I can't sleep.", ja: "夜（よる）、足（あし）がムズムズして眠（ねむ）れません。", romaji: "Yoru, ashi ga muzumuzu shite nemuremasen." },
      { id: "on-s05", kind: "sentence", zh: "撳嗰度嗰陣我縮咗一下。", en: "I flinched when you pressed there.", ja: "そこを押（お）されて、ビクッとしました。", romaji: "Soko o osarete, bikutto shimashita." },
      { id: "on-s06", kind: "sentence", zh: "做完成個人輕飄飄,好舒服。", en: "After the session my body feels light and floaty.", ja: "施術（せじゅつ）の後（あと）、体（からだ）がふわふわして気持（きも）ちいいです。", romaji: "Sejutsu no ato, karada ga fuwafuwa shite kimochi ii desu." },
      { id: "on-s07", kind: "sentence", zh: "貼完藥膏貼涼浸浸。", en: "The patch feels cool and soothing.", ja: "湿布（しっぷ）を貼（は）ったらスーッとしました。", romaji: "Shippu o hattara sūtto shimashita." },
      { id: "on-s08", kind: "sentence", zh: "攰到虛脫,今日想放鬆下。", en: "I'm completely worn out. I want to relax today.", ja: "ヘトヘトなので、今日（きょう）はゆっくりほぐしてほしいです。", romaji: "Hetoheto na node, kyō wa yukkuri hogushite hoshii desu." }
    ]
  },
  {
    id: "seitai-describe",
    icon: "🗣️",
    title: "向師傅講自己狀況",
    subtitle: "問診時講邊度、幾時開始、點樣痛",
    cards: [
      { id: "ds-01", kind: "sentence", zh: "膊頭一直好硬,連頸都繃住。", ja: "肩（かた）がずっと凝（こ）っていて、首（くび）まで張（は）っています。", romaji: "Kata ga zutto kotte ite, kubi made hatte imasu." },
      { id: "ds-02", kind: "sentence", zh: "今朝起身頸轉唔到(好似落枕)。", ja: "朝（あさ）起（お）きたら首（くび）が回（まわ）らなくなりました。寝違（ねちが）えたみたいです。", romaji: "Asa okitara kubi ga mawaranaku narimashita. Nechigaeta mitai desu." },
      { id: "ds-03", kind: "sentence", zh: "攞重嘢嗰陣,條腰「咔」一聲扭到。", ja: "重（おも）いものを持（も）った時（とき）に、腰（こし）がギクッとなりました。", romaji: "Omoi mono o motta toki ni, koshi ga gikutto narimashita." },
      { id: "ds-04", kind: "sentence", zh: "向前彎腰就痛。", ja: "前（まえ）かがみになると腰（こし）が痛（いた）いです。", romaji: "Maekagami ni naru to koshi ga itai desu." },
      { id: "ds-05", kind: "sentence", zh: "右手舉唔起。", ja: "右腕（みぎうで）が上（あ）がりません。", romaji: "Migiude ga agarimasen." },
      { id: "ds-06", kind: "sentence", zh: "坐耐咗,由屁股到大腿後面會麻。", ja: "長時間（ちょうじかん）座（すわ）っていると、お尻（しり）から太（ふと）ももの裏（うら）がしびれます。", romaji: "Chōjikan suwatte iru to, oshiri kara futomomo no ura ga shibiremasu." },
      { id: "ds-07", kind: "sentence", zh: "我成日對住電腦工作。", ja: "一日中（いちにちじゅう）パソコン作業（さぎょう）をしています。", romaji: "Ichinichijū pasokon sagyō o shite imasu." },
      { id: "ds-08", kind: "sentence", zh: "眼睛深處好重,仲會頭痛。", ja: "目（め）の奥（おく）が重（おも）くて、頭痛（ずつう）もあります。", romaji: "Me no oku ga omokute, zutsū mo arimasu." },
      { id: "ds-09", kind: "sentence", zh: "一到夜晚對腳就腫到漲晒。", ja: "夕方（ゆうがた）になると足（あし）がむくんでパンパンになります。", romaji: "Yūgata ni naru to ashi ga mukunde panpan ni narimasu." },
      { id: "ds-10", kind: "sentence", zh: "大概兩個星期前開始。", ja: "2週間（にしゅうかん）くらい前（まえ）からです。", romaji: "Nishūkan kurai mae kara desu." },
      { id: "ds-11", kind: "sentence", zh: "撳落去會痛。", ja: "押（お）すと痛（いた）いです。", romaji: "Osu to itai desu." },
      { id: "ds-12", kind: "sentence", zh: "郁動嗰陣先痛。", ja: "動（うご）かした時（とき）だけ痛（いた）いです。", romaji: "Ugokashita toki dake itai desu." },
      { id: "ds-13", kind: "sentence", zh: "唔郁都痛。", ja: "じっとしていても痛（いた）いです。", romaji: "Jitto shite ite mo itai desu." },
      { id: "ds-14", kind: "sentence", zh: "右邊比左邊嚴重。", ja: "左（ひだり）より右（みぎ）の方（ほう）がひどいです。", romaji: "Hidari yori migi no hō ga hidoi desu." },
      { id: "ds-15", kind: "sentence", zh: "痛到半夜醒。", ja: "夜（よる）、痛（いた）くて目（め）が覚（さ）めます。", romaji: "Yoru, itakute me ga samemasu." },
      { id: "ds-16", kind: "sentence", zh: "落樓梯時膝頭痛。", ja: "階段（かいだん）を下（お）りる時（とき）に膝（ひざ）が痛（いた）いです。", romaji: "Kaidan o oriru toki ni hiza ga itai desu." },
      { id: "ds-17", kind: "sentence", zh: "以前都傷過同一個位。", ja: "前（まえ）にも同（おな）じところを痛（いた）めたことがあります。", romaji: "Mae ni mo onaji tokoro o itameta koto ga arimasu." },
      { id: "ds-18", kind: "sentence", zh: "落雨天/天氣差就會嚴重啲。", ja: "雨（あめ）の日（ひ）や天気（てんき）が悪（わる）い日（ひ）にひどくなります。", romaji: "Ame no hi ya tenki ga warui hi ni hidoku narimasu." },
      { id: "ds-19", kind: "sentence", zh: "冇特別痛,但成個人好攰。", ja: "特（とく）に痛（いた）いところはないんですが、全体的（ぜんたいてき）に疲（つか）れがたまっています。", romaji: "Toku ni itai tokoro wa nai n desu ga, zentaiteki ni tsukare ga tamatte imasu." },
      { id: "ds-20", kind: "sentence", zh: "呢度最痛。(指住個位)", ja: "ここが一番（いちばん）つらいです。", romaji: "Koko ga ichiban tsurai desu.", note: "「つらい」比「痛（いた）い」闊,痠、累、唔舒服都可以用,整體院好常聽到。" }
    ]
  },
  {
    id: "seitai-session",
    icon: "💆",
    title: "施術中對話",
    subtitle: "師傅會問咩、你點答(力度/痛唔痛)",
    cards: [
      { id: "ss-01", kind: "qna", zh: "師傅問:今日邊度最唔舒服?", ja: "今日（きょう）はどこが一番（いちばん）つらいですか？", romaji: "Kyō wa doko ga ichiban tsurai desu ka?", note: "答法:\n肩（かた）と首（くび）が一番（いちばん）つらいです。\n(膊頭同頸最辛苦。)" },
      { id: "ss-02", kind: "qna", zh: "師傅問:力度啱唔啱?", ja: "強（つよ）さは大丈夫（だいじょうぶ）ですか？", romaji: "Tsuyosa wa daijōbu desu ka?", note: "答法:\n・ちょうどいいです。(啱啱好)\n・もう少（すこ）し強（つよ）くお願（ねが）いします。(大力少少)\n・もう少（すこ）し弱（よわ）くしてください。(細力少少)" },
      { id: "ss-03", kind: "qna", zh: "師傅問:痛唔痛?", ja: "痛（いた）くないですか？", romaji: "Itakunai desu ka?", note: "答法:\n・大丈夫（だいじょうぶ）です。(冇問題)\n・ちょっと痛（いた）いです。(有啲痛)\n・痛気持（いたきも）ちいいです。(痛得好舒服)\n注意:日本人問「痛くないですか」,答「大丈夫です」就係「唔痛/OK」。" },
      { id: "ss-04", kind: "qna", zh: "師傅問:呢度係咪好硬?", ja: "ここ、張（は）っていますね。分（わ）かりますか？", romaji: "Koko, hatte imasu ne. Wakarimasu ka?", note: "答法:\nはい、そこです!(係,就係嗰度!)\nそこ、ジーンと響（ひび）きます。(嗰度撳落有種擴散開嘅感覺。)" },
      { id: "ss-05", kind: "qna", zh: "師傅問:(做完)感覺點?", ja: "いかがですか？", romaji: "Ikaga desu ka?", note: "答法:\n・すごく軽（かる）くなりました。(輕鬆咗好多)\n・首（くび）が回（まわ）りやすくなりました。(頸容易轉咗)\n・まだ少（すこ）し腰（こし）が重（おも）いです。(腰仲有少少重)" },
      { id: "ss-06", kind: "sentence", zh: "請唔好太大力。", ja: "あまり強（つよ）くしないでください。", romaji: "Amari tsuyoku shinaide kudasai." },
      { id: "ss-07", kind: "sentence", zh: "有啲痛,可以輕手啲嗎?", ja: "少（すこ）し痛（いた）いので、優（やさ）しくしてもらえますか？", romaji: "Sukoshi itai node, yasashiku shite moraemasu ka?" },
      { id: "ss-08", kind: "sentence", zh: "我唔太鍾意整骨嗰種「啪」一聲嘅手法。", ja: "ボキボキ鳴（な）らす施術（せじゅつ）は苦手（にがて）です。", romaji: "Bokiboki narasu sejutsu wa nigate desu.", note: "怕扳骨手法可以一開始就講,好多整體院有唔扳骨(ソフト整体（せいたい）)嘅選擇。" },
      { id: "ss-09", kind: "sentence", zh: "可以集中做膊頭嗎?", ja: "肩（かた）を重点的（じゅうてんてき）にお願（ねが）いできますか？", romaji: "Kata o jūtenteki ni onegai dekimasu ka?" },
      { id: "ss-10", kind: "sentence", zh: "就係嗰度!", ja: "そこです!", romaji: "Soko desu!" },
      { id: "ss-11", kind: "sentence", zh: "有冇咩伸展可以喺屋企做?", ja: "家（いえ）でできるストレッチはありますか？", romaji: "Ie de dekiru sutorecchi wa arimasu ka?" },
      { id: "ss-12", kind: "sentence", zh: "下次幾時嚟比較好?", ja: "次（つぎ）はいつ頃（ごろ）来（き）たらいいですか？", romaji: "Tsugi wa itsu goro kitara ii desu ka?" },
      { id: "ss-13", kind: "sentence", zh: "今日可以沖涼/浸浴嗎?", ja: "今日（きょう）はお風呂（ふろ）に入（はい）っても大丈夫（だいじょうぶ）ですか？", romaji: "Kyō wa ofuro ni haitte mo daijōbu desu ka?" },
      { id: "ss-14", kind: "sentence", zh: "多謝,輕鬆咗好多。", ja: "ありがとうございました。だいぶ楽（らく）になりました。", romaji: "Arigatō gozaimashita. Daibu raku ni narimashita." }
    ]
  },
  {
    id: "seitai-massage",
    icon: "🧴",
    title: "按摩・放鬆店",
    subtitle: "揀療程、指定部位、怕痛怕癢、做完之後",
    cards: [
      { id: "ms-v01", kind: "vocab", zh: "揉/按摩(動作)", en: "Knead / Massage", ja: "揉（も）む", note: "「もっと揉（も）んでほしい」=想再揉多啲。" },
      { id: "ms-v02", kind: "vocab", zh: "撳/按", en: "Press", ja: "押（お）す" },
      { id: "ms-v03", kind: "vocab", zh: "放鬆(繃緊嘅肌肉)", en: "Loosen up (tight muscles)", ja: "ほぐす", note: "「コリをほぐす」=鬆開硬咗嘅肌肉,按摩店最常見嘅講法。" },
      { id: "ms-v04", kind: "vocab", zh: "按摩後反彈痠痛", en: "Post-massage soreness", ja: "揉（も）み返（かえ）し", note: "大力按完第二日反而更痛,就叫揉み返し。" },
      { id: "ms-v05", kind: "vocab", zh: "指壓", en: "Shiatsu (finger pressure)", ja: "指圧（しあつ）" },
      { id: "ms-v06", kind: "vocab", zh: "腳底按摩", en: "Foot reflexology", ja: "足（あし）つぼ" },
      { id: "ms-v07", kind: "vocab", zh: "穴位", en: "Pressure point", ja: "ツボ" },
      { id: "ms-v08", kind: "vocab", zh: "加鐘/延長", en: "Extension", ja: "延長（えんちょう）" },
      { id: "ms-v09", kind: "vocab", zh: "指定師傅", en: "Requesting a specific therapist", ja: "指名（しめい）" },
      { id: "ms-v10", kind: "vocab", zh: "套票/回數券", en: "Multi-session pass", ja: "回数券（かいすうけん）" },
      { id: "ms-01", kind: "sentence", zh: "我要 60 分鐘嘅療程。", en: "I'd like the 60-minute course.", ja: "60分（ろくじっぷん）のコースでお願（ねが）いします。", romaji: "Rokujippun no kōsu de onegaishimasu." },
      { id: "ms-02", kind: "sentence", zh: "全身同肩頸為主嘅療程,你推薦邊個?", en: "Which do you recommend, the full-body course or the shoulder and neck course?", ja: "全身（ぜんしん）コースと肩（かた）・首（くび）中心（ちゅうしん）のコース、どちらがおすすめですか？", romaji: "Zenshin kōsu to kata kubi chūshin no kōsu, dochira ga osusume desu ka?" },
      { id: "ms-03", kind: "sentence", zh: "唔使用油。", en: "No oil, please.", ja: "オイルなしでお願（ねが）いします。", romaji: "Oiru nashi de onegaishimasu." },
      { id: "ms-04", kind: "sentence", zh: "我皮膚敏感,未必啱用油。", en: "My skin is sensitive, so oil may not suit me.", ja: "肌（はだ）が弱（よわ）いので、オイルが合（あ）わないかもしれません。", romaji: "Hada ga yowai node, oiru ga awanai kamo shiremasen." },
      { id: "ms-05", kind: "sentence", zh: "可以加埋腳底按摩嗎?", en: "Can I add foot reflexology?", ja: "足（あし）つぼも追加（ついか）できますか？", romaji: "Ashitsubo mo tsuika dekimasu ka?" },
      { id: "ms-06", kind: "sentence", zh: "我條腰傷過,請唔好大力撳。", en: "I've hurt my lower back, so please don't press hard.", ja: "腰（こし）を痛（いた）めているので、強（つよ）く押（お）さないでください。", romaji: "Koshi o itamete iru node, tsuyoku osanaide kudasai." },
      { id: "ms-07", kind: "sentence", zh: "頸請輕手啲。", en: "Please go gently on my neck.", ja: "首（くび）は軽（かる）めでお願（ねが）いします。", romaji: "Kubi wa karume de onegaishimasu." },
      { id: "ms-08", kind: "sentence", zh: "嗰度可以做耐啲嗎?", en: "Could you spend a bit more time there?", ja: "そこをもう少（すこ）し長（なが）めにお願（ねが）いできますか？", romaji: "Soko o mō sukoshi nagame ni onegai dekimasu ka?" },
      { id: "ms-09", kind: "sentence", zh: "我好怕癢,嗰度可以跳過嗎?", en: "I'm ticklish there. Could you skip that area?", ja: "くすぐったいので、そこは避（さ）けてもらえますか？", romaji: "Kusuguttai node, soko wa sakete moraemasu ka?" },
      { id: "ms-10", kind: "sentence", zh: "我容易按完反彈痛,請輕力啲。", en: "I get sore easily after massages, so please be gentle.", ja: "揉（も）み返（かえ）しが出（で）やすいので、優（やさ）しめでお願（ねが）いします。", romaji: "Momikaeshi ga deyasui node, yasashime de onegaishimasu." },
      { id: "ms-11", kind: "sentence", zh: "有啲凍,可以幫我蓋條毛巾嗎?", en: "I'm a little cold. Could you put a towel over me?", ja: "少（すこ）し寒（さむ）いので、タオルをかけてもらえますか？", romaji: "Sukoshi samui node, taoru o kakete moraemasu ka?" },
      { id: "ms-12", kind: "sentence", zh: "趴著塊面有啲辛苦。(面托位置唔啱)", en: "My face is a bit uncomfortable when lying face down.", ja: "うつ伏（ぶ）せだと顔（かお）が少（すこ）し苦（くる）しいです。", romaji: "Utsubuse da to kao ga sukoshi kurushii desu." },
      { id: "ms-13", kind: "sentence", zh: "瞓著咗唔好意思。", en: "Sorry if I fall asleep.", ja: "寝（ね）てしまったらすみません。", romaji: "Nete shimattara sumimasen." },
      { id: "ms-14", kind: "sentence", zh: "我可以去一去洗手間嗎?", en: "May I go to the restroom?", ja: "お手洗（てあら）いに行（い）ってもいいですか？", romaji: "Otearai ni itte mo ii desu ka?" },
      { id: "ms-15", kind: "sentence", zh: "可以加鐘嗎?", en: "Can I extend the session?", ja: "延長（えんちょう）はできますか？", romaji: "Enchō wa dekimasu ka?" },
      { id: "ms-16", kind: "sentence", zh: "我想要上次嗰位師傅。", en: "Can I request the same therapist as last time?", ja: "前回（ぜんかい）と同（おな）じ方（かた）を指名（しめい）できますか？", romaji: "Zenkai to onaji kata o shimei dekimasu ka?" },
      { id: "ms-17", kind: "sentence", zh: "有冇套票?", en: "Do you have multi-session passes?", ja: "回数券（かいすうけん）はありますか？", romaji: "Kaisūken wa arimasu ka?" },
      { id: "ms-18", kind: "sentence", zh: "做完要多飲水嗎?", en: "Should I drink water afterward?", ja: "終（お）わった後（あと）は、お水（みず）を飲（の）んだ方（ほう）がいいですか？", romaji: "Owatta ato wa, omizu o nonda hō ga ii desu ka?" },
      { id: "ms-19", kind: "sentence", zh: "太舒服,瞓著咗。", en: "It felt so good I fell asleep.", ja: "気持（きも）ちよすぎて寝（ね）ちゃいました。", romaji: "Kimochi yosugite nechaimashita." },
      { id: "ms-20", kind: "sentence", zh: "成個人鬆晒,好舒服。", en: "My whole body feels loosened up. It felt amazing.", ja: "体（からだ）中（じゅう）ほぐれて、すごく気持（きも）ちよかったです。", romaji: "Karadajū hogurete, sugoku kimochi yokatta desu." }
    ]
  },
  {
    id: "massage-terms",
    icon: "💆‍♀️",
    title: "按摩用詞・中英日對照",
    subtitle: "按摩種類、店內用品、力度、預約付款 + 常用句",
    cards: [
      { id: "mt-v01", kind: "vocab", zh: "放鬆按摩(店)", en: "Relaxation massage", ja: "リラクゼーション" },
      { id: "mt-v02", kind: "vocab", zh: "身體按摩", en: "Body care / Body massage", ja: "ボディケア" },
      { id: "mt-v03", kind: "vocab", zh: "精油按摩", en: "Aromatherapy oil massage", ja: "アロマオイルマッサージ" },
      { id: "mt-v04", kind: "vocab", zh: "泰式按摩", en: "Thai massage", ja: "タイ古式（こしき）マッサージ" },
      { id: "mt-v05", kind: "vocab", zh: "熱石按摩", en: "Hot stone massage", ja: "ホットストーン" },
      { id: "mt-v06", kind: "vocab", zh: "頭部按摩/頭皮護理", en: "Head spa / Scalp massage", ja: "ヘッドスパ" },
      { id: "mt-v07", kind: "vocab", zh: "淋巴按摩", en: "Lymphatic drainage massage", ja: "リンパマッサージ" },
      { id: "mt-v08", kind: "vocab", zh: "反射療法(腳底)", en: "Reflexology", ja: "リフレクソロジー" },
      { id: "mt-v09", kind: "vocab", zh: "浸腳", en: "Foot bath", ja: "足湯（あしゆ）／フットバス" },
      { id: "mt-v10", kind: "vocab", zh: "按摩師", en: "Therapist", ja: "セラピスト" },
      { id: "mt-v11", kind: "vocab", zh: "精油", en: "Essential oil", ja: "精油（せいゆ）／エッセンシャルオイル" },
      { id: "mt-v12", kind: "vocab", zh: "揀香味", en: "Choose a scent", ja: "香（かお）りを選（えら）ぶ" },
      { id: "mt-v13", kind: "vocab", zh: "按摩袍/按摩衫", en: "Treatment gown", ja: "施術着（せじゅつぎ）" },
      { id: "mt-v14", kind: "vocab", zh: "即棄底褲", en: "Disposable underwear", ja: "紙（かみ）ショーツ／紙（かみ）パンツ" },
      { id: "mt-v15", kind: "vocab", zh: "面托(趴低時放面嘅位)", en: "Face cradle", ja: "フェイスホール／顔（かお）の穴（あな）" },
      { id: "mt-v16", kind: "vocab", zh: "熱毛巾", en: "Hot towel", ja: "ホットタオル" },
      { id: "mt-v17", kind: "vocab", zh: "毯", en: "Blanket", ja: "ブランケット" },
      { id: "mt-v18", kind: "vocab", zh: "輕力/中等/大力", en: "Light / Medium / Firm pressure", ja: "弱（よわ）め／普通（ふつう）／強（つよ）め" },
      { id: "mt-v19", kind: "vocab", zh: "大力揉(深層)", en: "Deep tissue / Firm massage", ja: "強揉（つよも）み" },
      { id: "mt-v20", kind: "vocab", zh: "血液循環", en: "Blood circulation", ja: "血行（けっこう）", note: "「血行（けっこう）がよくなる」=血液循環好咗。" },
      { id: "mt-v21", kind: "vocab", zh: "排毒/體內廢物", en: "Detox / Waste products", ja: "デトックス／老廃物（ろうはいぶつ）" },
      { id: "mt-v22", kind: "vocab", zh: "加購項目", en: "Add-on / Option", ja: "オプション" },
      { id: "mt-v23", kind: "vocab", zh: "冇預約直接去", en: "Walk-in", ja: "予約（よやく）なし／飛（と）び込（こ）み" },
      { id: "mt-v24", kind: "vocab", zh: "有空檔", en: "Available slot", ja: "空（あ）き" },
      { id: "mt-v25", kind: "vocab", zh: "取消費", en: "Cancellation fee", ja: "キャンセル料（りょう）" },
      { id: "mt-v26", kind: "vocab", zh: "小費", en: "Tip", ja: "チップ", note: "日本冇俾小費文化,唔使俾。" },
      { id: "mt-01", kind: "sentence", zh: "冇預約,而家有冇位?", en: "I don't have a reservation. Do you have anything available now?", ja: "予約（よやく）していないんですが、今（いま）空（あ）いていますか？", romaji: "Yoyaku shite inai n desu ga, ima aite imasu ka?" },
      { id: "mt-02", kind: "sentence", zh: "有咩精油香味揀?", en: "What scents can I choose from?", ja: "アロマの香（かお）りは何（なに）がありますか？", romaji: "Aroma no kaori wa nani ga arimasu ka?" },
      { id: "mt-03", kind: "sentence", zh: "我想要淡啲嘅香味。", en: "I'd like a lighter scent.", ja: "香（かお）りが控（ひか）えめなものがいいです。", romaji: "Kaori ga hikaeme na mono ga ii desu." },
      { id: "mt-04", kind: "sentence", zh: "力度中等就得。", en: "Medium pressure is fine.", ja: "強（つよ）さは普通（ふつう）でお願（ねが）いします。", romaji: "Tsuyosa wa futsū de onegaishimasu." },
      { id: "mt-05", kind: "sentence", zh: "我想大力啲,深層按。", en: "I'd like firm, deep pressure.", ja: "強揉（つよも）みでお願（ねが）いします。", romaji: "Tsuyomomi de onegaishimasu." },
      { id: "mt-06", kind: "sentence", zh: "有冇熱石按摩?", en: "Do you offer hot stone massage?", ja: "ホットストーンのコースはありますか？", romaji: "Hotto sutōn no kōsu wa arimasu ka?" },
      { id: "mt-07", kind: "sentence", zh: "可以加頭部按摩嗎?", en: "Can I add a head massage?", ja: "ヘッドスパをオプションで追加（ついか）できますか？", romaji: "Heddo supa o opushon de tsuika dekimasu ka?" },
      { id: "mt-08", kind: "sentence", zh: "要換衫嗎?換咩?", en: "Do I need to change? What should I wear?", ja: "着替（きが）えは必要（ひつよう）ですか？何（なに）を着（き）ればいいですか？", romaji: "Kigae wa hitsuyō desu ka? Nani o kireba ii desu ka?" },
      { id: "mt-09", kind: "sentence", zh: "取消要收費嗎?", en: "Is there a cancellation fee?", ja: "キャンセル料（りょう）はかかりますか？", romaji: "Kyanseru-ryō wa kakarimasu ka?" },
      { id: "mt-10", kind: "sentence", zh: "可以碌卡嗎?", en: "Can I pay by card?", ja: "カードで払（はら）えますか？", romaji: "Kādo de haraemasu ka?" }
    ]
  },
  {
    id: "seitai-terms",
    icon: "🩺",
    title: "整骨用詞・中英日對照",
    subtitle: "療法、診所種類、身體組織、處理方法 + 常用句",
    cards: [
      { id: "st-v01", kind: "vocab", zh: "骨科(醫院)", en: "Orthopedics", ja: "整形外科（せいけいげか）", note: "要照 X 光、開藥、做手術就要去整形外科(醫生);整骨院唔係醫生。" },
      { id: "st-v02", kind: "vocab", zh: "柔道整復師(整骨院師傅)", en: "Judo therapist (licensed bonesetter)", ja: "柔道整復師（じゅうどうせいふくし）" },
      { id: "st-v03", kind: "vocab", zh: "脊醫/整脊", en: "Chiropractic", ja: "カイロプラクティック" },
      { id: "st-v04", kind: "vocab", zh: "針灸(針)", en: "Acupuncture", ja: "鍼（はり）" },
      { id: "st-v05", kind: "vocab", zh: "艾灸", en: "Moxibustion", ja: "お灸（きゅう）" },
      { id: "st-v06", kind: "vocab", zh: "拔罐", en: "Cupping", ja: "カッピング" },
      { id: "st-v07", kind: "vocab", zh: "電療", en: "Electrotherapy", ja: "電気治療（でんきちりょう）" },
      { id: "st-v08", kind: "vocab", zh: "熱敷治療", en: "Heat therapy", ja: "温熱療法（おんねつりょうほう）" },
      { id: "st-v09", kind: "vocab", zh: "貼紮/肌貼", en: "Taping (kinesiology tape)", ja: "テーピング" },
      { id: "st-v10", kind: "vocab", zh: "姿勢矯正", en: "Posture correction", ja: "姿勢矯正（しせいきょうせい）" },
      { id: "st-v11", kind: "vocab", zh: "骨盆矯正", en: "Pelvic adjustment", ja: "骨盤矯正（こつばんきょうせい）" },
      { id: "st-v12", kind: "vocab", zh: "X 光", en: "X-ray", ja: "レントゲン" },
      { id: "st-v13", kind: "vocab", zh: "用得健保", en: "Covered by insurance", ja: "保険適用（ほけんてきよう）" },
      { id: "st-v14", kind: "vocab", zh: "自費", en: "Out-of-pocket / Self-pay", ja: "自費（じひ）" },
      { id: "st-v15", kind: "vocab", zh: "初診費", en: "First visit fee", ja: "初診料（しょしんりょう）" },
      { id: "st-v16", kind: "vocab", zh: "幾耐去一次", en: "Visit frequency", ja: "通院頻度（つういんひんど）" },
      { id: "st-v17", kind: "vocab", zh: "肌肉", en: "Muscle", ja: "筋肉（きんにく）" },
      { id: "st-v18", kind: "vocab", zh: "關節", en: "Joint", ja: "関節（かんせつ）" },
      { id: "st-v19", kind: "vocab", zh: "韌帶", en: "Ligament", ja: "靭帯（じんたい）" },
      { id: "st-v20", kind: "vocab", zh: "筋/肌腱", en: "Tendon", ja: "腱（けん）" },
      { id: "st-v21", kind: "vocab", zh: "神經", en: "Nerve", ja: "神経（しんけい）" },
      { id: "st-v22", kind: "vocab", zh: "發炎", en: "Inflammation", ja: "炎症（えんしょう）" },
      { id: "st-v23", kind: "vocab", zh: "腫", en: "Swelling", ja: "腫（は）れ" },
      { id: "st-v24", kind: "vocab", zh: "瘀青", en: "Bruise", ja: "あざ" },
      { id: "st-v25", kind: "vocab", zh: "冰敷", en: "Icing / Cold compress", ja: "アイシング／冷（ひ）やす" },
      { id: "st-v26", kind: "vocab", zh: "熱敷", en: "Warming / Hot compress", ja: "温（あたた）める" },
      { id: "st-v27", kind: "vocab", zh: "藥膏貼", en: "Medicated patch / Compress", ja: "湿布（しっぷ）" },
      { id: "st-v28", kind: "vocab", zh: "止痛藥", en: "Painkiller", ja: "痛（いた）み止（ど）め" },
      { id: "st-01", kind: "sentence", zh: "呢個要去骨科照 X 光比較好嗎?", en: "Should I see an orthopedist and get an X-ray?", ja: "整形外科（せいけいげか）でレントゲンを撮（と）った方（ほう）がいいですか？", romaji: "Seikei geka de rentogen o totta hō ga ii desu ka?" },
      { id: "st-02", kind: "sentence", zh: "今日嘅施術用得健保嗎?", en: "Is today's treatment covered by insurance?", ja: "今日（きょう）の施術（せじゅつ）は保険適用（ほけんてきよう）になりますか？", romaji: "Kyō no sejutsu wa hoken tekiyō ni narimasu ka?" },
      { id: "st-03", kind: "sentence", zh: "自費要幾錢?", en: "How much is it if I pay out of pocket?", ja: "自費（じひ）だといくらですか？", romaji: "Jihi da to ikura desu ka?" },
      { id: "st-04", kind: "sentence", zh: "要冰敷定熱敷?", en: "Should I ice it or warm it?", ja: "冷（ひ）やした方（ほう）がいいですか、温（あたた）めた方（ほう）がいいですか？", romaji: "Hiyashita hō ga ii desu ka, atatameta hō ga ii desu ka?", note: "一般講法:啱啱受傷、腫緊、發熱就冰敷;慢性痠痛就熱敷。最終聽師傅講。" },
      { id: "st-05", kind: "sentence", zh: "我唔想做電療。", en: "I'd rather not have electrotherapy.", ja: "電気治療（でんきちりょう）はなしでお願（ねが）いします。", romaji: "Denki chiryō wa nashi de onegaishimasu." },
      { id: "st-06", kind: "sentence", zh: "可以幫我貼紮嗎?", en: "Could you tape it for me?", ja: "テーピングをしてもらえますか？", romaji: "Tēpingu o shite moraemasu ka?" },
      { id: "st-07", kind: "sentence", zh: "我對藥膏貼敏感。", en: "My skin reacts to medicated patches.", ja: "湿布（しっぷ）でかぶれやすいです。", romaji: "Shippu de kabureyasui desu.", note: "「かぶれる」=皮膚敏感起紅疹。" },
      { id: "st-08", kind: "sentence", zh: "大概要嚟幾多次?", en: "About how many sessions will I need?", ja: "何回（なんかい）くらい通（かよ）えばいいですか？", romaji: "Nankai kurai kayoeba ii desu ka?" },
      { id: "st-09", kind: "sentence", zh: "邊度發炎?", en: "Where is the inflammation?", ja: "どこが炎症（えんしょう）を起（お）こしていますか？", romaji: "Doko ga enshō o okoshite imasu ka?" },
      { id: "st-10", kind: "sentence", zh: "係肌肉問題定關節問題?", en: "Is it a muscle problem or a joint problem?", ja: "筋肉（きんにく）の問題（もんだい）ですか、関節（かんせつ）の問題（もんだい）ですか？", romaji: "Kinniku no mondai desu ka, kansetsu no mondai desu ka?" }
    ]
  }
];

// 人體圖:topic 主頁顯示嘅可點擊部位圖(app.js 嘅 renderBodyMap)
// x/y 係 SVG viewBox(420×520)入面嘅點,side 決定標籤擺左定右
const SEITAI_BODY_MAP = {
  front: [
    { x: 210, y: 36, side: "left", ja: "頭", kana: "あたま", zh: "頭" },
    { x: 186, y: 58, side: "left", ja: "こめかみ", kana: "", zh: "太陽穴" },
    { x: 210, y: 94, side: "right", ja: "顎", kana: "あご", zh: "下巴" },
    { x: 204, y: 112, side: "left", ja: "首", kana: "くび", zh: "頸" },
    { x: 168, y: 128, side: "left", ja: "肩", kana: "かた", zh: "膊頭" },
    { x: 232, y: 160, side: "right", ja: "胸", kana: "むね", zh: "胸口" },
    { x: 148, y: 172, side: "left", ja: "腕", kana: "うで", zh: "手臂" },
    { x: 140, y: 205, side: "left", ja: "肘", kana: "ひじ", zh: "手肘" },
    { x: 210, y: 228, side: "right", ja: "お腹", kana: "おなか", zh: "肚" },
    { x: 131, y: 282, side: "left", ja: "手首", kana: "てくび", zh: "手腕" },
    { x: 192, y: 298, side: "left", ja: "股関節", kana: "こかんせつ", zh: "髖關節" },
    { x: 238, y: 350, side: "right", ja: "太もも", kana: "ふともも", zh: "大腿" },
    { x: 240, y: 400, side: "right", ja: "膝", kana: "ひざ", zh: "膝頭" },
    { x: 241, y: 440, side: "right", ja: "すね", kana: "", zh: "小腿前側" },
    { x: 242, y: 478, side: "right", ja: "足首", kana: "あしくび", zh: "腳踝" }
  ],
  back: [
    { x: 210, y: 46, side: "left", ja: "後頭部", kana: "こうとうぶ", zh: "後腦" },
    { x: 210, y: 120, side: "right", ja: "首の付け根", kana: "くびのつけね", zh: "頸根" },
    { x: 188, y: 162, side: "left", ja: "肩甲骨", kana: "けんこうこつ", zh: "肩胛骨" },
    { x: 144, y: 172, side: "left", ja: "二の腕", kana: "にのうで", zh: "上臂後側" },
    { x: 210, y: 192, side: "right", ja: "背骨", kana: "せぼね", zh: "脊骨" },
    { x: 238, y: 214, side: "right", ja: "背中", kana: "せなか", zh: "背脊" },
    { x: 180, y: 252, side: "left", ja: "腰", kana: "こし", zh: "腰" },
    { x: 196, y: 292, side: "left", ja: "骨盤", kana: "こつばん", zh: "骨盆" },
    { x: 232, y: 304, side: "right", ja: "お尻", kana: "おしり", zh: "屁股" },
    { x: 238, y: 352, side: "right", ja: "太ももの裏", kana: "ふとももの うら", zh: "大腿後側" },
    { x: 240, y: 400, side: "right", ja: "膝の裏", kana: "ひざのうら", zh: "膝後" },
    { x: 180, y: 432, side: "left", ja: "ふくらはぎ", kana: "", zh: "小腿肚" },
    { x: 246, y: 496, side: "right", ja: "足の裏", kana: "あしのうら", zh: "腳底" }
  ]
};

// 十字連結記憶:中間一個共用嘅字(type "字")或者共用開頭音(type "音"),四邊各一個詞,
// story 用一句將四個詞串埋,靠連結記住。topic 主頁每日輪一組(app.js 嘅 renderCross)
const SEITAI_CROSSES = [
  {
    center: "こ", type: "音",
    words: [
      { w: "腰", r: "こし", zh: "腰" },
      { w: "骨盤", r: "こつばん", zh: "骨盆" },
      { w: "凝る", r: "こる", zh: "(肌肉)硬" },
      { w: "股関節", r: "こかんせつ", zh: "髖關節" }
    ],
    story: "腰（こし）が凝（こ）って、骨盤（こつばん）と股関節（こかんせつ）まで固（かた）い。",
    storyZh: "腰好硬,連骨盆同髖關節都硬埋。"
  },
  {
    center: "肩", type: "字",
    words: [
      { w: "肩こり", r: "かたこり", zh: "肩頸痠痛" },
      { w: "肩甲骨", r: "けんこうこつ", zh: "肩胛骨" },
      { w: "四十肩", r: "しじゅうかた", zh: "肩周炎" },
      { w: "なで肩", r: "なでがた", zh: "溜肩/膊頭斜" }
    ],
    story: "なで肩（がた）で肩（かた）こりがひどく、四十肩（しじゅうかた）で肩甲骨（けんこうこつ）も動（うご）かない。",
    storyZh: "膊頭斜、肩頸又痛,加埋肩周炎,連肩胛骨都郁唔到。",
    tip: "同一個「肩」有兩個讀法:單獨/和語讀「かた」,漢字詞入面讀「けん」。「なで肩」連讀變「がた」。"
  },
  {
    center: "か", type: "音",
    words: [
      { w: "体", r: "からだ", zh: "身體" },
      { w: "硬い", r: "かたい", zh: "硬" },
      { w: "肩", r: "かた", zh: "膊頭" },
      { w: "可動域", r: "かどういき", zh: "活動幅度" }
    ],
    story: "体（からだ）が硬（かた）くて、肩（かた）の可動域（かどういき）が狭（せま）い。",
    storyZh: "身體好硬,膊頭嘅活動幅度好窄。"
  },
  {
    center: "骨", type: "字",
    words: [
      { w: "整骨院", r: "せいこついん", zh: "整骨院" },
      { w: "骨盤", r: "こつばん", zh: "骨盆" },
      { w: "背骨", r: "せぼね", zh: "脊骨" },
      { w: "骨折", r: "こっせつ", zh: "骨折" }
    ],
    story: "整骨院（せいこついん）で骨盤（こつばん）と背骨（せぼね）を診（み）てもらった。骨折（こっせつ）じゃなくてよかった。",
    storyZh: "喺整骨院睇咗骨盆同脊骨,好彩唔係骨折。",
    tip: "「骨」漢字詞讀「こつ」,詞尾/和語讀「ほね」,「背骨」連讀變「ぼね」。"
  },
  {
    center: "せ", type: "音",
    words: [
      { w: "整体", r: "せいたい", zh: "整體" },
      { w: "施術", r: "せじゅつ", zh: "施術" },
      { w: "背中", r: "せなか", zh: "背脊" },
      { w: "背骨", r: "せぼね", zh: "脊骨" }
    ],
    story: "整体（せいたい）の施術（せじゅつ）で、背中（せなか）と背骨（せぼね）を伸（の）ばしてもらった。",
    storyZh: "喺整體做施術,幫我拉鬆咗背脊同脊骨。"
  },
  {
    center: "首", type: "字",
    words: [
      { w: "首", r: "くび", zh: "頸" },
      { w: "手首", r: "てくび", zh: "手腕" },
      { w: "足首", r: "あしくび", zh: "腳踝" },
      { w: "首筋", r: "くびすじ", zh: "後頸" }
    ],
    story: "パソコンで手首（てくび）、立（た）ち仕事（しごと）で足首（あしくび）、スマホで首筋（くびすじ）がつらい。",
    storyZh: "用電腦搞到手腕痛,企一日搞到腳踝痛,睇手機搞到後頸痛。",
    tip: "日文「首」係頸,唔係頭!身體上「幼咗一截」嘅位都叫「首」:手首、足首。"
  },
  {
    center: "ひ", type: "音",
    words: [
      { w: "膝", r: "ひざ", zh: "膝頭" },
      { w: "肘", r: "ひじ", zh: "手肘" },
      { w: "冷え", r: "ひえ", zh: "寒冷/手腳冰" },
      { w: "響く", r: "ひびく", zh: "(痛)傳過去" }
    ],
    story: "冷（ひ）えると、膝（ひざ）と肘（ひじ）にズーンと響（ひび）く。",
    storyZh: "一凍,膝頭同手肘就有種悶痛傳過嚟。",
    tip: "ひざ(膝)同ひじ(肘)淨係差一個音,放埋一齊記就唔會撈亂。"
  },
  {
    center: "腰", type: "字",
    words: [
      { w: "腰痛", r: "ようつう", zh: "腰痛" },
      { w: "ぎっくり腰", r: "ぎっくりごし", zh: "閃到腰" },
      { w: "反り腰", r: "そりごし", zh: "骨盆前傾" },
      { w: "腰回り", r: "こしまわり", zh: "腰圍一帶" }
    ],
    story: "反（そ）り腰（ごし）のせいで腰痛（ようつう）が続（つづ）き、ついにぎっくり腰（ごし）。腰回（こしまわ）りをほぐしてもらった。",
    storyZh: "因為骨盆前傾一直腰痛,終於閃到腰,去咗鬆返腰嗰一帶。",
    tip: "「腰」漢字詞讀「よう」(腰痛),和語讀「こし」,前面有字連讀變「ごし」。"
  },
  {
    center: "し", type: "音",
    words: [
      { w: "姿勢", r: "しせい", zh: "姿勢" },
      { w: "しびれ", r: "しびれ", zh: "麻痺" },
      { w: "四十肩", r: "しじゅうかた", zh: "肩周炎" },
      { w: "湿布", r: "しっぷ", zh: "藥膏貼" }
    ],
    story: "姿勢（しせい）が悪（わる）くて四十肩（しじゅうかた）に。しびれもあるので湿布（しっぷ）を貼（は）った。",
    storyZh: "姿勢差搞到肩周炎,仲有啲麻,所以貼咗藥膏貼。"
  },
  {
    center: "痛", type: "字",
    words: [
      { w: "頭痛", r: "ずつう", zh: "頭痛" },
      { w: "腰痛", r: "ようつう", zh: "腰痛" },
      { w: "鈍痛", r: "どんつう", zh: "悶痛" },
      { w: "痛気持ちいい", r: "いたきもちいい", zh: "痛得舒服" }
    ],
    story: "頭痛（ずつう）も腰痛（ようつう）も鈍痛（どんつう）だったのに、押（お）されたら痛気持（いたきも）ちいい。",
    storyZh: "頭痛腰痛都係悶悶哋痛,點知一撳落去痛得好舒服。",
    tip: "「痛」漢字詞讀「つう」,形容詞讀「いたい」。"
  },
  {
    center: "あ", type: "音",
    words: [
      { w: "頭", r: "あたま", zh: "頭" },
      { w: "顎", r: "あご", zh: "下巴" },
      { w: "足", r: "あし", zh: "腳" },
      { w: "仰向け", r: "あおむけ", zh: "仰躺" }
    ],
    story: "仰向（あおむ）けになって、頭（あたま）から足（あし）まで、顎（あご）の力（ちから）も抜（ぬ）いて。",
    storyZh: "仰躺,由頭到腳,連下巴都放鬆埋。"
  },
  {
    center: "体", type: "字",
    words: [
      { w: "整体", r: "せいたい", zh: "整體" },
      { w: "体調", r: "たいちょう", zh: "身體狀況" },
      { w: "体幹", r: "たいかん", zh: "核心肌群" },
      { w: "体", r: "からだ", zh: "身體" }
    ],
    story: "体調（たいちょう）が悪（わる）い時（とき）は整体（せいたい）へ。体幹（たいかん）を鍛（きた）えて体（からだ）を守（まも）ろう。",
    storyZh: "身體唔妥就去整體,練好核心保護身體。"
  },
  {
    center: "ふ", type: "音",
    words: [
      { w: "太もも", r: "ふともも", zh: "大腿" },
      { w: "ふくらはぎ", r: "ふくらはぎ", zh: "小腿肚" },
      { w: "不調", r: "ふちょう", zh: "唔舒服/毛病" },
      { w: "古傷", r: "ふるきず", zh: "舊患" }
    ],
    story: "古傷（ふるきず）のせいか、太（ふと）ももとふくらはぎの不調（ふちょう）が続（つづ）く。",
    storyZh: "可能係舊患,大腿同小腿肚一直唔舒服。"
  }
];

// 教堂儀式流程圖:topic 主頁嘅俯視平面圖(app.js 嘅 renderFlowMap)
// viewBox 360×540,上面係祭壇,下面係入口;面向祭壇右邊=新郎側、左邊=新婦側
// step.at = 呢一步發生嘅位置,step.path = 有人行動嘅路線(可選)
const WEDDING_CHAPEL_MAP = {
  id: "chapel", icon: "⛪", title: "教堂儀式流程圖", plan: "chapel",
  places: [
    { x: 180, y: 50, ja: "ステンドグラス", zh: "彩繪玻璃", small: true },
    { x: 228, y: 96, ja: "祭壇", kana: "さいだん", zh: "祭壇", anchor: "start" },
    { x: 52, y: 106, ja: "オルガン", zh: "風琴/聖歌隊", anchor: "middle" },
    { x: 95, y: 170, ja: "新婦側", kana: "しんぷがわ", zh: "女家親友", anchor: "middle" },
    { x: 265, y: 170, ja: "新郎側", kana: "しんろうがわ", zh: "男家親友", anchor: "middle" },
    { x: 180, y: 497, ja: "扉", kana: "とびら", zh: "大門", anchor: "middle" }
  ],
  steps: [
    { ja: "参列者入場・着席", kana: "さんれつしゃにゅうじょう・ちゃくせき", zh: "賓客進場、入座", en: "Guests enter and take their seats", at: [[95, 300], [265, 300]], path: "180,476 180,300", note: "帶客人入座:面向祭壇,左邊係新婦側,右邊係新郎側。\n皆様（みなさま）、チャペルへご案内（あんない）いたします。" },
    { ja: "新郎入場", kana: "しんろうにゅうじょう", zh: "新郎進場", en: "Groom's entrance", at: [[196, 146]], path: "180,476 180,160 196,146", note: "新郎先行入去,喺祭壇前面等新娘。" },
    { ja: "ベールダウン", kana: "", zh: "媽媽幫新娘落頭紗", en: "Veil-down by the mother", at: [[180, 466]], note: "日本特有環節:入場前喺門口,媽媽幫新娘放低頭紗,代表最後一次幫女兒打扮。華人家庭多數唔知,要預先解釋。" },
    { ja: "新婦入場", kana: "しんぷにゅうじょう", zh: "新娘同爸爸進場", en: "Bride's entrance with her father", at: [[164, 146]], path: "180,476 180,160 164,146", note: "新娘挽住爸爸行バージンロード,到前面爸爸將新娘交俾新郎。\n新婦様（しんぷさま）とお父様（とうさま）のご入場（にゅうじょう）です。" },
    { ja: "讃美歌斉唱", kana: "さんびかせいしょう", zh: "全體唱聖詩", en: "Hymn singing", at: [[52, 81]], note: "全體起身一齊唱,歌詞紙通常放喺座位上。\n皆様（みなさま）、ご起立（きりつ）ください。" },
    { ja: "聖書朗読・祈祷", kana: "せいしょろうどく・きとう", zh: "讀聖經、祈禱", en: "Bible reading and prayer", at: [[180, 118]], note: "牧師讀聖經同祈禱,參列者可以坐低。" },
    { ja: "誓いの言葉", kana: "ちかいのことば", zh: "結婚誓詞", en: "Wedding vows", at: [[164, 146], [196, 146]], note: "牧師問:健（すこ）やかなる時（とき）も、病（や）める時（とき）も⋯⋯愛（あい）することを誓（ちか）いますか？\n新人答:はい、誓（ちか）います。" },
    { ja: "指輪交換", kana: "ゆびわこうかん", zh: "交換戒指", en: "Exchange of rings", at: [[164, 146], [196, 146]], note: "新郎先幫新娘戴,之後新娘幫新郎戴,戴喺左手無名指(薬指（くすりゆび）)。" },
    { ja: "ベールアップ・誓いのキス", kana: "ベールアップ・ちかいのキス", zh: "揭頭紗、誓約之吻", en: "Veil lifting and the kiss", at: [[180, 146]], note: "新郎揭起頭紗,然後誓約之吻。攝影師最緊張嘅一刻,唔好企喺中間。" },
    { ja: "結婚証明書に署名", kana: "けっこんしょうめいしょにしょめい", zh: "簽結婚證書", en: "Signing the marriage certificate", at: [[180, 96]], note: "新人喺祭壇簽名,有時證婚人或者父母都要簽。\nこちらにご署名（しょめい）をお願（ねが）いします。" },
    { ja: "結婚成立宣言", kana: "けっこんせいりつせんげん", zh: "宣佈結婚成立", en: "Declaration of marriage", at: [[180, 118]], note: "牧師宣佈兩人正式成為夫婦,全場拍手。" },
    { ja: "新郎新婦退場", kana: "しんろうしんぷたいじょう", zh: "新人退場", en: "Recessional (couple exits)", at: [[180, 300]], path: "180,146 180,476", note: "新人一齊行返出去,賓客拍手送。" },
    { ja: "フラワーシャワー", kana: "", zh: "撒花瓣祝福", en: "Flower shower", at: [[180, 524]], note: "喺教堂門口撒花瓣祝福新人。工作人員會預先派花瓣,要提醒賓客先出去排好。\n皆様（みなさま）、お先（さき）にチャペルの外（そと）へお願（ねが）いします。" }
  ]
};

// 婚宴流程圖:同教堂圖共用 renderFlowMap,底圖 plan "banquet"
// 上面係高砂(主家席)同螢幕,中間圓枱,下面入口;廳外有受付、控室,最底係二次會沙灘
// 流程同時間跟 SS 2026-10-03 真實 rundown(新人/MC/工作人員姓名同場地名唔入 repo)
const WEDDING_BANQUET_MAP = {
  id: "banquet", icon: "🥂", title: "婚宴＋二次會流程圖", plan: "banquet",
  places: [
    { x: 180, y: 46, ja: "スクリーン", zh: "螢幕", small: true },
    { x: 248, y: 62, ja: "高砂", kana: "たかさご", zh: "新人主家席", anchor: "start" },
    { x: 49, y: 86, ja: "司会台", kana: "しかいだい", zh: "MC 台", anchor: "middle" },
    { x: 180, y: 124, ja: "フォトスペース", zh: "影相區", small: true },
    { x: 100, y: 345, ja: "円卓", kana: "えんたく", zh: "賓客圓枱", anchor: "middle" },
    { x: 311, y: 376, ja: "音響ブース", zh: "音響控制", anchor: "middle", small: true },
    { x: 180, y: 436, ja: "入口", kana: "いりぐち", zh: "入口", anchor: "middle" },
    { x: 70, y: 474, ja: "受付", kana: "うけつけ", zh: "簽到處", anchor: "middle" },
    { x: 295, y: 482, ja: "控室", kana: "ひかえしつ", zh: "新人休息/換衫室", anchor: "middle" },
    { x: 180, y: 520, ja: "ビーチ（二次会）", zh: "沙灘 After Party", anchor: "middle" }
  ],
  steps: [
    { time: "17:15", ja: "ヘアメイク直し・お色直し", kana: "ヘアメイクなおし・おいろなおし", zh: "新人補妝、換第三套造型", en: "Makeup touch-up and outfit change (3rd dress)", at: [[295, 454]], note: "完成後化妝師會離開。\n3着目（さんちゃくめ）のドレスにお色直（いろなお）しします。" },
    { time: "17:40", ja: "受付開始", kana: "うけつけかいし", zh: "嘉賓簽到", en: "Guest sign-in", at: [[70, 451]], note: "受付（うけつけ）はこちらです。ご芳名（ほうめい）をお願（ねが）いします。" },
    { time: "18:00", ja: "新郎新婦入場", kana: "しんろうしんぷにゅうじょう", zh: "新人進場", en: "Bride and groom march-in", at: [[180, 64]], path: "180,416 180,96", note: "進場歌響起,新人由入口行到高砂。\n新郎新婦（しんろうしんぷ）のご入場（にゅうじょう）です。皆様（みなさま）、拍手（はくしゅ）でお迎（むか）えください。" },
    { time: "18:00", ja: "ウェルカムスピーチ", kana: "", zh: "新郎、新娘致辭", en: "Speeches from groom and bride", at: [[166, 64], [194, 64]], note: "Cue:進場後 MC 示意音響熄音樂,再到新人致辭。\nBGMを止（と）めてください。" },
    { time: "18:15", ja: "乾杯", kana: "かんぱい", zh: "祝酒", en: "Toasting", at: [[180, 64]], note: "Cue:MC 喊「乾杯!」嗰下,音響開音樂(Wedding Medley)。\n皆様（みなさま）、グラスをお持（も）ちください。乾杯（かんぱい）！" },
    { time: "18:20", ja: "お料理のサーブ開始", kana: "おりょうりのサーブかいし", zh: "開始上菜", en: "Start to serve dishes", at: [[70, 160], [290, 230], [130, 300]], note: "お料理（りょうり）をお出（だ）ししてください。" },
    { time: "18:30", ja: "映像上映①", kana: "えいぞうじょうえい", zh: "播片 1(2 分鐘)", en: "Video 1 (2 mins)", at: [[180, 31], [311, 394]], note: "Cue 四步:\n① 音響落螢幕 スクリーンを下（お）ろす\n② MC 簡單介紹 司会（しかい）が紹介（しょうかい）\n③ MC 示意播片 映像（えいぞう）を流（なが）す\n④ 播完收螢幕 スクリーンを上（あ）げる" },
    { time: "18:30", ja: "フォトタイム", kana: "", zh: "自由拍照", en: "Free flow photo taking", at: [[180, 108]], note: "MC 請各組賓客出嚟前面影相。\n写真撮影（しゃしんさつえい）をしますので、前（まえ）へお越（こ）しください。" },
    { time: "18:45", ja: "友人スピーチ", kana: "ゆうじんスピーチ", zh: "伴娘、兄弟致辭", en: "Bridesmaid + Groomsmen speech", at: [[49, 62], [180, 108]], note: "Cue:MC 示意音響熄音樂。\nブライズメイドとアッシャーからのスピーチです。" },
    { time: "19:00", ja: "余興・クイズ", kana: "よきょう・クイズ", zh: "遊戲:9 問 9 答(沖繩手信做獎品)", en: "Games: Q&A quiz (Okinawa souvenirs)", at: [[180, 108]], note: "沖縄（おきなわ）のお土産（みやげ）が当（あ）たるクイズです。" },
    { time: "19:15", ja: "ブラインドボックス開封", kana: "ブラインドボックスかいふう", zh: "一齊開盲盒", en: "Open the blind boxes together", at: [[130, 160], [230, 230], [70, 300]], note: "日本人未必識「盲盒」,可以講:中身（なかみ）が分（わ）からない箱（はこ）を皆（みな）で開（あ）けます。" },
    { time: "19:25", ja: "映像上映②", kana: "えいぞうじょうえい", zh: "播片 2(8 分鐘)", en: "Video 2 (8 mins)", at: [[180, 31], [311, 394]], note: "同播片 1 一樣嘅 cue 四步:落螢幕 → MC 介紹 → 播片 → 收螢幕。" },
    { time: "19:30", ja: "テーブルラウンド", kana: "", zh: "逐枱敬酒", en: "Toasting at each table", at: [], path: "180,96 130,130 70,190 100,265 160,265 230,265 290,190 230,130", note: "19:30–19:50。新人逐枱同賓客乾杯影相。\n各卓（かくたく）を回（まわ）って乾杯（かんぱい）します。" },
    { time: "20:00", ja: "お見送り", kana: "おみおくり", zh: "送客", en: "Send off guests", at: [[180, 416]], note: "MC 請賓客盡快上穿梭巴士;開始送客時要通知佈置組同二次會 MC。\nシャトルバスにお早（はや）めにご乗車（じょうしゃ）ください。" },
    { time: "20:00", ja: "4着目に着替え・ビーチへ移動", kana: "よんちゃくめにきがえ・ビーチへいどう", zh: "換輕便第四套、坐車去沙灘", en: "Change into casual 4th outfit, drive to the beach", at: [[180, 520]], path: "180,424 258,452 250,500 205,512", note: "20:00–20:20 返酒店換輕便服裝,20:00–20:30 坐車去沙灘(兄弟負責車)。\nお二人（ふたり）は着替（きが）えてからビーチへ移動（いどう）します。" },
    { time: "20:30", ja: "二次会入場・ファーストダンス", kana: "にじかいにゅうじょう・ファーストダンス", zh: "二次會進場、新郎致辭+跳舞", en: "After party entrance, groom speech + dance", at: [[180, 520]], note: "二次会（にじかい）の司会者（しかいしゃ）にバトンタッチ。新郎（しんろう）のスピーチの後（あと）、ファーストダンスです。" },
    { time: "21:00", ja: "スパークラー撮影", kana: "スパークラーさつえい", zh: "仙女棒拍攝", en: "Sparkler shooting", at: [[120, 520], [240, 520]], note: "21:00–21:30。スパークラーに火（ひ）をつけますので、足元（あしもと）にお気（き）をつけください。" },
    { time: "22:45", ja: "謝辞・お見送り", kana: "しゃじ・おみおくり", zh: "答謝致辭、帶客離場", en: "Thank-you speech and escort for leaving", at: [[180, 520]], note: "本日（ほんじつ）は誠（まこと）にありがとうございました。お気（き）をつけてお帰（かえ）りください。" }
  ]
};

// 沙灘二次會流程圖:plan "beach";上面係海,中間沙灘(舞池、MC/DJ、仙女棒花道),下面停車場
// 時間跟 10/3 rundown(20:30 入場、21:00–21:30 仙女棒、22:45 謝辭);排位細節以現場安排為準
const WEDDING_BEACH_MAP = {
  id: "beach", icon: "🏖️", title: "沙灘二次會流程圖", plan: "beach",
  places: [
    { x: 180, y: 40, ja: "海", kana: "うみ", zh: "海", anchor: "middle" },
    { x: 180, y: 140, ja: "ダンスフロア", zh: "舞池/主舞台", small: true },
    { x: 58, y: 200, ja: "DJ・司会", kana: "しかい", zh: "MC/音響", anchor: "middle" },
    { x: 292, y: 304, ja: "ゲスト席", kana: "せき", zh: "賓客區", anchor: "middle" },
    { x: 180, y: 412, ja: "スパークラーの花道", zh: "仙女棒花道", small: true },
    { x: 299, y: 362, ja: "バケツ", zh: "滅火水桶", anchor: "middle", small: true },
    { x: 180, y: 460, ja: "入口", kana: "いりぐち", zh: "入口", anchor: "middle" },
    { x: 61, y: 525, ja: "新郎新婦の車", zh: "新人車", small: true },
    { x: 278, y: 528, ja: "駐車場", kana: "ちゅうしゃじょう", zh: "停車場/巴士", anchor: "middle" }
  ],
  steps: [
    { time: "20:00", ja: "シャトルバス到着・ご案内", kana: "シャトルバスとうちゃく・ごあんない", zh: "賓客坐巴士到達,帶去賓客區", en: "Guests arrive by shuttle and are guided in", at: [[292, 225]], path: "278,488 180,436 270,260", note: "沙灘夜晚暗,行路要提醒睇地下。\n足元（あしもと）が暗（くら）いので、お気（き）をつけください。" },
    { time: "20:20", ja: "新郎新婦到着・スタンバイ", kana: "しんろうしんぷとうちゃく・スタンバイ", zh: "新人到達,車上待命", en: "Couple arrives and stands by", at: [[61, 497]], note: "新人換好第四套輕便服裝,兄弟揸車送到。等 MC cue 先入場。\nお二人（ふたり）は車（くるま）でスタンバイしています。" },
    { time: "20:30", ja: "二次会スタート・司会挨拶", kana: "にじかいスタート・しかいあいさつ", zh: "二次會開始,MC 開場", en: "After party starts, MC opening", at: [[58, 172]], note: "由二次會 MC 接手主持,攝影師由 20:30 拍到 21:30(一個鐘)。\nただ今（いま）より二次会（にじかい）を始（はじ）めます。" },
    { time: "20:30", ja: "新郎新婦入場", kana: "しんろうしんぷにゅうじょう", zh: "新人進場", en: "Couple's entrance", at: [[180, 186]], path: "61,488 180,440 180,224", note: "新郎新婦（しんろうしんぷ）のご入場（にゅうじょう）です！皆様（みなさま）、拍手（はくしゅ）でお迎（むか）えください。" },
    { time: "20:35", ja: "新郎スピーチ", kana: "しんろうスピーチ", zh: "新郎致辭", en: "Groom speech", at: [[194, 186]], note: "Cue:致辭前請音響熄音樂或者收細聲。\nBGMを小（ちい）さくしてください。" },
    { time: "20:40", ja: "ファーストダンス", kana: "", zh: "首支舞", en: "First dance", at: [[166, 186], [194, 186]], note: "Cue:音響開跳舞音樂。跳完可以邀請賓客一齊落舞池。\n皆様（みなさま）もぜひダンスフロアへどうぞ！" },
    { time: "21:00", ja: "スパークラーの準備・二列に整列", kana: "スパークラーのじゅんび・にれつにせいれつ", zh: "派仙女棒,賓客排兩行", en: "Hand out sparklers, guests line up in two rows", at: [[146, 310], [214, 310]], path: "292,275 230,300", note: "請賓客面對面排兩行,中間留位俾新人行。\nスパークラーをお配（くば）りします。二列（にれつ）に並（なら）んでください。" },
    { time: "21:05", ja: "点火", kana: "てんか", zh: "點火", en: "Light the sparklers", at: [[146, 286], [214, 286]], note: "安全提醒:唔好向人、唔好太近衫同頭髮。\n火（ひ）の取（と）り扱（あつか）いにご注意（ちゅうい）ください。人（ひと）に向（む）けないでください。" },
    { time: "21:10", ja: "スパークラー撮影", kana: "スパークラーさつえい", zh: "新人行過仙女棒花道拍攝", en: "Sparkler send-off shooting", at: [[180, 322]], path: "180,392 180,250", note: "新人由花道一頭行到另一頭,攝影師喺前面影。可能要行多次,聽攝影師指示。\nもう一回（いっかい）お願（ねが）いします！" },
    { time: "21:25", ja: "消火・後片付け", kana: "しょうか・あとかたづけ", zh: "熄滅仙女棒、收拾", en: "Extinguish sparklers and tidy up", at: [[299, 338]], path: "214,330 288,338", note: "用完嘅仙女棒放入水桶,唔好插落沙或者掉地。\n使（つか）い終（お）わったスパークラーはバケツに入（い）れてください。" },
    { time: "21:30", ja: "カメラマン撮影終了", kana: "カメラマンさつえいしゅうりょう", zh: "攝影師拍攝完結", en: "Photographer wraps up", at: [[180, 186]], note: "Shooting 一個鐘完結。之後仲想影要自己用手機。\nカメラマンの撮影（さつえい）はここまでです。" },
    { time: "21:30", ja: "ご歓談タイム", kana: "ごかんだんタイム", zh: "自由交流時間", en: "Free time to mingle", at: [[292, 175], [180, 186]], note: "どうぞごゆっくりお楽（たの）しみください。" },
    { time: "22:45", ja: "謝辞", kana: "しゃじ", zh: "答謝致辭", en: "Thank-you speech", at: [[166, 186], [194, 186]], note: "Cue:收細音樂。\n本日（ほんじつ）は最後（さいご）までありがとうございました。" },
    { time: "22:50", ja: "お見送り・ご案内", kana: "おみおくり・ごあんない", zh: "送客,帶去停車場", en: "Escort guests out to the parking area", at: [[278, 497]], path: "180,224 180,440 270,488", note: "提醒執齊隨身物品,夜晚沙灘好易跌嘢。\nお忘（わす）れ物（もの）のないよう、お気（き）をつけてお帰（かえ）りください。" }
  ]
};

// 婚禮口譯嘅十字連結記憶(格式同 SEITAI_CROSSES)
const WEDDING_CROSSES = [
  {
    set: "教堂・婚禮", center: "式", type: "字",
    words: [
      { w: "結婚式", r: "けっこんしき", zh: "婚禮" },
      { w: "挙式", r: "きょしき", zh: "舉行儀式" },
      { w: "式場", r: "しきじょう", zh: "婚禮場地" },
      { w: "式次第", r: "しきしだい", zh: "儀式流程表" }
    ],
    story: "式場（しきじょう）で式次第（しきしだい）を確認（かくにん）。挙式（きょしき）は11時（じゅういちじ）、結婚式（けっこんしき）の始（はじ）まりです。",
    storyZh: "喺婚禮場地確認流程,11 點舉行儀式,婚禮正式開始。",
    tip: "「挙式」係「儀式本身」(教堂嗰part),「結婚式」係成個婚禮;「披露宴」先係之後嘅宴會。"
  },
  {
    set: "教堂・婚禮", center: "ゆ", type: "音",
    words: [
      { w: "指輪", r: "ゆびわ", zh: "戒指" },
      { w: "夕日", r: "ゆうひ", zh: "夕陽" },
      { w: "友人", r: "ゆうじん", zh: "朋友" },
      { w: "誘導", r: "ゆうどう", zh: "引導(客人)" }
    ],
    story: "夕日（ゆうひ）のチャペルで指輪（ゆびわ）の交換（こうかん）。その後（ご）、友人（ゆうじん）を席（せき）へ誘導（ゆうどう）する。",
    storyZh: "喺夕陽下嘅教堂交換戒指,之後引導朋友去返座位。"
  },
  {
    set: "教堂・婚禮", center: "会", type: "字",
    words: [
      { w: "司会", r: "しかい", zh: "司儀" },
      { w: "二次会", r: "にじかい", zh: "After Party" },
      { w: "会場", r: "かいじょう", zh: "會場" },
      { w: "会食", r: "かいしょく", zh: "聚餐/飲宴" }
    ],
    story: "会食（かいしょく）の後（あと）は二次会（にじかい）。会場（かいじょう）で司会（しかい）と最終（さいしゅう）確認（かくにん）。",
    storyZh: "飲完宴就去 After Party,喺會場同司儀做最後確認。"
  },
  {
    set: "教堂・婚禮", center: "お", type: "音",
    words: [
      { w: "お色直し", r: "おいろなおし", zh: "換衫/換造型" },
      { w: "お見送り", r: "おみおくり", zh: "送客" },
      { w: "親", r: "おや", zh: "父母" },
      { w: "お祝い", r: "おいわい", zh: "祝賀/人情" }
    ],
    story: "お色直（いろなお）しで登場（とうじょう）、親（おや）にお祝（いわ）いの感謝（かんしゃ）を伝（つた）え、最後（さいご）はお見送（みおく）り。",
    storyZh: "換完衫再出場,向父母道謝,最後送客。",
    tip: "「ご祝儀（しゅうぎ）」先係人情錢;「お祝い」範圍闊啲,祝賀、禮物都叫。"
  },
  {
    set: "教堂・婚禮", center: "新", type: "字",
    words: [
      { w: "新郎", r: "しんろう", zh: "新郎" },
      { w: "新婦", r: "しんぷ", zh: "新娘" },
      { w: "新婚旅行", r: "しんこんりょこう", zh: "蜜月旅行" },
      { w: "新居", r: "しんきょ", zh: "新屋" }
    ],
    story: "新郎（しんろう）と新婦（しんぷ）は、新婚旅行（しんこんりょこう）から帰（かえ）ったら新居（しんきょ）へ。",
    storyZh: "新郎新娘度完蜜月就搬入新屋。",
    tip: "「新婦」讀「しんぷ」,同教堂嘅「神父（しんぷ）」同音!口譯時要靠前後文分。"
  },
  {
    set: "教堂・婚禮", center: "は", type: "音",
    words: [
      { w: "花嫁", r: "はなよめ", zh: "新娘(較口語)" },
      { w: "拍手", r: "はくしゅ", zh: "拍手" },
      { w: "晴れ", r: "はれ", zh: "晴天" },
      { w: "ハンカチ", r: "はんかち", zh: "手帕" }
    ],
    story: "晴（は）れの日（ひ）、花嫁（はなよめ）が入場（にゅうじょう）すると大（おお）きな拍手（はくしゅ）。ハンカチが必要（ひつよう）です。",
    storyZh: "晴朗嘅好日子,新娘一進場全場拍手,要準備手帕。",
    tip: "「晴れの日」除咗晴天,仲解「人生大日子」。"
  },
  {
    set: "教堂・婚禮", center: "入", type: "字",
    words: [
      { w: "入場", r: "にゅうじょう", zh: "進場" },
      { w: "入籍", r: "にゅうせき", zh: "註冊結婚" },
      { w: "ケーキ入刀", r: "けーきにゅうとう", zh: "切蛋糕" },
      { w: "記入", r: "きにゅう", zh: "填寫" }
    ],
    story: "入籍（にゅうせき）した二人（ふたり）が入場（にゅうじょう）してケーキ入刀（にゅうとう）。ゲストは芳名帳（ほうめいちょう）に記入（きにゅう）。",
    storyZh: "已經註冊嘅新人進場切蛋糕,賓客喺簽名冊簽名。",
    tip: "「芳名帳」=簽到/簽名冊,受付（うけつけ）嗰度會用到。"
  },
  {
    set: "教堂・婚禮", center: "し", type: "音",
    words: [
      { w: "司会", r: "しかい", zh: "司儀" },
      { w: "式場", r: "しきじょう", zh: "婚禮場地" },
      { w: "新郎", r: "しんろう", zh: "新郎" },
      { w: "進行", r: "しんこう", zh: "流程進行" }
    ],
    story: "式場（しきじょう）で、司会（しかい）と新郎（しんろう）が当日（とうじつ）の進行（しんこう）を確認（かくにん）する。",
    storyZh: "喺婚禮場地,司儀同新郎確認當日流程。"
  },
  {
    set: "教堂・婚禮", center: "花", type: "字",
    words: [
      { w: "花嫁", r: "はなよめ", zh: "新娘" },
      { w: "花婿", r: "はなむこ", zh: "新郎" },
      { w: "花束", r: "はなたば", zh: "花束" },
      { w: "花びら", r: "はなびら", zh: "花瓣" }
    ],
    story: "花嫁（はなよめ）と花婿（はなむこ）に花（はな）びらのシャワー。最後（さいご）は両親（りょうしん）への花束（はなたば）贈呈（ぞうてい）。",
    storyZh: "向新娘新郎撒花瓣,最後新人向父母送花束。",
    tip: "「フラワーシャワー」就係撒花瓣;「花束贈呈」係披露宴尾段新人送花俾父母嘅環節。"
  },
  {
    set: "教堂・婚禮", center: "か", type: "音",
    words: [
      { w: "乾杯", r: "かんぱい", zh: "乾杯" },
      { w: "鐘", r: "かね", zh: "(教堂)鐘" },
      { w: "家族", r: "かぞく", zh: "家人" },
      { w: "会場", r: "かいじょう", zh: "會場" }
    ],
    story: "鐘（かね）が鳴（な）ったら、家族（かぞく）みんなで会場（かいじょう）へ移動（いどう）して乾杯（かんぱい）。",
    storyZh: "教堂鐘聲響起,一家人移去會場乾杯。"
  },
  {
    set: "婚宴", center: "宴", type: "字",
    words: [
      { w: "披露宴", r: "ひろうえん", zh: "婚宴" },
      { w: "宴会場", r: "えんかいじょう", zh: "宴會廳" },
      { w: "祝宴", r: "しゅくえん", zh: "喜宴" },
      { w: "宴会", r: "えんかい", zh: "宴會/飲宴" }
    ],
    story: "披露宴（ひろうえん）は宴会場（えんかいじょう）で。祝宴（しゅくえん）のあとも、宴会（えんかい）は二次会（にじかい）へ続（つづ）く。",
    storyZh: "婚宴喺宴會廳搞,喜宴之後飲宴仲會延續到二次會。",
    tip: "「披露宴」專指婚宴;「宴会」係一般飲宴,公司聚餐都用。"
  },
  {
    set: "婚宴", center: "かん", type: "音",
    words: [
      { w: "歓迎", r: "かんげい", zh: "歡迎" },
      { w: "乾杯", r: "かんぱい", zh: "乾杯" },
      { w: "歓談", r: "かんだん", zh: "傾偈/自由交流" },
      { w: "感謝", r: "かんしゃ", zh: "感謝" }
    ],
    story: "歓迎（かんげい）のスピーチ、乾杯（かんぱい）、ご歓談（かんだん）、最後（さいご）は感謝（かんしゃ）の謝辞（しゃじ）。",
    storyZh: "歡迎致辭、乾杯、自由交流,最後答謝致辭。",
    tip: "四個詞剛好係婚宴由頭到尾嘅順序,記住呢句就記住成個流程。"
  },
  {
    set: "婚宴", center: "席", type: "字",
    words: [
      { w: "席次表", r: "せきじひょう", zh: "座位表" },
      { w: "着席", r: "ちゃくせき", zh: "入座" },
      { w: "出席", r: "しゅっせき", zh: "出席" },
      { w: "空席", r: "くうせき", zh: "空位" }
    ],
    story: "席次表（せきじひょう）を見（み）て着席（ちゃくせき）。出席（しゅっせき）は80名（はちじゅうめい）、空席（くうせき）なし。",
    storyZh: "睇座位表入座,出席 80 人,冇空位。"
  },
  {
    set: "婚宴", center: "さ", type: "音",
    words: [
      { w: "撮影", r: "さつえい", zh: "拍攝" },
      { w: "再入場", r: "さいにゅうじょう", zh: "再次進場" },
      { w: "サーブ", r: "さーぶ", zh: "上菜" },
      { w: "最後", r: "さいご", zh: "最後" }
    ],
    story: "撮影（さつえい）のあと、お色直（いろなお）しして再入場（さいにゅうじょう）。料理（りょうり）のサーブも続（つづ）き、最後（さいご）まで盛（も）り上（あ）がる。",
    storyZh: "影完相換衫再進場,繼續上菜,氣氛熱鬧到最後。",
    tip: "「再入場」係換衫後新人再出場,日本婚宴流程表必見。"
  },
  {
    set: "婚宴", center: "映", type: "字",
    words: [
      { w: "映像", r: "えいぞう", zh: "影片" },
      { w: "上映", r: "じょうえい", zh: "播放" },
      { w: "映画", r: "えいが", zh: "電影" },
      { w: "映える", r: "ばえる", zh: "上鏡/打卡好睇" }
    ],
    story: "映画（えいが）みたいな映像（えいぞう）を上映（じょうえい）。写真（しゃしん）映（ば）えもばっちり。",
    storyZh: "播一段好似電影咁嘅影片,影相都好上鏡。",
    tip: "「映える」正式讀「はえる」,但「インスタ映（ば）え」「写真映（ば）え」連讀變「ばえる」。"
  },
  {
    set: "婚宴", center: "しゅ", type: "音",
    words: [
      { w: "主賓", r: "しゅひん", zh: "主賓" },
      { w: "祝辞", r: "しゅくじ", zh: "賀辭" },
      { w: "祝儀", r: "しゅうぎ", zh: "人情錢" },
      { w: "出席", r: "しゅっせき", zh: "出席" }
    ],
    story: "主賓（しゅひん）の祝辞（しゅくじ）。出席者（しゅっせきしゃ）はご祝儀（しゅうぎ）を受付（うけつけ）へ。",
    storyZh: "主賓致賀辭,出席嘅人喺簽到處交人情。",
    tip: "「祝辞」係賓客講嘅祝賀;「謝辞」係新人或者家人講嘅答謝,唔好撈亂。"
  },
  {
    set: "婚宴", center: "色", type: "字",
    words: [
      { w: "お色直し", r: "おいろなおし", zh: "換衫" },
      { w: "色打掛", r: "いろうちかけ", zh: "彩色和服禮服" },
      { w: "色紙", r: "しきし", zh: "簽名留言板" },
      { w: "景色", r: "けしき", zh: "景色" }
    ],
    story: "お色直（いろなお）しで色打掛（いろうちかけ）に。ゲストは色紙（しきし）にメッセージ、窓（まど）の外（そと）は海（うみ）の景色（けしき）。",
    storyZh: "換上彩色和服禮服,賓客喺留言板寫祝福,窗外係海景。",
    tip: "「色」單獨讀「いろ」,但「色紙」讀「しき」、「景色」讀「しき」。"
  },
  {
    set: "婚宴", center: "て", type: "音",
    words: [
      { w: "テーブルラウンド", r: "てーぶるらうんど", zh: "逐枱敬酒" },
      { w: "手紙", r: "てがみ", zh: "信" },
      { w: "手拍子", r: "てびょうし", zh: "跟節拍拍手" },
      { w: "手作り", r: "てづくり", zh: "親手製作" }
    ],
    story: "手作（てづく）りの映像（えいぞう）、テーブルラウンドで手拍子（てびょうし）、花嫁（はなよめ）の手紙（てがみ）で涙（なみだ）。",
    storyZh: "親手整嘅影片,逐枱敬酒時大家跟住拍手,新娘讀信感動落淚。",
    tip: "「花嫁の手紙」係日本婚宴尾段新娘讀俾父母聽嘅信,好多人會喊。"
  },
  {
    set: "婚宴", center: "送", type: "字",
    words: [
      { w: "送迎", r: "そうげい", zh: "接送" },
      { w: "見送り", r: "みおくり", zh: "送客" },
      { w: "発送", r: "はっそう", zh: "寄出" },
      { w: "送る", r: "おくる", zh: "送/寄" }
    ],
    story: "お見送（みおく）りのあと送迎（そうげい）バスへ。引出物（ひきでもの）は後日（ごじつ）発送（はっそう）、写真（しゃしん）も送（おく）ります。",
    storyZh: "送完客上接送巴士,回禮之後寄出,相片都會傳俾大家。",
    tip: "「引出物」=婚宴回禮。「送」漢字詞讀「そう」,動詞讀「おくる」。"
  },
  {
    set: "婚宴", center: "よ", type: "音",
    words: [
      { w: "余興", r: "よきょう", zh: "表演/遊戲環節" },
      { w: "予定", r: "よてい", zh: "預定/流程" },
      { w: "呼ぶ", r: "よぶ", zh: "叫/邀請" },
      { w: "喜ぶ", r: "よろこぶ", zh: "開心" }
    ],
    story: "予定（よてい）通（どお）り余興（よきょう）の時間（じかん）。ゲストを前（まえ）に呼（よ）んで、みんな喜（よろこ）んだ。",
    storyZh: "按流程到遊戲時間,叫賓客出嚟前面,大家都好開心。"
  },
  {
    set: "二次會", center: "火", type: "字",
    words: [
      { w: "花火", r: "はなび", zh: "煙花/仙女棒" },
      { w: "点火", r: "てんか", zh: "點火" },
      { w: "火傷", r: "やけど", zh: "燒傷/辣親" },
      { w: "消火", r: "しょうか", zh: "滅火" }
    ],
    story: "花火（はなび）に点火（てんか）。火傷（やけど）に注意（ちゅうい）して、最後（さいご）はバケツで消火（しょうか）。",
    storyZh: "仙女棒點火,小心唔好辣親,最後放入水桶滅火。",
    tip: "「火傷」讀「やけど」係特殊讀法,唔係「かしょう」。仙女棒日文可以講スパークラー或者「手持（ても）ち花火（はなび）」。"
  },
  {
    set: "二次會", center: "す", type: "音",
    words: [
      { w: "砂浜", r: "すなはま", zh: "沙灘" },
      { w: "涼しい", r: "すずしい", zh: "涼爽" },
      { w: "スピーチ", r: "すぴーち", zh: "致辭" },
      { w: "スパークラー", r: "すぱーくらー", zh: "仙女棒" }
    ],
    story: "涼（すず）しい砂浜（すなはま）で新郎（しんろう）のスピーチ、そしてスパークラー。",
    storyZh: "喺涼爽嘅沙灘,新郎致辭,之後玩仙女棒。",
    tip: "四個詞串埋就係今晚二次會嘅前半段。"
  },
  {
    set: "二次會", center: "海", type: "字",
    words: [
      { w: "海", r: "うみ", zh: "海" },
      { w: "海辺", r: "うみべ", zh: "海邊" },
      { w: "海風", r: "うみかぜ", zh: "海風" },
      { w: "海岸", r: "かいがん", zh: "海岸" }
    ],
    story: "海岸（かいがん）の海辺（うみべ）で、海風（うみかぜ）に吹（ふ）かれながら、夜（よる）の海（うみ）を見（み）て乾杯（かんぱい）。",
    storyZh: "喺海岸邊吹住海風,望住夜晚嘅海乾杯。",
    tip: "「海」單獨同和語讀「うみ」,漢字詞讀「かい」(海岸)。"
  },
  {
    set: "二次會", center: "ひ", type: "音",
    words: [
      { w: "火", r: "ひ", zh: "火" },
      { w: "一人", r: "ひとり", zh: "一個人" },
      { w: "光", r: "ひかり", zh: "光" },
      { w: "広がる", r: "ひろがる", zh: "擴散/蔓延開" }
    ],
    story: "一人（ひとり）一本（いっぽん）ずつ火（ひ）をつけると、光（ひかり）がぱっと広（ひろ）がる。",
    storyZh: "每人一枝點著,光一下子擴散開。",
    tip: "派仙女棒時可以講「お一人（ひとり）一本（いっぽん）ずつどうぞ」。"
  },
  {
    set: "二次會", center: "夜", type: "字",
    words: [
      { w: "夜", r: "よる", zh: "夜晚" },
      { w: "今夜", r: "こんや", zh: "今晚" },
      { w: "夜景", r: "やけい", zh: "夜景" },
      { w: "夜風", r: "よかぜ", zh: "晚風" }
    ],
    story: "今夜（こんや）は夜景（やけい）がきれい。夜風（よかぜ）が気持（きも）ちいい夜（よる）です。",
    storyZh: "今晚夜景好靚,晚風好舒服。",
    tip: "同一個「夜」有三個讀法:よる(單獨)、や(今夜、夜景)、よ(夜風)。"
  },
  {
    set: "二次會", center: "も", type: "音",
    words: [
      { w: "持つ", r: "もつ", zh: "拎住" },
      { w: "燃える", r: "もえる", zh: "燃燒" },
      { w: "盛り上がる", r: "もりあがる", zh: "氣氛熱鬧" },
      { w: "戻る", r: "もどる", zh: "返回" }
    ],
    story: "スパークラーを持（も）って、燃（も）えている間（あいだ）に撮影（さつえい）。盛（も）り上（あ）がったら席（せき）に戻（もど）る。",
    storyZh: "拎住仙女棒,趁仲燒緊快啲影,玩完氣氛好高,再返座位。",
    tip: "「盛り上がる」係派對必用詞:「すごく盛（も）り上（あ）がりましたね!」=氣氛好正!"
  },
  {
    set: "二次會", center: "足", type: "字",
    words: [
      { w: "足元", r: "あしもと", zh: "腳下" },
      { w: "裸足", r: "はだし", zh: "赤腳" },
      { w: "足りる", r: "たりる", zh: "夠" },
      { w: "満足", r: "まんぞく", zh: "滿足" }
    ],
    story: "足元（あしもと）に気（き）をつけて、裸足（はだし）で踊（おど）る。飲（の）み物（もの）は足（た）りていて、みんな満足（まんぞく）。",
    storyZh: "小心腳下,赤腳跳舞。飲品夠晒,大家都好滿足。",
    tip: "「裸足」讀「はだし」係特殊讀法;「足」做動詞「足りる」讀「た」,漢字詞讀「そく」。"
  },
  {
    set: "二次會", center: "わ", type: "音",
    words: [
      { w: "ワイン", r: "わいん", zh: "紅白酒" },
      { w: "輪", r: "わ", zh: "圍圈" },
      { w: "笑い", r: "わらい", zh: "笑聲" },
      { w: "忘れ物", r: "わすれもの", zh: "漏低嘅嘢" }
    ],
    story: "ワインを片手（かたて）に輪（わ）になって、笑（わら）いが止（と）まらない。帰（かえ）りは忘（わす）れ物（もの）に注意（ちゅうい）。",
    storyZh: "拎住杯酒圍埋一圈,笑過不停。走嗰陣記得唔好漏嘢。",
    tip: "「輪になって」=圍成一個圈,玩遊戲或者跳舞時 MC 好常講。"
  },
  {
    set: "二次會", center: "場", type: "字",
    words: [
      { w: "会場", r: "かいじょう", zh: "會場" },
      { w: "入場", r: "にゅうじょう", zh: "進場" },
      { w: "駐車場", r: "ちゅうしゃじょう", zh: "停車場" },
      { w: "場所", r: "ばしょ", zh: "地方/位置" }
    ],
    story: "二次会（にじかい）の会場（かいじょう）はビーチ。駐車場（ちゅうしゃじょう）の横（よこ）から入場（にゅうじょう）、集合（しゅうごう）場所（ばしょ）はこちらです。",
    storyZh: "二次會場地喺沙灘,由停車場旁邊入場,集合地點喺呢度。",
    tip: "「場」漢字詞讀「じょう」,和語讀「ば」(場所)。"
  },
  {
    set: "二次會", center: "た", type: "音",
    words: [
      { w: "楽しい", r: "たのしい", zh: "開心" },
      { w: "たくさん", r: "たくさん", zh: "好多" },
      { w: "大切", r: "たいせつ", zh: "重要/珍貴" },
      { w: "宝物", r: "たからもの", zh: "寶物" }
    ],
    story: "たくさん笑（わら）った楽（たの）しい夜（よる）。大切（たいせつ）な写真（しゃしん）は一生（いっしょう）の宝物（たからもの）。",
    storyZh: "笑咗好多嘅開心夜晚,珍貴嘅相片係一世嘅寶物。",
    tip: "送客時可以用:「一生（いっしょう）の宝物（たからもの）になりましたね」。"
  }
];

// 未來加新主題:喺呢個陣列加一個 topic({id, icon, title, subtitle, levels})
// 未來加新學科(例如其他語言):喺 SUBJECTS 加一個 subject({id, icon, title, subtitle, topics})
const SUBJECTS = [
  {
    id: "japanese",
    icon: "🇯🇵",
    title: "日文",
    subtitle: "情境會話、口譯、工作日文",
    lang: "ja-JP",
    topics: [
      {
        id: "wedding-interpreter",
        icon: "💍",
        title: "沖繩婚禮中日口譯",
        subtitle: "面試準備 · 情境詞彙 · Rundown 中英日 · 選擇題測驗",
        flowMaps: [WEDDING_CHAPEL_MAP, WEDDING_BANQUET_MAP, WEDDING_BEACH_MAP],
        crosses: WEDDING_CROSSES,
        levels: WEDDING_INTERPRETER_LEVELS
      },
      {
        id: "daily-conversation",
        icon: "🗣️",
        title: "日常會話",
        subtitle: "寒暄應對 + 餐廳會話(店員/食客)",
        levels: DAILY_CONVERSATION_LEVELS
      },
      {
        id: "daily-vocab-grammar",
        icon: "📚",
        title: "日常用詞與文法",
        subtitle: "20 個核心文法 + 生活常用詞",
        levels: DAILY_VOCAB_GRAMMAR_LEVELS
      },
      {
        id: "business-keigo",
        icon: "👔",
        title: "職場敬語與商業日文",
        subtitle: "敬語動詞、職場常用句、對客vs對同事",
        levels: BUSINESS_KEIGO_LEVELS
      },
      {
        id: "seitai",
        icon: "💆",
        title: "整骨・整體",
        subtitle: "人體圖、十字連結記憶、痛法擬態語、問診與按摩用句",
        bodyMap: SEITAI_BODY_MAP,
        crosses: SEITAI_CROSSES,
        levels: SEITAI_LEVELS
      }
    ]
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
