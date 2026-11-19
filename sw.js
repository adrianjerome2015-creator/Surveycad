var C='surveycad-v4';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','index.html','manifest.json'])}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!=C}).map(function(n){return caches.delete(n)}))}))});
self.addEventListener('fetch',function(e){var u=new URL(e.request.url);if(e.request.method!='GET')return;
if(u.origin!=self.location.origin&&!(u.hostname=='cdnjs.cloudflare.com'&&u.pathname.indexOf('/pdf.js/')>=0))return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(h){h.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
