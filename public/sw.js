const CACHE_NAME = "ufoo68-portfolio-v1";
const APP_SHELL = ["/", "/offline", "/manifest.webmanifest", "/favicon.ico"];

self.addEventListener("install", (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((names) =>
				Promise.all(
					names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)),
				),
			)
			.then(() => self.clients.claim()),
	);
});

self.addEventListener("fetch", (event) => {
	if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) {
		return;
	}

	if (event.request.mode === "navigate") {
		event.respondWith(
			fetch(event.request)
				.then((response) => {
					const copy = response.clone();
					caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
					return response;
				})
				.catch(async () => (await caches.match(event.request)) || caches.match("/offline")),
		);
		return;
	}

	if (["style", "script", "image", "font"].includes(event.request.destination)) {
		event.respondWith(
			caches.match(event.request).then(
				(cached) =>
					cached ||
					fetch(event.request).then((response) => {
						if (response.ok) {
							const copy = response.clone();
							caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
						}
						return response;
					}),
			),
		);
	}
});
