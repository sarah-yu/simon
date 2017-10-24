let level = 1
const words = []

// partOfSpeech: measureWord
words.push(yiGe)
words.push(liangGe)
words.push(sanGe)
words.push(siGe)
words.push(wuGe)
// words.push(liuGe)
// words.push(qiGe)
// words.push(baGe)
// words.push(jiuGe)
// words.push(shiGe)

// partOfSpeech: subject
// words.push(wo)
// words.push(ni)
// words.push(ta)
// words.push(woMen)
// words.push(niMen)
// words.push(taMen)
// words.push(maMa)
// words.push(baBa)
// words.push(woDeMao)
// words.push(woDeGou)

// partOfSpeech: verb
// words.push(xiHuan)
// words.push(buXiHuan)
// words.push(yao)
// words.push(buYao)
// words.push(you)
// words.push(meiYou)
// words.push(mai)
// words.push(buMai)
// words.push(chi)
// words.push(buChi)

// partOfSpeech: adjective
// words.push(xinXianDe)
// words.push(haoChiDe)
// words.push(daDe)
// words.push(xiaoDe)
// words.push(tianDe)
// words.push(suanDe)
// words.push(laDe)
// words.push(xianDe)
// words.push(reDe)
// words.push(liangDe)

// partOfSpeech: object
words.push(pingGuo)
words.push(xiangJiao)
words.push(juZi)
words.push(caoMei)
words.push(jiaoZi)
// words.push(tuDou)
// words.push(jiDan)
// words.push(fanQie)
// words.push(huangGua)
// words.push(hanBaoBao)

const measureWords = words.filter(word => {
	return word.partOfSpeech === 'measureWord'
})

const objectWords = words.filter(word => {
	return word.partOfSpeech === 'object'
})

function getWord(array) {
	// generate random word for sentence creation
	let i = Math.floor(Math.random() * array.length)
	return array[i]
}

theSentence.measureWord = getWord(measureWords)
theSentence.object = getWord(objectWords)

// display the sentence for a number of seconds
// when time is up, hide sentence
// and show word bank
