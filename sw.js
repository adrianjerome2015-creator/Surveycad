var C='surveycad-v2';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','index.html','manifest.json'])}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!=C}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(h){h.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
