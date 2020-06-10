const CACHE_NAME = "passeChat-v1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// 1. install Sw
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(() => {
        return fetch(event.request);
      })
      .catch(() => caches.match("offline.html"))
  );
});

// 3. activate
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName))
            return caches.delete(cacheName);
        })
      )
    )
  );
});
