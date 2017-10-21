var db = require('./models');

var projects= [
  {
  project: "Qualifi",
},
  {
  project: "Politicator",
},
  {
  project: "Project 4",
}

];

db.Project.remove({}, function(err, project){
	if (err) { return console.log ('err', err); 
	} else {
		console.log('removed all items');

	db.Project.create(projects, function (err, project){
		if (err) { return console.log ('error:', err);
	}
		console.log("created", projects.length, "projects");
		process.exit();
		});
	}
});
