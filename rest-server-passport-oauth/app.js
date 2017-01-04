var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// CORS
var cors = require('cors');

// routes
var index = require('./routes/index');
var users = require('./routes/users');
var favoriteRouter = require('./routes/favoriteRouter');

var dishRouter = require('./routes/dishRouter');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');

// configuration
var config = require('./config.js');
// mongoose
var mongoose = require('mongoose');
// passport
var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
var authenticate = require('./authenticate');

mongoose.connect(config.mongodbUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  // connected
  console.log('Connected correctly to Server');
});

var app = express();

// app.all('*', function(req, res, next) {
//   /**
//    * Allow CORS and custom header
//    */
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Request-With, customHeaders');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
//   /**
//    * OPTIONS quick response
//    */
//   if (req.method == 'OPTIONS') {

//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
app.use(cors());

app.all('*', function(req, res, next) {
  /**
   * Forcing HTTPS 
   */
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.hostname + ':' + app.get('secuPort') + req.url);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// passport config
// var User = require('./models/user.js');
app.use(passport.initialize());
// // passport.use(new LocalStrategy(User.authenticate()));
// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use('/', index);
app.use('/users', users);
app.use('/favorites', favoriteRouter);

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
