module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
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
        sass: {
            dev: {
                expand: true,
                cwd: 'src/scss',
                src: ['**/*.scss'],
                dest: 'public',
                ext: '.css',
                options: {
                    style: 'expanded'
                }
            },
            prod: {
               expand: true,
                cwd: 'src/scss',
                src: ['**/*.scss'],
                dest: 'public',
                ext: '.css',
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                }
            }
        },
        autoprefixer: {
            dev: {
                src: 'public/style.css',
                map: true
            },
            prod: {
                src: 'public/style.css'
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
                    'public/script.js': ['src/js/**/*.js']
                }
            },
            prod: {
                files: {
                    'public/script.js': ['src/js/**/*.js']
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('config', 'Check configuration files for errors', ['jshint:config']);
    grunt.registerTask('dev', 'Build development version of project', ['clean', 'copy', 'jshint', 'uglify:dev', 'sass:dev', 'autoprefixer:dev']);
    grunt.registerTask('prod', 'Build production version of project', ['clean', 'copy', 'jshint', 'uglify:prod', 'sass:prod', 'autoprefixer:prod']);
    grunt.registerTask('default', 'Build development version and run watch server', ['dev', 'watch']);
};
