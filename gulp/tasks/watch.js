const gulp = require("gulp");
const config = require("../gulpconfig");
const { es6 } = require("./es6");
const { fonts } = require("./fonts");
const { htmlValidation } = require("./html");
const { images } = require("./images");
const { pug } = require("./pug");
const { scss } = require("./scss");
const { videos } = require("./videos");

/**
 * Reloads the browser and calls the provided callback function if it exists and is a function.
 *
 * @param {function} cb - The callback function to be called after the browser reloads.
 * @return {undefined}
 */
const browserReload = (cb) => {
	global.browserSync.reload();
	if (cb && typeof cb === "function") cb();
};

/**
 * Initializes browserSync and sets up watchers for various source files.
 *
 * @return {void}
 */
const watch = () => {
	global.browserSync.init({ server: config.paths.dest.base, open: true });
	gulp.watch(config.paths.src.fonts, gulp.series(fonts));
	gulp.watch(config.paths.src.videos, gulp.series(videos));
	gulp.watch(config.paths.src.images, gulp.series(images));
	gulp.watch(config.paths.src.scss_all, gulp.series(scss));
	gulp.watch(config.paths.src.es6_all, gulp.series(es6, scss, browserReload));
	gulp.watch(config.paths.src.pug_all, gulp.series(pug, htmlValidation, scss, browserReload));
};

module.exports = { watch, browserReload };
