var gulp = require('gulp');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var autoprefixer = require('autoprefixer');

//build task
gulp.task('build', function() {
	var processors = [
	require('postcss-mixins'),
	atImport({path: ['./static/pcss']}),
	require('postcss-simple-vars'),
	require('postcss-nested'),
	autoprefixer({browsers: ['last 2 version']}),
	];
	return gulp.src('./static/pcss/[^_]*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./static/build/css'))
	});


gulp.task('default', ['build'] , function () {
	gulp.watch(['./static/pcss/*.css'],['build']);
	});