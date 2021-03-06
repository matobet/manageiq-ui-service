'use strict';

var filter = require('gulp-filter');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

module.exports = function(gulp, options) {
  var config = require('../config')[options.key || 'sass'];

  return task;

  function task() {
    if (options.verbose) {
      browserSync.notify('Compiling Sass');
    }

    return gulp.src(config.src)
      .pipe(sass(config.options).on('error', options.onError))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(rename(config.output))
      .pipe(gulp.dest(config.build));
  }
};
