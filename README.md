# Simon Learns Chinese

Simon Learns Chinese is based on the concept of the memory game, Simon, and inspired by gamified language learning apps such as Duolingo. The purpose of the game is to test the user's memory while allowing the user to gain a basic but intuitive understanding of the Chinese language through repeated exposure to simple vocabulary and grammar patterns.

Play it here: https://sarah-yu.github.io/simon


## Current Features

- User can choose a level (1, 2, 3) to play.
- User is given a sentence that is broken down into the parts of speech that compose it (i.e. subject, verb, object).
- The complexity of the sentence (how many parts of speech it has) increases with level.
  - Level 1: 2 parts of speech (measure word, object)
  - Level 2: 3 parts of speech (subject, verb, object)
  - Level 3: 4 parts of speech (subject, verb, adjective, object)
- User is shown the sentence for 5 seconds.
- After the sentence disappears, user must recreate the sentence from memory by selecting the correct words from the word bank.
- If the user is correct, then the next sentence will appear.
- User gains +1 point in score for every correct answer.
- User can choose to play a different level at any time without losing score count.
- User can choose to reset score at any time.


## Unsolved Problems

- A clearTimeout reference error occurs if the user clicks the "Start Page" button before playing any of the levels. The functionality of the game is not compromised, but I was not able to resolve this issue.
- The game is not fully responsive as there are many layout issues when the browser is resized (I used flexbox).
- In general, I would like to spend more time refactoring and abstracting my code. I think my current logic is pretty convoluted and not a very robust solution.
- I was not able to implement a "try again" message for incorrect attempts. As a Silver feature, I would also like to be able to give the user a hint as to which part of speech was incorrect.
- As a Gold feature, I would like to implement text to speech.


## Technologies Used

- HTML/CSS
- JavaScript
- jQuery


## Installation

1. Fork this repository.
2. Clone it.
3. Open ```index.html``` in your browser.


## Contribute

Source code: https://github.com/sarah-yu/simon
