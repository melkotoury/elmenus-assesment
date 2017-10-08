var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Categories
var Category = new Schema({
  category_name: {
    type: String
  },
  category_description: {
    type: String
  },

},{
	collection: 'Categories'
});

module.exports = mongoose.model('Category', Category);
