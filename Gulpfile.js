var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
   gulp.src('ui/assets/styles/less/*.less')
      .pipe(watch('ui/assets/styles/less/*.less'))
      .pipe(less())
      .pipe(gulp.dest('ui/assets/styles/css/'))
      .pipe(livereload());
});