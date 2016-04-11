module.exports = function(config) {
    config.set({
        files: [
            'app/js/*.js',
            'test/**/*.spec.js'
        ],
        autoWatch: false,
        browsers: ['PhantomJS'],
        colors: true,
        concurrency: Infinity,
        frameworks: ['browserify', 'mocha'],
        plugins: [
            require('karma-browserify'),
            require('karma-webpack'),
            require('karma-phantomjs-launcher'),
            require('karma-mocha'),
            require('chai')
        ],
        port: 9876,
        singleRun: true,
        reporters: ['progress']
    });
};