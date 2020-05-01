module.exports = {
    runtimeCaching: [
        {
            urlPattern: '/api',
            handler: 'networkFirst',
        },
    ],
};
