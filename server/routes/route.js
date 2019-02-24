var express = require('express');
var router = express.Router();
const User = require('../model/model');

router.get('/users', (req, res, next) => {
    User.find(function(err, users) {
        if(err) {
            res.json(err);
        } else {
            res.json(users);
        }
    })
});

router.post('/user', (req,res, next) => {
 let newUserDetail = new User({
     userTypeId: req.body.userTypeId,
     userName: req.body.userName,
     email: req.body.email,
     password: req.body.password,
 });
 newUserDetail.save((err,user) => {
     if(err) {
         res.json(err);
     } else {
         res.json({msg: 'User has been added to db'});
     }
 });
});

router.put('/user/:id', (req,res, next) => {

    User.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            userTypeId: req.body.userTypeId,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        }
    },
        function (err, result) {
            if(err) {
            res.json(err)
            } else {
                res.json(result)
            }      
        });
    });

router.delete('/user/:id', (req, res, next) => {
    User.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;