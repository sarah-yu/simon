class Word {
	constructor(cn, en, pinyin, partOfSpeech) {
		this.cn = cn
		this.en = en
		this.pinyin = pinyin
		this.partOfSpeech = partOfSpeech
	}
}

// partOfSpeech: measureWord
const yiGe = new Word('一个', 'one', 'yí gè', 'measureWord')
const liangGe = new Word('两个', 'two', 'liǎng gè', 'measureWord')
const sanGe = new Word('三个', 'three', 'sān gè', 'measureWord')
const siGe = new Word('四个', 'four', 'sì gè', 'measureWord')
const wuGe = new Word('五个', 'five', 'wǔ gè', 'measureWord')
const liuGe = new Word('六个', 'six', 'liù gè', 'measureWord')
const qiGe = new Word('七个', 'seven', 'qī gè', 'measureWord')
const baGe = new Word('八个', 'eight', 'bā gè', 'measureWord')
const jiuGe = new Word('九个', 'nine', 'jiǔ gè', 'measureWord')
const shiGe = new Word('十个', 'ten', 'shí gè', 'measureWord')

// partOfSpeech: subject
const wo = new Word('我', 'I', 'wǒ', 'subject')
const ni = new Word('你', 'You', 'nǐ', 'subject')
const ta = new Word('他', 'He', 'tā', 'subject')
const woMen = new Word('我们', 'We', 'wǒ mén', 'subject')
const niMen = new Word('你们', 'You (plural)', 'nǐ mén', 'subject')
const taMen = new Word('他们', 'They', 'tā mén', 'subject')
const maMa = new Word('妈妈', 'Mom', 'mā ma', 'subject')
const baBa = new Word('爸爸', 'Dad', 'bà ba', 'subject')
const woDeMao = new Word('我的猫', 'My cat', 'wǒ de māo', 'subject')
const woDeGou = new Word('我的狗', 'My dog', 'wǒ de goǔ', 'subject')

// partOfSpeech: verb
const xiHuan = new Word('喜欢', 'like(s)', 'xǐ huān', 'verb')
const buXiHuan = new Word('不喜欢', 'do(es) not like', 'bù xǐ huān', 'verb')
const yao = new Word('要', 'want(s)', 'yào', 'verb')
const buYao = new Word('不要', 'do(es) not want', 'bú yào', 'verb')
const you = new Word('有', 'has/have', 'yǒu', 'verb')
const meiYou = new Word('没有', 'do(es) not have', 'méi yǒu', 'verb')
const mai = new Word('买', 'buy(s)', 'maǐ', 'verb')
const buMai = new Word('不买', 'do(es) not buy', 'bù maǐ', 'verb')
const chi = new Word('吃', 'eat(s)', 'chī', 'verb')
const buChi = new Word('不吃', 'do(es) not eat', 'bù chī', 'verb')

// partOfSpeech: adjective
const xinXianDe = new Word('新鲜的', 'fresh', 'xīn xiān de', 'adjective')
const haoChiDe = new Word('好吃的', 'delicious', 'hǎo chī de', 'adjective')
const daDe = new Word('大的', 'big', 'dà de', 'adjective')
const xiaoDe = new Word('小的', 'small', 'xiǎo de', 'adjective')
const tianDe = new Word('甜的', 'sweet', 'tián de', 'adjective')
const suanDe = new Word('酸的', 'sour', 'suān de', 'adjective')
const laDe = new Word('辣的', 'spicy', 'là de', 'adjective')
const xianDe = new Word('咸的', 'salty', 'xián de', 'adjective')
const reDe = new Word('热的', 'hot', 'rè de', 'adjective')
const liangDe = new Word('凉的', 'cold', 'liáng de', 'adjective')

// partOfSpeech: object
const pingGuo = new Word('苹果', 'apple(s)', 'píng guǒ', 'object')
const xiangJiao = new Word('香蕉', 'banana(s)', 'xiāng jiāo', 'object')
const juZi = new Word('橘子', 'orange(s)', 'jú zi', 'object')
const caoMei = new Word('草莓', 'strawberry(ies)', 'cǎo meí', 'object')
const jiaoZi = new Word('饺子', 'dumpling(s)', 'jiǎo zi', 'object')
const tuDou = new Word('土豆', 'potato(es)', 'tǔ doù', 'object')
const jiDan = new Word('鸡蛋', 'egg(s)', 'jī dàn', 'object')
const fanQie = new Word('番茄', 'tomato(es)', 'fān qié', 'object')
const huangGua = new Word('黄瓜', 'cucumber(s)', 'huáng guā', 'object')
const hanBaoBao = new Word('汉堡包', 'hamburger(s)', 'hàn bǎo bāo', 'object')
