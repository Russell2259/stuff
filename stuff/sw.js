importScripts('uv.bundle.js');
importScripts('uv.config.js');
importScripts(__uv$config.sw || 'uv.sw.js');

if (new URL(location).searchParams.get('bare')) self.__uv$config.bare === new URL(location).searchParams.get('bare');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
