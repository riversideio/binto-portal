var path = require('path');
var stylesheetsDir = 'assets/sass';
var rendrDir = 'node_modules/rendr';
var rendrModulesDir = rendrDir + '/node_modules';
var production = (process.env.NODE_ENV === "production") ? true : false;

module.exports = function( grunt ) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars: {
      signup : {
        options: {
          namespace: "__tmp",
          amd : true,
          processName: function(filename) {
            return filename.replace('views/', '').replace('.hbs', '');
          }
        },
        src: "views/signup/*.hbs",
        dest: "public/javascripts/templatesSignup.js",
        filter: function(filepath) {
          var filename = path.basename(filepath);
          // Exclude files that begin with '__' from being sent to the client,
          // i.e. __layout.hbs.
          return filename.slice(0, 2) !== '__';
        }
      }
    },
    nodemon : {
      dev : {
        options : {
          file : "app.js",
          watchedExtensions : ["js"]
        }
      }
    },
    watch: {
      templates: {
        files: 'views/**/*.hbs',
        tasks: ['compile'],
        options: {
          interrupt: true
        }
      }
    },
    concurrent : {
      target : {
        tasks : [ "nodemon", "watch" ],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');


  grunt.registerTask('compile', ['handlebars']);

  // Run the server and watch for file changes
  grunt.registerTask('server', [ 'compile', 'concurrent' ]);

  // Default task(s).
  grunt.registerTask('default', ['compile']);
};
