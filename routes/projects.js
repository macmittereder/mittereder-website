var express = require('express');
var sassMiddleware = require('../middleware/sass');

var router = express.Router();

router.get('/', sassMiddleware, (req, res, next) => {
   res.render('projects');
});

router.get('/fastmoviephotos', (req, res, next) => {
  res.render('fastmoviephotos');
});

router.get('/lifecounter', (req, res, next) => {
  res.render('lifecounter');
});

router.get('/franklinregional', (req, res, next) => {
  res.render('franklinregional');
});

router.get('/pinballprice', (req, res, next) => {
  res.render('pinballprice');
});

router.get('/wordsandmusic', (req, res, next) => {
  res.render('wordsandmusic');
});

router.get('/vehicleapp', (req, res, next) => {
  res.render('vehicleapp');
});

router.get('/frameit', (req, res, next) => {
  res.render('frameit');
});

router.get('/graphgame', (req, res, next) => {
  res.render('graphgame');
});

router.get('/rockpaperscissors', (req, res, next) => {
  res.render('rockpaperscissors');
});

module.exports = router;
