var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/nodejs-todo", {useMongoClient: true});

module.exports = {
  mongoose: mongoose
};
