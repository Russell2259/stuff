importScripts('localforage.js');

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'Ultraviolet',
  version: 1.0,
  storeName: 'ultraviolet_config'
});

try {
  const bareServer = await localforage.getItem('bare');
  if (bareServer) self.__uv$config.bare === bareServer;
} catch {}

importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
