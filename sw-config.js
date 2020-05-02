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
};
