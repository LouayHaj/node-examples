var jwt = require('jsonwebtoken');
var config = require('../config');

exports.getToken = function(user) {
  return jwt.sign(user, config.sercetKey, {
    expiresIn: 3600
  });
};

exports.verifyOrdinaryUser = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    // decode token
    jwt.verify(token, config.sercetKey, function(err, decoded) {
      if (err) {
        // var err = new Error('Not Authenticated');
        // err.status = 401;
	/**
	 * err = {
	 *   name: 'TokenExpiredError',
	 *   message: 'jwt expired',
	 *   expiredAt: 1408621000
	 * }
	 * err = {
	 *   name: 'JsonWebTokenError',
	 *   message: 'jwt malformed'
	 * }
	 */
        return next(err);
      }
      req.decoded = decoded;
      next();
    });
  } else {
    // no token
    var err = new Error('No token provided');
    err.status = 403;
    return next(err);
  }
};

exports.verifyAdmin = function(req, res, next) {
  // console.log(req.decoded);
  if (req.decoded.admin) {
    return next();
  } else {
    var err = new Error('You are not authorized to perform this operation!');
    err.status = 403;
    return next(err);
  }
};
