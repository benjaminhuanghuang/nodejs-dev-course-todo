var express = require("express");
var bodyParse = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

// bodyParse converts json to object and attache it to request
app.use(bodyParse.json());
app.post("/todos", (req, res) => {
  var newTodo = new Todo({ text: req.body.text });

  newTodo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.listen(8010, () => {
  console.log("Started on port 8010");
});

module.exports = { app }; // for unit test
