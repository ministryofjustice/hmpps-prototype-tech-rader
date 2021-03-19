const express = require('express');
const { set } = require('../app.js');
const router = express.Router();
const radarData = require('../data/radarData.js')

const categorigesData = arrayOfObjects => [...new Set(arrayOfObjects.map(object => object.quadrant))];

module.exports = router.get('/api/v1/get-radar-data', function(req, res, next) {
    res.json({"data": categorigesData(radarData)});
  });