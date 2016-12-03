var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('Will send all promotions');
})

.post(function(req, res, next) {
  res.end('Add promotion: ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting all promotions');
});

promoRouter.route('/:id')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('get promotion: ' + req.params.id);
})

.put(function(req, res, next) {
  res.write('Updating promotion ' + req.params.id + '\n');
  res.end('Updating promotion ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting promotion ' + req.params.id);
});

module.exports = promoRouter;