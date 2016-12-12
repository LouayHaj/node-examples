var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  comments: [commentSchema],
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: mongoose.Types.Currency,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;