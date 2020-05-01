module.exports = {
    runtimeCaching: [
        {
            urlPattern: '/api/login',
            handler: 'networkFirst',
        },
        {
            urlPattern: '/api/callback',
            handler: 'networkFirst',
        },
    ],
};
