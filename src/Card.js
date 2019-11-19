class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;

//
// {
//   "id": 1,
//   "question": "What allows you to define a set of related information using key-value pairs?",
//   "answers": ["object", "array", "function"],
//   "correctAnswer": "object"
// }
