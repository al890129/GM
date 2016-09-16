'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  return gulp.src('./style/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('sass:watch', function () {
  gulp.watch('./style/sass/**/*.scss', ['sass']);
});

gulp.task('default',['sass','connect','sass:watch'])




