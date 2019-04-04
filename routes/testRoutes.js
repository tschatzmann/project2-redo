var Members = require("../models/members");
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    //methodOverride = require('method-override'); //used to manipulate POST

//Require Member Controller file
member_controller = require('../controllers/memberController');
app = require('../public/js/app');

router.use(bodyParser.urlencoded({ extended: true }))
//router.use(methodOverride(function(req, res){
//       if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//       }
// }))

// GET home page.
console.log('in testRoutes')

// GET member home page
router.get('/', member_controller.index);


/// member ROUTES ///

// GET request for creating member. NOTE This must come before route for id (i.e. display member).
router.get('/member/create', member_controller.member_create_get);

// POST request for creating member.
router.post('/member/create', member_controller.member_create_post);

// GET request to delete member.
router.get('/member/:id/delete', member_controller.member_delete_get);

// POST request to delete member.
router.post('/member/:id/delete', member_controller.member_delete_post);

// GET request to update member.
router.get('/member/:id/update', member_controller.member_update_get);

// POST request to update member.
router.post('/member/:id/update', member_controller.member_update_post);

// GET request for one member.
router.get('/member/:id', member_controller.member_detail);

// GET request for list of all members.
router.get('/members', member_controller.member_list);

module.exports = router;
