class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}
	isEqual() {
		userSentence.measureWord[0] === this.measureWord &&
			userSentence.subject[0] === this.subject &&
			userSentence.verb[0] === this.verb &&
			userSentence.adjective[0] === this.adjective &&
			userSentence.object[0] === this.object
	}
}

// stores the challenge sentence
let theSentence = new Sentence()
// stores user's attempt
let userSentence = new Sentence()
