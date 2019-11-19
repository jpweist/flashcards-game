const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
 let card1, card2, card3, deck;

 beforeEach(() => {
   card1 = new Card({
     "id": 1,
     "question": "What allows you to define a set of related information using key-value pairs?",
     "answers": ["object", "array", "function"],
     "correctAnswer": "object"
   });
    card2 = new Card ({
     "id": 2,
     "question": "What is a comma-separated list of related values?",
     "answers": ["array", "object", "function"],
     "correctAnswer": "array"
   });
   card3 = new Card({
     "id": 3,
     "question": "What type of prototype method directly modifies the existing array?",
     "answers": ["mutator method", "accessor method", "iteration method"],
     "correctAnswer": "mutator method"
   });
   deck = new Deck(card1, card2, card3);
 });

 it('should be initialized with an array of Card objects and should have an accompanying test file', function() {
   expect(deck.cards).to.equal(card1, card2, card3);
 })

});
