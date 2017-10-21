var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/portfolio-app");

module.exports.Project= require("./project.js");
