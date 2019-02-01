const {src, dest, series, watch} = require('gulp');
const del = require('del');
const scss = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

scss.compiler = require('node-sass');

const options = {
  scss: {
    src: 'scss/odse.scss',
    dest: 'css/',
    scssOpts: {
      includePaths: './node_modules',
      outputStyle: 'compact',
      errLogToConsole: true
    },
    watch: 'scss/**/*'
  },
  css: {
    src: 'css/odse.css',
    dest: 'css/'
  }
};

function clean(cb) {
  del(['css/*.min.css']);
  
  cb();
}

function scss(cb) {
  src(options.scss.src)
    .pipe(scss(options.scss.scssOpts)).on('error', scss.logError)
    .pipe(dest(options.scss.dest));
  
  cb();
};

function css(cb) {
  let plugins = [
    autoprefixer(),
    cssnano()
  ];
  
  src(options.css.src)
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(options.css.dest));
  
  cb();
}


if (process.env.NODE_ENV === 'production') {
  exports.build = series(clean, scss, css);
} else {
  exports.build = series(scss);
}

exports.default = series(exports.build);