var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/user');
var Verify = require('./verify');


/* GET users listing. */
router.get('/', Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  // res.send('respond with a resource');
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
});
// facebook Oauth entry
router.get('/facebook', passport.authenticate('facebook'), function(req, res) {});

// facebook Oauth callback
router.get('/facebook/callback', function(req, res, next) {
  passport.authenticate('facebook', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      var token = Verify.getToken(user);
      res.status(200).json({
        status:'Login Success',
        success: true,
	userId: user._id,
        token: token
      });
    });
  })(req, res, next);
});

// register local user
router.post('/register', function(req, res, next) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
    if (err) {
      return res.status(500).json({err: err});
    }
    if (req.body.lastname) {
      user.lastname = req.body.lastname;
    }
    if (req.body.firstname) {
      user.firstname = req.body.firstname;
    }
    user.save(function(err, user) {
      passport.authenticate('local')(req, res, function() {
        // res.redirect('/');
        return res.status(200).json({status:'Register Success'});
      });
    });
  });
});

// local user login
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({err: info});
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in'});
      }
      // var token = Verify.getToken(user);
      var token = Verify.getToken({
        "_id": user._id,
        "username": user.username,
        "admin": user.admin
      });
      return res.status(200).json({status: 'Login Success', userId: user._id, token: token});
    })
  })(req, res, next);
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.status(200).json({status:'bye'});
});

module.exports = router;
