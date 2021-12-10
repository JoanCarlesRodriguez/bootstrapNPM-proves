const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));




function sassCompilador() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}
function vigilarSass() {
  gulp.watch ('./scss/**/*.scss', sassCompilador);
}



exports.compilarSassCustom = sassCompilador
exports.vigilarSass = vigilarSass