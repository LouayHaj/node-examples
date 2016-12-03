var express = require('express');
var bodyParser = require('body-parser');

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('Will send all dishes');
})

.post(function(req, res, next) {
  res.end('Add dish: ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting all dishes');
});

dishRouter.route('/:id')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('get dish: ' + req.params.id);
})

.put(function(req, res, next) {
  res.write('Updating dish ' + req.params.id + '\n');
  res.end('Updating dish ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting dish ' + req.params.id);
});

module.exports = dishRouter;