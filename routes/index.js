const express = require('express');
const router = express.Router();
const radarData = require('../data/radarData.js')

const radarCategories = [
  {
    title: 'Platforms',
    class: 'platforms'
  },
  {
    title: 'Languages & Frameworks',
    class: 'languages-and-frameworks'
  },
  {
    title: 'Techniques',
    class: 'techniques'
  },
  {
    title: 'Tooling',
    class: 'tooling'
  }
]

const radarQuadrants = [
  'Adopt',
  'Trial',
  'Hold',
  'Reduce'
]

/* GET home page. */
module.exports = router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    radarcategories: radarCategories,
    radarquadrants: radarQuadrants,
    radardata: radarData
  });
});