import gulp from "gulp";
import babelify from "babelify";
import browserify from "browserify";
import reactify from "reactify";
import source from "vinyl-source-stream";

const dirs = {
  src: 'src',
  dest: 'dist'
};

const paths = {
  scripts: dirs.src + "/**/*.js*"
};

gulp.task('build', function () {
  browserify({
    entries: 'src/application.jsx',
    transform: [babelify, reactify],
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(dirs.dest));
});

gulp.task("scripts", ["build"]);

gulp.task("watch", function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task("default", ["watch", "scripts"]);
