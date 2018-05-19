const {MongoClient, ObjectID}  = require('mongodb');
// const DB_URL = 'mongodb://localhost:27017/TodoApp';
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

/*
  In MongoClient 3.0, functions on db were moved to client.db and client
*/
MongoClient.connect(DB_URL, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('db_todo'); 
  
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // Insert new doc into Users (name, age, location)
  db.collection('users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});




