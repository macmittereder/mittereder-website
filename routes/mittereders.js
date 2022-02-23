var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('Mittereders/mitteredersIndex', { title: "The Next Mittereders" });
});

module.exports = router;
