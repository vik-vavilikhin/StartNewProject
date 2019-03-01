module.exports = function () {
  gulp.task('rsync', function () {
    return gulp.src('app/**')
      .pipe(rsync({
        root: 'app/',
        hostname: 'username@yousite.com',
        destination: 'yousite/public_html/',
        include: ['*.htaccess'], 							// Includes files to deploy
        exclude: ['**/Thumbs.db', '**/*.DS_Store'], 	// Excludes files from deploy
        recursive: true,
        archive: true,
        silent: false,
        compress: true
      }))
  });
}