var mongoose = require("mongoose");
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

module.exports = {
  mongoose: mongoose
};
