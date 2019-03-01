module.exports = function () {
  /* Компиляция smart-grid */
  gulp.task('grid', function () {
    delete require.cache[require.resolve(paths.app.vendor.grid.src)];
    let options = require(paths.app.vendor.grid.src);
    smartgrid(paths.app.vendor.grid.dest, options);
  });

}