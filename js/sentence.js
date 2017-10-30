class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}

	isLevel1SentenceComplete() {
		return userSentence.measureWord != null && userSentence.object != null
	}

	isLevel2SentenceComplete() {
		return (
			userSentence.subject != null &&
			userSentence.verb != null &&
			userSentence.object != null
		)
	}

	isLevel3SentenceComplete() {
		return this.isLevel2SentenceComplete() && userSentence.adjective != null
	}

	isEqual(userSentence) {
		let theResult = false

		if (this.isLevel1SentenceComplete()) {
			theResult =
				userSentence.measureWord.cn === theSentence.measureWord.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.isLevel2SentenceComplete()) {
			theResult =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		if (this.isLevel3SentenceComplete()) {
			theResult =
				userSentence.subject.cn === theSentence.subject.cn &&
				userSentence.verb.cn === theSentence.verb.cn &&
				userSentence.adjective.cn === theSentence.adjective.cn &&
				userSentence.object.cn === theSentence.object.cn
		}

		return theResult
	}
}

let theSentence = new Sentence()
let userSentence = new Sentence()
