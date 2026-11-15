// Service worker for the Home Screen app.
// Network first: every launch fetches the latest game from the server, so a
// Home Screen install never gets stuck on an old version. The cached copy is
// only used when the device is offline.
//
// The same file runs for the live site (scope "/") and the preview at
// /unstable/ (scope "/unstable/"). Each keeps its own cache, and the live
// worker leaves /unstable/ alone, so the two never mix.
const SCOPE = new URL(self.registration.scope).pathname;  // "/" or "/unstable/"
const CACHE = 'paigow-v1' + (SCOPE === '/' ? '' : ':' + SCOPE);
const PREVIEW = SCOPE + 'unstable/';

// Which worker a cache belongs to: "paigow-v1" is the live site's, "paigow-v1:/unstable/" the preview's.
const scopeOf = k => k.includes(':') ? k.slice(k.indexOf(':') + 1) : '/';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE && scopeOf(k) === SCOPE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || (url.pathname + '/').startsWith(PREVIEW)) return;
  e.respondWith((async () => {
    try {
      // 'no-cache' revalidates with the server instead of trusting the browser's HTTP cache.
      const res = await fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' });
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    } catch (err) {
      const hit = await caches.open(CACHE).then(c => c.match(req, { ignoreSearch: req.mode === 'navigate' }));
      if (hit) return hit;
      throw err;
    }
  })());
});
