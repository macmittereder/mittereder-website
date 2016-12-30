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

module.exports = router;
