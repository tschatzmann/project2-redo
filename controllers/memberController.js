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

exports.member_list = function (req,res){
    res.send('not ready to list all members')
};

exports.member_detail = function (req,res){
    res.send('not done user profile' + req.params.id)
};

exports.member_create_get = function (req,res){
    res.send('not done user profile')
};

exports.member_create_post = function (req,res){
    res.send('not done user profile')
};
exports.member_update_get = function (req,res){
    res.send('not done user profile')
};

exports.member_update_post = function (req,res){
    res.send('not done user profile')
};

exports.member_delete_get = function (req,res){
    res.send('not done user profile')
};
exports.member_delete_post = function (req,res){
    res.send('not done user profile')
};
//module.exports = router;