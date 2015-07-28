'use strict';

var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('client', function() {
    browserify('src/client/main.jsx')
        .transform(babelify)
        .bundle()
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/public/javascript'));
});

gulp.task('server', function() {
    gulp.src(['src/**/*.js', '!src/client/**/*.*', '!src/public/**/*.*'])
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('static', function() {
    gulp.src(['src/public/index.html'])
        .pipe(gulp.dest('dist/public/'));
});

gulp.task('build', function() {
    gulp.start('client', 'server', 'static');
});
