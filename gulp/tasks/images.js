const gulp = require("gulp");
const rename = require("gulp-rename");
const webp = require("gulp-webp");
const config = require("../gulpconfig");

/**
 * Convert images to webp format.
 *
 * @return {stream} The stream of the converted images.
 */
const imagesToWebp = () =>
	gulp
		.src(config.paths.src.images)
		.pipe(webp())
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(global.browserSync.stream());

/**
 * Minify images using various imagemin plugins.
 *
 * @return {Stream} The gulp stream for minified images.
 */
const imagesMinify = async () => {
	const imagemin = (await import("gulp-imagemin")).default;
	const imageminJpegtran = (await import("imagemin-jpegtran")).default;
	const imageminMozjpeg = (await import("imagemin-mozjpeg")).default;
	const imageminPngquant = (await import("imagemin-pngquant")).default;
	const imageminSvgo = (await import("imagemin-svgo")).default;
	const imageminZopfli = (await import("imagemin-zopfli")).default;
	const imageminWebp = (await import("imagemin-webp")).default;

	return gulp
		.src(config.paths.dest.images)
		.pipe(
			imagemin([
				imageminPngquant({ speed: 1, strip: true, quality: [0.1, 0.3] }),
				imageminZopfli({ more: true, iterations: 20 }),
				imageminSvgo({ plugins: [{ name: "removeViewBox", active: false }] }),
				imageminMozjpeg({ progressive: true, quality: 20 }),
				imageminJpegtran({}),
				imageminWebp({ quality: 20 }),
			])
		)
		.pipe(rename(({ basename, ...path }) => ({ basename: `${basename}-compressed`, ...path })))
		.pipe(gulp.dest(config.paths.dest.base))
		.pipe(global.browserSync.stream());
};

const images = gulp.series(imagesToWebp, imagesMinify);

module.exports = { images, imagesToWebp, imagesMinify };
