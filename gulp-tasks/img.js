module.exports = function () {
  /* Таск для обработки изображений: */
  gulp.task('img', function () {
    return gulp.src(paths.img.src)
      .pipe(imagemin({ use: [pngquant()] }))
      .pipe(gulp.dest(paths.img.dest));
  });
}