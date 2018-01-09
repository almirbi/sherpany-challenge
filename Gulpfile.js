const gulp = require("gulp"),
	browserSync = require("browser-sync").create(),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	plumber = require("gulp-plumber");

// Static Server + watching scss/html files
gulp.task("serve", ["sass"], function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch("./src/*.scss", ["sass"]);
	gulp.watch("./styles/*.css").on("change", browserSync.reload);
	gulp.watch("./src/*.html").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
	return gulp
		.src("./src/*.scss")
		.pipe(plumber())
		.pipe(
			sass({
				style: "compressed",
				includePaths: ["./styles/"]
			})
		)
		.pipe(plumber())
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"],
				cascade: false
			})
		)
		.pipe(plumber())
		.pipe(gulp.dest("./styles/"));
});

gulp.task("default", ["serve"]);
