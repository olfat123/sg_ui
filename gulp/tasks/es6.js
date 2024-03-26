const browserify = require("browserify");
const esmify = require("esmify");
const { glob } = require("glob");
const gulp = require("gulp");
const rename = require("gulp-rename");
const size = require("gulp-size");
const uglify = require("gulp-uglify");
const mergeStream = require("merge-stream");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const path = require("path");
const config = require("../gulpconfig");

/**
 * Function to compile ES6 files using browserify, babelify, and other plugins.
 *
 * @return {Stream} A merged stream of compiled ES6 files.
 */
const es6 = () => {
	const files = glob.sync(config.paths.src.es6);
	return mergeStream(
		files.map((entry) =>
			browserify({ entries: [entry], plugin: [esmify], debug: !config.is_production })
				.transform("babelify", {
					presets: ["@babel/preset-env"],
					plugins: [
						"@babel/plugin-transform-runtime",
						"@babel/plugin-proposal-optional-chaining",
						"@babel/plugin-proposal-class-properties",
					],
				})
				.transform("sourceify")
				.bundle()
				.pipe(source(entry))
				.pipe(
					rename(({ dirname, ...restOfPath }) => ({
						dirname: dirname.replace(path.join(config.paths.src.base, "/"), ""),
						...restOfPath,
					}))
				)
				.pipe(buffer())
				.pipe(gulp.dest(config.paths.dest.base))
		)
	);
};

/**
 * A function to clean ES6 code using gulp.
 *
 * @return {object} The transformed gulp stream after cleaning the ES6 code.
 */
const cleanEs6 = () =>
	gulp
		.src(config.paths.dest.javascript)
		.pipe(
			uglify({
				mangle: { toplevel: true },
				output: { beautify: false, comments: false },
				compress: { inline: true },
			})
		)
		.pipe(rename(({ basename, ...restOfPath }) => ({ basename: `${basename}.min`, ...restOfPath })))
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(size({ pretty: true, showFiles: true }));

module.exports = { es6, cleanEs6 };
