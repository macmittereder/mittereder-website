var express = require('express');

var router = express.Router();

router.get('/', function (req, res, next) {
   res.render('projects');
});

router.get('/personalprojects', function (req, res, next) {
  res.render('personalprojects');
});

router.get('/contractorprojects', function (req, res, next) {
  res.render('contractorprojects');
});

router.get('/inprogressprojects', function (req, res, next) {
  res.render('inprogressprojects');
});

router.get('/fastmoviephotos', function (req, res, next) {
  res.render('fastmoviephotos');
});

router.get('/lifecounter', function (req, res, next) {
  res.render('lifecounter');
});

router.get('/franklinregional', function (req, res, next) {
  res.render('franklinregional');
});

router.get('/pinballprice', function (req, res, next) {
  res.render('pinballprice');
});

router.get('/wordsandmusic', function(req, res, next) {
  res.render('wordsandmusic');
});

router.get('/vehicleapp', function(req, res, next) {
  res.render('vehicleapp');
});

module.exports = router;
