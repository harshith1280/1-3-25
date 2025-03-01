const express = require('express');
const mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

listen(2000, () => console.log('Server Started on http://localhost:2000'));
