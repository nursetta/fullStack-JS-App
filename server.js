
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

	app.get('/api/project', function(req, res){
    db.Project.find(function(err, project){
        if (err){
            return console.log("index error: " + err);
        }
        res.json(project);
    });
});

	app.get('/api/project/:id', function (req, res) {
	db.Project.findOne({_id: req.params.id }, function(err, data) {
         if (err){
            return console.log("index error: " + err);
        }
          res.json(data);
	});
});

// 	app.post('/api/Project', function (req, res) {
// 		var todo = new db.Todo(req.body);
// 		console.log(todo);
// 		console.log(req.body);
// 		console.log();
// 			todo.save(function(err) {
// 		         if (err){
// 		            return console.log("post error: " + err);
// 		        }
// 	});
// });
	

	app.listen(process.env.PORT || 3000, function () {
	  console.log('Express server is up and running on http://localhost:3000/');
	});
