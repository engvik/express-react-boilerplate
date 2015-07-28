'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({api: 'It works!'}) ;
});

module.exports = router;
