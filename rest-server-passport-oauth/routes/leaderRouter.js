var express = require('express');
var bodyParser = require('body-parser');

var Leader = require('../models/leadership');
var Verify = require('./verify');
var verifyUser = Verify.verifyOrdinaryUser;
var verifyAdmin = Verify.verifyAdmin;

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

.get(function(req, res, next) {
  // res.end('Will send all leadership');
  Leader.find(req.query, function(err, leader) {
    if (err) return next(err);
    res.json(leader);
  });
})

.post(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Add leadership: ' + req.body.name + ' with detail ' + req.body.description);
  Leader.create(req.body, function(err, leader) {
    if (err) return next(err);
    res.json(leader);
  });
})

.delete(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Deleting all leadership');
  Leader.remove({}, function(err, resp) {
    if (err) return next(err);
    res.json(resp);
  });
});

leaderRouter.route('/:id')

.get(function(req, res, next) {
  // res.end('get leadership: ' + req.params.id);
  Leader.findById(req.params.id, function(err, leader) {
    if (err) return next(err);
    res.json(leader);
  });
})

.put(verifyUser, verifyAdmin, function(req, res, next) {
  // res.write('Updating leadership ' + req.params.id + '\n');
  // res.end('Updating leadership ' + req.body.name + ' with detail ' + req.body.description);
  Leader.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, {
    new: true
  }, function(err, leader) {
    if (err) return next(err);
    res.json(leader);
  });
})

.delete(verifyUser, verifyAdmin, function(req, res, next) {
  // res.end('Deleting leadership ' + req.params.id);
  Leader.findByIdAndRemove(req.params.id, function(err, resp) {
    if (err) return next(err);
    res.json(resp);
  });
});

module.exports = leaderRouter;