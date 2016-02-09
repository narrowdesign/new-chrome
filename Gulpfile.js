var gulp = require('gulp'),
    less = require('gulp-less'),
    babelify = require('babelify'), // Used to convert ES6 & JSX to ES5
    browserify = require('browserify'), // Providers "require" support, CommonJS
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
   gulp.src('ui/assets/styles/less/*.less')
      .pipe(watch('ui/assets/styles/less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('ui/assets/styles/css/'))
      .pipe(livereload());
});