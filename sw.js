self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa').then(cache => {
      return cache.addAll([
          'sw.js',
          'index.html',
          'js/bundle.min.js',   
          'css/main.min.css', 
          'css/semantic.min.css',   
          'manifest.json'
      ])
      .then(() => self.skipWaiting());
    })
  )
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
