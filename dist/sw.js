importScripts("precache-manifest.ac28f09ccd58058c38fa8cf16d6df3e3.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log('Hello World')

workbox.routing.registerRoute(
    /https:\/\/newsapi\.org/,
    workbox.strategies.networkFirst()
          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);
