var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

var promoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }, 
  image: {
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
  feature: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  }
  
}, {
  timestamps: true
});

var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;