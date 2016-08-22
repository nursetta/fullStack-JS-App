var db = require('./models');

var todos= [
  {
  todoItem: "Clean the House",
},
  {
  todoItem: "Do Laundry",
},
  {
  todoItem: "Wash car",
},
  {
  todoItem: "Go to the Gym",
}

];

db.Todo.remove({}, function(err, movies){
	if (err) { return console.log ('err', err); 
	} else {
		console.log('removed all items');

	db.Todo.create(todos, function (err, movies){
		if (err) { return console.log ('error:', err);
	}
		console.log("created", todos.length, "items");
		process.exit();
		});
	}
});
