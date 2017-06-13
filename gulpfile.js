const gulp = require("gulp");
// const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const connect = require("gulp-connect");

/**
 * Gulp Top Level Functions:
 * gulp.task  - Define Tasks
 * gulp.src   - Point to files to use
 * gulp.dest  - Point to the folder to output
 * gulp.watch - Watch files and folders for changes
 */

/*
 gulp.task("", function() {});
 */

// Logs Message
gulp.task("message", function () {
    return console.log("Gulp is running...");
});

// Gulp Connect (livereload server)
gulp.task("connect", function () {
    connect.server({
        root: "dist",
        port: 8000,
        livereload: true
    });
});

// Copy all HTML files
gulp.task("copyHtml", function () {
    gulp.src("src/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});

// Optimize images
/*gulp.task("imageMin", function() {
 gulp.src("src/img/!*")
 .pipe(imagemin())
 .pipe(gulp.dest("dist/img"));
 });*/

// Minify JS
/*
 gulp.task("minifyJs", function() {
 gulp.src("src/js/*.js")
 .pipe(uglify())
 .pipe(gulp.dest("dist/js"));
 });
 */

// Copy JS scripts
gulp.task("scripts", function () {
    gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
    /*gulp.src("src/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload()); */
});

// Compile Sass
gulp.task("styles", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            // outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
});

gulp.task("watch", function () {
    gulp.watch("src/js/**/*.js", ["scripts"]);
    // gulp.watch("src/images/*", ["imageMin"]);
    gulp.watch("src/scss/**/*.scss", ["styles"]);
    gulp.watch("src/*.html", ["copyHtml"]);
});

gulp.task("default", ["copyHtml", "scripts", "styles",
    "connect", "watch"]);
