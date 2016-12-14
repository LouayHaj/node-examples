var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-1.js');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  // We're connected!
  console.log('Connected correctly to Server');
  
  // Create a new dish
  var newDish = Dishes({
    name: 'Uthapizza',
    description: 'Test'
  });

  // save the dish
  newDish.save(function(err) {
    if (err) throw err;
    console.log('Dish created!');

    // get all dishes
    Dishes.find({}, function(err, dishes) {
      if (err) throw err;
      
      // objects of all dishes
      console.log(dishes);

      db.collection('dishes').drop(function() {
        db.close();
      });
    });
  });
})