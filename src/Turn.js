
class Turn {
  constructor(guess, cardObj) {
    this.guess = guess;
    this.card = cardObj;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    }
    else {
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!';
    }
    else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;

// import UserParent from '../src/user-parent.js';
//
// class Activity extends UserParent {
//   constructor(userData, activityData) {
//     super(userData, activityData)
//     this.data = activityData;
//   }




// Turns
//
// Your Turn class should meet the following requirements:
// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
