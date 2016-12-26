var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user.js');
// register facebook developer, create and fulfill fbConf.js as fbConf-demo.js
var fbConf = require('./fbConf');
var FacebookStrategy = require('passport-facebook').Strategy;

// passport.use(new LocalStrategy(User.authenticate()));

// local strategy
exports.local = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// facebook oauth
exports.facebook = passport.use(new FacebookStrategy({
  clientID: fbConf.facebook.appId,
  clientSecret: fbConf.facebook.appSecret,
  callbackURL: fbConf.facebook.appCallback
}, function(accessToken, refreshToken, profile, done) {
  User.findOne({
    OauthId: profile.id
  }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!err && user !== null) {
      // current Oauth user exists
      done(null, user);
    } else {
      // Oauth complete, create local user
      user = new User({
        username: profile.id
      });
      user.OauthId = profile.id;
      user.OauthToken = profile.accessToken;
      user.save(function(err, user) {
        if (err) return next(err);
        console.log('Oauth User created');
        done(null, user);
      });

    }
  });
}));

