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

	// game start page
	startPage()

	function startPage() {
		gameBoard.append(
			'<div class="welcome-message"><p>Test your memory skills while learning Chinese!</p><p>Select a level to start the game.</p></div>'
		)

		wordBank.append(
			'<div class="level-buttons"><button id="level1">Level 1</button><button id="level2">Level 2</button><button id="level3">Level 3</button></div>'
		)

		$('.level-buttons')
			.children()
			.on('click', e => {
				let userLevel = e.target.id
				// userLevel: level1, level2, or level3
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
	}

	function removeStartPage() {
		$('.welcome-message').remove()
		$('.level-buttons').remove()
	}

	// create game board for the level selected by user
	function createGameBoard(level) {
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
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			theSentence[addPos] = getWord(level.pos[i])
			// console.log(`createTheSentence ${i}: ${theSentence[addPos].cn}`)
		}
		displayTheSentence(level)
	}

	// get a random word for creating the challenge sentence ("The Sentence")
	function getWord(array) {
		let i = Math.floor(Math.random() * array.length)
		return array[i]
	}

	// display The Sentence on the game board
	function displayTheSentence(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			$('.the-sentence-pos').eq([i]).prepend(`<div class="word-tile">
				<span class="word-info word-pinyin">${theSentence[addPos].pinyin}</span>
				<span class="word-info word-cn">${theSentence[addPos].cn}</span>
				<span class="word-info word-en">${theSentence[addPos].en}</span>
				</div>`)
		}
		hideTheSentence(level)
	}

	// hide The Sentence after x seconds
	function hideTheSentence(level) {
		timeToGuess = setTimeout(() => {
			$('.word-tile').css('visibility', 'hidden')
			createWordBank(level)
			promptUser()
		}, 5000)
	}

	function promptUser() {
		$('#user-message').text(
			'(Click on the words below to complete the sentence)'
		)
	}

	function createWordBank(level) {
		for (let i = 0; i < level.pos.length; i++) {
			wordBank.append(`<div class="wb-pos">
			<div class="wb-pos-label">${level.posWBLabel[i]}</div>
			</div>`)
			$('.wb-pos-label').append('<div class="wb-tiles"></div>')
		}

		// set widths for word bank columns
		if (level.level === 2) {
			$('.wb-pos').css('flex', '0 0 33.33%')
		} else if (level.level === 3) {
			$('.wb-pos').css('flex', '0 0 25%')
		}
		createWBArr(level)
	}

	// generate random answer choices for the word bank
	function createWBArr(level) {
		// console.log(
		// 	`createWBArr: creating word bank tiles for level ${level.level}`
		// )
		for (let i = 0; i < level.pos.length; i++) {
			// create an array for each part of speech to store random answer choices
			window['wb' + level.posProperty[i]] = []
			// console.log(level.posProperty[i])
		}
		fillWBArr(level)
	}

	// fill arrays with random answer choices
	function fillWBArr(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			let theRightWord = theSentence[addPos]
			console.log(`the right word is: ${theRightWord.cn}`)

			// add the right word into index 0 of array
			window['wb' + addPos][0] = theRightWord

			// create copy of the original part of speech array
			// splice out the right word
			window['shuffleWb' + addPos] = level.pos[i].slice()
			window['shuffleWb' + addPos].splice(
				window['shuffleWb' + addPos].indexOf(theRightWord),
				1
			)
			// push 3 random words to the array
			getRandomWords(window['shuffleWb' + addPos], 3)
			for (let j = 0; j < shuffledArray.length; j++) {
				window['wb' + addPos].push(shuffledArray[j])
			}
			// shuffle full array so that the right word is not index 0
			getRandomWords(window['wb' + addPos], 4)
			// assign shuffled array back to the word bank array
			window['wb' + addPos] = shuffledArray
			// now ready for display in word bank
		}
		displayWBTiles(level)
	}

	// https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
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

	// display random answer choices in the word bank, categorized by part of speech
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

	// user clicks on words in the word bank to try and build The Sentence they just saw
	function userGuess(level) {
		for (let i = 0; i < level.pos.length; i++) {
			let addPos = level.posProperty[i]
			let wbTilesByPos = `div[data-pos=${addPos}]`
			// add event listener on word bank tiles by part of speech
			$(wbTilesByPos).on('click', e => {
				$('.word-tile').css('visibility', 'hidden')
				$(wbTilesByPos).css('visibility', 'visible')
				$(wbTilesByPos).removeClass('active')

				// user can select one tile at a time
				$(e.target).css('visibility', 'hidden')
				$(e.target).addClass('active')

				// check if click is grabbing the right tile and info
				// console.log($(e.target).text())
				// console.log($(e.target).data('pos'))
				// console.log(`wb${$(e.target).data('pos')}`)

				// via data-pos attribute, access array corresponding to the part of speech of word clicked by user
				// find word object the clicked tile belongs to
				let userClickWord = $(e.target).text()
				let userClickWordPos = $(e.target).data('pos')
				// console.log(`userClickWordPos: ${userClickWordPos}`)
				// console.log(window['wb' + userClickWordPos])

				// display user's guess on game board
				let whereToDisplay = level.posProperty.indexOf(userClickWordPos)
				// console.log(`where to display: ${whereToDisplay} (${userClickWordPos})`)
				$('.word-cn')
					.eq(whereToDisplay)
					.css('visibility', 'visible')
					.text(userClickWord)

				// filter through the corresponding array for the clicked word object
				findUserClickWord = window['wb' + userClickWordPos].filter(word => {
					return word.cn === userClickWord
				})
				console.log(`findUserClickWord: ${findUserClickWord}`)

				// add the word to userSentence
				userSentence[userClickWordPos] = findUserClickWord

				checkSentence(level)
			})
		}
	}

	// check userSentence against theSentence
	function checkSentence(level) {
		let count = 0
		if (
			userSentence.measureWord !== undefined &&
			userSentence.measureWord[0] === theSentence.measureWord
		) {
			count += 1
		}
		if (
			userSentence.subject !== undefined &&
			userSentence.subject[0] === theSentence.subject
		) {
			count += 1
		}
		if (
			userSentence.verb !== undefined &&
			userSentence.verb[0] === theSentence.verb
		) {
			count += 1
		}
		if (
			userSentence.adjective !== undefined &&
			userSentence.adjective[0] === theSentence.adjective
		) {
			count += 1
		}
		if (
			userSentence.object !== undefined &&
			userSentence.object[0] === theSentence.object
		) {
			count += 1
		}
		if (count === level.pos.length) {
			console.log('user created the right sentence')
			score += 1
			scoreEl.text(score)
			$('#user-message').text('You got it! +1 Point')
			let correctAnswer = setTimeout(() => {
				clearBoard()
				startLevel(level)
			}, 1500)
		} else {
			console.log('user must try again')
		}
	}

	function correctAnswer() {}

	function clearBoard() {
		clearTheSentence()
		clearUserSentence()
		$('#user-message').text('')
		$('.the-sentence-pos').remove()
		$('.wb-pos').remove()
	}

	function clearTheSentence() {
		theSentence = new Sentence()
	}

	function clearUserSentence() {
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
