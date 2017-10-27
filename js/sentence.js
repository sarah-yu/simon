class Sentence {
	constructor(measureWord, subject, object, verb, adjective) {
		this.measureWord = measureWord
		this.subject = subject
		this.verb = verb
		this.adjective = adjective
		this.object = object
	}
}

// stores the challenge sentence
let theSentence = new Sentence()
// stores user's attempt
let userSentence = new Sentence()
