'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ab35ddce491e2600ebcac3c64e42e785",
"assets/AssetManifest.bin.json": "95d8e76126c828444cf8aca27b1f1ad2",
"assets/AssetManifest.json": "c3067208ed1d274db9b53561af610b32",
"assets/assets/images/construction/about.jpg": "698227c5058e8d6adf203e1a8c579fa4",
"assets/assets/images/construction/applogo.png": "67412cc1ac2e1f7df5d55449335a43fd",
"assets/assets/images/construction/architecture.jpg": "a4df056c666d3b729a7464d0841103e5",
"assets/assets/images/construction/constructionsite.jpg": "e523584ff71cd021774959d0ea887d4c",
"assets/assets/images/construction/constructionsite2.jpg": "5e327c7d9811810ac2cf1d7ab9b4a67c",
"assets/assets/images/construction/interior.jpg": "d99d5276863871316115c665dbdaff9d",
"assets/assets/images/construction/logo.png": "104317af66caee05693be4e4d57efe47",
"assets/assets/images/construction/servicepage.jpg": "344a9df9ad56a55280cbf442f1d32c06",
"assets/assets/images/construction/whychooseus.jpg": "5af85a3fa28352dc973aa7b849c2a5c2",
"assets/assets/images/construction/whychooseus1.jpg": "d6eca4e91cb73721af7fee5c6d0cf86a",
"assets/assets/images/construction-company-in-manipur-construction-work-07-500x500.webp": "6b50697c9fbfffe1d346d2ee83512691",
"assets/assets/images/interior.jpg": "ed1356674acfdd29c6bfd6f844c4d2bc",
"assets/assets/images/large-scale-civil-projects-services-365.jpg": "a92c1ea26c3ddb91e76e36ff30651847",
"assets/assets/images/photo.jpg": "e7f9deb1faff8b65309bcd2b93917728",
"assets/assets/images/picture.png": "d1693e7e59b0fc1c6730d3fb367f55ef",
"assets/assets/images/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/assets/images/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/assets/images/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/FontManifest.json": "644d79a26bd22859f3b77b365424ae5f",
"assets/fonts/KulimPark-Regular.ttf": "3efa2c26f11ff766630b89394c98d62c",
"assets/fonts/MaterialIcons-Regular.otf": "d10468d1ec373d3a70cc9ebb31c38144",
"assets/NOTICES": "5ff0036edc8579860eb0979320987591",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ad776c5e8155454a5c27ac8252f89420",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "9eee735b9a28a93d93fac3e87c40eb69",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "01fe4f0ccd408fed6e5df1dcfe5ba203",
"icons/Icon-512.png": "2712714306710635bc69d0fca34ed44b",
"icons/Icon-maskable-192.png": "01fe4f0ccd408fed6e5df1dcfe5ba203",
"icons/Icon-maskable-512.png": "2712714306710635bc69d0fca34ed44b",
"index.html": "dcea8bf29287801dfc8938354b70b67b",
"/": "dcea8bf29287801dfc8938354b70b67b",
"main.dart.js": "6fa7e9d9cb65f54f435f5d89b70c00f7",
"manifest.json": "15684070a1c702025bda40b3c9a683d7",
"version.json": "8f56e2f4134fd32e7fd217455d4a3e48"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
