module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/script.main.js'
            }
        },
        
        uglify: {
            dist: {
                src: ['dist/js/script.main.js'],
                dest: 'dist/js/script.main.min.js'
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['reset.scss','style.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        concat_css: {
            all: {
                src:['dist/css/*.css'],
                dest:'dist/css/style.css'
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: ['images/**', 'fonts/**', 'index.html'],
                dest: 'dist/'
            }
        },

        watch: {
            sass: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['src/css/*.scss'],
                tasks: ['sass', 'concat_css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat','uglify','sass', 'concat_css', 'copy']);

};