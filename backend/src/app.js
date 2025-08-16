const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeMongo, mongoose } = require('./utils/db');

const app = express();

initializeMongo().then(() => {
  console.log('MongoDB Ready');
}).catch((err) => {
  console.error(err, `MongoDB Initialization Failed: ${err.message}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

module.exports = app;
