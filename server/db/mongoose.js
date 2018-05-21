var mongoose = require("mongoose");
const DB_URL = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

module.exports = {
  mongoose: mongoose
};
