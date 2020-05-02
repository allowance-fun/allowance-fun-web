module.exports = {
  cacheId: 'sw-precache-webpack-plugin',
  navigateFallback: '/index.html',
  navigateFallbackAllowlist: [ /^\/app\// ],
  globDirectory: 'build',
  globPatterns: [
    '*.html',
    '*.jpg',
    '*.png',
    '*.ico',
    'static/js/*.js',
  ],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/allowance\.fun\/api\/login/,
      handler: 'NetworkOnly'
    },
    {
      urlPattern: /^https:\/\/allowance\.fun\/api\/callback.*/,
      handler: 'NetworkOnly'
    },
    {
      urlPattern: /^https:\/\/allowance\.fun\/api\/.*/,
      handler: 'NetworkFirst'
    }
  ],
  swDest: 'build/service-worker.js',
  maximumFileSizeToCacheInBytes: 7340032,
}
