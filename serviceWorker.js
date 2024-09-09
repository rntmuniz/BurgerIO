// nome da key onde ficaram guardados os arquivos 
const staticBurgerIO = "burger-io-pwa-v1";

// Lista de arquivos para serem guardados em cache
const assets = [
    "/",
    "/index.html",
    "/item_details.html",
    "/confirm_order.html",
    "/styles.css",
    "/app.js",
    "/assets/burgerio_logo.png",
    "/assets/double-x.jpg",
    "/assets/o-burger-x.jpg",
    "/assets/x-bacon.jpg",
    "/assets/x-burger.jpg",
    "/assets/x-futuro.jpg",
    "/assets/x-salada.jpg",
]

// Salva os arquivos listados em caches
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBurgerIO).then(cache => {
            cache.addAll(assets);
        })
    )
})

// Trazemos os dados salvos em cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})