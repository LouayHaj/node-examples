var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var dishRouter = require('./dishRouter.js'),
    promoRouter = require('./promoRouter.js'),
    leaderRouter = require('./leaderRouter.js');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
// app.use(bodyParser.json());

/**
 * dishRouter
 */
app.use('/dishes', dishRouter);

/**
 * promoRouter
 */

app.use('/promotions', promoRouter);

/**
 * leaderRouter
 */

app.use('/leadership', leaderRouter);

/**
 * Static files
 */
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});