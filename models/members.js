var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  firstName: {
    type: String,
    trim: true,
    required: "First Name Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Last Name Required"
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required."
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: "Password is Required.",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: emailVaildation() //[/.+@.+\..+/, "Please enter a valid e-mail address."]
    
   
  },
  answers: {
    type: Array,
    trim: true,
    default: null
    // required: "Please answer the question so we can find the best match!"
  },
  languages: {
    type: Array,
    trim: true,
    default: null
    // required: "We want to know what languages you are familiar with!"
  }
});
// `date` must be of type Date. The default value is the current date
//   userCreated: {
//     type: Date,
//     default: Date.now
//   },
// `isCool` must be of type Boolean
// `isCool` is set to false if no value is supplied for it
//   isCool: {
//     type: Boolean,
//     default: false
//   }
// });

// Custom Instance Methods

// Custom method `coolifier`
// UserSchema.methods.coolifier = function() {
//   // Adds "...theCoolest" to the end of the current user's username
//   this.username = this.username + "...the Coolest!";
//   // Return the new username
//   return this.username;
// };

// Custom method `makeCool`
// UserSchema.methods.makeCool = function() {
//   // Make the "isCool" property of the current user equal to the boolean "true"
//   this.isCool = true;
//   // Return the new boolean value
//   return this.isCool;
// };

// email vaildation -- had modal box reconfig....
function emailVaildation() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(UserSchema)) {
    $('#email').addClass('is-invalid');
    var message = 'Please enter vaild email.'
    $('#error').empty().append(message);
    console.log(message);
  } else {
    $('#email').removeClass('is-invalid');
  }
};

// This creates our model from the above schema, using mongoose's model method
var Members = mongoose.model("members", UserSchema);

// Export the User model
module.exports = Members;
