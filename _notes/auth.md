```
    nmp i jsonwebtoken -S
```



## Middleware
Check token in router
```
app.post("/users/me", (req, res) => {
    var token = req.header('x-auth');
    User.findByToken(token).then((user)=>{
        if(!user)
        {
            return Promise.reject();
        }
        res.send(user);
    }).catch((e)=>{
        res.status(401).send();
    });
});
```
Refactor it to middleware:
```
var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    });
};


app.get('/users/me', authenticate, (req, res) => {
    // req.user comes form middleware
    res.send(req.user);
});
```


## Hash user password


## 