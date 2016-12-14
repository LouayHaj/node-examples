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