var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
}, 
{
  // createdAt & updateAt
  timestamps: true
});

// create model
var Dishes = mongoose.model('Dish', dishSchema);
// make this available to out Node application
module.exports = Dishes;