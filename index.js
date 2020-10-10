const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');

const MONGODB_URI =
  'mongodb+srv://vzhurbin:3ii25kiQRh0lKinB@market.ffdmw.mongodb.net/market?retryWrites=true&w=majority';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log('Log', err));
