const {src, dest, series, watch} = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');

sass.compiler = require('node-sass');

const options = {
  sass: {
    src: 'scss/odse.scss',
    dest: 'css/',
    sassOpts: {
      includePaths: './node_modules',
      outputStyle: 'compact',
      errLogToConsole: true
    },
    watch: 'scss/**/*'
  },
  css: {
    src: 'css/odse.css',
    dest: 'css/'
  },
  js: {
    src: ['javascript/src/*.js', 'javascript/init.js'],
    dest: 'javascript/'
  },
  libJs: {
    src: [
      'node_modules/a11y-dialog/a11y-dialog.min.js',
      'node_modules/body-scroll-lock/lib/bodyScrollLock.min.js'
    ]
  }
};

function clean(cb) {
  del(['css/odse.css', 'javascript/odse.js']);
  cb();
}

function scss(cb) {
  let plugins = [autoprefixer(), cssnano()];

  src(options.sass.src)
    .pipe(sass(options.sass.sassOpts)).on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(dest(options.sass.dest));

  cb();
};

function minifycss(cb) {
  let plugins = [cssnano()];

  src(options.css.src)
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(options.css.dest));

  cb();
};

function compileJs(cb) {
  return pump([
    src(options.js.src),
    concat('odse.js'),
    dest(options.js.dest)
  ], cb);
};

function minifyJs(cb) {
  return pump([
    src('javascript/odse.js'),
    uglify(),
    rename({suffix: '.min'}),
    dest(options.js.dest)
  ], cb);
};

function libJs(cb) {
  src(options.libJs.src)
    .pipe(concat('lib.js'))
    .pipe(dest(options.js.dest));
  cb();
}

exports.js = series(compileJs, minifyJs, libJs);

// var info = autoprefixer().info();
// console.log(info);

// ----- watch ----- //

watch(options.sass.watch, scss);
watch(options.js.src, exports.js);

// ----- tasks ----- //

if (process.env.NODE_ENV === 'production') {
  exports.build = series(minifycss);
} else {
  exports.build = series(clean, scss, exports.js);
}

exports.default = exports.build;
