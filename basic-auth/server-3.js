var express = require('express'),
    morgan = require('morgan'),
    session = require('express-session'),
    FileStore = require('session-file-store')(session);

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}));

/**
 * Cookies & Sessions
 */
function auth(req, res, next) {
  console.log(req.headers);
  if (!req.session.user) {
    // First Authentication
    var authHeader = req.headers.authorization;
    if(!authHeader) {
      var err = new Error('Not Authenticated!');
      err.status = 401;
      next(err);
      return;
    }

    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if(user === 'admin' && pass === 'password') {
      // authenticated
      req.session.user = 'admin';
      next();
    } else {
      var err = new Error('Not Authenticated!');
      err.status = 401;
      next(err);
    }
  } else {
    if (req.session.user === 'admin') {
      next();
    } else {
      var err = new Error('Not Authenticated!');
      err.status = 401;
      next(err);
    }
  }
}

app.use(auth);

app.use(express.static(__dirname + '/public'));

app.use(function(err, req, res, next) {
  res.writeHeader(err.status || 500, {
    'WWW-Authenticate' : 'Basic',
    'Content-Type': 'text/plain'
  });
  res.end(err.message);
});

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
})