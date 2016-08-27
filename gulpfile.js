var gulp = require('gulp');
var uncss = require('gulp-uncss');

gulp.task('default', function () {
    return gulp.src('css/style.css')
        .pipe(uncss({
            html: ['http://nicos-mbp.local:5757/', 'http://nicos-mbp.local:5757/services', 'http://nicos-mbp.local:5757/project-galleries', 'http://nicos-mbp.local:5757/our-plants', 'http://nicos-mbp.local:5757/contact']
        }))
        .pipe(gulp.dest('./css/opt'));
});
