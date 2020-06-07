const { watch, series, src, dest, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const cssmin = require('gulp-cssmin')
const presetenv = require('postcss-preset-env')
const tobem = require('postcss-bem-fix')

let bemConfig = {
  shortcuts: {
    component: 'b',
    modifier: 'm',
    descendent: 'e'
  },
  separators: {
    descendent: '__',
    modifier: '--'
  }
}

function compileCss() {
  return src('./src/index.scss')
    .pipe(sass.sync())
    .pipe(postcss([tobem(bemConfig), presetenv()]))
    .pipe(cssmin())
    .pipe(dest('../../lib'))
}

function copyFont() {
  return src('./src/fonts/**').pipe(dest('./lib/fonts'))
}

function watchCss() {
  return watch('./src/*.scss', parallel(compileCss))
}

function watchFonts() {
  return watch('./src/fonts/**', copyFont)
}

exports.build = parallel(compileCss, copyFont)
exports.default = series(compileCss, copyFont, parallel(watchCss, watchFonts))
