require('./config/config');
var express = require("express");
var bodyParse = require("body-parser");
const { ObjectID } = require('mongodb');
const _ = require('lodash');

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

// bodyParse converts json to object and attache it to request
app.use(bodyParse.json());

// Routes
app.post("/todos", (req, res) => {
    var newTodo = new Todo({ text: req.body.text });

    newTodo.save().then(doc => {
        res.send(doc);
    }, err => {
        res.status(400).send(err);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then(
        todos => {
            res.send({ todos });
        },
        err => {
            res.status(400).send(err);
        }
    );
});
// GET /todos/1234
app.get("/todos/:id", (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then(
        todo => {
            if (!todo)
                return res.status(404).send();
            res.send({ todo });
        },
        err => {
            res.status(400).send(err);
        }
    );
});

// Delete
app.delete("/todos/:id", (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    })
        .catch((err) => {
            res.status(400).send();
        });
});

// Update
app.patch("/todos/:id", (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(todo => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({ todo });
        })
        .catch(err => {
            res.status(400).send();
        });
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

// Protected route
app.post("/users/me", (req, res) => {
    var token
});

const PORT = process.env.PORT || 8010; // for prod deployment

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});

module.exports = { app }; // for unit test
