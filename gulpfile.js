var gulp = require('gulp');
var nodemon = require('nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

// http://jpsierens.com/tutorial-livereload-nodemon-gulp/
gulp.task('start', function () {
    // to reload the browser
    livereload.listen({ port: 35729 });
    watch('front/**/*')
    .pipe(livereload())
    .pipe(notify('Reloading page, please wait...'));

    // to restart the nodejs
    nodemon({
        script: 'app/app.js',
        ext: 'js html',
        watch: [ './app/**' ],
        env: { 'NODE_ENV': 'development' }
    });/*.on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('app/app.js')
		.pipe(livereload());
	});*/
});
