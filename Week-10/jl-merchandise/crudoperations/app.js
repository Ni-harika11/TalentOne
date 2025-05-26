const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv'); 

dotenv.config();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes=require('./routes/productRoutes')

const app = express();
//middleware
app.use(express.json());
app.use(cors());

//images  // static files
app.use('/images', express.static('images'));
// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB error:', err));

const protectedRoute = require('./middleware/protectedRoute');
app.use('/api', protectedRoute);

module.exports = app;


