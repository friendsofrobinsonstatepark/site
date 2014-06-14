var gulp = require('gulp');
var jade = require('gulp-jade');
var connect = require('connect');
var sass = require('gulp-sass');

gulp.task('default', ['render-jade','styles','docs','backgrounds','icons'], function(){
});

gulp.task('render-jade', function(){
  gulp.src('./src/*.jade')
                   .pipe(jade())
                   .pipe(gulp.dest('./build'));
});

gulp.task('styles', function(){
  gulp.src('./sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('./build/css'));
});

gulp.task('icons', function(){
  gulp.src('./icons/*')
                   .pipe(gulp.dest('./build'));
});

gulp.task('backgrounds', function(){
  gulp.src('./backgrounds/*')
                   .pipe(gulp.dest('./build'));
});

gulp.task('docs', function(){
  gulp.src('./docs/*')
      .pipe(gulp.dest('./build/docs'));
});

gulp.task('watch', function(){
  gulp.watch('./src/*.jade', ['render-jade']);
  gulp.watch('./sass/*.sass', ['styles']);
  connect().use(connect.static(__dirname+'/build')).listen(8080);
  console.log('Site available at localhost:8080');
});
