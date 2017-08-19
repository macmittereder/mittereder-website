var express = require('express');
var sassMiddleware = require('../middleware/sass');
// compile sass in middleware for each page

var router = express.Router();

router.get('/', sassMiddleware, function (req, res) {
  res.render('index', {title: "Mittereder Studios"});
});

module.exports = router;
