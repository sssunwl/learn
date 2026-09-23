// 泰文學習內容。資料形狀沿用 data.js；ja 代表目標語言文字，romaji 代表讀音輔助。
const THAI_BASICS_LEVELS = [
  {
    id: "thai-sounds",
    icon: "🎵",
    title: "聲調與拼音入門",
    subtitle: "先掌握 5 聲調、長短音與泰文字結構",
    cards: [
      {
        id: "tb-sound-01",
        kind: "grammar",
        zh: "5 聲調符號表",
        ja: "แม่ม้ามาไหม",
        romaji: "mâe máa maa mǎi",
        note: "本 app 統一用元音上嘅符號標聲調：中平調 ma（無符號）、低調 mà、降調 mâ、高調 má、升調 mǎ。例句「แม่ม้ามาไหม」意為「母馬來嗎？」，示範咗其中 4 個聲調——降調 mâe(媽媽)、高調 máa(馬)、中平調 maa(來)、升調 mǎi(嗎)，啱啱好無包括低調(à)嗰個。記住:單靠呢句未算聽齊全部 5 個聲調，之後張卡見到其他字有低調時要特別留意。"
      },
      {
        id: "tb-sound-02",
        kind: "grammar",
        zh: "泰文字嘅基本組合",
        ja: "พยัญชนะ + สระ + วรรณยุกต์",
        romaji: "phá-yan-chá-ná + sà-rà + wan-na-yúk",
        note: "泰文字大致由子音、母音同聲調規則組成。初學唔需要一次過背晒全部字母；先用本 app 嘅羅馬拼音開口，再慢慢認字。"
      },
      {
        id: "tb-sound-03",
        kind: "text",
        zh: "泰文有 44 個子音字母",
        ja: "พยัญชนะไทยมี 44 ตัว",
        romaji: "phá-yan-chá-ná thai mii sìi-sìp-sìi tua",
        note: "44 個字母唔等於 44 種完全唔同嘅聲音；有啲字母發音相近，但所屬子音類別會影響聲調。現階段先識常見開頭音就夠。"
      },
      {
        id: "tb-sound-04",
        kind: "grammar",
        zh: "母音可以寫喺子音前、後、上或下",
        ja: "เก แก กิ กุ",
        romaji: "gee, gaae, gì, gù",
        note: "見到母音符號寫喺前面，讀音仍然由中間嘅子音開始。例：เก 讀 gee，唔係 eg。呢張只示範位置，唔係完整單字。"
      },
      {
        id: "tb-sound-05",
        kind: "grammar",
        zh: "4 個聲調符號唔等於固定 4 個聲調",
        ja: "่  ้  ๊  ๋",
        romaji: "mái èek, mái thoo, mái trii, mái jàt-ta-waa",
        note: "泰文有 4 個書寫聲調符號，但實際讀成邊個聲調，仲要睇子音類別、長短音同尾音。本 app 已直接喺 romaji 標出實際 5 聲調。"
      },
      {
        id: "tb-sound-06",
        kind: "grammar",
        zh: "有送氣同不送氣之分",
        ja: "ปา / พา",
        romaji: "paa / phaa",
        note: "p、t、k 係不送氣；ph、th、kh 係送氣。ph 唔係英文 f，係帶一口氣嘅 p；例如 พา phaa。"
      },
      {
        id: "tb-sound-07",
        kind: "grammar",
        zh: "母音長短會改變意思",
        ja: "อะ / อา",
        romaji: "à / aa",
        note: "短母音通常寫一個字母，長母音用雙寫表示，例如 a / aa、i / ii。讀長音時要明顯拉長，唔可以只靠聲調。"
      },
      {
        id: "tb-sound-08",
        kind: "grammar",
        zh: "常見尾音會收短",
        ja: "ครับ / ขอบ",
        romaji: "khráp / khàawp",
        note: "字尾 p、t、k 要收住，唔好加額外元音；ng、n、m 就保留鼻音。旅遊用語入面「ครับ」個 p 就係短促收尾。"
      },
      {
        id: "tb-sound-09",
        kind: "grammar",
        zh: "子音分高、中、低三類",
        ja: "อักษรสูง อักษรกลาง อักษรต่ำ",
        romaji: "àk-sǎawn sǔung, àk-sǎawn glaang, àk-sǎawn tàm",
        note: "三類子音配合音節種類決定聲調。初學先跟 romaji 讀；日後學拼讀時，再用呢三類做聲調規則入口。"
      },
      {
        id: "tb-sound-10",
        kind: "grammar",
        zh: "相同字母開頭，尾音可能唔同",
        ja: "รถ / รอ",
        romaji: "rót / raaw",
        note: "泰文尾音有固定收音規則；例如 รถ（車）最後寫 ต，但實際收作 t。睇 romaji 時留意最後一個輔音。"
      },
      {
        id: "tb-sound-11",
        kind: "text",
        zh: "泰文句子通常唔用空格分每個詞",
        ja: "ฉันไปประเทศไทย",
        romaji: "chǎn pai prà-thêet thai",
        note: "空格多數用嚟分較大語意段落，唔等於英文逐詞分隔。本 app 會喺 romaji 用連字號或空格幫你拆音節。"
      },
      {
        id: "tb-sound-12",
        kind: "text",
        zh: "先聽、再跟讀、最後先遮住拼音",
        ja: "ฟัง พูด อ่าน",
        romaji: "fang, phûut, àan",
        note: "建議每張卡先按喇叭聽一次，望住 romaji 跟讀三次，再只望泰文讀一次。初期目標係聽得出同講得到，唔使急住默寫。"
      }
    ]
  },
  {
    id: "thai-greetings",
    icon: "🙏",
    title: "打招呼與基本禮貌",
    subtitle: "男女敬語助詞、問候、道謝與萬用句",
    cards: [
      {
        id: "tb-greet-01",
        kind: "text",
        zh: "ครับ／ค่ะ：男女講法唔同嘅禮貌助詞",
        ja: "ครับ / ค่ะ",
        romaji: "khráp / khâ",
        note: "男性句尾通常講 ครับ（khráp），女性句尾通常講 ค่ะ（khâ）。佢哋令語氣有禮貌，自己講時要按自己性別揀一個，唔係按對方性別。以下寫「ครับ/ค่ะ」嘅句，實際開口只講其中一個。女性用嚟問問題時，常見句尾係 คะ（khá）。"
      },
      { id: "tb-greet-02", kind: "sentence", zh: "你好／再見", ja: "สวัสดีครับ / สวัสดีค่ะ", romaji: "sà-wàt-dii khráp / sà-wàt-dii khâ", note: "สวัสดี 既可見面問候，亦可離開時道別。" },
      { id: "tb-greet-03", kind: "sentence", zh: "多謝", ja: "ขอบคุณครับ / ขอบคุณค่ะ", romaji: "khàawp-khun khráp / khàawp-khun khâ" },
      { id: "tb-greet-04", kind: "sentence", zh: "唔該／對唔住／借過", ja: "ขอโทษครับ / ขอโทษค่ะ", romaji: "khǎaw-thôot khráp / khǎaw-thôot khâ", note: "可以用嚟道歉、引人注意，或者請人讓路。" },
      { id: "tb-greet-05", kind: "sentence", zh: "冇問題／唔緊要", ja: "ไม่เป็นไรครับ / ไม่เป็นไรค่ะ", romaji: "mâi pen rai khráp / mâi pen rai khâ" },
      { id: "tb-greet-06", kind: "vocab", zh: "係／正確", ja: "ใช่", romaji: "châi" },
      { id: "tb-greet-07", kind: "vocab", zh: "唔係", ja: "ไม่ใช่", romaji: "mâi châi" },
      { id: "tb-greet-08", kind: "sentence", zh: "明白", ja: "เข้าใจครับ / เข้าใจค่ะ", romaji: "khâo-jai khráp / khâo-jai khâ" },
      { id: "tb-greet-09", kind: "sentence", zh: "唔明白", ja: "ไม่เข้าใจครับ / ไม่เข้าใจค่ะ", romaji: "mâi khâo-jai khráp / mâi khâo-jai khâ" },
      { id: "tb-greet-10", kind: "grammar", zh: "～嗎？：句尾加 ไหม", ja: "...ไหมครับ / ...ไหมคะ", romaji: "... mǎi khráp / ... mǎi khá", note: "將 ไหม 放喺陳述句尾，就可以變成係／否問題。男性問句尾用ครับ，女性問句尾常用คะ。" },
      { id: "tb-greet-11", kind: "sentence", zh: "可以嗎？", ja: "ได้ไหมครับ / ได้ไหมคะ", romaji: "dâi mǎi khráp / dâi mǎi khá" },
      { id: "tb-greet-12", kind: "sentence", zh: "請講慢啲，可以嗎？", ja: "พูดช้าๆ หน่อยได้ไหมครับ / คะ", romaji: "phûut cháa-cháa nòi dâi mǎi khráp / khá" },
      { id: "tb-greet-13", kind: "sentence", zh: "可以再講一次嗎？", ja: "พูดอีกครั้งได้ไหมครับ / คะ", romaji: "phûut ìik khráng dâi mǎi khráp / khá" },
      { id: "tb-greet-14", kind: "grammar", zh: "請幫我～：ช่วย...หน่อย", ja: "ช่วย...หน่อยครับ / ค่ะ", romaji: "chûai ... nòi khráp / khâ", note: "ช่วย 放動作前面，หน่อย 放後面，係旅行時非常實用嘅禮貌請求框架。" },
      { id: "tb-greet-15", kind: "sentence", zh: "唔使客氣／好樂意", ja: "ด้วยความยินดีครับ / ค่ะ", romaji: "dûai khwaam yin-dii khráp / khâ" }
    ]
  },
  {
    id: "thai-numbers",
    icon: "🔢",
    title: "數字與基本問句",
    subtitle: "0–10、常用整數、價錢與指示詞",
    cards: [
      { id: "tb-num-00", kind: "vocab", zh: "0", ja: "ศูนย์", romaji: "sǔun" },
      { id: "tb-num-01", kind: "vocab", zh: "1", ja: "หนึ่ง", romaji: "nʉ̀ng" },
      { id: "tb-num-02", kind: "vocab", zh: "2", ja: "สอง", romaji: "sǎawng" },
      { id: "tb-num-03", kind: "vocab", zh: "3", ja: "สาม", romaji: "sǎam" },
      { id: "tb-num-04", kind: "vocab", zh: "4", ja: "สี่", romaji: "sìi" },
      { id: "tb-num-05", kind: "vocab", zh: "5", ja: "ห้า", romaji: "hâa" },
      { id: "tb-num-06", kind: "vocab", zh: "6", ja: "หก", romaji: "hòk" },
      { id: "tb-num-07", kind: "vocab", zh: "7", ja: "เจ็ด", romaji: "jèt" },
      { id: "tb-num-08", kind: "vocab", zh: "8", ja: "แปด", romaji: "pàaet" },
      { id: "tb-num-09", kind: "vocab", zh: "9", ja: "เก้า", romaji: "kâo" },
      { id: "tb-num-10", kind: "vocab", zh: "10", ja: "สิบ", romaji: "sìp" },
      { id: "tb-num-20", kind: "vocab", zh: "20", ja: "ยี่สิบ", romaji: "yîi-sìp" },
      { id: "tb-num-100", kind: "vocab", zh: "100", ja: "หนึ่งร้อย", romaji: "nʉ̀ng ráaw-y" },
      { id: "tb-num-1000", kind: "vocab", zh: "1,000", ja: "หนึ่งพัน", romaji: "nʉ̀ng phan" },
      { id: "tb-num-price", kind: "sentence", zh: "幾多錢？", ja: "ราคาเท่าไหร่ครับ / คะ", romaji: "raa-khaa thâo-rài khráp / khá" },
      { id: "tb-num-this", kind: "vocab", zh: "呢個", ja: "อันนี้", romaji: "an-níi" },
      { id: "tb-num-that", kind: "vocab", zh: "嗰個", ja: "อันนั้น", romaji: "an-nán" },
      { id: "tb-num-where", kind: "vocab", zh: "邊度？", ja: "ที่ไหน", romaji: "thîi-nǎi" },
      { id: "tb-num-what", kind: "vocab", zh: "乜嘢？", ja: "อะไร", romaji: "à-rai" },
      { id: "tb-num-howmany", kind: "grammar", zh: "幾多個／幾點：กี่ + 量詞", ja: "กี่คน / กี่โมง", romaji: "kìi khon / kìi moong", note: "กี่ 放喺量詞前：กี่คน＝幾多人；กี่โมง＝幾點。" }
    ]
  }
];

const THAI_TRAVEL_LEVELS = [
  {
    id: "thai-airport",
    icon: "✈️",
    title: "機場與入境",
    subtitle: "護照、入境、行李、申報與兌換泰銖",
    cards: [
      { id: "tt-air-01", kind: "vocab", zh: "護照", ja: "หนังสือเดินทาง", romaji: "nǎng-sʉ̌ʉ doen-thaang" },
      { id: "tt-air-02", kind: "vocab", zh: "登機證", ja: "บัตรขึ้นเครื่อง", romaji: "bàt khʉ̂n khrʉ̂ang" },
      { id: "tt-air-03", kind: "vocab", zh: "入境檢查", ja: "ด่านตรวจคนเข้าเมือง", romaji: "dàan trùat khon khâo mʉang" },
      { id: "tt-air-04", kind: "vocab", zh: "海關", ja: "ศุลกากร", romaji: "sǔn-lá-gaa-gɔɔn" },
      { id: "tt-air-05", kind: "vocab", zh: "行李／旅行袋", ja: "กระเป๋าเดินทาง", romaji: "krà-pǎo doen-thaang" },
      { id: "tt-air-06", kind: "sentence", zh: "行李提取處喺邊度？", ja: "รับกระเป๋าที่ไหนครับ / คะ", romaji: "ráp krà-pǎo thîi-nǎi khráp / khá" },
      { id: "tt-air-07", kind: "sentence", zh: "我嘅行李唔見咗。", ja: "กระเป๋าของผมหายครับ / กระเป๋าของฉันหายค่ะ", romaji: "krà-pǎo khǎawng phǒm hǎai khráp / krà-pǎo khǎawng chǎn hǎai khâ" },
      { id: "tt-air-08", kind: "sentence", zh: "我冇物品需要申報。", ja: "ไม่มีของต้องสำแดงครับ / ค่ะ", romaji: "mâi mii khǎawng tɔ̂ng sǎm-daaeng khráp / khâ" },
      { id: "tt-air-09", kind: "vocab", zh: "兌換泰銖", ja: "แลกเงินบาท", romaji: "lâaek ngoen bàat" },
      { id: "tt-air-10", kind: "sentence", zh: "兌換櫃檯喺邊度？", ja: "เคาน์เตอร์แลกเงินอยู่ที่ไหนครับ / คะ", romaji: "khao-toe lâaek ngoen yùu thîi-nǎi khráp / khá", note: "外來語 เคาน์เตอร์ 嘅拼音及聲調待核對。" },
      { id: "tt-air-11", kind: "vocab", zh: "抵達航班／出發航班", ja: "เที่ยวบินขาเข้า / เที่ยวบินขาออก", romaji: "thîao-bin khǎa-khâo / thîao-bin khǎa-àawk" },
      { id: "tt-air-12", kind: "qna", zh: "入境官：來泰國做乜？／答：來旅行。", ja: "มาทำอะไรครับ / คะ — มาเที่ยวครับ / ค่ะ", romaji: "maa tham à-rai khráp / khá — maa thîao khráp / khâ" },
      { id: "tt-air-13", kind: "qna", zh: "會留幾多日？／留七日。", ja: "อยู่กี่วันครับ / คะ — อยู่เจ็ดวันครับ / ค่ะ", romaji: "yùu kìi wan khráp / khá — yùu jèt wan khráp / khâ" }
    ]
  },
  {
    id: "thai-transport",
    icon: "🚕",
    title: "交通",
    subtitle: "的士跳錶、嘟嘟車議價、BTS／MRT 與水上交通",
    cards: [
      { id: "tt-trans-01", kind: "vocab", zh: "的士", ja: "แท็กซี่", romaji: "thɛ́k-sîi" },
      { id: "tt-trans-02", kind: "sentence", zh: "請載我去……", ja: "ไป...หน่อยครับ / ค่ะ", romaji: "pai ... nòi khráp / khâ" },
      { id: "tt-trans-03", kind: "sentence", zh: "請用跳錶。", ja: "กรุณากดมิเตอร์ด้วยครับ / ค่ะ", romaji: "ka-rú-naa kòt míi-toe dûai khráp / khâ", note: "外來語 มิเตอร์ 嘅拼音及聲調待核對。" },
      { id: "tt-trans-04", kind: "sentence", zh: "點解唔跳錶？", ja: "ทำไมไม่กดมิเตอร์ครับ / คะ", romaji: "tham-mai mâi kòt míi-toe khráp / khá", note: "外來語 มิเตอร์ 嘅拼音及聲調待核對。" },
      { id: "tt-trans-05", kind: "sentence", zh: "太貴喇。", ja: "แพงเกินไปครับ / ค่ะ", romaji: "phaaeng koen-pai khráp / khâ" },
      { id: "tt-trans-06", kind: "sentence", zh: "請喺呢度停。", ja: "จอดตรงนี้ครับ / ค่ะ", romaji: "jàawt trong-níi khráp / khâ" },
      { id: "tt-trans-07", kind: "vocab", zh: "嘟嘟車", ja: "รถตุ๊กตุ๊ก", romaji: "rót túk-túk" },
      { id: "tt-trans-08", kind: "sentence", zh: "車費幾多錢？", ja: "ค่าโดยสารเท่าไหร่ครับ / คะ", romaji: "khâa dooi-sǎan thâo-rài khráp / khá" },
      { id: "tt-trans-09", kind: "sentence", zh: "平啲得唔得？", ja: "ลดหน่อยได้ไหมครับ / คะ", romaji: "lót nòi dâi mǎi khráp / khá" },
      { id: "tt-trans-10", kind: "vocab", zh: "BTS 架空鐵路", ja: "รถไฟฟ้าบีทีเอส", romaji: "rót-fai-fáa bii-thii-ee-s" },
      { id: "tt-trans-11", kind: "vocab", zh: "MRT 地鐵", ja: "รถไฟใต้ดิน", romaji: "rót-fai tâi-din" },
      { id: "tt-trans-12", kind: "vocab", zh: "車票", ja: "ตั๋ว", romaji: "tǔa" },
      { id: "tt-trans-13", kind: "sentence", zh: "要一張去……嘅票。", ja: "ขอตั๋วไป...หนึ่งใบครับ / ค่ะ", romaji: "khǎaw tǔa pai ... nʉ̀ng bai khráp / khâ" },
      { id: "tt-trans-14", kind: "vocab", zh: "水上巴士／快船", ja: "เรือด่วน", romaji: "rʉa dùan" },
      { id: "tt-trans-15", kind: "sentence", zh: "邊個月台？", ja: "ชานชาลาไหนครับ / คะ", romaji: "chaan-chaa-laa nǎi khráp / khá" },
      { id: "tt-trans-16", kind: "sentence", zh: "尾班車係幾點？", ja: "รถไฟเที่ยวสุดท้ายกี่โมงครับ / คะ", romaji: "rót-fai thîao sùt-tháai kìi moong khráp / khá" }
    ]
  },
  {
    id: "thai-hotel",
    icon: "🏨",
    title: "飯店住宿",
    subtitle: "入住退房、房間問題與實用要求",
    cards: [
      { id: "tt-hotel-01", kind: "vocab", zh: "訂房／預約", ja: "การจอง", romaji: "gaan-jaawng" },
      { id: "tt-hotel-02", kind: "vocab", zh: "入住／退房", ja: "เช็กอิน / เช็กเอาต์", romaji: "chék-in / chék-ao", note: "外來語嘅拼音及聲調待核對。" },
      { id: "tt-hotel-03", kind: "sentence", zh: "我已經訂咗房。", ja: "มีการจองไว้แล้วครับ / ค่ะ", romaji: "mii gaan-jaawng wái láaeo khráp / khâ" },
      { id: "tt-hotel-04", kind: "sentence", zh: "有冇空房？", ja: "มีห้องว่างไหมครับ / คะ", romaji: "mii hɔ̂ng wâang mǎi khráp / khá" },
      { id: "tt-hotel-05", kind: "sentence", zh: "呢本係我嘅護照。", ja: "นี่หนังสือเดินทางของผมครับ / ของฉันค่ะ", romaji: "nîi nǎng-sʉ̌ʉ doen-thaang khǎawng phǒm khráp / khǎawng chǎn khâ" },
      { id: "tt-hotel-06", kind: "sentence", zh: "早餐幾點開始？", ja: "อาหารเช้าเริ่มกี่โมงครับ / คะ", romaji: "aa-hǎan cháo rôem kìi moong khráp / khá" },
      { id: "tt-hotel-07", kind: "sentence", zh: "Wi‑Fi 密碼係乜？", ja: "รหัสไวไฟคืออะไรครับ / คะ", romaji: "rá-hàt wai-fai khʉʉ à-rai khráp / khá", note: "外來語 ไวไฟ 嘅拼音及聲調待核對。" },
      { id: "tt-hotel-08", kind: "sentence", zh: "冷氣壞咗。", ja: "แอร์เสียครับ / ค่ะ", romaji: "aae sǐa khráp / khâ" },
      { id: "tt-hotel-09", kind: "sentence", zh: "可以換房嗎？", ja: "ขอเปลี่ยนห้องได้ไหมครับ / คะ", romaji: "khǎaw plìan hɔ̂ng dâi mǎi khráp / khá" },
      { id: "tt-hotel-10", kind: "sentence", zh: "呢間房太嘈。", ja: "ห้องนี้เสียงดังเกินไปครับ / ค่ะ", romaji: "hɔ̂ng níi sǐang dang koen-pai khráp / khâ" },
      { id: "tt-hotel-11", kind: "sentence", zh: "請多畀一條毛巾。", ja: "ขอผ้าเช็ดตัวเพิ่มครับ / ค่ะ", romaji: "khǎaw phâa chét-tua phôem khráp / khâ" },
      { id: "tt-hotel-12", kind: "sentence", zh: "可以遲啲退房嗎？", ja: "ขอเช็กเอาต์ช้าได้ไหมครับ / คะ", romaji: "khǎaw chék-ao cháa dâi mǎi khráp / khá" },
      { id: "tt-hotel-13", kind: "vocab", zh: "按金", ja: "เงินมัดจำ", romaji: "ngoen mát-jam" },
      { id: "tt-hotel-14", kind: "sentence", zh: "可以幫我保管行李嗎？", ja: "ฝากกระเป๋าได้ไหมครับ / คะ", romaji: "fàak krà-pǎo dâi mǎi khráp / khá" }
    ]
  },
  {
    id: "thai-restaurant",
    icon: "🍜",
    title: "餐廳點餐與辣度口味",
    subtitle: "點餐、辣度、味道、走香菜與食物敏感",
    cards: [
      { id: "tt-food-01", kind: "vocab", zh: "餐牌", ja: "เมนู", romaji: "mee-nuu" },
      { id: "tt-food-02", kind: "sentence", zh: "我想落單。", ja: "ขอสั่งอาหารครับ / ค่ะ", romaji: "khǎaw sàng aa-hǎan khráp / khâ" },
      { id: "tt-food-03", kind: "sentence", zh: "要呢個。", ja: "เอาอันนี้ครับ / ค่ะ", romaji: "ao an-níi khráp / khâ" },
      { id: "tt-food-04", kind: "sentence", zh: "有冇推介菜式？", ja: "มีเมนูแนะนำไหมครับ / คะ", romaji: "mii mee-nuu náe-nam mǎi khráp / khá" },
      { id: "tt-food-05", kind: "vocab", zh: "清水／樽裝水", ja: "น้ำเปล่า", romaji: "nám plào" },
      { id: "tt-food-06", kind: "vocab", zh: "冰", ja: "น้ำแข็ง", romaji: "nám-khǎeng" },
      { id: "tt-food-07", kind: "sentence", zh: "麻煩埋單。", ja: "คิดเงินด้วยครับ / ค่ะ", romaji: "khít ngoen dûai khráp / khâ" },
      { id: "tt-food-08", kind: "vocab", zh: "好食", ja: "อร่อย", romaji: "à-ròi" },
      { id: "tt-food-09", kind: "vocab", zh: "辣", ja: "เผ็ด", romaji: "phèt" },
      { id: "tt-food-10", kind: "sentence", zh: "唔辣。", ja: "ไม่เผ็ดครับ / ค่ะ", romaji: "mâi phèt khráp / khâ" },
      { id: "tt-food-11", kind: "sentence", zh: "少辣。", ja: "เผ็ดน้อยครับ / ค่ะ", romaji: "phèt náaw-y khráp / khâ" },
      { id: "tt-food-12", kind: "sentence", zh: "好辣。", ja: "เผ็ดมากครับ / ค่ะ", romaji: "phèt mâak khráp / khâ" },
      { id: "tt-food-13", kind: "vocab", zh: "甜", ja: "หวาน", romaji: "wǎan" },
      { id: "tt-food-14", kind: "vocab", zh: "酸", ja: "เปรี้ยว", romaji: "prîao" },
      { id: "tt-food-15", kind: "vocab", zh: "鹹", ja: "เค็ม", romaji: "khem" },
      { id: "tt-food-16", kind: "vocab", zh: "苦", ja: "ขม", romaji: "khǒm" },
      { id: "tt-food-17", kind: "sentence", zh: "唔好咁甜。", ja: "ไม่หวานมากครับ / ค่ะ", romaji: "mâi wǎan mâak khráp / khâ" },
      { id: "tt-food-18", kind: "sentence", zh: "唔要香菜。", ja: "ไม่ใส่ผักชีครับ / ค่ะ", romaji: "mâi sài phàk-chii khráp / khâ" },
      { id: "tt-food-19", kind: "sentence", zh: "唔要魚露。", ja: "ไม่ใส่น้ำปลาครับ / ค่ะ", romaji: "mâi sài nám-plaa khráp / khâ" },
      { id: "tt-food-20", kind: "sentence", zh: "少糖。", ja: "หวานน้อยครับ / ค่ะ", romaji: "wǎan náaw-y khráp / khâ" },
      { id: "tt-food-21", kind: "sentence", zh: "我對花生敏感。", ja: "แพ้ถั่วลิสงครับ / ค่ะ", romaji: "phɛ́ɛ thùa-lí-sǒng khráp / khâ", note: "如屬嚴重敏感，亦應出示翻譯卡畀店員確認。" },
      { id: "tt-food-22", kind: "sentence", zh: "有冇素食？", ja: "มีอาหารมังสวิรัติไหมครับ / คะ", romaji: "mii aa-hǎan mang-sà-wí-rát mǎi khráp / khá", note: "泰國素食定義可能包括蛋奶，落單時要再確認。" },
      { id: "tt-food-23", kind: "sentence", zh: "請打包帶走。", ja: "ใส่กล่องกลับบ้านครับ / ค่ะ", romaji: "sài klàawng klàp bâan khráp / khâ" },
      { id: "tt-food-24", kind: "vocab", zh: "匙羹同叉", ja: "ช้อนกับส้อม", romaji: "cháawn kàp sɔ̂ɔm" }
    ]
  },
  {
    id: "thai-shopping",
    icon: "🛍️",
    title: "購物與殺價",
    subtitle: "問價、議價、顏色尺碼與付款",
    cards: [
      { id: "tt-shop-01", kind: "sentence", zh: "呢個幾多錢？", ja: "อันนี้ราคาเท่าไหร่ครับ / คะ", romaji: "an-níi raa-khaa thâo-rài khráp / khá" },
      { id: "tt-shop-02", kind: "sentence", zh: "平啲得唔得？", ja: "ลดหน่อยได้ไหมครับ / คะ", romaji: "lót nòi dâi mǎi khráp / khá" },
      { id: "tt-shop-03", kind: "sentence", zh: "太貴喇。", ja: "แพงไปครับ / ค่ะ", romaji: "phaaeng pai khráp / khâ" },
      { id: "tt-shop-04", kind: "sentence", zh: "有冇其他顏色？", ja: "มีสีอื่นไหมครับ / คะ", romaji: "mii sǐi ʉ̀ʉn mǎi khráp / khá" },
      { id: "tt-shop-05", kind: "sentence", zh: "有咩顏色？", ja: "มีสีอะไรบ้างครับ / คะ", romaji: "mii sǐi à-rai bâang khráp / khá" },
      { id: "tt-shop-06", kind: "sentence", zh: "有冇大一個碼？", ja: "มีไซซ์ใหญ่กว่านี้ไหมครับ / คะ", romaji: "mii sai yài kwàa níi mǎi khráp / khá" },
      { id: "tt-shop-07", kind: "sentence", zh: "有冇細一個碼？", ja: "มีไซซ์เล็กกว่านี้ไหมครับ / คะ", romaji: "mii sai lék kwàa níi mǎi khráp / khá" },
      { id: "tt-shop-08", kind: "sentence", zh: "可以試嗎？", ja: "ลองได้ไหมครับ / คะ", romaji: "laawng dâi mǎi khráp / khá" },
      { id: "tt-shop-09", kind: "sentence", zh: "試身室喺邊度？", ja: "ห้องลองอยู่ที่ไหนครับ / คะ", romaji: "hɔ̂ng laawng yùu thîi-nǎi khráp / khá" },
      { id: "tt-shop-10", kind: "sentence", zh: "可以碌卡嗎？", ja: "รับบัตรเครดิตไหมครับ / คะ", romaji: "ráp bàt khree-dìt mǎi khráp / khá", note: "外來語 เครดิต 嘅拼音及聲調待核對。" },
      { id: "tt-shop-11", kind: "vocab", zh: "現金", ja: "เงินสด", romaji: "ngoen-sòt" },
      { id: "tt-shop-12", kind: "vocab", zh: "收據", ja: "ใบเสร็จ", romaji: "bai-sèt" },
      { id: "tt-shop-13", kind: "vocab", zh: "袋", ja: "ถุง", romaji: "thǔng" },
      { id: "tt-shop-14", kind: "sentence", zh: "我要呢個。", ja: "เอาอันนี้ครับ / ค่ะ", romaji: "ao an-níi khráp / khâ" },
      { id: "tt-shop-15", kind: "sentence", zh: "唔使膠袋。", ja: "ไม่เอาถุงครับ / ค่ะ", romaji: "mâi ao thǔng khráp / khâ" }
    ]
  },
  {
    id: "thai-directions",
    icon: "🗺️",
    title: "問路與方向",
    subtitle: "位置、左右、遠近與步行時間",
    cards: [
      { id: "tt-dir-01", kind: "sentence", zh: "……喺邊度？", ja: "...อยู่ที่ไหนครับ / คะ", romaji: "... yùu thîi-nǎi khráp / khá" },
      { id: "tt-dir-02", kind: "sentence", zh: "點樣去……？", ja: "ไป...ยังไงครับ / คะ", romaji: "pai ... yang-ngai khráp / khá" },
      { id: "tt-dir-03", kind: "sentence", zh: "直行。", ja: "ตรงไป", romaji: "trong-pai" },
      { id: "tt-dir-04", kind: "sentence", zh: "轉左。", ja: "เลี้ยวซ้าย", romaji: "líao sáai" },
      { id: "tt-dir-05", kind: "sentence", zh: "轉右。", ja: "เลี้ยวขวา", romaji: "líao khwǎa" },
      { id: "tt-dir-06", kind: "vocab", zh: "近", ja: "ใกล้", romaji: "glâi" },
      { id: "tt-dir-07", kind: "vocab", zh: "遠", ja: "ไกล", romaji: "glai" },
      { id: "tt-dir-08", kind: "sentence", zh: "遠唔遠？", ja: "ไกลไหมครับ / คะ", romaji: "glai mǎi khráp / khá" },
      { id: "tt-dir-09", kind: "sentence", zh: "行路去得到嗎？", ja: "เดินไปได้ไหมครับ / คะ", romaji: "doen-pai dâi mǎi khráp / khá" },
      { id: "tt-dir-10", kind: "sentence", zh: "要幾多分鐘？", ja: "ใช้เวลากี่นาทีครับ / คะ", romaji: "chái wee-laa kìi naa-thii khráp / khá" },
      { id: "tt-dir-11", kind: "vocab", zh: "呢度", ja: "ที่นี่", romaji: "thîi-nîi" },
      { id: "tt-dir-12", kind: "vocab", zh: "嗰度", ja: "ที่นั่น", romaji: "thîi-nân" },
      { id: "tt-dir-13", kind: "vocab", zh: "對面", ja: "ตรงข้าม", romaji: "trong-khâam" },
      { id: "tt-dir-14", kind: "vocab", zh: "隔籬／旁邊", ja: "ข้างๆ", romaji: "khâang-khâang" }
    ]
  },
  {
    id: "thai-emergency",
    icon: "🆘",
    title: "緊急狀況與求助",
    subtitle: "身體不適、醫療、報警、失物與大使館",
    cards: [
      { id: "tt-help-01", kind: "sentence", zh: "救命／請幫手！", ja: "ช่วยด้วย!", romaji: "chûai dûai" },
      { id: "tt-help-02", kind: "sentence", zh: "我唔舒服。", ja: "ไม่สบายครับ / ค่ะ", romaji: "mâi sà-baai khráp / khâ" },
      { id: "tt-help-03", kind: "sentence", zh: "我要睇醫生。", ja: "ต้องการพบหมอครับ / ค่ะ", romaji: "tɔ̂ng-gaan phóp mǎaw khráp / khâ" },
      { id: "tt-help-04", kind: "vocab", zh: "醫院", ja: "โรงพยาบาล", romaji: "roong-pha-yaa-baan" },
      { id: "tt-help-05", kind: "sentence", zh: "請叫救護車。", ja: "เรียกรถพยาบาลให้หน่อยครับ / ค่ะ", romaji: "rîak rót pha-yaa-baan hâi nòi khráp / khâ" },
      { id: "tt-help-06", kind: "vocab", zh: "警察", ja: "ตำรวจ", romaji: "tam-rùat" },
      { id: "tt-help-07", kind: "sentence", zh: "請報警。", ja: "กรุณาเรียกตำรวจครับ / ค่ะ", romaji: "ka-rú-naa rîak tam-rùat khráp / khâ" },
      { id: "tt-help-08", kind: "sentence", zh: "我唔見咗嘢。", ja: "ของหายครับ / ค่ะ", romaji: "khǎawng hǎai khráp / khâ" },
      { id: "tt-help-09", kind: "sentence", zh: "我唔見咗銀包。", ja: "กระเป๋าสตางค์หายครับ / ค่ะ", romaji: "krà-pǎo sà-taang hǎai khráp / khâ" },
      { id: "tt-help-10", kind: "sentence", zh: "我唔見咗護照。", ja: "หนังสือเดินทางหายครับ / ค่ะ", romaji: "nǎng-sʉ̌ʉ doen-thaang hǎai khráp / khâ" },
      { id: "tt-help-11", kind: "sentence", zh: "大使館喺邊度？", ja: "สถานทูตอยู่ที่ไหนครับ / คะ", romaji: "sà-thǎan-thûut yùu thîi-nǎi khráp / khá" },
      { id: "tt-help-12", kind: "sentence", zh: "呢度痛。", ja: "เจ็บตรงนี้ครับ / ค่ะ", romaji: "jèp trong-níi khráp / khâ" },
      { id: "tt-help-13", kind: "vocab", zh: "緊急狀況", ja: "เหตุฉุกเฉิน", romaji: "hèet chùk-chǒen" },
      { id: "tt-help-14", kind: "sentence", zh: "我要藥。", ja: "ต้องการยาครับ / ค่ะ", romaji: "tɔ̂ng-gaan yaa khráp / khâ" },
      { id: "tt-help-15", kind: "text", zh: "泰國旅遊警察熱線：1155", ja: "ตำรวจท่องเที่ยว 1155", romaji: "tam-rùat thâawng-thîao nʉ̀ng-nʉ̀ng-hâa-hâa", note: "旅遊警察熱線 1155 提供 24 小時多語言協助；一般緊急報警 191，緊急醫療 1669。" },
      { id: "tt-help-16", kind: "sentence", zh: "我需要翻譯協助。", ja: "ต้องการล่ามครับ / ค่ะ", romaji: "tɔ̂ng-gaan lâam khráp / khâ" }
    ]
  }
];
