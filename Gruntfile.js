// Grunt config file modeled after gruntjs.com/getting-started
// and gruntjs.com/sample-gruntfile

// This file specifies grunt tasks to be run from the command line
// These tasks error check, and compress JS files for distribution
// in order to improve site performance

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Concatenates multiple files into one
		concat: {
			js: {
				src: 'src/js/*.js',
				dest: 'dist/js/concat.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: 'dist/css/concat.css'
			}
		},
		// Removes extraneous characters and puts file into 1 line
		uglify: {
			js: {
				src: 'dist/js/concat.js',
				dest: 'dist/js/concat.min.js'
			}
		},
		// Removes extraneous characters and puts file into 1 line
		cssmin: {
			css: {
				src: 'dist/css/concat.css',
				dest: 'dist/css/concat.min.css'
			}
		},
		// Syntax checks the given files
		jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'src/js/*.js', 'test/**/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// more options here if you want to override JSHint defaults
				globals: {
				jQuery: true,
				console: true,
				module: true
		    	}
			}
		}
	});

	// Load plugins...
	// https://github.com/gruntjs/grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// https://github.com/gruntjs/grunt-contrib-jshint
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// https://github.com/gruntjs/grunt-contrib-concat
	grunt.loadNpmTasks('grunt-contrib-concat');
	// https://github.com/gruntjs/grunt-contrib-cssmin
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
};