module.exports = function () {
  /* Таск для предварительной очистки (удаления) production-папки: */
  gulp.task('clean', function () {
    return del(paths.dir.dist);
  });
}