'use strict';

const {src, task, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;


task('sassToCss', function () {
    return src('./src/style.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 6 versions'],
            cascade: false
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
})

task('watch', function () {
    watch('./src/style.scss', series('sassToCss'))
})

task('compress', function () {
    return src('./src/script.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
});

task('watchJs', function () {
    watch('./src/script.js', series('compress'));
});

task('default', series('sassToCss', 'compress', 'watch', 'watchJs'));