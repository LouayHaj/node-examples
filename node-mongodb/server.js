var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var dboper = require('./operations');
// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(err, null);
  console.log('Connected correctly to server');

  dboper.insertDocument(db, {
    name: "Vadout",
    description: "Test"
  }, "dishes", function(res) {
    console.log(res.ops);
    
    dboper.findDocuments(db, "dishes", function(docs) {
      console.log(docs);

      dboper.updateDoucment(db, { name: "Vadout" },
        { description: "update test" }, "dishes", function(res) {
        console.log(res.result);

        dboper.findDocuments(db, "dishes", function(docs) {
          console.log(docs);

          db.dropCollection("dishes", function(res) {
            console.log(res);
            db.close();
          });
        });
      });
    });
  });
});