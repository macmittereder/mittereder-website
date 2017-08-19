// require node sass
var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

module.exports = function (req, res, next) {
  //import main.sass in dir styles
  sass.render({
    data: '@import "main"',
    includePaths: [path.join(__dirname, '../styles/')],
    outFile: 'public/css/main.css',
    precision: 8
  }, function(err, result) {
    if(err) {
      console.log(err)
      next(err);
    }
    
    //write the main.css file
    fs.writeFile('public/css/main.css', result.css, function(err){
      if(err)
        next(err);
      else
        next();
    });
  });
}
