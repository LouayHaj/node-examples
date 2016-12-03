var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

// app.use(bodyParser.json());

var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType' : 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('Will send all the dishes');
})

.post(function(req, res, next) {
  res.end('Will add dish: ' +　req.body.name + ' with detail ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all(function(req, res, next) {
  res.writeHead(200, {
    'ContentType' : 'text/plain'
  });
  next();
})

.get(function(req, res, next) {
  res.end('Will send  dish for you: ' + req.params.dishId);
})

.put(function(req, res, next) {
  res.write('Will update the dish:' + req.params.dishId + '\n');
  res.end('dish: ' + req.body.name + ' with details ' + req.body.description);
})

.delete(function(req, res, next) {
  res.end('Deleting dish: ' + req.params.dishId);
})

app.use('/dishes', dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});