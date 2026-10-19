/* umotion Academy · Service worker: solo para las notificaciones diarias. No guarda caché. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'umotion Academy', {
    body: d.body || '5 minutos hoy para no perder tu racha.',
    icon: '/brand/icon-192.png',
    badge: '/brand/icon-192.png',
    tag: d.tag || 'racha',
    renotify: false,
    data: { url: d.url || '/es/mi-plan/' },
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/es/mi-plan/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
    for (const w of wins) if ('focus' in w) { w.navigate(url); return w.focus(); }
    return self.clients.openWindow(url);
  }));
});
