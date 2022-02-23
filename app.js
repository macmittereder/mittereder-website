var express = require('express');
var path = require('path');

var app = express();

var rProjects = require('./routes/projects');
var rResume = require('./routes/resume');
var rIndex = require('./routes/index');
var rMittereders = require('./routes/mittereders');

app.set('view engine', 'pug');

app.use('/', rIndex);
app.use('/projects', rProjects);
app.use('/resume', rResume);
app.use('/mah', rMittereders);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8081, function() {
  console.log("Ready to go! Listening on port 8081.");
});
