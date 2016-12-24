var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var Favorite = require('../models/favorites');
var Verify = require('./verify');


router.use(bodyParser.json());

router.route('/')
.all(Verify.verifyOrdinaryUser)

.get(function(req, res, next) {
  Favorite.findOne({
    user: req.decoded._doc._id
  })
  .populate('user')
  .populate('favList.dish')
  .exec(function(err, favorite) {
    if (err) {
      return next(err);
    }
    res.json(favorite);
  });
})

.post(function(req, res, next) {
  Favorite.findOne({
    user: req.decoded._doc._id
  }, function(err, favorite) {
    if (err) throw err;
    // req.body._id -> dish object id required
    if (!req.body._id) {
      var nerr = new Error('dish object id not provided');
      nerr.status = 500
      return next(nerr);
    }
    // validate dishId exists
    // check user's favorites exists or not
    if (!favorite) {
     Favorite.create({
       user: req.decoded._doc._id,
       favList: {
         dish: req.body._id
       }
     }, function(err, fav) {
       if (err) throw err;
       console.log('Favorite created');
       res.json(fav);
     }); 
    } else {
      if(favorite.favList.some(function(item) {
        return item.dish == req.body._id;
      })) {
        console.log('dish already in favorite');
        return res.json({
          'message': 'this dish already in favorite'
        });
      } else {
        favorite.favList.push({
          dish: req.body._id
        });
        favorite.save(function(err, fav) {
          if (err) throw err;
          console.log('Favorite saved');
          res.json(fav);
        });
      }
    }

  });
})

.delete(function(req, res, next) {
  Favorite.remove({
    user: req.decoded._doc._id
  }, function(err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

router.route('/:dishObjectId')
.all(Verify.verifyOrdinaryUser)

// .post(function(req, res, next) {

// })

.delete(function(req, res, next) {
  Favorite.findOne({
    user: req.decoded._doc._id
  }, function(err, favorite) {
    favorite.favList.forEach(function(item,idx,arr) {
      if(item.dish == req.params.dishObjectId) {
        favorite.favList[idx].remove();
      }
    })
    favorite.save(function(err, favorite) {
      if (err) throw err;
      console.log('Deleted favorite');
      res.json(favorite);
    });
  });
});

module.exports = router;