const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const gulpSass = require("gulp-sass");
const size = require("gulp-size");
const util = require("gulp-util");
const nodeSass = require("node-sass");
const tildeImporter = require("node-sass-tilde-importer");
const postcssRTLCSS = require("postcss-rtlcss");
const config = require("../gulpconfig");

const sass = gulpSass(nodeSass);

/**
 * Compiles SCSS files, autoprefixes them, and outputs the result to the destination folder.
 *
 * @return {Stream} The gulp stream for the compiled SCSS files.
 */
const scss = () =>
	gulp
		.src(config.paths.src.scss)
		.pipe(
			sass({
				includePaths: [config.paths.node_modules],
				outputStyle: "expanded",
				importer: tildeImporter,
			}).on("error", sass.logError)
		)
		.pipe(postcss([autoprefixer(), ...(config.is_rtl_included ? [postcssRTLCSS()] : [])]))
		.pipe(gulp.dest(config.paths.dest.base, { sourcemaps: !config.is_production }))
		.pipe(config.is_production ? size({ pretty: true, showFiles: true }) : util.noop())
		.pipe(global.browserSync.stream());

module.exports = { scss };
