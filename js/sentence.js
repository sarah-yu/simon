class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}
	isEqual(userSentence) {
		userSentence.measureWord === theSentence.measureWord &&
			userSentence.subject === theSentence.subject &&
			userSentence.verb === theSentence.verb &&
			userSentence.adjective === theSentence.adjective &&
			userSentence.object === theSentence.object
	}
}

// stores the challenge sentence
let theSentence = new Sentence()
// stores user's attempt
let userSentence = new Sentence()
