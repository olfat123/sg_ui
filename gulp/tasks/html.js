const gulp = require("gulp");
const htmlhintInline = require("gulp-htmlhint-inline");
const prettyHtml = require("gulp-pretty-html");
const size = require("gulp-size");
const config = require("../gulpconfig");

/**
 * Generate HTML with pretty formatting and save it to the destination directory.
 *
 * @return {Object} The size of the saved files and other information.
 */
const html = () =>
	gulp
		.src(config.paths.dest.html)
		.pipe(prettyHtml({ indent_size: 4, indent_char: " ", indent_with_tabs: true }))
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(size({ pretty: true, showFiles: true }));

/**
 * Function to validate HTML using htmlhint and gulp.
 *
 * @return {Stream} The transformed stream.
 */
const htmlValidation = () =>
	gulp
		.src(config.paths.dest.html)
		.pipe(htmlhintInline({ htmlhintrc: "./.htmlhintrc", ignores: {} }))
		.pipe(htmlhintInline.reporter())
		.pipe(htmlhintInline.reporter("fail"))
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(size({ pretty: true, showFiles: true }));

module.exports = { html, htmlValidation };
