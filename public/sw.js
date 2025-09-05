// Service Worker для кэширования
const CACHE_NAME = 'oneclick-v1';
const urlsToCache = [
  '/',
  '/img/logo.webp',
  '/img/background.svg',
  '/img/pattern.webp',
  '/img/cursor.svg',
  '/img/message.svg',
  '/img/check.svg',
  '/img/arrow.svg',
  '/img/play.svg',
  '/img/star.svg',
  '/img/menu.svg',
  '/img/close.svg',
  '/img/phones.webp',
  '/img/phonemockup.webp',
  '/img/mockup.webp',
  '/img/ellipse-1.webp',
  // Добавьте другие критические ресурсы
];

// Установка Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Кэш открыт');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Перехват запросов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Возвращаем из кэша, если есть
        if (response) {
          return response;
        }
        
        // Иначе загружаем с сервера
        return fetch(event.request).then(response => {
          // Проверяем валидность ответа
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Клонируем ответ
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        });
      })
  );
});
