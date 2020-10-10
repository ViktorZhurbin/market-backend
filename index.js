const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const adminRoutes = require('./routes/admin');

('mongodb+srv://vzhurbin:3ii25kiQRh0lKinB@market.ffdmw.mongodb.net/market?retryWrites=true&w=majority');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes);

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log('Log', err));
