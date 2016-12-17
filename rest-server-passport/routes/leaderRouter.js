var express = require('express');
var bodyParser = require('body-parser');

var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('Will send all leadership');
})

.post(function(req, res, next) {
  res.end('Add leadership: ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting all leadership');
});

leaderRouter.route('/:id')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType': 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('get leadership: ' + req.params.id);
})

.put(function(req, res, next) {
  res.write('Updating leadership ' + req.params.id + '\n');
  res.end('Updating leadership ' + req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting leadership ' + req.params.id);
});

module.exports = leaderRouter;