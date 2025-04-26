// sw.js
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker ativado.');
});

self.addEventListener('fetch', function(event) {
  // Aqui você pode interceptar requisições se quiser futuramente
});
