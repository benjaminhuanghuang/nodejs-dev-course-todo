## Mongo online
```
    $ heroku addons:create mongolab:sandbox  # fee version
    $ heroku config
```
```
    const DB_URL = process.env.MONGODB_URI || "mongodb://xxxx";
```

## Port in config
```
    const PORT = process.env.PORT || 8010; // for prod deployment
```

## Tell heroku how to start app
in package.json
```
    "start": "node server.js"
```

## Setup node version for heroku
in package.json
```
    "engines": {
        "node": "8.10.0"
    },
```

## Push project to heroku
```
    $ heroku create
    $ git push heroku master
```

## Heroku commands
```
    heroku logs
```