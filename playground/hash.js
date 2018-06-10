const { SHA265 } = require('crypto-js');

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