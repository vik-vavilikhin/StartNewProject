module.exports = function () {
  /* Таск для формирования production-папки: */
  gulp.task('dist', function () {
    var htmlDist = gulp.src(paths.dist.html.src)
      .pipe(htmlmin({ collapseWhitespace: true })) // Минификация HTML
      .pipe(gulp.dest(paths.dist.html.dest));      // Перенос HTML

    var cssDist = gulp.src(paths.dist.css.src)
      // .pipe(uncss({html: ['app/index.html']}))     // Удалить неиспользуемые стили
      .pipe(csso())                                // Минификация CSS
      .pipe(gulp.dest(paths.dist.css.dest));       // Перенос CSS

    var jsDist = gulp.src(paths.dist.js.src)
      .pipe(uglify())                              // Минификация JS
      .pipe(gulp.dest(paths.dist.js.dest));        // Перенос JS

    var fontsDist = gulp.src(paths.dist.fonts.src)
      .pipe(gulp.dest(paths.dist.fonts.dest));     //Перенос шрифтов

    return htmlDist, cssDist, jsDist, fontsDist;
  });
}