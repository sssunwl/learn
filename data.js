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
        ja: "香港出身で、広東語と中国語、日本語でのコミュニケーションが可能です。香港・台湾からのお客様と、日本人スタッフの間に入って、できるだけ正確で分かりやすく通訳することを心がけています。結婚式は時間管理や細かい確認がとても大切だと思いますので、単純に言葉を訳すだけではなく、双方が安心できるようにサポートしたいと思っています。",
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
        ja: "通訳として一番大切なことは何だと思いますか？",
        romaji: "Tsūyaku toshite ichiban taisetsu na koto wa nan da to omoimasu ka?",
        note: "建議答案:\n正確さと、双方が安心してコミュニケーションできることだと思います。特に結婚式では時間や段取りが決まっているので、曖昧な内容は必ず確認し、勝手に判断しないことを大切にしたいです。\n\n(中文:我認為最重要的是準確,以及令雙方都能安心溝通。尤其婚禮有固定時間和流程,遇到不清楚的內容,我一定會確認,不會擅自判斷。)"
      },
      {
        id: "int-13",
        kind: "qna",
        zh: "面試官可能問:如果日本工作人員講得太快,你聽唔清楚點算?",
        ja: "日本のスタッフの話すスピードが速くて聞き取れない場合、どうしますか？",
        romaji: "Nihon no sutaffu no hanasu supīdo ga hayakute kikitorenai baai, dō shimasu ka?",
        note: "建議答案:\n分からないまま通訳することは避けたいので、「申し訳ございません。正確に通訳したいので、もう一度お願いできますか」と確認します。\n\n(中文:我不會在未聽清楚的情況下就自己猜測翻譯。我會說:不好意思,為了準確翻譯,可以麻煩再說一次嗎?)"
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
      { id: "cha-v01", kind: "vocab", zh: "教堂", ja: "チャペル" },
      { id: "cha-v02", kind: "vocab", zh: "新人", ja: "新郎新婦（しんろうしんぷ）" },
      { id: "cha-v03", kind: "vocab", zh: "牧師", ja: "牧師（ぼくし）" },
      { id: "cha-v04", kind: "vocab", zh: "證婚人／司式者", ja: "司式者（ししきしゃ）" },
      { id: "cha-v05", kind: "vocab", zh: "入場", ja: "入場（にゅうじょう）" },
      { id: "cha-v06", kind: "vocab", zh: "退場", ja: "退場（たいじょう）" },
      { id: "cha-v07", kind: "vocab", zh: "彩排", ja: "リハーサル" },
      { id: "cha-v08", kind: "vocab", zh: "結婚誓詞", ja: "誓（ちか）いの言葉（ことば）" },
      { id: "cha-v09", kind: "vocab", zh: "交換戒指", ja: "指輪交換（ゆびわこうかん）" },
      { id: "cha-v10", kind: "vocab", zh: "結婚戒指", ja: "結婚指輪（けっこんゆびわ）" },
      { id: "cha-v11", kind: "vocab", zh: "婚紗", ja: "ウェディングドレス" },
      { id: "cha-v12", kind: "vocab", zh: "頭紗", ja: "ベール" },
      { id: "cha-v13", kind: "vocab", zh: "捧花", ja: "ブーケ" },
      { id: "cha-10", kind: "sentence", zh: "現在開始進行婚禮彩排。", ja: "これから挙式（きょしき）のリハーサルを行（おこな）います。", romaji: "Kore kara kyoshiki no rihāsaru o okonaimasu." },
      { id: "cha-11", kind: "sentence", zh: "首先會請新郎入場。", ja: "まず新郎様（しんろうさま）からご入場（にゅうじょう）いただきます。", romaji: "Mazu shinrō-sama kara go-nyūjō itadakimasu." },
      { id: "cha-12", kind: "sentence", zh: "之後新娘會和爸爸一起入場。", ja: "その後（あと）、新婦様（しんぷさま）がお父様（とうさま）と一緒（いっしょ）にご入場（にゅうじょう）されます。", romaji: "Sono ato, shinpu-sama ga otō-sama to issho ni go-nyūjō saremasu." },
      { id: "cha-13", kind: "sentence", zh: "到時工作人員會提示時間。", ja: "タイミングはスタッフからご案内（あんない）いたします。", romaji: "Taimingu wa sutaffu kara go-annai itashimasu." },
      { id: "cha-14", kind: "sentence", zh: "交換戒指後會拍照。", ja: "指輪交換（ゆびわこうかん）の後（あと）に写真撮影（しゃしんさつえい）があります。", romaji: "Yubiwa kōkan no ato ni shashin satsuei ga arimasu." },
      { id: "cha-15", kind: "sentence", zh: "婚禮儀式會按原定時間開始嗎?", ja: "挙式（きょしき）は予定通（よていどお）り開始（かいし）しますか？", romaji: "Kyoshiki wa yotei dōri kaishi shimasu ka?" }
    ]
  },
  {
    id: "reception",
    icon: "🥂",
    title: "婚宴",
    subtitle: "披露宴流程、致辭祝酒、飲食過敏",
    cards: [
      { id: "rec-v01", kind: "vocab", zh: "婚宴", ja: "披露宴（ひろうえん）" },
      { id: "rec-v02", kind: "vocab", zh: "婚宴場地", ja: "披露宴会場（ひろうえんかいじょう）" },
      { id: "rec-v03", kind: "vocab", zh: "座位表", ja: "席次表（せきじひょう）" },
      { id: "rec-v04", kind: "vocab", zh: "賓客", ja: "ゲスト" },
      { id: "rec-v05", kind: "vocab", zh: "主桌", ja: "高砂（たかさご）" },
      { id: "rec-v06", kind: "vocab", zh: "祝酒", ja: "乾杯（かんぱい）" },
      { id: "rec-v07", kind: "vocab", zh: "致辭", ja: "スピーチ" },
      { id: "rec-v08", kind: "vocab", zh: "切蛋糕", ja: "ケーキ入刀（にゅうとう）" },
      { id: "rec-v09", kind: "vocab", zh: "換裝再入場", ja: "お色直（いろなお）し" },
      { id: "rec-v10", kind: "vocab", zh: "再次進場", ja: "再入場（さいにゅうじょう）" },
      { id: "rec-v11", kind: "vocab", zh: "新人致謝", ja: "新郎新婦謝辞（しんろうしんぷしゃじ）" },
      { id: "rec-v12", kind: "vocab", zh: "送客", ja: "お見送（みおく）り" },
      { id: "rec-v13", kind: "vocab", zh: "回禮／喜禮", ja: "引（ひ）き出物（でもの）" },
      { id: "rec-01", kind: "sentence", zh: "婚宴預計幾點開始?", ja: "披露宴（ひろうえん）は何時（なんじ）から開始予定（かいしよてい）でしょうか？", romaji: "Hirōen wa nanji kara kaishi yotei deshō ka?" },
      { id: "rec-02", kind: "sentence", zh: "祝酒之前需要翻譯嗎?", ja: "乾杯（かんぱい）の前（まえ）に通訳（つうやく）が必要（ひつよう）でしょうか？", romaji: "Kanpai no mae ni tsūyaku ga hitsuyō deshō ka?" },
      { id: "rec-03", kind: "sentence", zh: "致辭部分使用逐句／交替傳譯可以嗎?", ja: "スピーチは逐次通訳（ちくじつうやく）でよろしいでしょうか？", romaji: "Supīchi wa chikuji tsūyaku de yoroshii deshō ka?", note: "逐次通訳(ちくじつうやく)= consecutive interpreting／交替傳譯,面試值得識呢個詞。" },
      { id: "rec-v14", kind: "vocab", zh: "甲殼類", ja: "甲殻類（こうかくるい）" },
      { id: "rec-v15", kind: "vocab", zh: "蝦", ja: "海老（えび）" },
      { id: "rec-v16", kind: "vocab", zh: "蟹", ja: "蟹（かに）" },
      { id: "rec-v17", kind: "vocab", zh: "蛋", ja: "卵（たまご）" },
      { id: "rec-v18", kind: "vocab", zh: "奶類製品", ja: "乳製品（にゅうせいひん）" },
      { id: "rec-v19", kind: "vocab", zh: "小麥", ja: "小麦（こむぎ）" },
      { id: "rec-v20", kind: "vocab", zh: "堅果類", ja: "ナッツ類（るい）" },
      { id: "rec-04", kind: "sentence", zh: "有食物敏感嗎?", ja: "食物（しょくもつ）アレルギーはございますか？", romaji: "Shokumotsu arerugī wa gozaimasu ka?" },
      { id: "rec-05", kind: "sentence", zh: "這份是過敏對應餐。", ja: "アレルギー対応（たいおう）のお料理（りょうり）はこちらです。", romaji: "Arerugī taiō no oryōri wa kochira desu." },
      { id: "rec-06", kind: "sentence", zh: "可以吃生食嗎?", ja: "生（なま）ものは召（め）し上（あ）がれますか？", romaji: "Namamono wa meshiagaremasu ka?" },
      { id: "rec-07", kind: "sentence", zh: "有一位素食客人。", ja: "ベジタリアンのお客様（きゃくさま）が一名（いちめい）いらっしゃいます。", romaji: "Bejitarian no okyakusama ga ichimei irasshaimasu." }
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
    topics: [
      {
        id: "wedding-interpreter",
        icon: "💍",
        title: "沖繩婚禮中日口譯",
        subtitle: "面試準備 · 情境詞彙 · 選擇題測驗",
        levels: WEDDING_INTERPRETER_LEVELS
      }
    ]
  }
];
