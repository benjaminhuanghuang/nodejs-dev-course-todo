var env = process.env.NODE_ENV || 'development';   // Used in test or prod(heroku) env
console.log(env);
if (env == 'development') {
    process.env.PORT = 8964;
    process.env.MONGODB_URI = "mongodb://admin:admin123@ds119618.mlab.com:19618/db_todo";
}
else if (env == 'test') {
    process.env.PORT = 8964;
    process.env.MONGODB_URI = "mongodb://admin:admin123@ds019936.mlab.com:19936/db_todo_test";
}