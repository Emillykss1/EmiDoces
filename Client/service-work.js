var cacheName = "EmiDocesPWA+-v1.0";

self.addEventListener('install', Event => {

    self.skipWaiting();

    Event.waitUnitil(
        caches.open(cacheName)
        .then(cache => cache.addALL([

            './index.html',

            './assets/css/bootstrap.min.css',
            "./index.js",

            './assets/css/img/emidoces.png',

            './assets/css/style.css',
         ]))
    );
});

self.addEventListener('message', function (event){
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {

        event.respondWith(
            caches.match(event.request)
            .then(function (response){
                if (response){
                    return response;
                }
                return fetch(event.request);
            })
        );
        });