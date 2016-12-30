var express = require('express');
var path = require('path');

var app = express();

var nAbout = require('./routes/about');
var nContact = require('./routes/contact');
var nProjects = require('./routes/projects');
var nResume = require('./routes/resume');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use('/about', nAbout);
app.use('/contact', nContact);
app.use('/projects', nProjects);
app.use('/resume', nResume);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
        res.render('index', {title: "Welcome"});
});

app.listen(8081, function() {
        console.log("we are listening on port 8081");
});
