var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  favList: [
    new Schema({
      dish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
      }
    }, {
      timestamps: true
    })
  ]
}, {
  timestamps: true
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;