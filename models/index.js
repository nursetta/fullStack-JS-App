var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/card-app");

module.exports.Todo= require("./todo.js");
