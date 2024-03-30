const gulp = require("gulp");
const gulpPug = require("gulp-pug");
const config = require("../gulpconfig");
const navList = require("../../seeds/navList.json");
const companies = require("../../seeds/companies.json");

const isIterableArray = (array) => Array.isArray(array) && array.length > 0;

/**
 * Function to compile pug files and move them to the destination directory.
 *
 * @return {Stream} The transformed stream of files
 */
const pug = () =>
	gulp
		.src(config.paths.src.pug)
		.pipe(
			gulpPug({
				pretty: config.is_production,
				data: {
					IS_PRODUCTION: config.is_production,
					APP_LANGUAGE: config.app.language,
					APP_DIRECTION: config.app.direction,
					APP_DESCRIPTION: config.app.description,
					APP_KEYWORDS:
						(isIterableArray(config.app.keywords) && config.app.keywords?.join(", ")) ||
						config.app.keywords,
					APP_NAME: config.app.name,
					APP_THEME_COLOR: config.app.themeColor,
					APP_THEME: config.app.theme,
					navList,
					companies,
				},
			})
		)
		.pipe(gulp.dest(config.paths.dest.base));

module.exports = { isIterableArray, pug };
