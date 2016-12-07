var mongoClient = require('mongodb');
var assert = require('assert');

var url = 'mongodb://192.168.1.112:27017/conFusion';

// use mongodb connect method to connect the server
mongoClient.connect(url, function(err, db) {
  assert.equal(err, null);
  console.log('Conneted to mongodb Server');

  var collection = db.collection("dishes");

  // callback based usage of mongodb
  collection.insertOne({name: "Uthapizza", description:"test"}, 
    function(err, res) {
      assert.equal(err, null);
      console.log('After insert: ', res.ops);


      // list all after insert
      collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log('Found: ', docs);

        // disconnet after find()
        db.dropCollection('dishes', function(err, res) {
        assert.equal(err, null);
        db.close();
        });
      });
  });
  

});