const expect = require("expect");
const request = require("supertest");
//
const { app } = require("../server");
const { Todo } = require("../models/todo");

beforeEach(done => {
  Todo.remove({}).then(() => {
    done();
  });
});

describe("POST /todos", () => {
  it("should create a new toto", done => {
    var text = "Test toto text";
    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });

  it("should not create a new toto with invalid body data", done => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch(err => {
            done(err);
          });
      });
  });
});

describe("POST /user/login :", () => {
  it('should login user and return auth token', (done)=>{
    request(app).post('/users/login').send({
      email:users[1].email,
      password:users[1].password
    })
    .expect(200)
    .expect((res)=>{
      expect(res.headers['x-auth']).toExist();
    })
    .end((err, res)=>{
      if(err){
        return done(err);
      }

      User.findById()
    });
  });

  it('should reject invalid login', (done)=>{
    request(app).post('/users/login').send({
      email:users[1].email,
      password:users[1].password
    })
  });
});