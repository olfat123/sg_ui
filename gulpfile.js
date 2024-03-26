const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const requireDir = require("require-dir");
const { production } = require("./gulp/tasks/production");
const { watch } = require("./gulp/tasks/watch");

global.browserSync = browserSync;
requireDir("./gulp/tasks", { recurse: false });

gulp.task("production", production);
gulp.task("default", gulp.series(production, watch));
