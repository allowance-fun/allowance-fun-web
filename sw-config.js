module.exports = {
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/allowance\.fun\/api\/login/,
            handler: 'networkOnly',
        },
        {
            urlPattern: /^https:\/\/allowance\.fun\/api\/callback.*/,
            handler: 'networkOnly',
        },
        {
            urlPattern: /^https:\/\/allowance\.fun\/api\/.*/,
            handler: 'networkFirst',
        },
    ],
    navigateFallbackWhitelist: [ /^\/app\// ],
    staticFileGlobs: [
        './build/**/**.html',
        './build/*.jpg',
        './build/*.png',
        './build/*.ico',
        './build/static/js/*.js',
        './build/static/css/*.css',
        './build/static/media/**'
    ],

};
