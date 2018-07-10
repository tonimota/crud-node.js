'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conexão
mongoose.connect('mongodb://tonielton:toni123@ds233061.mlab.com:33061/node-store')
// Rotas
const index = require('./routes/index');
const produtcs = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/', index);
app.use('/products', produtcs);


module.exports = app;