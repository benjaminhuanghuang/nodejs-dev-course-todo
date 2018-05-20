const { MongoClient, ObjectID } = require('mongodb');
// const DB_URL = 'mongodb://localhost:27017/TodoApp';
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

MongoClient.connect(DB_URL, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('db_todo');

  // findOneAndUpdate $set, $inc
  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5b003f15af03dafe626eacd0')
  },
    {
      $set: {
        name: 'Andrew'
      },
      $inc: {
        age: 1
      }
    },
    {
      returnOriginal: false  // return updated docs
    }).then((result) => {
      console.log(result);  // return updated docs
    });

  client.close();
});





