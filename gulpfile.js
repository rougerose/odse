// based on https://github.com/Joel-Mercier/portfolio/blob/master/gulpfile.js

var gulp = require('gulp')
var browserSync = require('browser-sync')
var cp = require('child_process')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var atImport = require('postcss-import')
var cssnano = require('cssnano')
var rename = require('gulp-rename')
var precss = require('precss')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var wrap = require('gulp-wrap')
var pump = require('pump')

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
}

var globs = {
	css: ['_src/css/*.css'],
	js: ['_src/js/*.js'],
}


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild)
	return cp.spawn('jekyll', ['build', '--baseurl', '', '--config', '_config.yml'], {stdio: 'inherit'})
	.on('close', done)
})

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload()
})

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['css', 'compile:js', 'minify:js', 'jekyll-build'], function () {
	browserSync({
		server: {
			baseDir: '_site',
		},
		browser: 'FirefoxDeveloperEdition'
	})
})

/**
 * CSS
 */
gulp.task('css', function(){
	var plugins = [
		// autoprefixer({browsers: ['last 1 version']}),
		atImport(),
		precss(),
		autoprefixer(['last 15 versions', '> 1%'], { cascade: true }),
		// cssnano(),
	];
	return gulp.src(globs.css)
		.pipe(postcss(plugins))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest('css/') )
})

/**
 * JS
 */
gulp.task('compile:js', function() {
	gulp.src(globs.js)
		.pipe(concat('odse.js'))
		.pipe(wrap('$(function(){\n<%= contents %>\n});'))
		.pipe(gulp.dest('js/'))
})

gulp.task('minify:js', function(cb) {
	pump([
		gulp.src('js/odse.js'),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest('js/')
	], cb)
})


gulp.task('lib', function(cb) {
	pump([
		gulp.src(['node_modules/jquery/dist/jquery.min.js']),
		concat("lib.min.js"),
		gulp.dest('js/'),
	], cb)
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch(['_src/css/**/*.css'], ['css', 'jekyll-rebuild'])
	gulp.watch(['_src/js/*.js'], ['compile:js', 'minify:js', 'jekyll-rebuild'])
	gulp.watch(['./*.html', '_layouts/*.html', '_includes/*.html', '_config.yml'], ['jekyll-rebuild'])
})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch'])
