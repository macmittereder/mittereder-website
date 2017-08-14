var express = require('express');
// var path = require('path');
// var fs = require('fs');
var sassMiddleware = require('../middleware/sass');

var router = express.Router();

router.get('/', sassMiddleware, function (req, res) {
  res.render('index', {title: "Mittereder Studios"});
});

module.exports = router;
