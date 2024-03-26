const gulp = require("gulp");
const config = require("../gulpconfig");

/**
 * Retrieves fonts from the source directory and copies them to the destination directory, then streams the changes to the browser.
 *
 * @return {Stream} The stream of changes being sent to the browser.
 */
const fonts = () =>
	gulp.src(config.paths.src.fonts).pipe(gulp.dest(config.paths.dest.base)).pipe(global.browserSync.stream());

module.exports = { fonts };
