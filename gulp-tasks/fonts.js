module.exports = function () {
  /* Таск для объединения папок fonts внешних библиотек: */
  gulp.task('fontsVendor', function () {
    return gulp.src(paths.app.vendor.fonts.src)
      .pipe(gulp.dest(paths.app.vendor.fonts.dest));
  });
  
  /* Таск для преобразования шрифтов *.ttf в шрифты *.eot: */
  gulp.task('fontsEot', function () {
    return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2eot())   // преобразование .ttf => eot
      .pipe(gulp.dest(paths.app.common.fonts.dest));
  });

  /* Таск для преобразования шрифтов *.ttf в шрифты *.woff: */
  gulp.task('fontsWoff', function () {
    return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2woff())  // преобразование .ttf => woff
      .pipe(gulp.dest(paths.app.common.fonts.dest));
  });

  /* Таск для преобразования шрифтов *.ttf в шрифты *.woff2: */
  gulp.task('fontsWoff2', function () {
    return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2woff2())   // преобразование .ttf => woff2
      .pipe(gulp.dest(paths.app.common.fonts.dest));
  });

  /* Таск для преобразования шрифтов *.ttf в шрифты *.svg: */
  gulp.task('fontsSvg', function () {
    return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2svg())  // преобразование .ttf => svg
      .pipe(gulp.dest(paths.app.common.fonts.dest));
  });

// gulp.task('fontsConvert', function () {
// 	var fontEot =  gulp.src(paths.app.common.fonts.src)
// 		.pipe(ttf2eot())   // преобразование .ttf => eot
// 		.pipe(gulp.dest(paths.app.common.fonts.dest));

// 	var fontWoff = gulp.src(paths.app.common.fonts.src)
// 		.pipe(ttf2woff())  // преобразование .ttf => woff
// 		.pipe(gulp.dest(paths.app.common.fonts.dest));

// 	var fontWoff2 = gulp.src(paths.app.common.fonts.src)
// 		.pipe(ttf2woff2())   // преобразование .ttf => woff2
// 		.pipe(gulp.dest(paths.app.common.fonts.dest));

// 	var fontSvg = gulp.src(paths.app.common.fonts.src)
// 		.pipe(ttf2svg())  // преобразование .ttf => svg
// 		.pipe(gulp.dest(paths.app.common.fonts.dest));

// 	return fontEot, fontWoff, fontWoff2, fontSvg;
// });
}