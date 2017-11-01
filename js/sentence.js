class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}

	checkLevelOneSentence() {
		return userSentence.measureWord != null && userSentence.object != null
	}

	checkLevelTwoSentence() {
		return (
			userSentence.subject != null &&
			userSentence.verb != null &&
			userSentence.object != null
		)
	}

	checkLevelThreeSentence() {
		return this.checkLevelTwoSentence() && userSentence.adjective != null
	}

	isEqual(userSentence) {
		let correct = false

		if (this.checkLevelOneSentence()) {
			correct =
				userSentence.measureWord.cn === theSentence.measureWord.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.checkLevelTwoSentence()) {
			correct =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.checkLevelThreeSentence()) {
			correct =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.adjective.cn === theSentence.adjective.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		return correct
	}
}

let theSentence = new Sentence()
let userSentence = new Sentence()
