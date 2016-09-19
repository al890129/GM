'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('sass', function () {
  return gulp.src('./style/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
    }));
});

gulp.task('sass:watch', function () {
  gulp.watch('./style/sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass','webserver','sass:watch'])




