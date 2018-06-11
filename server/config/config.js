/*
    TODO: Add server/config/config.json to .gitignore 
*/
var env = process.env.NODE_ENV || 'development';   // Used in test or prod(heroku) env

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}
