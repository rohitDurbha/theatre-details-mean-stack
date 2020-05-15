const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Theater = new Schema({
   name: {
      type: String
   },
   address: {
      type: String
   },
   capacity: {
      type: Number
   },
   type: {
      type: String
   },
   revenue: {
      type: Number
   },
   price_range: {
      type: String
   }
}, {
   collection: 'theaters'
})

module.exports = mongoose.model('Theater', Theater)
