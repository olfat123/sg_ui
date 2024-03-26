const gulp = require("gulp");
const config = require("../gulpconfig");
const { cleanCSS, unusedCSS } = require("./css");
const { cleanEs6, es6 } = require("./es6");
const { fonts } = require("./fonts");
const { html, htmlValidation } = require("./html");
const { images } = require("./images");
const { pug } = require("./pug");
const { scss } = require("./scss");
const { videos } = require("./videos");
const { generateFavicon, injectFaviconMarkups } = require("./favicon");

const favicon = gulp.series(generateFavicon, injectFaviconMarkups);
const assets = gulp.series(images, videos, fonts);
const clean = gulp.parallel(html, cleanEs6, cleanCSS);
const production = gulp.series(
	...[assets, pug, htmlValidation, favicon, es6, scss, ...(config?.is_production ? [clean, unusedCSS] : [])]
);

module.exports = { production };
