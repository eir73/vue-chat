importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/392014eaace78bc9993c.js",
    "revision": "1cad7c9684ddd99061188c906e2e8e80"
  },
  {
    "url": "/_nuxt/3c05cc2688fdc6076d8f.js",
    "revision": "ee13b0cea165b34fe03a368fed4d45d0"
  },
  {
    "url": "/_nuxt/9982277424ec91a7273c.js",
    "revision": "633fd88bbdb8c1015540785dca9a3dbc"
  },
  {
    "url": "/_nuxt/a9b658439c253eedaa99.js",
    "revision": "6da8545e54e7588c9f36c49c1815a575"
  },
  {
    "url": "/_nuxt/c94bce27a489c7cf03e2.js",
    "revision": "b620eae342beca1a11977203f01cc3b4"
  },
  {
    "url": "/_nuxt/ce2b1d7bf555c9c81572.js",
    "revision": "9dffea37ed7350662482115c6a12b801"
  },
  {
    "url": "/_nuxt/f0e013838322769455a8.js",
    "revision": "374ac10287ec84601347e0c3f62148e5"
  }
], {
  "cacheId": "chat-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
