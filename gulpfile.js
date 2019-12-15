"use strict";

const gulp = require("gulp");
const	sass = require('gulp-sass');
const	sourcemaps = require('gulp-sourcemaps');
const	autoprefixer = require("gulp-autoprefixer");

const scssPath = './assets/sass/styles.scss';
const paths = {
	sass: {
		src: './assets/sass/**/*.scss',
		dest: './assets/css'
	}
};

// css task
gulp.task('styles', function() {
	return gulp.src(paths.sass.src)
		.pipe(sourcemaps.init())
		.pipe(sass(autoprefixer()))
		.on('error', sass.logError)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.sass.dest))
});

// watch task
gulp.task('watch', function() {
	gulp.watch(paths.sass.src, gulp.series('styles'));
});
