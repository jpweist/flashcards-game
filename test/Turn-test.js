const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
//
describe('Turn', function() {
  let turn, card, guessRight, guessWrong;

  beforeEach(() => {
    guessRight = "object";
    guessWrong = "function";
    turn = new Turn(guessRight, card);
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('Should be an instance of turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('Should have a method that returns the guess', function() {
    turn.returnGuess();
    expect(turn.returnGuess()).to.equal("object")
  })

  it('Should have a method that returns the Card', function() {
    turn.returnCard();
    expect(turn.returnCard()).to.deep.equal(card)
  })
  it('Should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(true);
  })


});
