var db = require('./models');

var cards = [
  {
  question: "What is your name?",
  answer: "Nick",
  answerHidden: "true",
},
  {
  question: "What is your name?",
  answer: "Nick",
  answerHidden: "true",
},
  {
  question: "What is your name?",
  answer: "Nick",
  answerHidden: "true",
},
  {
  question: "What is your name?",
  answer: "Nick",
  answerHidden: "true",
},
  {
  question: "What is your name?",
  answer: "Nick",
  answerHidden: "true",
}

];

db.Card.remove({}, function(err, movies){
	if (err) { return console.log ('err', err); 
	} else {
		console.log('removed all cards');

	db.Card.create(cards, function (err, movies){
		if (err) { return console.log ('error:', err);
	}
		console.log("created", cards.length, "favorite movies");
		process.exit();
		});
	}
});
