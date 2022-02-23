module.exports = function(grunt) {
  const sass = require('node-sass');

  grunt.initConfig ({
    
    sass: {
      dist: {
        files: {
          'public/css/main.css' : 'styles/main.scss',
          'public/css/mitteredersMain.css': 'styles/mitteredersMain.scss'
        },
        options: { implementation: sass, sourceMap: false }
      }
    },

    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css',
          ext: '.min.css'
        }]
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['watch','sass', 'cssmin']);
};