var gulp = require('gulp');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');

gulp.task('default', function () {
    return gulp.src('css/style.css')
        .pipe(uncss({
        	ignore: ['.js-nav-active .mask', '.mask', '.mfp-container', '.mfp-wrap', '.mfp-zoom-in.mfp-wrap.mfp-ready .mfp-content', '.mfp-zoom-in.mfp-wrap .mfp-content', '.mfp-auto-cursor .mfp-content', '.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content', '.mfp-s-ready .mfp-preloader', '.mfp-preloader', '.mfp-zoom-in.mfp-bg.mfp-ready', '.mfp-zoom-in.mfp-bg', '.mfp-bg', '.mfp-container:before', '.mfp-hide', 'button.mfp-close', 'button.mfp-arrow', '.mfp-close', '.mfp-close-btn-in .mfp-close', '.mfp-close:hover', '.mfp-close:focus', '.mfp-content', '.mfp-close', '.mfp-arrow', '.mfp-image-holder', '.mfp-counter', '.mfp-arrow-left', '.mfp-arrow-right', 'img.mfp-img', '.mfp-figure', '.mfp-figure figure', '.mfp-bottom-bar', '.mfp-title', '.mfp-counter', '.mfp-zoom-out-cur', '.mfp-zoom-out-cur .mfp-image-holder .mfp-close', '.mfp-image-holder .mfp-close', '.mfp-iframe-holder .mfp-close', '.mfp-close-btn-in .mfp-close', '.svg-link.icon-hover__white:hover .replaced-svg path', '.svg-link.icon-hover__white:hover'],
            html: ['http://nicos-mbp.local:5757/', 'http://nicos-mbp.local:5757/services', 'http://nicos-mbp.local:5757/project-galleries', 'http://nicos-mbp.local:5757/our-plants', 'http://nicos-mbp.local:5757/contact']
        }))
        .pipe(nano())
        .pipe(gulp.dest('./css/opt'));
});
