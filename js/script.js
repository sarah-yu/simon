$('document').ready(function() {
	// all the variables

	// from the DOM
	let gameBoard = $('#game-board')
	let wordBank = $('#word-bank')

	// all the words
	const words = []

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

	// organized info for each level
	let level1 = {
		level: 1,
		pos: [measureWords, objectWords],
		posProperty: ['measureWord', 'object'],
		posGBLabel: ['measure word', 'object'],
		posWBLabel: ['measure words', 'object words']
	}

	let level2 = {
		level: 2,
		pos: [subjectWords, verbs, objectWords],
		posProperty: ['subject', 'verb', 'object'],
		posGBLabel: ['subject', 'verb', 'object'],
		posWBLabel: ['subject words', 'verbs', 'object words']
	}

	let level3 = {
		level: 3,
		pos: [subjectWords, verbs, adjectives, objectWords],
		posProperty: ['subject', 'verb', 'adjective', 'object'],
		posGBLabel: ['subject', 'verb', 'adjective', 'object'],
		posWBLabel: ['subject words', 'verbs', 'adjectives', 'object words']
	}

	// game start page
	gameBoard.append(
		'<div class="welcome-message"><p>Welcome to Simon Learns Chinese!</p><p>Select a level to start the game.</p></div>'
	)

	wordBank.append(
		'<div class="level-buttons"><button id="level1">Level 1</button><button id="level2">Level 2</button><button id="level3">Level 3</button></div>'
	)

	$('.level-buttons')
		.children()
		.on('click', e => {
			let userLevel = e.target.id
			// userLevel: level1, level2, or level3
			startGame(userLevel)
		})

	function startGame(userLevel) {
		switch (userLevel) {
			case 'level1':
				startLevel(level1)
				break
			case 'level2':
				startLevel(level2)
				break
			case 'level3':
				startLevel(level3)
				break
		}
	}

	function startLevel(level) {
		// log to check correct current level
		console.log(`startLevel: current level: ${level.level}`)
		removeStartPage()
		createGameBoard(level)
	}

	function removeStartPage() {
		$('.welcome-message').remove()
		$('.level-buttons').remove()
	}

	function createGameBoard(level) {
		console.log(
			`createGameBoard: this is level ${level.level} and there's ${level.pos
				.length} pos`
		)
		for (let i = 0; i < level.pos.length; i++) {
			gameBoard.append(`<div class="the-sentence-pos"></div>`)
			$('.the-sentence-pos')
				.eq([i])
				.append(
					`<div class="the-sentence-pos-label">${level.posGBLabel[i]}</div>`
				)
		}
		createTheSentence(level)
	}

	function createTheSentence(level) {
		console.log(
			`createTheSentence: level ${level.level} successfully carried over!`
		)
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			theSentence[addPos] = getWord(level.pos[i])
			console.log(`createTheSentence ${i}: ${theSentence[addPos].cn}`)
		}
		createWordTiles(level)
	}

	// generate random word for sentence creation
	function getWord(array) {
		let i = Math.floor(Math.random() * array.length)
		return array[i]
	}

	function createWordTiles(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			$('.the-sentence-pos').eq([i]).prepend(`<div class="word-tile">
				<span class="word-info word-pinyin">${theSentence[addPos].pinyin}</span>
				<span class="word-info word-cn">${theSentence[addPos].cn}</span>
				<span class="word-info word-en">${theSentence[addPos].en}</span>
				</div>`)
		}
	}
})
