var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Category
var Category = new Schema({
    english_name: {
        type: String
    },
    english_description:{
        type: String
    },

},{
    collection: 'categories'
});

module.exports = mongoose.model('Category', Category);
