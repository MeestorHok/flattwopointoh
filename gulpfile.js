'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');

var filename = 'flattwopointoh';
var distDir = './dist';
var unminifiedDir = './debug';

gulp.task('sass', function () {
  return gulp.src('./src/sass/' + filename + '.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(unminifiedDir));
});

gulp.task('minify-sass', function () {
  return gulp.src('./src/sass/' + filename + '.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(distDir));
});

gulp.task('js', function (cb) {
  pump([
    gulp.src('./src/js/**/*.js'),
    uglify(),
    rename({ suffix: '.min' }),
    gulp.dest(distDir)
  ], cb);
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js']);
gulp.task('build', ['minify-sass', 'js']);
