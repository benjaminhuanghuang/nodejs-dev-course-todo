const { MongoClient, ObjectID } = require('mongodb');
// const DB_URL = 'mongodb://localhost:27017/TodoApp';
const DB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";

MongoClient.connect(DB_URL, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('db_todo');

    // Fetch all
    db.collection('todos').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos ', err)
    });

    // Fetch count
    db.collection('todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch count ', err)
    });

    // Fetch some
    db.collection('todos').find({ Completed: false }).toArray().then((docs) => {
        console.log("Uncompleted todos:");
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos ', err)
    });

    // Fetch by id
    db.collection('todos').find({ _id: new ObjectID('5844cd867c1a23286650417d') }).toArray().then((docs) => {
        console.log("Todo with id 5844cd867c1a23286650417d:");
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch todos ', err)
    });

    client.close();
});





