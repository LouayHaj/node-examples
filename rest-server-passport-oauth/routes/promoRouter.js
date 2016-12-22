var express = require('express');
var bodyParser = require('body-parser');

var Promos = require('../models/promotions');
var Verify = require('./verify');
var verifyUser = Verify.verifyOrdinaryUser;
var verifyAdmin = Verify.verifyAdmin;

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
// .all(function(req, res, next) {
//   res.writeHead(200, {
//     'ContentType': 'text/plain'
//   });
//   next();
// })

.get(verifyUser, function(req, res, next) {
  // res.end('Will send all promotions');
  Promos.find({}, function(err, promos) {
    if (err) throw err;
    res.json(promos);
  });
})

.post(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Add promotion: ' + req.body.name + ' with detail ' + req.body.description);
  Promos.create(req.body, function(err, promo) {
    if (err) throw err;
    var id = promo._id;
    res.writeHead(200, {
      'ContentType': 'text/plain'
    });
    res.end('Promotion created: ' + id);
  });
})

.delete(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Deleting all promotions');
  Promos.remove({}, function(err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

promoRouter.route('/:id')
// .all(function(req, res, next) {
//   res.writeHead(200, {
//     'ContentType': 'text/plain'
//   });
//   next();
// })

.get(verifyUser, function(req, res, next) {
  // res.end('get promotion: ' + req.params.id);
  Promos.findById(req.params.id, function(err, promo) {
    if (err) throw err;
    res.json(promo);
  });
})

.put(verifyUser, verifyAdmin, function(req, res, next) {
  // res.write('Updating promotion ' + req.params.id + '\n');
  // res.end('Updating promotion ' + req.body.name + ' with detail ' + req.body.description);
  Promos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, {
    new : true
  }, function(err, promo) {
    if (err) throw err;
    res.json(promo);
  });
})

.delete(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Deleting promotion ' + req.params.id);
  Promos.findByIdAndRemove(req.params.id, function(err, resp) {
    if (err) throw err;
    res.json(resp);
  });
});

module.exports = promoRouter;