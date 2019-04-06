var mongoose = require("mongoose");
var Member = require('../models/members');
var express = require("express");
var router = require('../routes/testRoutes')
//var membercontroller = {};


console.log('in membercontroller')

//Display all members
exports.index = function (req,res){
    res.render("index")
}

exports.member_detail_get = function (req,res){
      Members.findOne({ email: req.body.loginEmail })
    .then(function (dbMember) {
      console.log('in login')
      console.log(req.body.loginEmail);

      console.log("dbMember", dbMember);
      userLoginId = dbMember.id;
      console.log('login dbMember ' + userLoginId)
      // If any Books are found, send them to the client
      if (dbMember.password === req.body.loginPassword) {
        app.locals.user = dbMember;
        app.locals.id = dbMember.id;
        res.render("profile", app.locals.user);
      } else {
        console.log("Wrong password!");
        app.locals.user = dbMember;
        res.render("404", app.locals.user);
      }
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
    res.render("profile");
};

exports.member_create_post = function (req,res){
   // res.send('not done user profile' + req.params.id)
  // res.render('registration');
    //app.post("/registerSubmit", function (req, res) {
        // Create a new member in the database
        Members.create(req.body)
          .then(function (dbMember) {
            //getMatches(req.body);
            console.log("dbMember", dbMember);
            // If the member was updated successfully, send it back to the client
            res.render("index", dbMember);
          })
          .catch(function (err) {
            // If an error occurs, send it back to the client
            console.log("There was an error signing up!");
            console.log(res.json(err));
          });
     // });
      res.render("profile");
};

exports.member_create_get = function (req,res){
   res.render('registration')
};

exports.member_register_post = function (req,res){
    res.render('registration')
};
exports.member_update_get = function (req,res){
    res.send('not done user profile')
};

exports.member_update_post = function (req,res){
   // res.send('not done user profile')
   // app.post("/submitQuestions/", function (req, res) {
        console.log('in submitQueustions');
        a = req.body.answers;
        //let a = [1,3,4,1,3,4,5,3,1,]
        id = userLoginId;
        console.log(id);
        console.log(a);
        console.log('before mongo call')
        debugger;
        Members.findOneAndUpdate(
          { _id: id },
          {
            answers: a
          }
        ).then(function (dbMember) {
          debugger;
          console.log('return from mongo call')
          console.log(dbMember);
          dbMember.answers = a;
          console.log('calling matches')
          res.render("matches", dbMember);
        })
          .catch(function (err) {
            // If an error occurs, send it back to the client
            console.log("There was an error saving your answers!");
            // console.log(res.json(err));
          })
     // });
};

exports.member_delete_get = function (req,res){
    res.send('not done user profile')
};
exports.member_delete_post = function (req,res){
    res.send('not done user profile')
};
//module.exports = router;