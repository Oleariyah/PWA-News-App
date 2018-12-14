console.log('Hello World')

workbox.routing.registerRoute(
    /https:\/\/newsapi\.org/,
    workbox.strategies.networkFirst()
          
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);