const express = require('express'); // Declare 'express' first
const mongoose = require('mongoose'); // Declare 'mongoose'
const app = express();

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/Jl-Merchandies'; // Replace with your actual database name

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Set up EJS as the templating engine
app.set('view engine', 'ejs');  // Tells Express to use EJS for rendering views
app.set('views', './views');  // Specifies the location of the views directory

// Product schema (if you haven't defined it yet)
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number
  }
});

const Product = mongoose.model('Product', productSchema);

// Set up Express route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); // This will return the data as JSON
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Set up Express route to render products using EJS (if you want to render HTML)
app.set('view engine', 'ejs');  // Set EJS as the templating engine

app.get('/product-list', async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm || '';
    const query = searchTerm
      ? { title: { $regex: searchTerm, $options: 'i' } }  // case-insensitive search
      : {};
    const products = await Product.find(query); // Apply the search query
    res.render('product-list', { products, searchTerm }); // Render the product-list.ejs template and pass the products
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
