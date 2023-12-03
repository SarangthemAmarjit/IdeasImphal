'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "1cd2b5b7ff7017f2610db3c2bf1bccdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9aa2b221cfa3f98a09f3fad96095a586",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f5a4bf0a263d8e4ef7f28f2024d265c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eae9e5e96a05c574d56e69c621a6d840",
".git/logs/refs/heads/main": "b029b12b615abf1dd35525439cbbe54e",
".git/logs/refs/remotes/origin/main": "3fb15e4901ba61e1d284f610ddb123f1",
".git/objects/00/769b4353cf399ba0b8a424dba1a35eb597ba40": "4ef54260fe4c8764590e35fd4aecf16b",
".git/objects/02/ef41bb53cebc54b84258573a792d17dae880c3": "d841fc5fe96cca2e34fc18058f6330e5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/3162752f1b7a03346d92ef9efdddf3c45a51ad": "05076f7b50957358ca2eec75ece4f65f",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0f/87902e6bcbe1386913ac95070361a1dae04393": "d8867e596d969dc05f085947f54599fc",
".git/objects/16/08251079fc758206ec889d79cbe16ba84fa1f0": "7175783ca585db741e83996215e045bf",
".git/objects/16/1875a2eafd3de3b45dbf8427107af92d2fe9b8": "694d41161beebdf53e37dcf21b2eb99c",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1a/0f781ba3682a2ad06bc02e4083ead0fb0fb368": "0550b92eab6156d53d333fc0942d891a",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1e/2dbffb05e997b1dccd74c5c398ddd2e5dd5ac4": "cc47e891eb13d16f8f93306b70c2d101",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a7b0e2b7fad9e9d79ff6eef2448b8987da2db1": "4644d2fbb6364d48d17f62829b4ad6d7",
".git/objects/28/4f3db65c34bc562b37435c546a60a9e2c2922e": "3819d84f361bf563dfac66805d60e4ad",
".git/objects/32/34b40429c92b2d95ca97a0f139f026a9b45042": "9b3ad8ee27ac36c770f15b665c019b45",
".git/objects/33/5e2e3fbb7f96b9f5660d7ebb37151b50bb1bc8": "2f712d577e342be9b01376021b7abf10",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/3bc96842890b7d633bf1ddb5c252639af05a21": "fb635e3f80ba61d68b2e5fde3c26d799",
".git/objects/3c/84b7b02bc18e08a64b65d79eeba8c69c520315": "06e2c636a32ce1c3db02cff6aa4311d7",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/40/ed39d540c0d6e7a0f76c470ef63f02d58b6699": "745a1597543004d46b67ec7d18d50f1a",
".git/objects/42/52c937c4fe748d151479867b456093e6e291c6": "5cd7098497bf27cd48f758858462cc50",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/18158acbbe6ab9c19a72ea3ab3f4f3d48769b4": "f35dbcaad26e01463c34d3e586102503",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/a4e9bc4ca369e2f2fe5e95898b50575c7b78dd": "9af33149f3aaaffe4fb9e033cd611fb4",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/313d0b2f920b61e17f20f0c8e5fe60351c413e": "6d2105ded453215d8c85c53ef3301ea6",
".git/objects/62/840afdb6fdefe41ea208c6bbf037853b83cc35": "2373d0125ed3ed7acfffe8a05f0e38d3",
".git/objects/62/d18cc8094fc09b11447aa28e60a5d9d13acd84": "551a423505f324d56c39d548815b5dda",
".git/objects/63/73ab1b6c34d5124ced942a394f246b2b12b54d": "f30a45dc43d1ec9d26bfe8962225a2c3",
".git/objects/63/aab6fd69ca63367ff584491463e5c1a3d41a23": "cc6fbbeafbd49606f11ba253c4aec3cc",
".git/objects/64/778e638fba88a1d0a8e1ce736f58ea9958bc56": "22fcb0316eda841542a5be2e6a92a0c4",
".git/objects/66/b4dcc50faad15360d2bf9f59375f30a468fc0b": "0e495373bc3281339ea1ea0dfc7a9c0b",
".git/objects/67/e13e89749c928149ad1b46d61bef5a4a811e49": "ce363d7e1e86c11101aa79296033f0c4",
".git/objects/67/f3c5d64525e9fc6d60448d25629ecf20880102": "740085aab001262d12e0d8420916b994",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/7a/01e53dcafe909dc5a38a0f13f793f88c5eaf72": "1f3dd4bcdc4629c0bc4c5de46cec4571",
".git/objects/7c/638d3eadd39fd54cb29dfd19a147c30c932287": "841bed4a4c203fbc0db84d57e01206f8",
".git/objects/7e/2832e635f7b3948bb8e0875c2afe4154b21df6": "9ae83335a0f5486608279a895cc7235d",
".git/objects/84/1bbc48dbf3271dab81c398780679390d48df39": "db995e92991242944a0943678c75bbcc",
".git/objects/85/6c32e88890ae9bf8e3772f4f7e7c24f5dc80ce": "cbe75c2e4036bfbd06e5a36d704a36e4",
".git/objects/8c/b558a2f6ccb04b21481d5ec0da69412795c36c": "9bbc410c1b8413765b6eed662bb2f123",
".git/objects/96/bd1bbaaa79083abf4e694009533826bc72e813": "5245a92ff7f40c8f4beb73f7cd05b9e9",
".git/objects/9b/de258209e3661a4c372b3c6f124af1b5aaa77e": "5b4fba4edacad45d82224ce249319e94",
".git/objects/9d/63a3c2110a74c5bf569e7e592e5f4d81ddb00c": "cca326ac0a145d066c23639390696a09",
".git/objects/9e/59af3769fcc5556f37aa74efd04e02dd2eccd3": "7a5a63950516513dc593ec3fcc10302c",
".git/objects/a0/2c0805a7a4fa3611edc5b5c50e13b11dcbc847": "71e47e2f60c8304439b4e0d93e6de285",
".git/objects/a1/4864ac9cc9c581e7e08df46cc3ba4db208b5d5": "010c59ee043e6aae93a064b12530d548",
".git/objects/a5/673876c13ce5bb75cba2952e71f5b326fc9fba": "6bffd0f7db101a4a6e1466bbee73b016",
".git/objects/a6/ad1f4019bdf9a6c05302ee1aacc984b1384116": "a0d8e4ec11217a76644dd172654a3780",
".git/objects/a7/6d1d6038b57c72b08bf704bcdc80dadef7c2b9": "70375f0b0e617db4e3a4df61f9440dc0",
".git/objects/a8/129c5bd306b8badead872139d83c742555000e": "29216769148dbf83bfb931b0d1bca4f0",
".git/objects/a9/5e1d83292b784ed78263057d7eaa87d4cafa47": "ca545c83bb03f7e48b85664965dfbb5a",
".git/objects/b3/b77b90fbe7391445eb4abd4efa3d4d1c9f02d8": "9428643b9c58f242340b742c1867ee8c",
".git/objects/b4/d9d73adcad609103f395c1b5233453676c0e60": "58338196772af449a2d9fc5ad6a09839",
".git/objects/ba/16ac8eb1fcb2ff02f6329cf6211becfe668e47": "3c71a595e8ba620322ac060b5115a046",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/d8e9e30100ae24d86c71562195aec761178ef0": "09923bc066066b96e89c9f87019783ff",
".git/objects/be/4b04b05fac57e9c685a3c56051bbc4f1b987d1": "ab7a530550437b2a0f096519ed3a94b1",
".git/objects/c4/0ec02060c25503acbcb4925414f3d21443db00": "3bd1d5a84bda78896fce8569d0677f20",
".git/objects/c4/bf563bdae20cfeac2157b661f48f17f67efd3d": "bea51c5d6066ed9a6e63fb318e28840a",
".git/objects/c8/8170061b4150e98314464ba9fd7b92252eec23": "fcae02e6fb802c69a40e8da73755124d",
".git/objects/ce/23f0f7f4f9f883b4b2d537456cc4fea998c8bc": "9d4e115d2cf5c55428efea8d33542ad1",
".git/objects/ce/46592478afc5b939af0143fc760c7710e3be3c": "dff38448f42e689502c9acc8df2860a8",
".git/objects/ce/9f3980f0b0ac0186b2bc96e9b6e1fda4f56f50": "1426c18ab56b51f43e85b50c9360eb05",
".git/objects/ce/c78401dd13fa3cd92c1516fedf5dbd1b8e25b7": "1db7be0056607d8d8d18875b6a2f4f35",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/69b2ba5eb7a3888c9f66041156b188a442fff2": "543498a43b889abd60ce3a180798eb83",
".git/objects/d8/8f2ced0137ee12c949b0a0be65b9947bed1986": "4233a087173080b97fa2823e5f719aa8",
".git/objects/d8/ca15972ea5582b8be77f34e173bfc1b3776e5b": "bb74a8a3874fcfd2afdde4ea6304846f",
".git/objects/da/58ec17f396f864eb9f23236db5040e2af70fb8": "9269c9c028fc238cdd8e40d7ff40a46b",
".git/objects/da/806bc5de167a69e3342c64d4c069ed40c56772": "f32b0b26e745906423df6b90f883e817",
".git/objects/da/e0c1b85eae0bc37228c6c893963cd81286797e": "f9bb70816b752cd164a4c406d94295c4",
".git/objects/e5/7f5394f3bc002389d66ec6d6a4732f18eb0322": "9f91ff41eff29413d0d3a5b85e98bdd7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/762743fb39bb5630d2b4ba16f47c17eaebc3eb": "09ca18d663783c513eeb5fa864a84f83",
".git/objects/eb/082548b0d600072028069d86a88b08c4552304": "d87cdb134801eef5e3d96d80b0bbd7d1",
".git/objects/eb/be96be7fb87a5109cbfe223a40b304b6481c46": "72f082141aa1830db9983554a8885984",
".git/objects/ed/2cc52c33c1cfe3e20298fe2b3499cd96a03e68": "be69acfc26d1510dfbe54272dfd976fb",
".git/objects/ef/e502a01a38a894ae9a29b017019e4c86d6c115": "7d6c0187370a2a9b35b3ebd1e1b37eb0",
".git/objects/f2/70425880b9398768bb64ef9fca96f263175071": "3e76c3b3304286cc81b4f7181daec3fd",
".git/objects/fa/4fe203c5567cf13a27db76488e958412be3933": "ad9b392a0379a8f5474921449977429b",
".git/objects/fa/80d314ef32ee8e45d5d3628f802e00ec8373dc": "7fe6ee0d9c34d8e18dabb6928b0cc4e1",
".git/objects/fb/42dac0a641ddb3458f469393408ae9e450e8c5": "0b703df426bd7fd16b5f5f1bec11720e",
".git/objects/fb/45d00fd344dd817c04368d65ae54e0dc149d10": "fbb624026a629642b42fd5282287f7e8",
".git/refs/heads/main": "6785aaef6b801164178b167c457ee24a",
".git/refs/remotes/origin/main": "6785aaef6b801164178b167c457ee24a",
"assets/AssetManifest.bin": "3fecaa46d7e2fb7b265590bfc1d67f7b",
"assets/AssetManifest.bin.json": "7ab14bd31b21153d4cd27c510b6da65c",
"assets/AssetManifest.json": "358bc98f21d4e3dc931ed4952afd892e",
"assets/assets/images/construction/constructionsite2.jpg": "5e327c7d9811810ac2cf1d7ab9b4a67c",
"assets/assets/images/construction/logo.png": "104317af66caee05693be4e4d57efe47",
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
"index.html": "05257572c91dc6508a679845cd50443b",
"/": "05257572c91dc6508a679845cd50443b",
"main.dart.js": "d529c5bc758375824e5bd208b2b4577d",
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
