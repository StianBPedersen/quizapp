module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		watch: {
			css: {
				files: ['app/stylesheets/scss/*.scss', 'app/**/*.html', 'app/js/*.js'],
				tasks: ['clean', 'sass:compile'],
				options: {
					livereload: true
				}
			}
		},
		clean: {
			files: ['app/stylesheets/css/style.css']
		},
		sass: {
			compile: {
        files: {
          'app/stylesheets/css/style.css': ['app/stylesheets/scss/style.scss']
        }
      }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('w', ['watch']);
};