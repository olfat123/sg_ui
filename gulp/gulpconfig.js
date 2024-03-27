const util = require("gulp-util");

// paths
const SOURCE_FOLDER = "src";
const DESTINATION_FOLDER = "build";
const NODE_MODULES_PATH = "node_modules/";

// config object
const config = {
	is_production: !!util.env.production,
	is_rtl_included: true,
	app: {
		name: "The City Guards Hub",
		theme: "light",
		themeColor: "#AF3A3A",
		language: "en",
		direction: "ltr",
		keywords: [],
		description: "",
	},
	paths: {
		node_modules: NODE_MODULES_PATH,
		src: {
			base: SOURCE_FOLDER,
			pug: `${SOURCE_FOLDER}/views/**/[^_]*.pug`,
			pug_all: `${SOURCE_FOLDER}/views/**/*.pug`,
			scss: `${SOURCE_FOLDER}/**/[^_]*.scss`,
			scss_all: `${SOURCE_FOLDER}/**/*.scss`,
			es6: `${SOURCE_FOLDER}/**/[^_]*.js`,
			es6_all: `${SOURCE_FOLDER}/**/*.js`,
			fonts: `${SOURCE_FOLDER}/**/*.+(eot|svg|ttf|woff|woff2)`,
			images: `${SOURCE_FOLDER}/**/*.+(png|jpg|webp|gif|svg|ico)`,
			videos: `${SOURCE_FOLDER}/**/*.+(mp4)`,
			favicon: `${SOURCE_FOLDER}/assets/images/favicon.png`,
			favicon_data: "./faviconData.json",
		},
		dest: {
			base: DESTINATION_FOLDER,
			html: `${DESTINATION_FOLDER}/**/*.html`,
			css: `${DESTINATION_FOLDER}/**/[^_]*.css`,
			javascript: `${DESTINATION_FOLDER}/**/*.js`,
			images: `${DESTINATION_FOLDER}/**/*.+(png|jpg|webp)`,
			favicon: `${DESTINATION_FOLDER}/assets/images/favicon/`,
			favicon_icon: `./assets/images/favicon/`,
		},
	},
};

module.exports = config;
