'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Rotas
const index = require('./routes/index');
const produtcs = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/', index);
app.use('/products', produtcs);


module.exports = app;