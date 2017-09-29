var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  item_name: {
    type: String
  },
    item_price: {
    type: Number,
    min:0
  },
    item_description:{
      type: String
    },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]


},{
	collection: 'items'
});

module.exports = mongoose.model('Item', Item);
