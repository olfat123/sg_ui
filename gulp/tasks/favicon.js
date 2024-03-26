const gulp = require("gulp");
const realFavicon = require("gulp-real-favicon");
const fs = require("fs");
const config = require("../gulpconfig");

/**
 * Generate a favicon using the realFavicon library.
 *
 * @param {function} done - Callback function to be executed when the favicon generation is complete
 * @return {void}
 */
const generateFavicon = (done) => {
	realFavicon.generateFavicon(
		{
			masterPicture: config.paths.src.favicon,
			dest: config.paths.dest.favicon,
			iconsPath: config.paths.dest.favicon_icon,
			design: {
				ios: {
					pictureAspect: "backgroundAndMargin",
					backgroundColor: "#ffffff",
					margin: "35%",
					assets: {
						ios6AndPriorIcons: false,
						ios7AndLaterIcons: false,
						precomposedIcons: false,
						declareOnlyDefaultIcon: true,
					},
				},
				desktopBrowser: {
					design: "background",
					backgroundColor: "#ffffff",
					backgroundRadius: 0.35,
					imageScale: 0.8,
				},
				windows: {
					pictureAspect: "noChange",
					backgroundColor: "#da532c",
					onConflict: "override",
					assets: {
						windows80Ie10Tile: false,
						windows10Ie11EdgeTiles: { small: false, medium: true, big: false, rectangle: false },
					},
				},
				androidChrome: {
					pictureAspect: "noChange",
					themeColor: "#ffffff",
					manifest: { display: "standalone", orientation: "notSet", onConflict: "override", declared: true },
					assets: { legacyIcon: false, lowResolutionIcons: false },
				},
				safariPinnedTab: { pictureAspect: "silhouette", themeColor: "#5bbad5" },
			},
			settings: {
				scalingAlgorithm: "Mitchell",
				errorOnImageTooSmall: false,
				readmeFile: false,
				htmlCodeFile: false,
				usePathAsIs: false,
			},
			markupFile: config.paths.src.favicon_data,
		},
		() => done()
	);
};

/**
 * A function to inject favicon markups.
 *
 * @return {Stream} The stream for the destination of the favicon markups.
 */
const injectFaviconMarkups = () =>
	gulp
		.src([config.paths.dest.html])
		.pipe(
			realFavicon.injectFaviconMarkups(
				JSON.parse(fs.readFileSync(config.paths.src.favicon_data)).favicon.html_code
			)
		)
		.pipe(gulp.dest(config.paths.dest.base));

module.exports = { generateFavicon, injectFaviconMarkups };
