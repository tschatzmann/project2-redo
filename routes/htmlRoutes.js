// var Members = require("../models/members");
// var express = require('express');
// var router = express.Router();

// module.exports = function(app) {
//   // Load index page
//   app.get("/", function(req, res) {
//     console.log('in routes home')
//     Members.find({}).then(function(member) {
//       res.render("index", {
//         msg: "Welcome!",
//         examples: member
//       });
//     });
//   });

//   app.get("/registration", function(req, res) {
//     console.log('in html routes register')
//     Members.find({}).then(function(member) {
//       res.render("registration", {
//         msg: "Welcome!",
//         examples: member
//       });
//     });
//   });
  
//   app.get("/profile/:id", function(req, res) {
//     console.log('in profile section in html.routes');
//   //  console.log(member)
//     Members.findOne({ where: { id: req.params.id } }).then(function(member) {
//       console.log('in findone');
//       res.render("profile", {
//         example: member
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
