var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require ('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    uglify = require ('gulp-uglify')
    /*babel = require('gulp-babel');*/
     

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./assets/css'))
});

gulp.task('default', function() {
    gulp.watch('./scss/*.scss', ['sass'])
});


/*
gulp.task('scripts', function() {
  gulp.src([
    './js/scripts.js',
    './dist/home/TweenMax.min.js',
  ])
    .pipe(concat('bundle.js'))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest('./js'))
});
*/
