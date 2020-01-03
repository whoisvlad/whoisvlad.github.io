const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require("browser-sync").create();


sass.compiler = require('node-sass');





// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./app",
        },
        // port: 3000,
        port: 5000,
        stream:true,
        notify: false
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}


// CSS task
function css() {
    return gulp
            .src('./app/scss/**/*.scss')
            .pipe(sass({
                outputStyle: "expanded"
            }))
            .pipe(gulp.dest('./app/css/'));
}



// Watch files
function watchFiles() {
    gulp.watch("app/scss/**/*.scss", css), gulp.series(browserSyncReload);
    gulp.watch(
        [
            "app/**/*"
        ],
        gulp.series(browserSyncReload)
    );
}


// define complex tasks
const build = gulp.series(css, browserSync);
const watch = gulp.parallel(css, watchFiles, browserSync);



// export tasks
exports.css = css;
exports.watch = watch;
exports.default = watch;