var mongoose = require("mongoose");
var { ObjectID } = require("mongoose");
mongoose.Promise = global.Promise;

const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

mongoose.connect(DB_URL);

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((todo) => {
  console.log(todo);
});
