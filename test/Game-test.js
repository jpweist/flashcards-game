const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Game', function() {
  let card1, card2, card3, deck, round, game, guessRight, guessWrong;

  beforeEach(() => {
    card1 = new Card(1,"What allows you to define a set of related information using key-value pairs?",["object", "array", "function"], "object");

    card2 = new Card (2, "What is a comma-separated list of related values?",["array", "object", "function"], "array");

    card3 = new Card(3,"What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"],"mutator method");

    guessRight = "object";
    guessWrong = "function";
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    turn = new Turn(guessRight, card1);
    game = new Game(round);
  });
  it('Should keep track of the currentRound', function() {

  })
});
