const { MongoClient, ObjectID } = require('mongodb');
// const DB_URL = 'mongodb://localhost:27017/TodoApp';
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

MongoClient.connect(DB_URL, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('db_todo');

    // Delete all
    db.collection('todos').deleteMany({}).then((result) => {
        console.log(result);
    })

    // Delete many
    db.collection('todos').deleteMany({ Title: "a" }).then((result) => {
        console.log(result);
    })

    // Delete one
    db.collection('todos').deleteOne({ Title: "Gym" }).then((result) => {
        console.log(result);
    })

    // findOneAndDelete 
    db.collection('todos').findOneAndDelete({ Completed: false }).then((result) => {
        console.log(result.value);
    })
    client.close();
});





