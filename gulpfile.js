var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

function onError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass({errLogToConsole: true}))
        .on('error', onError)
        .pipe(gulp.dest('css'))
        .pipe(livereload())
});

gulp.task('watch', function () {
   livereload.listen();
   gulp.watch('sass/**/*.scss', ['sass']);
});