'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var filename = 'flattwopointoh';
var distDir = './dist';
var unminifiedDir = './debug';

gulp.task('sass', function () {
  return gulp.src('./src/' + filename + '.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write(unminifiedDir + '/maps'))
    .pipe(gulp.dest(unminifiedDir));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('dist', function () {
  return gulp.src('./src/' + filename + '.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(filename + '.min.css'))
    .pipe(gulp.dest(distDir));
});
