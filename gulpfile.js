'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/flattwopointoh.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('min', function () {
  return gulp.src('./src/flattwopointoh.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/flattwopointoh.scss', ['sass']);
});

gulp.task('watch', function () {
  gulp.watch('./src/flattwopointoh.scss', ['min']);
});
