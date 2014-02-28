module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-complexity');
	grunt.loadNpmTasks('grunt-bump');

	grunt.initConfig({
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['-a'],
				commitMessage: 'release %VERSION%',
				tagMessage: 'version %VERSION%',
				pushTo: 'origin'
			}
		},
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