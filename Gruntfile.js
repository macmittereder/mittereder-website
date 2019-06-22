module.exports = function(grunt) {
  const sass = require('node-sass');

    grunt.initConfig ({
      
      sass: {
        dist: {
          files: {
            'public/css/main.css' : 'styles/main.scss'
          },
          options: { implementation: sass, sourceMap: true }
        }
      },
  
      watch: {
        source: {
          files: ['styles/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: true,
          }
        }
      }
  
    });
      
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch','sass']);
  };