var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

mongoose.connect(DB_URL);

// create a mongoose model
var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({});

newTodo.save()
  .then(doc => {
    console.log("Save todo", doc);
  })
  .catch(err => {
    console.log("Unable to save todo", err);
  });
