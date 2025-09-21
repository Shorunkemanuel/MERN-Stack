require('dotenv').config();
const express = require('express');
const connectDB = require('../config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API is running 🚀' });
  });

  // Connect to DB
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });