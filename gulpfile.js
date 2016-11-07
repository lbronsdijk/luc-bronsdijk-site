// include gulp
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// include plug-ins
var uglify    = require('gulp-uglify');
var rename    = require('gulp-rename');
var concat    = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

// Set source and destination dirs
var source      = './gulp/';
var destination = './public/';
var jsFiles     = [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/html5shiv/dist/html5shiv.js',
                    'bower_components/respond/dest/respond.src.js',
                    'src/js/*.js'
                  ];

// define the default
gulp.task('default', ['watch'], function() {
    gulp.run('appCss');
    gulp.run('appJs');
    gulp.run('watch');
});

// App js
gulp.task('appJs', function(){
    gulp.src(jsFiles)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/js'));
    gutil.log('Javascript combined and minified.');
});

// App css
gulp.task('appCss', function(){
    gulp.src(['src/css/*.css'])
        .pipe(uglifycss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/css'));
    gutil.log('CSS combined and minified.');
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['appJs']);
    gulp.watch('src/css/*.css', ['appCss']);
});
derp
