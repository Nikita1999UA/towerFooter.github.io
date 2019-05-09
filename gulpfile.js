'use strict';

var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    prefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

var path = {
    build: {
        html: 'dist/',
        js: 'dist/js',
        css: 'dist/css',
        img: 'dist/img'
    },

    src: {
        html: 'src/*.html',
        css: 'src/css/*.css',
        img: 'src/img/*'
    },

    watch: {
        html: 'src/**/*.html',
        js: 'src/**/*.js',
        css: 'src/**/*.css',
        img: 'src/*'
    },
    clean: './dist'
};

gulp.task('html:build', function(){
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
});

gulp.task('css:build', function(){
    return gulp.src(path.src.css)
        .pipe(cleanCSS())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))     
});

gulp.task('img:build', function(){
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))     
});