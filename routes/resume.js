var express = require('express');
var sassMiddleware = require('../middleware/sass');

var router = express.Router();

router.get('/', sassMiddleware, (req, res, next) => {
   res.render('resume');
});

module.exports = router;
