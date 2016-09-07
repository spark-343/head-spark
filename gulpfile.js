var gulp = require('gulp');
var nodemon = require('nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var less = require('gulp-less');
var rename = require('gulp-rename');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var del = require('del');

gulp.task('less', function () {
    return gulp.src(['src/public/app/**/*.less', 'src/public/styles/style.less'], {base: 'src/'})
    .pipe(less())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('src/'))
    // .pipe(livereload());
});

// TypeScript compile
gulp.task('typescript', function () {
  return gulp
    .src('src/**/*.ts', {base: 'src/'})
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('src/'))
    // .pipe(livereload());
});

gulp.task('clean', function () {
    del([ 'src/public/app/**/*.js', 'src/public/app/**/*.js.map', 'src/public/app/**/*.min.css', 'src/server/**/*.js', 'src/server/**/*.js.map', 'src/public/styles/style.min.css' ]);
});

// http://jpsierens.com/tutorial-livereload-nodemon-gulp/
gulp.task('start', ['typescript', 'less'], function () {
    // to reload the browser
    // livereload.listen({ port: 35729 });

    gulp.watch('src/**/*.ts', ['typescript']);


    //watch( 'src/**/*.ts', {base: 'src/'})
    //.pipe(typescript(tscConfig.compilerOptions))
    //.pipe(gulp.dest('src/'))
    //.pipe(notify('Reloading page, please wait...'));

    //watch(['src/public/app/**/*.less', 'src/public/styles/style.less'] , {base: 'src/'})
    //.pipe(less())
    //.pipe(rename({
    //    suffix: '.min'
    //}))
    //.pipe(gulp.dest('src/'))


    // .pipe(livereload());
    //.pipe(livereload())

    // .pipe(notify('Reloading page, please wait...'));

    // gulp.start(['less', 'typescript']);

    gulp.watch(['src/public/app/**/*.less', 'src/public/styles/style.less'], ['less']);

    //gulp.watch('src/public/app/*.ts', ['typescript']);

    // to restart the nodejs
    nodemon({
        script: 'src/server/server.js',
        ext: 'js html',
        ignore: [
            'node_modules/'
        ],
        env: { 'NODE_ENV': 'development' },
        stdout: false
    }).on('readable', function(data) {
        // waiting for the word 'listening' in the stdout of the app/app.js
        // in order to be sure that the http server is listening for livereload
        // this.stdout.on('data', function(chunk) {
        //     if (/listening/.test(chunk)) {
        //         console.log('livereload');
        //         livereload.reload();
        //     }
        //     process.stdout.write(chunk);
        // });
        // this.stderr.pipe(process.stderr);
    });
});
