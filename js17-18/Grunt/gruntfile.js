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

        concat_css: {
            all: {
                src:['src/css/*.css'],
                dest:'dist/css/styles.min.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/dist',
                    src: ['*.min.css'],
                    dest: 'css/dist'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','concat_css','cssmin']);

};