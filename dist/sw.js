importScripts('/vue-chat/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/vue-chat/_nuxt/0cbd4043dbf7b3065cb9.js",
    "revision": "984b454441314856db65843b939d4415"
  },
  {
    "url": "/vue-chat/_nuxt/392014eaace78bc9993c.js",
    "revision": "1cad7c9684ddd99061188c906e2e8e80"
  },
  {
    "url": "/vue-chat/_nuxt/9982277424ec91a7273c.js",
    "revision": "633fd88bbdb8c1015540785dca9a3dbc"
  },
  {
    "url": "/vue-chat/_nuxt/9d15ef281d6c9bf683d8.js",
    "revision": "50fe53ebf6292f42e4ec1cb9c0102898"
  },
  {
    "url": "/vue-chat/_nuxt/a9b658439c253eedaa99.js",
    "revision": "6da8545e54e7588c9f36c49c1815a575"
  },
  {
    "url": "/vue-chat/_nuxt/c94bce27a489c7cf03e2.js",
    "revision": "b620eae342beca1a11977203f01cc3b4"
  },
  {
    "url": "/vue-chat/_nuxt/f0e013838322769455a8.js",
    "revision": "374ac10287ec84601347e0c3f62148e5"
  }
], {
  "cacheId": "chat-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/vue-chat/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/vue-chat/.*'), workbox.strategies.networkFirst({}), 'GET')
