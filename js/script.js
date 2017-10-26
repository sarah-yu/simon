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
		hideWordTiles(level)
	}

	function hideWordTiles(level) {
		setTimeout(() => {
			$('.word-tile').css('visibility', 'hidden')
			createWordBank(level)
		}, 1000)
	}

	function createWordBank(level) {
		console.log(
			`createWordBank: creating word bank for level ${level.level} now`
		)

		for (let i = 0; i < level.pos.length; i++) {
			wordBank.append(`<div class="wb-pos">
			<div class="wb-pos-label">${level.posWBLabel[i]}</div>
			</div>`)
			$('.wb-pos-label').append('<div class="wb-tiles"></div>')
		}

		// format word bank columns
		if (level.level === 2) {
			$('.wb-pos').css('flex', '0 0 33.33%')
		} else if (level.level === 3) {
			$('.wb-pos').css('flex', '0 0 25%')
		}
		createWBArr(level)
	}

	function createWBArr(level) {
		console.log(
			`createWBTiles: creating word bank tiles for level ${level.level}`
		)
		for (let i = 0; i < level.pos.length; i++) {
			// create arrays to hold word bank tiles by pos
			window['wb' + level.posProperty[i]] = []
			console.log(level.posProperty[i])
		}
		createWBTiles(level)
	}

	function createWBTiles(level) {
		console.log(`createWBTiles: still on level ${level.level}`)

		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			let theRightWord = theSentence[addPos]
			console.log(`the right word is: ${theRightWord.cn}`)

			// add the right word into 0 position of wb pos array
			window['wb' + addPos][0] = theRightWord

			// slice the right from word from the pos array
			window['shuffleWb' + addPos] = level.pos[i].slice()
			window['shuffleWb' + addPos].splice(
				window['shuffleWb' + addPos].indexOf(theRightWord),
				1
			)
			// push 3 random words to wb pos array
			getRandomWords(window['shuffleWb' + addPos], 3)
			for (let j = 0; j < shuffledArray.length; j++) {
				window['wb' + addPos].push(shuffledArray[j])
			}
			// shuffle full wb pos array one more time
			getRandomWords(window['wb' + addPos], 4)
			// assign shuffled array back to wb pos array
			window['wb' + addPos] = shuffledArray
			// now ready for display in word bank!
		}
		displayWBTiles(level)
	}

	function getRandomWords(array, size) {
		let shuffled = array.slice(0)
		let i = array.length
		let temp
		let index
		while (i--) {
			index = Math.floor((i + 1) * Math.random())
			temp = shuffled[index]
			shuffled[index] = shuffled[i]
			shuffled[i] = temp
		}
		shuffledArray = shuffled.slice(0, size)
		return shuffledArray
	}

	function displayWBTiles(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			for (let j = 0; j < window['wb' + addPos].length; j++) {
				$('.wb-pos')
					.eq([i])
					.append(
						`<div class="wb-tile" data-pos="${level.posProperty[i]}">${window[
							'wb' + addPos
						][j].cn}</div>`
					)
			}
		}
		userGuess(level)
	}

	function userGuess(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			// add event listener on wb tiles by pos
			let wbTilesByPos = `div[data-pos=${addPos}]`
			$(wbTilesByPos).on('click', e => {
				$(wbTilesByPos).css('visibility', 'visible')
				$(wbTilesByPos).removeClass('active')

				// user can select one tile at a time
				$(e.target).css('visibility', 'hidden')
				$(e.target).addClass('active')

				console.log($(e.target).text())
			})
		}
	}
})
