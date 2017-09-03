var express = require('express');
var sassMiddleware = require('../middleware/sass');

var router = express.Router();

router.get('/', sassMiddleware, function (req, res, next) {
   res.render('resume', {title: "Mittereder Studios - Resume"});
});

module.exports = router;
