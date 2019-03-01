module.exports = function () {
  /* Таск для работы Pug, преобразование Pug в HTML: */
  gulp.task('html', function () {
    return gulp.src(paths.app.html.src)
      .pipe(plumber())
      .pipe(pug({ pretty: true }))
      .pipe(gulp.dest(paths.app.html.dest))
      .pipe(browserSync.stream());
  });
}