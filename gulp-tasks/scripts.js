module.exports = function () {
  /* Таск для объединения и минификации JS-файлов внешних библиотек: */
  gulp.task('jsVendor', function () {
    return gulp.src(paths.app.vendor.js.src)
      .pipe(concat('vendor.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.app.vendor.js.dest));
  });

  /* Таск для объединения и минификации пользовательских JS-файлов: */
  gulp.task('jsCommon', function () {
    return gulp.src(paths.app.common.js.src)
      .pipe(plumber())
      .pipe(concat('common.js'))
      .pipe(gulp.dest(paths.app.common.js.dest))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest(paths.app.common.js.dest))
      .pipe(browserSync.stream());
  });
}