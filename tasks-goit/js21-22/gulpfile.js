const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-ruby-sass');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourceMaps = require('gulp-sourcemaps');
const server = require('gulp-server-livereload');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const babel = require('gulp-babel');

gulp.task('sass', () => {
    return sass('src/sass/main.scss', { sourcemap: true, style: 'compact' })
        .on('error', sass.logError)
        .pipe(sourceMaps.init({loadMaps: true}))
        .pipe(autoPrefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename('style.css'))
        // .pipe(cleanCSS())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pages', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('fonts', () => {
    return gulp.src('src/theme/fonts/*')
        .pipe(gulp.dest('dist/css/fonts'))
});

gulp.task('js', () => {
    return gulp.src(['src/js/*.js'])
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.js'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', () => {
    return gulp.src('src/theme/images/**/*')
        .pipe(gulp.dest('dist/images/'))
});

gulp.task('webserver', () => {
    gulp.src('dist')
    .pipe(server({
        livereload: {
            enable: true,
            filter: function(filePath, cb) {
                cb( !(/.DS_Store/.test(filePath)) );
            }
        },
        directoryListing: false,
        open: true,
        log: 'info',
        defaultFile: 'index.html'
    }));
});

gulp.task('default', () => {
    gulp.start('pages', 'sass', 'js', 'images', 'fonts', 'webserver');
gulp.watch('src/*.html', ['pages']);
gulp.watch('src/sass/*.scss', ['sass']);
gulp.watch('src/js/*.js', ['js']);
gulp.watch('src/theme/images/**/*.*', ['images']);
});