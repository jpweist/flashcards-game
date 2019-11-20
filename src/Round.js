const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck.card;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
    this.percentCorrect = 0;
  }
  returnCurrentCard() {
  return this.currentCard;
  }
  takeTurn(guess) {
    this.turns += 1;
    const turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    let correctAnswers = this.turns - this.incorrectGuesses.length;
    let sum = correctAnswers / this.turns;
    this.percentCorrect = Math.floor(sum * 100);
    return this.percentCorrect;

  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`)
  }

}

module.exports = Round;


// Round
//
// Your Round class will be the object that takes in responses and records these guesses (as well as if they are correct or incorrect). The currentCard should be the first Card in the Deck (the array of Cards) at the start of the Round
//

// Your Round class should meet the following requirements:
// returnCurrentCard: method that returns the current card being played

// takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
//

// When a guess is made, a new Turn instance is created.
// The turns count is updated, regardless of whether the guess is correct or incorrect

// The next card becomes current card
// Guess is evaluated/recorded.


// Incorrect guesses will be stored (via the id) in an array of incorrectGuesses


// Feedback is returned regarding whether the guess is incorrect or correct

// ## START UP HERE

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
