$('document').ready(function() {
	let gameBoard = $('#game-board')
	let wordBank = $('#word-bank')
	let startPageEl = $('.start-page')
	let resetScoreButton = $('#reset-score')
	let currentLevel = $('#current-level')
	let scoreEl = $('#score')
	let score = 0
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
	// pos = part of speech
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

	startPage()

	function startPage() {
		gameBoard.append(`
		<div class="welcome-message">
			<p>Test your memory skills while learning Chinese!</p>
			<p>Select a level to start the game.</p>
		</div>`)

		wordBank.append(
			`<div class="level-buttons">
				<button id="level1">Level 1</button>
				<button id="level2">Level 2</button>
				<button id="level3">Level 3</button>
			</div>`
		)

		$('.level-buttons')
			.children()
			.on('click', e => {
				let userLevel = e.target.id
				game(userLevel)
			})
	}

	function game(userLevel) {
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
		currentLevel.text(`Level: ${level.level}`)
		removeStartPage()
		createGameBoard(level)
		createTheSentence(level)
		displayTheSentence(level)
		hideTheSentence(level)
	}

	function removeStartPage() {
		$('.welcome-message').remove()
		$('.level-buttons').remove()
	}

	function createGameBoard(level) {
		for (let i = 0; i < level.pos.length; i++) {
			gameBoard.append(`<div class="the-sentence-pos"></div>`)
			$('.the-sentence-pos')
				.eq([i])
				.append(
					`<div class="the-sentence-pos-label">${level.posGBLabel[i]}</div>`
				)
		}
	}

	function createTheSentence(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let ptOfSpeech = level.posProperty[i]
			theSentence[ptOfSpeech] = getWord(level.pos[i])
		}
	}

	function getWord(array) {
		let i = Math.floor(Math.random() * array.length)
		return array[i]
	}

	function displayTheSentence(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let ptOfSpeech = level.posProperty[i]
			$('.the-sentence-pos').eq([i]).prepend(`
				<div class="word-tile">
					<span class="word-info word-pinyin">${theSentence[ptOfSpeech]
						.pinyin}</span>
					<span class="word-info word-cn">${theSentence[ptOfSpeech].cn}</span>
					<span class="word-info word-en">${theSentence[ptOfSpeech].en}</span>
				</div>`)
		}
	}

	function hideTheSentence(level) {
		$('#user-message').text('You have 5 seconds to study the following:')
		timeToGuess = setTimeout(() => {
			$('.word-tile').css('visibility', 'hidden')
			createWordBank(level)
			promptUser()
		}, 5000)
	}

	function promptUser() {
		$('#user-message').text(
			'Click on the words below to complete the sentence!'
		)
	}

	function createWordBank(level) {
		for (let i = 0; i < level.pos.length; i++) {
			wordBank.append(`
			<div class="wb-pos">
				<div class="wb-pos-label">${level.posWBLabel[i]}</div>
			</div>`)
			$('.wb-pos-label').append('<div class="wb-tiles"></div>')
		}

		if (level.level === 2) {
			$('.wb-pos').css('flex', '0 0 33.33%')
		} else if (level.level === 3) {
			$('.wb-pos').css('flex', '0 0 25%')
		}
		createWBArr(level)
	}

	function createWBArr(level) {
		for (let i = 0; i < level.pos.length; i++) {
			window['wb' + level.posProperty[i]] = []
		}
		fillWBArr(level)
	}

	// fill arrays with random answer choices
	function fillWBArr(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let ptOfSpeech = level.posProperty[i]
			let theRightWord = theSentence[ptOfSpeech]
			// console.log(`the right word is: ${theRightWord.cn}`)

			// add the right word into index 0 of array
			window['wb' + ptOfSpeech][0] = theRightWord
			// couldn't figure out how to get 3 random unique words from array that doesn't include the right word so i created a copy of the original part of speech array and spliced out the right word
			window['shuffleWb' + ptOfSpeech] = level.pos[i].slice()
			window['shuffleWb' + ptOfSpeech].splice(
				window['shuffleWb' + ptOfSpeech].indexOf(theRightWord),
				1
			)
			// push 3 random words to the array
			getRandomWords(window['shuffleWb' + ptOfSpeech], 3)
			for (let j = 0; j < shuffledArray.length; j++) {
				window['wb' + ptOfSpeech].push(shuffledArray[j])
			}
			// shuffle full array so that the right word is not index 0
			getRandomWords(window['wb' + ptOfSpeech], 4)
			// assign shuffled array back to the word bank array
			window['wb' + ptOfSpeech] = shuffledArray
			// ready for display in word bank
		}
		displayWBTiles(level)
	}

	// reference: https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
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
			let ptOfSpeech = level.posProperty[i]
			for (let j = 0; j < window['wb' + ptOfSpeech].length; j++) {
				$('.wb-pos')
					.eq([i])
					.append(
						`<div class="wb-tile" data-pos="${level.posProperty[i]}">${window[
							'wb' + ptOfSpeech
						][j].cn}</div>`
					)
			}
		}
		userGuess(level)
	}

	function userGuess(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let ptOfSpeech = level.posProperty[i]
			let wbTilesByPos = `div[data-pos=${ptOfSpeech}]`

			$(wbTilesByPos).on('click', e => {
				$('.word-tile').css('visibility', 'hidden')
				$(wbTilesByPos).css('visibility', 'visible')
				$(wbTilesByPos).removeClass('active')
				$(e.target).css('visibility', 'hidden')
				$(e.target).addClass('active')

				let userClickWord = $(e.target).text()
				let userClickWordPos = $(e.target).data('pos')
				let wordToAdd = null

				for (let i = 0; i < words.length; i++) {
					if (words[i].cn === userClickWord) {
						wordToAdd = words[i]
						break
					}
				}

				let whereToDisplay = level.posProperty.indexOf(userClickWordPos)

				$('.word-cn')
					.eq(whereToDisplay)
					.css('visibility', 'visible')
					.text(wordToAdd.cn)

				userSentence[wordToAdd.partOfSpeech] = wordToAdd

				checkSentence(level)
			})
		}
	}

	function checkSentence(level) {
		if (theSentence.isEqual(userSentence)) {
			score += 1
			scoreEl.text(score)
			$('#user-message').text('You got it! +1 Point')
			let correctAnswer = setTimeout(() => {
				clearBoard()
				startLevel(level)
			}, 1500)
		}
	}

	function clearBoard() {
		newTheSentence()
		newUserSentence()
		$('#user-message').text('')
		$('.the-sentence-pos').remove()
		$('.wb-pos').remove()
	}

	function newTheSentence() {
		theSentence = new Sentence()
	}

	function newUserSentence() {
		userSentence = new Sentence()
	}

	startPageEl.on('click', () => {
		clearTimeout(timeToGuess)
		currentLevel.text('')
		clearBoard()
		removeStartPage()
		startPage()
	})

	resetScoreButton.on('click', () => {
		score = 0
		scoreEl.text(0)
	})
})
