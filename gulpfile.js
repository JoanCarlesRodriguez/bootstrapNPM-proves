const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const {series} = require('gulp');




function sassCompilador() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}
function vigilarSass() {
  gulp.watch ('./scss/**/*.scss', sassCompilador);
}

function copy (){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
      .pipe(gulp.dest('./js'));
}



exports.compilar = sassCompilador
exports.vigilar = vigilarSass
exports.build = series(sassCompilador, copy);