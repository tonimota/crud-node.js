'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
const router = express.Router();

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const pass = process.env.DB_PASS;

// Conexão
mongoose.connect(`mongodb://${username}:${pass}@ds233061.mlab.com:33061/${host}`)

//Models
const Product = require('./models/products')

// Rotas
const index = require('./routes/index');
const produtcs = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/', index);
app.use('/products', produtcs);


module.exports = app;