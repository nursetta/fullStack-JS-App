var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  todoItem: String,
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;