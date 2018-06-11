const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


/*
    encrypt string by using SHA265
*/
var message = "I am user #3";
var hash = SHA265(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA265(JSON.stringify(token.data) + 'somesecret').toString()
}

var resultHash = SHA265(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log("Data was not changed");
}
else {
    console.log("Data was changed, Do not trust!");
}

/*
    creat and read token by using jwt
*/

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
