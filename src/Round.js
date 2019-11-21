const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck.card;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
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
    let percentCorrect = Math.floor(sum * 100);
    return percentCorrect;

  }
  endRound() {
    console.log(`** Round over! ** You answered
      ${this.percentCorrect}% of the questions correctly!`)
  }

}

module.exports = Round;
