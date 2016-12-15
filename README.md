# Node-Examples

Coursera: Server-side Development with NodeJS

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![MIT License](https://img.shields.io/npm/l/validate-commit-msg.svg?style=flat-square)]()



### Version
Node LTS 6.9.1  
NPM 3.10.8

## Ex.1 node-starter

### Objectives and Outcomes
Understand basic node code & usage of callback.

### Usage
```
node simplerect.js
node solve-1.js
node solve-2.js
node solve-3.js
```

### Resources
+ [node API](https://nodejs.org/dist/latest-v6.x/docs/api/synopsis.html)
+ [yargs](https://github.com/yargs/yargs)

## Ex.2 node-http

### Objectives and Outcomes
set up simple server with node API 'http'

### Usage
```
node server-1.js
node server-2.js
```

### Resources
+ [HTTP wiki](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
+ [List of HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
+ [Node API HTTP](https://nodejs.org/dist/latest-v6.x/docs/api/http.html)

## Ex.3 node-express

### Objectives and Outcomes
+ set up simple server with Express
+ use express.Router() to generate routers
+ understand Connect Middleware

### Usage
```
node server-1.js
node server-2.js
node server-3.js
node server-4.js
node server-assignment.js
```

### Resources
+ [Offical Routing Guide](http://expressjs.com/en/guide/routing.html)
+ [understand express](http://evanhahn.com/understanding-express/)
+ [A short Guide to Connect Middleware](https://stephensugden.com/middleware_guide/)
+ [Connect](https://github.com/senchalabs/connect)
+ [Morgan](https://github.com/expressjs/morgan)
+ [body-parser](https://github.com/expressjs/body-parser)

## Ex.4 node-express-generate

### Objectives and Outcomes
+ Quickly scaffold out a typical Express application using express-generator
+ Build an Express server to support REST API

### Usage
```
npm install -g express-generator
express <appName>
cd <appName>
npm install
npm start
```

### Resources
+ [Express Generator](http://expressjs.com/en/starter/generator.html)


## Ex.5 Intro to MongoDB 

### Installation

www.mongodb.org

### Usage

```
mongod --dbpath=data

=== open another terminal ===

mongo
db
use conFusion
db.help()
db.dishes.insert({name:"Uthapizza", description:"Test"});
db.find({}).pretty();

var id = new ObjectId();
id.getTimestamp();

```



### MongoDB Resources

- [MongoDB](http://www.mongodb.org/)
- [MongoDB documentation](http://docs.mongodb.org/manual/)
- [MongoDB Installation](http://docs.mongodb.org/manual/installation/)
- [The mongo Shell](http://docs.mongodb.org/manual/mongo/)

## Ex.6 node-mongodb

### MongoDB Driver

npm module

```
npm install mongodb --save
npm install assert --save
```

#### simpleserver

connet to mongodb, insert one, find, and finally close connection.

```
node simpleserver.js
```
simple demo to use mongodb module to connect db
```
node server.js
```
encapsulate db methods in operation.js

### MongoDB Driver Resources

- [npm mongodb](https://www.npmjs.com/package/mongodb)
- [npm assert](https://www.npmjs.com/package/assert)
- [MongoDB Native Driver](https://github.com/mongodb/node-mongodb-native)
- [MongoDB NodeJS Native Driver Documentation](http://mongodb.github.io/node-mongodb-native/)

## Ex.7 node-mongoose

### Installation
```
npm install mongoose --save
npm install assert --save
```
### demo-1
```
node server-1.js
```
create dish by new Dishes(), then dish.save() method
find dishes by Dishes.find()
### demo-2
```
node server-2.js
```
create dish by Dishes.create()
find dish by Dishes.findByIdAndUpdate()
### demo-3
```
node server-3.js
```
add commentSchema in dishes-3.js 
find dish by Dishes.findByIdAndUpdate()
add dish.comments by dish.comments.push(), dish.save()

## Mongoose Resources

- [Mongoose](http://mongoosejs.com/)
- [Mongoose Documentation](http://mongoosejs.com/docs/guide.html)
- [Mongoose Schemas](http://mongoosejs.com/docs/guide.html)
- [Mongoose Models](http://mongoosejs.com/docs/models.html)
- [Mongoose Sub-documents](http://mongoosejs.com/docs/subdocs.html)
- [Mongoose-currency](https://www.npmjs.com/package/mongoose-currency)
## Other Resources

- [Multiple collections vs Embedded documents](http://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/#1)


## Ex.8 rest-server

### Objectives and Outcomes

- Develop a full-fledged REST API server with Express, MongoDB and Mongoose
- Implement the end-to-end solution integrating Express, Node and Mongo.



### Installation

```
express rest-server
cd rest-server
npm install
npm install mongoose mongoose-currency --save
```



### Configuration

#### app.js

```javascript
// mongoose
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  // connected
  console.log('Connected correctly to Server');
});

```

#### routes/dishRouter.js

```javascript
var mongoose = require('mongoose');
var Dishes = require('../models/dishes.js');

dishRouter.route('/')
.get(function(req, res, next) {

})
.post(function(req, res, next) {
  
})
.delete(function(req, res, next) {
  
});
dishRouter.route('/:dishId')
.get(function(req, res, next) {
  
})
.put(function(req, res, next) {
  
})
.delete(function(req, res, next) {
  
});

dishRouter.route('/:dishId/comments')
.get(function(req, res, nenxt) {
  
})
.post(function(req, res, next) {
  
})
.delete(function(req, res, next) {
  
});
dishRouter.route('/:dishId/comments/:commentId')
.get(function(req, res, next) {
  
})
.put(function(req, res, next) {
  
})
.delete(function(req, res, next) {
  
});
```

similar as promoRouter, leaderRouter

### Resources

- [Build a RESTful API Using Node and Express 4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
- [Creating RESTful APIs With NodeJS and MongoDB Tutorial (Part II)](http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/)
- [CREATING A SIMPLE RESTFUL WEB APP WITH NODE.JS, EXPRESS, AND MONGODB](http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/)




## Ex.9 Authentication

### 1.Basic Authentication

#### Objectives and Outcomes

- Understood the basics of user authentication
- Used basic authentication support to authenticate users.

#### Not Authenticated

```javascript
var authHeader = req.headers.authorization;    
if (!authHeader) {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
        return;
    }
```

#### check user&password

```javascript
    var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == 'password') {
        next(); // authorized
    } else {
        var err = new Error('You are not authenticated!');
        err.status = 401;
        next(err);
    }
```

#### Error handle Middleware

```javascript
app.use(auth);

...

app.use(function(err,req,res,next) {
            res.writeHead(err.status || 500, {
            'WWW-Authenticate': 'Basic',
            'Content-Type': 'text/plain'
        });
        res.end(err.message);
});
```

#### Usage

```shell
// basic-auth
node server.js
```

visit localhost:3000 with browser

#### Resources

- [Basic acccess authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) (Wikipedia)
- [Basic Access Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basic_access_authentication)


### 2. Authentication with Cookies

#### Objectives and outcomes

- Set up your Express application to send signed cookies.
- Set up your Express application to parse the cookies in the header of the incoming request messages

#### Installation

```shell
npm install cookie-parser --save
```

#### Secret key

```javascript
var cookieParser = require('cookie-parser');
...

app.use(cookieParser('12345-67890-09876-54321'));
```

#### First/Subsequent Authentication

```javascript
function auth(req, res, next) {
  
  if (!req.signedCookies.user) {
    ... // First Authentication
    if (user === 'admin' && pass ==='password') {
      // authorized
      res.cookie('user', 'admin', {signed: true});
      next();
    } else {
      ...
    }
  } else {
    // Subsequent Authentication
    if (req.signedCookies.user === 'admin') {
      next();
    } else {
      var err = new Error('Not Authenticated!');
      err.status = 401;
      next(err);
    }
  }
}
```

#### Usage

```shell
// basic-auth
node server-2.js
```

#### Cookie Resources

- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [HTTP Cookies](https://en.wikipedia.org/wiki/HTTP_cookie)

### 3. Authentication with Express Sessions

#### Objectives and Outcomes

- Set up your Express server to use Express sessions to track authenticated users
- Enable clients to access secure resources on the server after authentication.

#### Installation

```shell
npm install express-session session-file-store --save
```

#### Configuration

```javascript
var session = require('express-session');
var FileStore = require('session-file-store')(session);

...

app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: true,
  resave: true,
  store: new FileStroe()
}));
```

#### First/Subsequent Authentication

```javascript
function auth(req, res, next) {
  if (!req.session.user) {
    // First Authentication
    if (user === 'admin' && pass === 'password') {
      // authorized
      req.session.user = 'admin';
      next();
    }
  } else {
    // Subsequent Authentication
    if (req.session.user === 'admin') {
      next();
    } else {
      var err = new Error('Not Authenticated!');
      err.status = 401;
      next(err);
    }
  }
}
```

#### Usage

```shell
// basic-auth
node server-3.js
```

#### Local Session Store

With session-file-store, the session files now saved in basic_folder/session

#### Exrepss Session Resources

- [express-session](https://github.com/expressjs/session)
- [session-file-store](https://www.npmjs.com/package/session-file-store)
- [Sessions in Express.js](http://expressjs-book.com/index.html%3Fp=128.html)
- [Express Session Management](http://www.javabeat.net/expressjs-session-management/)

