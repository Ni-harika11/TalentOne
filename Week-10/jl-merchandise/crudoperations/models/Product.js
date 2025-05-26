const mongoose = require('mongoose');


//Products Schema
const productSchema = new mongoose.Schema({
  id:{type: Number, required: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  rating:{
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 } 
  },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
