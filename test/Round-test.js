const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1, card2, card3, deck, round, guessRight, guessWrong;

  beforeEach(() => {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");

    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");

    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    guessRight = "object";
    guessWrong = "function";
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn(guessRight, card1);
  });

  it('Should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('Should method that returns the current card being played', function() {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });
  it('should have a method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', function() {
    round.takeTurn(guessWrong, card1);
    expect(round.takeTurn()).to.deep.equal('incorrect!')
  });
  it('should when a guess is made, a new Turn instance is created', function() {
    expect(turn).to.be.an.instanceof(Turn)
  });
  it('should update the turns count is updated, regardless of whether the guess is correct or incorrect', function() {
    round.takeTurn(guessWrong, card1);
    expect(round.turns).to.equal(1)
  });
  it('should have the next card becomes current card guess is evaluated/recorded', function() {
    round.takeTurn(guessWrong, card1);
    expect(round.currentCard).to.equal(card2)
  });
  it('should have incorrect guesses will be stored (via the id) in an array of incorrectGuesses', function() {
    round.takeTurn(guessWrong, card1);
    expect(round.incorrectGuesses[0]).to.equal(card2)
  });
  it('should have feedback is returned regarding whether the guess is incorrect or correct', function() {
    round.takeTurn(guessWrong, card1);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
  it('should be a method that calculates and returns the percentage of correct guesses', function() {
    round.takeTurn(guessRight, card1);
    round.takeTurn(guessWrong, card2);
    round.takeTurn(guessWrong, card3);
    expect(round.calculatePercentCorrect()).to.equal(33)
  });
  it.skip('should have a method that prints the following to the console', function() {
    round.takeTurn(guessRight, card1);
    round.takeTurn(guessWrong, card2);
    round.takeTurn(guessWrong, card3);
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  });

});
