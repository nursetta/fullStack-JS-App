var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  project: String,
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;