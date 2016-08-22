
var express = require("express");
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models/');

	
	app.get('/', function(req, res){
	    res.send('hello world'); 
});

	app.get('/api/todo', function(req, res){
    db.Todo.find(function(err, todo){
        if (err){
            return console.log("index error: " + err);
        }
        res.json(todo);
    });
});

	app.get('/api/todo/:id', function (req, res) {
	db.Todo.findOne({_id: req.params.id }, function(err, data) {
         if (err){
            return console.log("index error: " + err);
        }
          res.json(data);
	});
});

	app.post('/api/todo', function (req, res) {
		var todo = new db.Todo(req.body);
		console.log(todo);
		console.log(req.body);
		console.log();
			todo.save(function(err) {
		         if (err){
		            return console.log("post error: " + err);
		        }
	});
});

	app.delete('/api/todo/:id', function (req, res) {
	var todoId = req.params.id;
	db.Todo.findOneAndRemove({_id: todoId }, function(err, deleteTodo) {
         if (err){
            return console.log("index error: " + err);
        }
          res.json(deleteTodo);
	});
});	

// 	app.put('/api/todo/:id', function (req, res) {
// 	var todoId = req.params.id;
// 	var todo = req.body;
// 	db.Todo.findByIdAndUpdate(todoId, todo, {new: true}, function(err, updateTodo) {
//          if (err){
//             return console.log("index error: " + err);
//         }
//           res.json(updateTodo);
// 	});
// });	

	app.listen(process.env.PORT || 3000, function () {
	  console.log('Express server is up and running on http://localhost:3000/');
	});
