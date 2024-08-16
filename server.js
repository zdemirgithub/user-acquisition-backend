// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/user_acquisition', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User registration endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).send('User registered');
});

// User login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Get user count
app.get('/user-count', async (req, res) => {
  const count = await User.countDocuments();
  res.json({ count });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
