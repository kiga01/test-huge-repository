var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    scsslint = require('gulp-scss-lint'),
    mocha = require('gulp-mocha');

var outputDir,
    sassStyle,
    sassSources,
    sassWatch,
    fontSources,
    htmlSources,
    jsSources,
    testDirectory,

outputDir = 'public/';
sassStyle = 'expanded';

sassSources = [
    'app/app.scss'
];
sassWatch = [
    'app/app.scss',
    'app/styles/*.scss',
];
fontSources = [
    'node_modules/font-awesome/fonts/*',
    'app/fonts/*'
];
htmlSources = [
    'app/index.html'
];
jsSources = [
    'app/js/*.js'
];
testDirectory = [
    'test/*.js',
    'e2e/*.js'
];


gulp.task('scss', function() {
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'app',
            style: sassStyle
        })
            .on('error', gutil.log))
        .pipe(gulp.dest(outputDir + 'styles'))
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
            .on('error', gutil.log)
        .pipe(gulp.dest(outputDir + 'js'))
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(gulp.dest(outputDir));
});

gulp.task('fonts', function() {
    gulp.src(fontSources)
        .pipe(gulp.dest(outputDir + 'fonts'));
});

gulp.task('images', function() {
    gulp.src('app/images/*.*')
        .pipe(gulp.dest(outputDir + 'images'));
});

gulp.task('scsslint', function() {
    gulp.src(sassWatch)
        .pipe(scsslint({
            'config': '.scss-lint.yml',
            'reporterOutput': 'scssReport.json'
        }))
        .on('error', gutil.log)
});

gulp.task('mocha', function() {
    return gulp.src(testDirectory, {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch', function() {
    gulp.watch(sassWatch, ['scsslint']);
    gulp.watch(sassWatch, ['scss']);
    gulp.watch(jsSources, ['js']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('server', function () {
    nodemon({
        script: './bin/www',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('start', [
    'scsslint',
    'scss',
    'js',
    'html',
    'fonts',
    'server',
    'watch']
);

gulp.task('test', [
    'mocha',
    'scsslint']
);
