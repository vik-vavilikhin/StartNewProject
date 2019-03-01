// let paths = {
//   watch: {
//     html: './app/liability/**/*.pug',
//     css:  './app/liability/**/*.scss',
//     js:   './app/liability/**/*.js',
//     grid: './app/vendor/smartgrid/_smartgrid-options.js'
//   },
// }

module.exports = function () {
  /* Таск для работы Browsersync, автообновление браузера: */
  $.gulp.task('watch', function () {
    $.gulp.watch(paths.watch.grid, $.gulp.series('grid'));
    $.gulp.watch(paths.watch.html, $.gulp.series('html'));
    $.gulp.watch(paths.watch.css, $.gulp.series('cssCommon'));
    $.gulp.watch(paths.watch.js, $.gulp.series('jsCommon'));
    // $.gulp.watch('*.html').on('change', $.browserSync.reload);
  });
}