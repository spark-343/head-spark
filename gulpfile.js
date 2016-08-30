var gulp = require('gulp');
var nodemon = require('nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var less = require('gulp-less');
var rename = require('gulp-rename');


gulp.task('less', function () {
    return gulp.src('./front/static/styles/style.less')
    .pipe(less())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./front/static/styles/'))
    .pipe(livereload());
});

// http://jpsierens.com/tutorial-livereload-nodemon-gulp/
gulp.task('start', function () {
    // to reload the browser
    livereload.listen({ port: 35729 });
    watch('front/**/*')
    .pipe(livereload())
    // .pipe(notify('Reloading page, please wait...'));

    gulp.start(['less']);

    gulp.watch('front/static/styles/*.less', ['less']);

    // to restart the nodejs
    nodemon({
        script: 'app/app.js',
        ext: 'js html',
        ignore: [
            'front/',
            'node_modules/'
        ],
        env: { 'NODE_ENV': 'development' },
        stdout: false
    }).on('readable', function(data) {
        // waiting for the word 'listening' in the stdout of the app/app.js
        // in order to be sure that the http server is listening for livereload
        this.stdout.on('data', function(chunk) {
            if (/listening/.test(chunk)) {
                console.log('livereload');
                livereload.reload();
            }
            process.stdout.write(chunk);
        });
        this.stderr.pipe(process.stderr);
    });
});
