$('document').ready(function() {
	const words = []
	// variable to simulate start for testing purposes
	let start = true
	let level = 1
	let gameBoard = $('#game-board')
	let wordBank = $('#word-bank')

	// partOfSpeech: measureWord
	words.push(yiGe)
	words.push(liangGe)
	words.push(sanGe)
	words.push(siGe)
	words.push(wuGe)
	words.push(liuGe)
	words.push(qiGe)
	words.push(baGe)
	words.push(jiuGe)
	words.push(shiGe)

	// partOfSpeech: subject
	words.push(wo)
	words.push(ni)
	words.push(ta)
	words.push(woMen)
	words.push(niMen)
	words.push(taMen)
	words.push(maMa)
	words.push(baBa)
	words.push(woDeMao)
	words.push(woDeGou)

	// partOfSpeech: verb
	words.push(xiHuan)
	words.push(buXiHuan)
	words.push(yao)
	words.push(buYao)
	words.push(you)
	words.push(meiYou)
	words.push(mai)
	words.push(buMai)
	words.push(chi)
	words.push(buChi)

	// partOfSpeech: adjective
	words.push(xinXianDe)
	words.push(haoChiDe)
	words.push(daDe)
	words.push(xiaoDe)
	words.push(tianDe)
	words.push(suanDe)
	words.push(laDe)
	words.push(xianDe)
	words.push(reDe)
	words.push(liangDe)

	// partOfSpeech: object
	words.push(pingGuo)
	words.push(xiangJiao)
	words.push(juZi)
	words.push(caoMei)
	words.push(jiaoZi)
	words.push(tuDou)
	words.push(jiDan)
	words.push(fanQie)
	words.push(huangGua)
	words.push(hanBaoBao)

	// filtered arrays of words of each partOfSpeech
	const measureWords = words.filter(word => {
		return word.partOfSpeech === 'measureWord'
	})

	const objectWords = words.filter(word => {
		return word.partOfSpeech === 'object'
	})

	const subjectWords = words.filter(word => {
		return word.partOfSpeech === 'subject'
	})

	const verbs = words.filter(word => {
		return word.partOfSpeech === 'verb'
	})

	const adjectives = words.filter(word => {
		return word.partOfSpeech === 'adjective'
	})

	function getWord(array) {
		// generate random word for sentence creation
		let i = Math.floor(Math.random() * array.length)
		return array[i]
	}

	if (start) {
		createWordTile()
	}

	// function createGameBoard(level) {
	// 	// build game board based on level (number of pos)
	// 	for (let i = 0; i < level.length; i++) {
	// 		gameBoard.append(
	// 			`<div class='the-sentence-pos the-sentence-pos-${i}'>
	//         <div class='the-sentence-pos-label'>${level[i]}</div>
	//       </div>`
	// 		)
	// 	}
	// }

	function createWordTile() {
		switch (level) {
			case 1:
				createTileLevelOne()
				createWordBankLevelOne()
				break
			case 2:
				createTileLevelTwo()
				break
			case 3:
				createTileLevelThree()
				break
		}
	}

	setTimeout(function() {
		$('.word-tile').hide()
	}, 3000)

	function createTileLevelOne() {
		theSentence.measureWord = getWord(measureWords)
		theSentence.object = getWord(objectWords)

		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-1"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-2"></div>`)

		$('.the-sentence-pos').append(
			`<div class="word-tile">
        <span class="word-info word-pinyin"></span>
        <span class="word-info word-cn"></span>
        <span class="word-info word-en"></span>
      </div>`
		)

		$('.the-sentence-pos')
			.eq(0)
			.append(`<div class="the-sentence-pos-label">measure word</div>`)
		$('.the-sentence-pos')
			.eq(1)
			.append(`<div class="the-sentence-pos-label">object</div>`)

		$('.the-sentence-pos-1 .word-pinyin').text(theSentence.measureWord.pinyin)
		$('.the-sentence-pos-1 .word-cn').text(theSentence.measureWord.cn)
		$('.the-sentence-pos-1 .word-en').text(theSentence.measureWord.en)

		$('.the-sentence-pos-2 .word-pinyin').text(theSentence.object.pinyin)
		$('.the-sentence-pos-2 .word-cn').text(theSentence.object.cn)
		$('.the-sentence-pos-2 .word-en').text(theSentence.object.en)
	}

	function createWordBankLevelOne() {
		let wbMeasureWords = []
		let wbObjects = []

		wbMeasureWords[0] = theSentence.measureWord
		wbMeasureWords[1] = getWord(measureWords)
		wbMeasureWords[2] = getWord(measureWords)
		wbMeasureWords[3] = getWord(measureWords)

		wbObjects[0] = theSentence.object
		wbObjects[1] = getWord(objectWords)
		wbObjects[2] = getWord(objectWords)
		wbObjects[3] = getWord(objectWords)

		for (let i = 0; i < wbMeasureWords.length; i++) {
			$('.word-bank-word-tiles')
				.eq(0)
				.append(
					`<div class="word-bank-word-tile" id="wb-${i}">${wbMeasureWords[i]
						.cn}</div>`
				)
		}

		for (let i = 0; i < wbObjects.length; i++) {
			$('.word-bank-word-tiles')
				.eq(1)
				.append(
					`<div class="word-bank-word-tile" id="wb-${i}">${wbObjects[i]
						.cn}</div>`
				)
		}
	}

	function createTileLevelTwo() {
		theSentence.subject = getWord(subjectWords)
		theSentence.verb = getWord(verbs)
		theSentence.object = getWord(objectWords)

		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-1"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-2"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-3"></div>`)

		$('.the-sentence-pos').append(
			`<div class="word-tile">
        <span class="word-info word-pinyin"></span>
        <span class="word-info word-cn"></span>
        <span class="word-info word-en"></span>
      </div>`
		)

		$('.the-sentence-pos')
			.eq(0)
			.append(`<div class="the-sentence-pos-label">subject</div>`)
		$('.the-sentence-pos')
			.eq(1)
			.append(`<div class="the-sentence-pos-label">verb</div>`)
		$('.the-sentence-pos')
			.eq(2)
			.append(`<div class="the-sentence-pos-label">object</div>`)

		$('.the-sentence-pos-1 .word-pinyin').text(theSentence.subject.pinyin)
		$('.the-sentence-pos-1 .word-cn').text(theSentence.subject.cn)
		$('.the-sentence-pos-1 .word-en').text(theSentence.subject.en)

		$('.the-sentence-pos-2 .word-pinyin').text(theSentence.verb.pinyin)
		$('.the-sentence-pos-2 .word-cn').text(theSentence.verb.cn)
		$('.the-sentence-pos-2 .word-en').text(theSentence.verb.en)

		$('.the-sentence-pos-3 .word-pinyin').text(theSentence.object.pinyin)
		$('.the-sentence-pos-3 .word-cn').text(theSentence.object.cn)
		$('.the-sentence-pos-3 .word-en').text(theSentence.object.en)
	}

	function createTileLevelThree() {
		theSentence.subject = getWord(subjectWords)
		theSentence.verb = getWord(verbs)
		theSentence.adjective = getWord(adjectives)
		theSentence.object = getWord(objectWords)

		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-1"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-2"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-3"></div>`)
		gameBoard.append(`<div class="the-sentence-pos the-sentence-pos-4"></div>`)

		$('.the-sentence-pos').append(
			`<div class="word-tile">
        <span class="word-info word-pinyin"></span>
        <span class="word-info word-cn"></span>
        <span class="word-info word-en"></span>
      </div>`
		)

		$('.the-sentence-pos')
			.eq(0)
			.append(`<div class="the-sentence-pos-label">subject</div>`)
		$('.the-sentence-pos')
			.eq(1)
			.append(`<div class="the-sentence-pos-label">verb</div>`)
		$('.the-sentence-pos')
			.eq(2)
			.append(`<div class="the-sentence-pos-label">adjective</div>`)
		$('.the-sentence-pos')
			.eq(3)
			.append(`<div class="the-sentence-pos-label">object</div>`)

		$('.the-sentence-pos-1 .word-pinyin').text(theSentence.subject.pinyin)
		$('.the-sentence-pos-1 .word-cn').text(theSentence.subject.cn)
		$('.the-sentence-pos-1 .word-en').text(theSentence.subject.en)

		$('.the-sentence-pos-2 .word-pinyin').text(theSentence.verb.pinyin)
		$('.the-sentence-pos-2 .word-cn').text(theSentence.verb.cn)
		$('.the-sentence-pos-2 .word-en').text(theSentence.verb.en)

		$('.the-sentence-pos-3 .word-pinyin').text(theSentence.adjective.pinyin)
		$('.the-sentence-pos-3 .word-cn').text(theSentence.adjective.cn)
		$('.the-sentence-pos-3 .word-en').text(theSentence.adjective.en)

		$('.the-sentence-pos-4 .word-pinyin').text(theSentence.object.pinyin)
		$('.the-sentence-pos-4 .word-cn').text(theSentence.object.cn)
		$('.the-sentence-pos-4 .word-en').text(theSentence.object.en)
	}

	// function createWordBank(level) {
	// 	// build word bank based on level (number of pos)
	// 	for (let i = 0; i < level.length; i++) {
	// 		wordBank.append(
	// 			`<div class='word-bank-pos'>
	//         <div class="word-bank-pos-label">${level[i]}</div>
	//       </div>`
	// 		)
	// 	}
	// }
})
