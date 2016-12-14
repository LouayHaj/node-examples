var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes-1.js');

// Connection to URL
var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function() {
  // we're connected!
  console.log('Connected correctly to Server');

  // create a new dish
  Dishes.create({
    name: 'Uthapizza',
    description: 'Test'
  }, function(err, dish) {
    if (err) throw err;

    console.log('Dish created');
    console.log(dish);
    var id = dish._id;

    // get all dishes
    setTimeout(function() {
      Dishes.findByIdAndUpdate(id, {
        $set: {
          description:'Updated test'
        }
        }, {
          // return updated dish
          new : true
      })
      .exec(function(err, dish) {
        if (err) throw err;
        console.log('Updated dish!');
        console.log(dish);

        db.collection('dishes').drop(function() {
          db.close();
        });
      });
    }, 3000);
  });
;})