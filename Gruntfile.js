module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'uglify:dev']
            },
            templates: {
                files: ['src/templates/**/*.*'],
                tasks: ['copy']
            },
            livereload: {
                options: { livereload: true },
                files: ['public/**/*']
            }
        },
        clean: {
            all: ['public/']
        },
        jshint: {
            options: {
                'bitwise': true,
                'camelcase': true,
                'curly': true,
                'eqeqeq': true,
                'eqnull': true,
                'expr': true,
                'immed': true,
                'newcap': true,
                'noarg': true,
                'quotmark': true,
                'browser': true
            },
            src: ['src/js/**/*.js'],
            config: ['Gruntfile.js', 'package.json']
        },
        uglify: {
            dev: {
                options: {
                    sourceMap: true,
                    mangle: false,
                    beautify: true,
                    preserveComments: 'all',
                    compress: false
                },
                files: {
                    'public/navi.js': ['src/js/**/*.js']
                }
            },
            prod: {
                files: {
                    'public/navi.js': ['src/js/**/*.js']
                }
            }
        },
        copy: {
            templates: {
                cwd: 'src/templates',
                src: ['**/*.*', '!**/_*.*'],
                dest: 'public',
                expand: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('config', 'Check configuration files for errors', ['jshint:config']);
    grunt.registerTask('dev', 'Build development version of project', ['clean', 'copy', 'jshint', 'uglify:dev']);
    grunt.registerTask('prod', 'Build production version of project', ['clean', 'copy', 'jshint', 'uglify:prod']);
    grunt.registerTask('default', 'Build development version and run watch server', ['dev', 'watch']);
};
