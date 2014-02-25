module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-complexity');

	grunt.initConfig({
		uglify: {
			dist: {
				options: {
					report: 'min',
					wrap: 'md'
				},
				src: 'index.js',
				dest: 'monad.js'
			}
		},
		complexity: {
			dist: {
				src: 'index.js'
			}
		},
		jshint: {
			dist: {
				src: 'index.js'
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'complexity', 'uglify']);
};