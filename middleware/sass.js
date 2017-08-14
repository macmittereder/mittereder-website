var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

module.exports = function (req, res, next) {
  sass.render({
    data: '@import "main"',
    includePaths: [path.join(__dirname, '../styles/')],
    outFile: 'public/css/main.css'
  }, function(err, result) {
    if(err)
      next(err);

    fs.writeFile('public/css/main.css', result.css, function(err){
      if(err)
        next(err);
      else
        next();
    });
  });
}
