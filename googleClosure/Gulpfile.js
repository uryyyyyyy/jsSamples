var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');

gulp.task('compile', function() {
  return gulp.src(['src/**/*.js', 'bower_components/google-closure-library/closure/goog/**/*.js'])
    .pipe(closureCompiler({
      compilerPath: 'bower_components/closure-compiler/compiler.jar',
      fileName: 'build.js',
      compilerFlags: {
        closure_entry_point: 'app.main',
        compilation_level: 'ADVANCED_OPTIMIZATIONS',
        only_closure_dependencies: true,
        warning_level: 'VERBOSE'
      }
    }))
    .pipe(gulp.dest('build'));
});
