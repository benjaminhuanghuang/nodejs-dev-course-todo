var mongoose = require("mongoose");
var { ObjectID } = require("mongoose");

const { Todo } = require("../server/models/todo");
mongoose.Promise = global.Promise;
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

mongoose.connect(DB_URL);

var id = "5b00f7ac46c2de7cca15c996";

if (!ObjectID.isValid(id)) {

}


Todo.find({
  _id: id
}).then((todos) => { console.log(todos) });

Todo.findOne({
  _id: id
}).then((todos) => { console.log(todos) })

Todo.findById(id).then((todo) => {
  if (!todo)
    return console.log("Not found");
  console.log(todo)
})