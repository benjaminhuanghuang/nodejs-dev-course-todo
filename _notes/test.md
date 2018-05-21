## Dependencies
```
    npm i expect mocha supertest -D
```


## Test script
```
    "test": "mocha server/**/*.test.js",
    "test-watch": "nodemon --exec 'npm test'"
```


# Using different DB in dev , test, and prod environment
Set NODE_ENV in Linux or Windows platform
```
"test": "export NODE_ENV=test || SET NODE_ENV=test && mocha server/**/*.test.js",

```
Set process.env 
```
const env = process.env.NODE_ENV || 'development';    // Used in heroku
if (env == 'development') {
    process.env.PORT = 8964;
    process.env.MONGODB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";
}
else if (env == 'test') {
    process.env.PORT = 8964;
    process.env.MONGODB_URL = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo_test";
}
```