var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
        res.render('index', {title: "Welcome"});
});

app.listen(8081, function() {
        console.log("we are listening on port 8081");
});
