module.exports = {
    runtimeCaching: [
        {
            urlPattern: '/api/login',
            handler: 'networkOnly',
        },
        {
            urlPattern: '/api/callback',
            handler: 'networkOnly',
        },
        {
            urlPattern: '/api/',
            handler: 'networkFirst',
        },
    ],
};
