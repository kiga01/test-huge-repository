module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: ['PhantomJS'],
        files: [
            'app/js/*.js',
            'tests/**/*.spec.js'
        ]
    });
};