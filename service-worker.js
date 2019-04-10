/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bb27beda3c3d0e56f79670e34409ff90"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b635c98c.js",
    "revision": "484368cc1f8538ce33bd5b2825f1b0a4"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.4fca7fe7.js",
    "revision": "1d18a48ebae2b7b1527a793dedbb042c"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.a45e61d8.js",
    "revision": "4335d9d9939f6a081aee2df548755054"
  },
  {
    "url": "assets/js/16.f7c33f85.js",
    "revision": "119e378f767d2dad47fea3be040c45ae"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.69dd3cc0.js",
    "revision": "8bb5a80e085c474189c5506a52399a79"
  },
  {
    "url": "assets/js/19.31ce180d.js",
    "revision": "4b573c3f3008aba2d564252d1a5e5bfc"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.8634aa44.js",
    "revision": "a5746913d741aa688c9b0bef3b49a202"
  },
  {
    "url": "assets/js/21.a566f335.js",
    "revision": "90837c67d5b4826ae7ca1ea09f28ee37"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.40ec0da2.js",
    "revision": "def9b952db1e2c33007ea7a1b4d3e1c5"
  },
  {
    "url": "assets/js/24.89b522f3.js",
    "revision": "6ba8042970fb1929984d0096c8a894d4"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.b605021b.js",
    "revision": "57a9f2b1a9b035b19230f3cfbf583030"
  },
  {
    "url": "assets/js/28.4e3d37b8.js",
    "revision": "71cc545a79d7dbfa156ec13a92be6544"
  },
  {
    "url": "assets/js/29.da937846.js",
    "revision": "9ca639b795262db761901f0738ad72ea"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.0a2b88b3.js",
    "revision": "d33d747abe2f955fd46343650b92bd3d"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.22277329.js",
    "revision": "4570baf59b309f7ffeca34abddffcb82"
  },
  {
    "url": "assets/js/33.70b37c1e.js",
    "revision": "aa9d2287f0ab27ca501aaa1265964780"
  },
  {
    "url": "assets/js/34.fc07f87f.js",
    "revision": "e7bdfe7db50c28f0b11c21458b74e174"
  },
  {
    "url": "assets/js/35.17c7c661.js",
    "revision": "896cee5a7a2f02f74d9f6c512a8058a0"
  },
  {
    "url": "assets/js/36.ddc6792a.js",
    "revision": "a8c8221b0c4b5d3fdc0ecf1555358da4"
  },
  {
    "url": "assets/js/37.9a1b9c17.js",
    "revision": "9eb5bd2df356d36fd37d1723b251d4ad"
  },
  {
    "url": "assets/js/38.2470c62a.js",
    "revision": "1cec55678b13ea069f6b850d622885be"
  },
  {
    "url": "assets/js/39.92498efe.js",
    "revision": "2944efe25d7c09d3f6b41edf4ec10607"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.8ac4503e.js",
    "revision": "97fc408dc7a3e66e604c493131d6daa1"
  },
  {
    "url": "assets/js/42.d4650052.js",
    "revision": "da2ff0fdf0b3e532890cd1fdb56f1b62"
  },
  {
    "url": "assets/js/43.25dde793.js",
    "revision": "4d7221fa9da376d42fb0dca87d312180"
  },
  {
    "url": "assets/js/44.12a293c3.js",
    "revision": "12f03b2d63c7b166c9c69e3b240f9fd4"
  },
  {
    "url": "assets/js/45.6b0c3c83.js",
    "revision": "9567d39071e466a6394ca0ff5addb32e"
  },
  {
    "url": "assets/js/46.4af8997d.js",
    "revision": "fa5bc23003a165cf3f40d6d64f4b81c8"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.23c5fdae.js",
    "revision": "17e7c7732a6611058e60b593e003d326"
  },
  {
    "url": "assets/js/49.53b82d7e.js",
    "revision": "35d7146f973dc092afb47cec7dc53e40"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.65bf19ed.js",
    "revision": "586f90dc3205f1ca502716933b41a73d"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.04904288.js",
    "revision": "02ae4dd016b2c620adf66be475564e20"
  },
  {
    "url": "assets/js/53.59b42751.js",
    "revision": "cee6ad975c0f524f983ba3c4ac13de83"
  },
  {
    "url": "assets/js/54.ed1a48e1.js",
    "revision": "a5463e0653d5219895a078753d06f848"
  },
  {
    "url": "assets/js/55.5d6220ee.js",
    "revision": "1e89784b0dbfc112863c3006e79a58a9"
  },
  {
    "url": "assets/js/56.86072289.js",
    "revision": "c518ae6467fb8f21b9483e6a8ff47a3d"
  },
  {
    "url": "assets/js/57.3e3f4b34.js",
    "revision": "2c7247eb4357c9af6e6da2ae332503e8"
  },
  {
    "url": "assets/js/58.ee44192b.js",
    "revision": "62fdcd9dfa58f99e3c08586b561167aa"
  },
  {
    "url": "assets/js/59.29aa6e54.js",
    "revision": "f9f2db9dc6f0bae720198fdd6e3251aa"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.3ecc7cd1.js",
    "revision": "70fe4c17173093046999358e07b300e9"
  },
  {
    "url": "assets/js/61.0a534de4.js",
    "revision": "37a106805aae7776181ca3cbcf7e2270"
  },
  {
    "url": "assets/js/62.d0a7dbdf.js",
    "revision": "91aae2b7a58dcc2cd61072cd2ad50a55"
  },
  {
    "url": "assets/js/63.f692c9d6.js",
    "revision": "c5251c7ae23563dac98996bc44a57411"
  },
  {
    "url": "assets/js/64.dc692e44.js",
    "revision": "c3b64c00950696df80de84321109b34e"
  },
  {
    "url": "assets/js/65.5e14bfa2.js",
    "revision": "037beaebedb2b130abaeac94a9159559"
  },
  {
    "url": "assets/js/66.29bded5d.js",
    "revision": "1239df1201005ca977532a4bbe6528ee"
  },
  {
    "url": "assets/js/67.6a1ee4cd.js",
    "revision": "7efb39888cdb37fcbbd9c48e54511743"
  },
  {
    "url": "assets/js/68.6515afe3.js",
    "revision": "7528ad6a0ba6faf7c6dc459fefdf9ed3"
  },
  {
    "url": "assets/js/69.262261c0.js",
    "revision": "33bb3b7103e96e382da28a746a420657"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.45bdf16a.js",
    "revision": "833fff53392b4617421eecb5316f47ed"
  },
  {
    "url": "assets/js/71.76e83172.js",
    "revision": "2f8f4640c24df23008d87c7213ead458"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.6fcf463a.js",
    "revision": "00961a239a1ba1f48fe19979465bad79"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.b23255bc.js",
    "revision": "71ca71c93edf951c6b1747e4ddcb705c"
  },
  {
    "url": "assets/js/76.bfd73f27.js",
    "revision": "7cb06ebf7d0ad19bffcb5fb42ae29809"
  },
  {
    "url": "assets/js/77.19eedf0b.js",
    "revision": "4ab00808d9d74b344a1646279f1f1544"
  },
  {
    "url": "assets/js/78.1974932d.js",
    "revision": "8231c08b2a24deb5dc144b6522797dc5"
  },
  {
    "url": "assets/js/79.8ffdc3f2.js",
    "revision": "0a681428bea367074defc3f1193cb308"
  },
  {
    "url": "assets/js/8.44e2ec24.js",
    "revision": "1642ec963948d2619ac0ce6cb8036b31"
  },
  {
    "url": "assets/js/80.10be7626.js",
    "revision": "4ae5f2527c27effb3176919d19587cce"
  },
  {
    "url": "assets/js/81.a588c540.js",
    "revision": "abcb1bea913c2d3b204a5ebc5d7e4ab3"
  },
  {
    "url": "assets/js/82.9401a713.js",
    "revision": "2742ef893c8a7cf123b45b76af5981c9"
  },
  {
    "url": "assets/js/83.c90311d2.js",
    "revision": "d0a50acd339a6b38962f3c524670bd4c"
  },
  {
    "url": "assets/js/84.5dbce07f.js",
    "revision": "b3a0edb58ecc90a877b129b924e3f9e2"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.926878e7.js",
    "revision": "bd73564e6b08c94c0876d9cedc8281a4"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.f88de3de.js",
    "revision": "c626f3f51d2da0e9ca8c16746388c51b"
  },
  {
    "url": "compiler/ast.html",
    "revision": "ffab2d1f3099f64693d3f8d6994aba55"
  },
  {
    "url": "compiler/binder.html",
    "revision": "dde919100177f3241420812b039a5ad6"
  },
  {
    "url": "compiler/checker.html",
    "revision": "d5a31e728f42d5c532d11438a940734b"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "e48b99e5e932b3370063e7c8e5a09d6f"
  },
  {
    "url": "compiler/overview.html",
    "revision": "1bc6ffce6f2ea9dc55269c31e57341ef"
  },
  {
    "url": "compiler/parser.html",
    "revision": "c4db9bc25aa0732a1ec439f529ed6c80"
  },
  {
    "url": "compiler/program.html",
    "revision": "fa113c80423ca680aa3a6ef1ff70cd6f"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "c08c65121790084026fc0a036385057c"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "3aa83eead7060f8b52e566e88a740c30"
  },
  {
    "url": "error/interpreting.html",
    "revision": "0aaf3487b4fe0e198bff86b16f4e6a72"
  },
  {
    "url": "faqs/class.html",
    "revision": "53b27b69e6ebaf5e451dd66c13df4779"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "44e95c29691bd8c070d80df4b7563c03"
  },
  {
    "url": "faqs/comments.html",
    "revision": "8257d396fe8b6e32d0a0dd7e7471cfc7"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "7763e212f97f7b8b618d9a31c63e47e9"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "e420d671ece6308e263705ceaa8c706c"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "5cfaf750ea06875e5e1de99233f0016b"
  },
  {
    "url": "faqs/enums.html",
    "revision": "aab7f947b3f9bbcc35cd0d2d423cba0c"
  },
  {
    "url": "faqs/function.html",
    "revision": "c8d49766a3599f5b160d298a9ccdab38"
  },
  {
    "url": "faqs/generics.html",
    "revision": "6c2fedb5810230d489b628152bc53b3d"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "00c7d3d4434c22569a8302bae041eabe"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "31b7c7e5fcc48baa226225367ba7a513"
  },
  {
    "url": "faqs/modules.html",
    "revision": "65a10566e3b2ba3dd4f835a320a4d539"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "fe0d1e7111357a05e63f3054ff614367"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "0fa331506e1b3dee9ffdcef3339a1067"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "8ed8bfa776feacf6844579569f11a6ca"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "6debc434ed49c699645c2f7ecaa10a40"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "e8fbd719328578450158b85cc2090c38"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "50d50c88b910b9b5c9bf8b7c72372fbc"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "01cd0b90478a796d5a2820e8ab73bd27"
  },
  {
    "url": "jsx/support.html",
    "revision": "7e86d02e45b6eddc0901c9183d47ba98"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "ec6d2608ce2bc750699e378b5c3d8b2d"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "f4ed0d5af609e6b0c57df053304d5325"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "ccd8955315c902327c71f0ae9aea5b02"
  },
  {
    "url": "project/modules.html",
    "revision": "e7eb47b1fddb1c0d97d11f22454b39e0"
  },
  {
    "url": "project/namespaces.html",
    "revision": "a5e113a4a74904c181a4c82c0d4ed49b"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "84dbcca7f89e6ed6af8f0fc2be066b27"
  },
  {
    "url": "tips/barrel.html",
    "revision": "13a94e5b4c320b0b171c0664e375fe60"
  },
  {
    "url": "tips/bind.html",
    "revision": "c7fac1322917df57406d65c0c5fb7fb1"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "afcf52e3ada958ffff101c276ad8facb"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "eca89ff235a5fddce8c9f7e5c2a408cf"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "cc2a41866d7553e006ec371377f0a1bc"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "892dbef0064343d64a00112f4da8eda1"
  },
  {
    "url": "tips/curry.html",
    "revision": "05ec06b534b9b788d235c569a60ddea7"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "d021a9a985efc8bc395429af2969446f"
  },
  {
    "url": "tips/infer.html",
    "revision": "335e6f9601940c8fd2f17b649118d22b"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "d99193cb797f66586824daa30c968aaf"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "646759a465c8870aca998cec677aa9a4"
  },
  {
    "url": "tips/metadata.html",
    "revision": "91d08e3924bde3ffe2b5c3d2d08f974f"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "91f9eba690cd408c1a8660f434e46a0b"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "8031b0840ef0abcc2b019e91f7330603"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "34438dfa5c9d479af8c5e754c470fdf3"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "f8ce72f616bcc5eee8a5d5c4e287c1db"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "3077d54a923859a78c6355f467f45922"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "1e6c5df459c746582a1b2b4de3372fdd"
  },
  {
    "url": "tips/truthy.html",
    "revision": "c2a5841409f8dae82474efe0da9e1fc5"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "f20eafcb8f03cbd3f43af35197b1aee3"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "5dfd97b2791121e0b056d28cc8e1d925"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "760662dd4a2bd276c72ae738d3cee4bf"
  },
  {
    "url": "typings/callable.html",
    "revision": "9b12e619d85ac962168beb324bacfb45"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "5d9135647c203fb4cb4bb957c495c7a6"
  },
  {
    "url": "typings/enums.html",
    "revision": "68b8e0c1a284b05330ee62a4f9f72375"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "3a5975b04b1cc6454775e09ba418aef0"
  },
  {
    "url": "typings/freshness.html",
    "revision": "a4b0ddb525e27ae93c09623a632d3e2f"
  },
  {
    "url": "typings/functions.html",
    "revision": "7492cff74230f63723980484e4d3601c"
  },
  {
    "url": "typings/generices.html",
    "revision": "8447ac48d7f39999660de3b2178529f0"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "0fce78c51b94f9e059b9969a5306ee86"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "51067524dcea0912ae9668c66118fddd"
  },
  {
    "url": "typings/lib.html",
    "revision": "7b8f462a0319a324cf960264138b2241"
  },
  {
    "url": "typings/literals.html",
    "revision": "06f85861c95cdadd9ae8998dbb7765aa"
  },
  {
    "url": "typings/migrating.html",
    "revision": "b08db78bd51635b72e3dbd000ca1012a"
  },
  {
    "url": "typings/mixins.html",
    "revision": "b0e1814e62f8815997e345d7d16bd086"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "faffb11ec2da23adf2c316f9af802f7b"
  },
  {
    "url": "typings/neverType.html",
    "revision": "fd869d378689832862cc8feaceb1c3cb"
  },
  {
    "url": "typings/overview.html",
    "revision": "807b8309b6fd0e7768b4d38c1fa1eb89"
  },
  {
    "url": "typings/readonly.html",
    "revision": "90910a9a2a1103e5fa3f67d7b352df2d"
  },
  {
    "url": "typings/thisType.html",
    "revision": "79a30eca4a139f81b29b17178422d0c3"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "00cf28a250e28be8108d0a0377ae73e5"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "2763fe0a96d6bc93d2331b44eeb64195"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "1f0af8121d09b9ce34ab1d668520520f"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "134fa4cf6cd0610da4df44c99f88769e"
  },
  {
    "url": "typings/types.html",
    "revision": "956baa28d2da406e866ec04bb16d7119"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
