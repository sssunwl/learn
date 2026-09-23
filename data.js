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
      }
    ]
  }
];
