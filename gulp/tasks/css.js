const cssnano = require("cssnano");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const purgecss = require("gulp-purgecss");
const rename = require("gulp-rename");
const size = require("gulp-size");
const config = require("../gulpconfig");

/**
 * A function to clean CSS files.
 *
 * @return {Stream} The transformed CSS stream
 */
const cleanCSS = () =>
	gulp
		.src(config.paths.dest.css)
		.pipe(postcss([cssnano({ preset: ["advanced", { discardComments: { removeAll: true } }] })]))
		.pipe(rename(({ basename, ...path }) => ({ basename: `${basename}.min`, ...path })))
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(size({ pretty: true, showFiles: true }));

/**
 * Function to remove unused CSS from the specified destination path using purgecss.
 *
 * @return {Stream} The transformed stream containing the minimized CSS files.
 */
const unusedCSS = () =>
	gulp
		.src(config.paths.dest.css)
		.pipe(
			purgecss({
				content: [config.paths.dest.html, config.paths.dest.javascript],
				safelist: { greedy: [/^swiper/, /fancybox/, /^br-/, /^ss/] },
				fontFace: false,
				keyframes: false,
				variables: false,
			})
		)
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(size({ pretty: true, showFiles: true }));

module.exports = { cleanCSS, unusedCSS };
