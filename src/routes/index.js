'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node storn ApI",
    version: "1.1"
  });
});

module.exports = router;