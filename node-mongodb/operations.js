var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback) {
  // Get the documents collection
  var coll = db.collection(collection);

  // Insert some documents
  coll.insert(document, function(err, res) {
    assert.equal(err, null);
    console.log('Inserted ' + res.result.n + ' documents into the document collection ' + collection);
    callback(res)
  });
};

exports.findDocuments = function(db, collection, callback) {
  // Get the doucments collection
  var coll = db.collection(collection);

  // Find some documents
  coll.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    callback(docs);
  });
};

exports.removeDocument = function(db, document, collection, callback) {
  // Get the doucments collection
  var coll = db.collection(collection);

  // Delete some documents
  coll.deleteOne(document, function(err, res) {
    assert.equal(err, null);
    console.log('Removed the document ' + document);
    callback(res);
  });
};

exports.updateDoucment = function(db, document, update, collection, callback) {
  // Get the doucments collection
  var coll = db.collection(collection);

  // Update the document 
  coll.updateOne(document, {$set: update}, null, function(err, res) {
    assert.equal(err, null);
    console.log('Updated the doucment with ' + update);
    callback(res);
  });
};