const gulp = require("gulp");
const config = require("../gulpconfig");

/**
 * Retrieves videos from the source directory and saves them to the destination directory, then streams the changes.
 *
 * @return {Stream} The stream of changes made to the videos.
 */
const videos = () =>
	gulp.src(config.paths.src.videos).pipe(gulp.dest(config.paths.dest.base)).pipe(global.browserSync.stream());

module.exports = { videos };
