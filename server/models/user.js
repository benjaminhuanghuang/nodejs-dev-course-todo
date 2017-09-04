var mongoose = require("mongoose");

// create a mongoose model
var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength:3,
    trim:true
  } 
});


module.exports = {User};