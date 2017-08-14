var express = require('express');
var path = require('path');

var app = express();

var nProjects = require('./routes/projects');
var nResume = require('./routes/resume');
var nIndex = require('./routes/index');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
app.use('/', nIndex);
app.use('/projects', nProjects);
app.use('/resume', nResume);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8081, function() {
  console.log("Ready to go! Listening on port 8081.");
});
