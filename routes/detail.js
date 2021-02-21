const express = require('express');
const router = express.Router();
const radarData = require('../data/radarData')

const quadrantMap = {
  'Tooling' : 'tooling',
  'Languages & Frameworks' : 'languages-and-frameworks',
  'Platforms' : 'platforms',
  'Techniques' : 'techniques'
}

/* GET detail page. */
module.exports = router.get('/detail/:id', function(req, res, next) {
  const getDetail = detail => detail.id === Number(req.params.id);
  const detail = radarData.find(getDetail)
  const quadrant = quadrantMap[detail.quadrant]
  res.render('detail', { 
    detail: detail,
    quadrant: quadrant
  });
});