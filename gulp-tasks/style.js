module.exports = function () {
  /* Таск для объединения и минификации CSS-файлов внешних библиотек: */
  gulp.task('cssVendor', function () {
    return gulp.src(paths.app.vendor.css.src)
      .pipe(concat('vendor.min.css'))
      .pipe(csso())
      .pipe(gulp.dest(paths.app.vendor.css.dest));
  });
  
  /* Таск для преобразования Sass-файлов в CSS: */
  gulp.task('cssCommon', function () {
    var pxtoremOptions = { replace: true };
    var postcssOptions = { map: false };

    return gulp.src(paths.app.common.css.src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('common.scss'))
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(pxtorem(pxtoremOptions, postcssOptions))
      .pipe(gcmq())
      .pipe(cleanCSS({
        level: 2,
        format: 'beautify'
      }))
      .pipe(gulp.dest(paths.app.common.css.dest))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      // .pipe(cleanCSS({level: 2}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(paths.app.common.css.dest))
      .pipe(browserSync.stream());
  });
}