
// --------------------
// Request: C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohmyfetch ($id_4T3an2dV6G)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/paths.mjs ($id_g2xeeCGacP)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/css.mjs ($id_UOPvelNX85)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/root-component.mjs ($id_dRtn1YxR56)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/app-component.mjs ($id_2fbj2oa9Hn)
// --------------------
const $id_pQ3nsHJMAU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ohmyfetch");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs ($id_6lyU8e8J8E)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /pages/calculo.vue?macro=true ($id_NKugu5NdeY)
// - /pages/estoque.vue?macro=true ($id_gpOUJzv8AJ)
// - /components/modalNovoFuncionario.vue ($id_B85UhicDkg)
// - /components/modalEditarFuncionario.vue ($id_OKsSQ72Lpa)
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/modalFluxo.vue ($id_uhrvSGzYHX)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /components/modalNovoMaquina.vue ($id_oPoWcnQYB4)
// - /components/modalEditarMaquina.vue ($id_qdsBO9tp1o)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/calculo.vue ($id_HWi9vOF4TZ)
// - /pages/estoque.vue ($id_GPiAxm07De)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs ($id_N8uK2ejzkJ)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - @vue/runtime-dom ($id_xcKel6nH2q)
// --------------------
const $id_G33erDMZ5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/runtime-dom");

const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/runtime-dom");
__vite_ssr_exportAll__(__vite_ssr_import_1__);

function initDev() {
    {
        __vite_ssr_import_0__.initCustomFormatter();
    }
}

// This entry exports the runtime only, and is built as
if ((process.env.NODE_ENV !== 'production')) {
    initDev();
}
const compile = () => {
    if ((process.env.NODE_ENV !== 'production')) {
        __vite_ssr_import_0__.warn(`Runtime compilation is not supported in this build of Vue.` +
            (` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};


Object.defineProperty(__vite_ssr_exports__, "compile", { enumerable: true, configurable: true, get(){ return compile }});
;
}


// --------------------
// Request: @vue/runtime-dom
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_9sriful2d8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/runtime-dom")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/runtime-dom\".")
  })


// --------------------
// Request: ohmyfetch
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 

// --------------------
const $id_kLE5W6MKaY = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohmyfetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohmyfetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/paths.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// --------------------
const $id_Mj9f4rSF49 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"meta":[],"link":[{"rel":"stylesheet","href":"https://fonts.googleapis.com/icon?family=Material+Icons"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
globalThis.__buildAssetsURL = buildAssetsURL
globalThis.__publicAssetsURL = publicAssetsURL;
}


// --------------------
// Request: ufo
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/paths.mjs ($id_g2xeeCGacP)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs ($id_6lyU8e8J8E)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /middleware/auth.ts ($id_e5KqhuTNzv)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// --------------------
const $id_fgrt3UeQEL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_lfCjBrgcte = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");

const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      invalidPlugins.push(plugin);
      return null;
    }
    if (plugin.length > 1) {
      legacyInjectPlugins.push(plugin);
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (!isNuxtPlugin(plugin)) {
      unwrappedPlugins.push(plugin);
    }
    return plugin;
  }).filter(Boolean);
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = __vite_ssr_import_0__.getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_AGPfGxS2fu)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_fYchCJb7XZ)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// --------------------
const $id_YvAaozTraC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.setResponseStatus }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_4GnUEZ7ifE)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_XTtQ30wmO3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt), '$BblPDwLpsD');
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_UzRZUO1GKq)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_QfWuTouFBP)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BHNdDlA1Pk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_6bgT8vIFHQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_oMJXouc9nw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_kP3GBeDzaR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_0OCs51rfoK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const throwError = showError;
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => err && typeof err === "object" && "__nuxt_error" in err;
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_bBQ8Yk34eC)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_202QqPjMtu)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_1baiIWALJh)
// --------------------
const $id_zYOrYjkwm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || autoKey;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = "$f" + _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.isRef(r) ? r.value : r;
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    initialCache,
    ...fetchOptions
  } = opts;
  const _fetchOptions = {
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    initialCache,
    watch: [
      _request,
      ...watch || []
    ]
  };
  const asyncData = __vite_ssr_import_1__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions, '$2Qpjr020wX');
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    autoKey
  , '$O2v9FOrXIM');
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_xIZrp1mIW8)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_31ETNgPfBU)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_XUZhFBVStH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");

const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_6__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_7__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_5__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_5__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_URtEHTJ6vX)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_BjnOCDcfIZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function setResponseStatus(code, message) {
  const event = true && useRequestEvent();
  if (event) {
    event.res.statusCode = code;
    if (message) {
      event.res.statusMessage = message;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_sGenmuNLlo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_72OrpZA28S = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (__vite_ssr_import_0__.getCurrentInstance()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_2__.joinURL(__vite_ssr_import_3__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_1__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// --------------------
const $id_HRAmKRepZ0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_Fhvn5egKy1)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_aAoWaPsGgE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_2__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_DBzckdbLOm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - @vue/shared ($id_FcJYoqIAB0)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_TG3cDPMBp5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@vue/shared");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/css.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 
// - /assets/css/tailwind.css ($id_91VI4YQFtU)
// --------------------
const $id_5jdRJFxKk9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/css.mjs ($id_UOPvelNX85)
// Dependencies: 

// --------------------
const $id_y847I0Wk29 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}::before,\n::after {\n  --tw-content: '';\n}/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/html {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: \"Inter var\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/body {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/hr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}/*\nRemove the default font size and weight for headings.\n*/h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/a {\n  color: inherit;\n  text-decoration: inherit;\n}/*\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n  font-weight: bolder;\n}/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/*\nAdd the correct font size in all browsers.\n*/small {\n  font-size: 80%;\n}/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/table {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/button,\nselect {\n  text-transform: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}/*\nUse the modern Firefox focus style for all focusable elements.\n*/:-moz-focusring {\n  outline: auto;\n}/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/:-moz-ui-invalid {\n  box-shadow: none;\n}/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n  vertical-align: baseline;\n}/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/*\nAdd the correct display in Chrome and Safari.\n*/summary {\n  display: list-item;\n}/*\nRemoves the default spacing and border for appropriate elements.\n*/blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}legend {\n  padding: 0;\n}ol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/*\nPrevent resizing textareas horizontally by default.\n*/textarea {\n  resize: vertical;\n}/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/input::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}/*\nSet the default cursor for buttons.\n*/button,\n[role=\"button\"] {\n  cursor: pointer;\n}/*\nMake sure disabled buttons don't get the pointer cursor.\n*/:disabled {\n  cursor: default;\n}/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  border-radius: 0px;\n  padding-top: 0.5rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-shadow: 0 0 #0000;\n}[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  border-color: #2563eb;\n}input::-moz-placeholder, textarea::-moz-placeholder {\n  color: #6b7280;\n  opacity: 1;\n}input::placeholder,textarea::placeholder {\n  color: #6b7280;\n  opacity: 1;\n}::-webkit-datetime-edit-fields-wrapper {\n  padding: 0;\n}::-webkit-date-and-time-value {\n  min-height: 1.5em;\n}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {\n  padding-top: 0;\n  padding-bottom: 0;\n}select {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n  background-position: right 0.5rem center;\n  background-repeat: no-repeat;\n  background-size: 1.5em 1.5em;\n  padding-right: 2.5rem;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n}[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  padding-right: 0.75rem;\n  -webkit-print-color-adjust: unset;\n     color-adjust: unset;\n          print-color-adjust: unset;\n}[type='checkbox'],[type='radio'] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n  -webkit-print-color-adjust: exact;\n     color-adjust: exact;\n          print-color-adjust: exact;\n  display: inline-block;\n  vertical-align: middle;\n  background-origin: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  flex-shrink: 0;\n  height: 1rem;\n  width: 1rem;\n  color: #2563eb;\n  background-color: #fff;\n  border-color: #6b7280;\n  border-width: 1px;\n  --tw-shadow: 0 0 #0000;\n}[type='checkbox'] {\n  border-radius: 0px;\n}[type='radio'] {\n  border-radius: 100%;\n}[type='checkbox']:focus,[type='radio']:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width: 2px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: #2563eb;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n}[type='checkbox']:checked,[type='radio']:checked {\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}[type='checkbox']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}[type='radio']:checked {\n  background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}[type='checkbox']:indeterminate {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n  border-color: transparent;\n  background-color: currentColor;\n  background-size: 100% 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n  border-color: transparent;\n  background-color: currentColor;\n}[type='file'] {\n  background: unset;\n  border-color: inherit;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-size: unset;\n  line-height: inherit;\n}[type='file']:focus {\n  outline: 1px solid ButtonText;\n  outline: 1px auto -webkit-focus-ring-color;\n}*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}.fixed {\n  position: fixed;\n}.relative {\n  position: relative;\n}.top-0 {\n  top: 0px;\n}.right-0 {\n  right: 0px;\n}.left-0 {\n  left: 0px;\n}.top-1\\/2 {\n  top: 50%;\n}.left-1\\/2 {\n  left: 50%;\n}.z-50 {\n  z-index: 50;\n}.ml-auto {\n  margin-left: auto;\n}.block {\n  display: block;\n}.flex {\n  display: flex;\n}.inline-flex {\n  display: inline-flex;\n}.table {\n  display: table;\n}.h-full {\n  height: 100%;\n}.h-5 {\n  height: 1.25rem;\n}.w-full {\n  width: 100%;\n}.w-5 {\n  width: 1.25rem;\n}.max-w-2xl {\n  max-width: 42rem;\n}.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}.cursor-pointer {\n  cursor: pointer;\n}.flex-row {\n  flex-direction: row;\n}.flex-col {\n  flex-direction: column;\n}.items-start {\n  align-items: flex-start;\n}.items-center {\n  align-items: center;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.justify-evenly {\n  justify-content: space-evenly;\n}.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}.overflow-y-auto {\n  overflow-y: auto;\n}.overflow-x-hidden {\n  overflow-x: hidden;\n}.rounded-lg {\n  border-radius: 0.5rem;\n}.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}.rounded-b {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}.border {\n  border-width: 1px;\n}.border-b {\n  border-bottom-width: 1px;\n}.border-t {\n  border-top-width: 1px;\n}.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}.bg-transparent {\n  background-color: transparent;\n}.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}.p-4 {\n  padding: 1rem;\n}.p-1\\.5 {\n  padding: 0.375rem;\n}.p-1 {\n  padding: 0.25rem;\n}.p-6 {\n  padding: 1.5rem;\n}.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.text-center {\n  text-align: center;\n}.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.font-semibold {\n  font-weight: 600;\n}.font-medium {\n  font-weight: 500;\n}.capitalize {\n  text-transform: capitalize;\n}.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}.outline {\n  outline-style: solid;\n}.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}.hover\\:text-xl:hover {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}.focus\\:z-10:focus {\n  z-index: 10;\n}.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}@media (prefers-color-scheme: dark) {.dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }.dark\\:border-gray-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(107 114 128 / var(--tw-border-opacity));\n  }.dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }.dark\\:bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }.dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }.dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }.dark\\:hover\\:bg-gray-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }.dark\\:hover\\:bg-blue-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n  }.dark\\:hover\\:text-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }.dark\\:focus\\:ring-blue-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n  }.dark\\:focus\\:ring-gray-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));\n  }\n}@media (min-width: 768px) {.md\\:inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n  }.md\\:h-full {\n    height: 100%;\n  }.md\\:h-auto {\n    height: auto;\n  }\n}";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_mHG7oNEQOP)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs ($id_6lyU8e8J8E)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// --------------------
const $id_DpEYD16RxI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_1SAEi7QN5N = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_mYd3bDVqQx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const components = {}

__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
})
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_wDImTp8t2G)
// - vue ($id_VkOCJnUZrn)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// --------------------
const $id_wRsEVKfW1P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta = __vite_ssr_import_0__.renderHeadToString(head);
      return {
        ...meta,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_19kbcSkZ7c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title ?? "");
  }
  return template(__vite_ssr_import_0__.unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => ({
    element: createElement(tag.tag, tag.props, document),
    body: tag.props.body ?? false
  }));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(__vite_ssr_import_0__.shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => __vite_ssr_import_0__.unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(__vite_ssr_import_0__.unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const head = injectHead();
  const headObj = __vite_ssr_import_0__.ref(obj);
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
var addVNodeToHeadObj = (node, obj) => {
  const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
  if (typeof type !== "string" || !(type in obj))
    return;
  const props = __spreadProps(__spreadValues({}, node.props), {
    children: Array.isArray(node.children) ? node.children[0].children : node.children
  });
  if (Array.isArray(obj[type])) {
    ;
    obj[type].push(props);
  } else if (type === "title") {
    obj.title = props.children;
  } else {
    ;
    obj[type] = props;
  }
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: [],
    noscript: []
  };
  for (const node of nodes) {
    if (typeof node.type === "symbol" && Array.isArray(node.children)) {
      for (const childNode of node.children) {
        addVNodeToHeadObj(childNode, obj);
      }
    } else {
      addVNodeToHeadObj(node, obj);
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_5vEgA2Fgrh)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_sqKdb79FW5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/meta.config.mjs ($id_fTcminhK3V)
// --------------------
const $id_5bJGHAvzpI = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_BOqVBAGCOv)
// --------------------
const $id_PE2LM6mDyc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const NoScript = __vite_ssr_import_0__.defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    const noscript = { ...props };
    const textContent = (slots.default?.() || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "NoScript", { enumerable: true, configurable: true, get(){ return NoScript }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_omUDQe4IGe)
// Dependencies: 

// --------------------
const $id_oQ7jbBsd37 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[],"link":[{"rel":"stylesheet","href":"https://fonts.googleapis.com/icon?family=Material+Icons"}],"style":[],"script":[],"noscript":[],"charset":"utf-8","viewport":"width=device-width, initial-scale=1"}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs ($id_PmBsuGQtcC)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/router.options.mjs ($id_GKBPxOUuaT)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/middleware.mjs ($id_cmOGM8ihkZ)
// --------------------
const $id_gp8vVf86Au = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");

const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/router.options.mjs");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_6__.defineNuxtPlugin(async (nuxtApp) => {let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_5__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_5__.default);
  const baseURL = __vite_ssr_import_6__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_2__.createWebHistory(baseURL) : __vite_ssr_import_2__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_2__.createRouter({
    ...__vite_ssr_import_8__.default,
    history: routerHistory,
    routes: __vite_ssr_import_7__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_1__.reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_6__.useError();
  try {
    if (true) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
    }
    ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
  } catch (error2) {
    __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_1__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_9__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_9__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_9__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_6__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_3__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [__vite_ssr_import_3__.createError({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_4__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_6__.callWithNuxt(nuxtApp, __vite_ssr_import_6__.showError, [error2]);
    }
  });
  return { provide: { router } };
},1);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_gPQzqsnHwc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// --------------------
const $id_L9I1eoE7dW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps);
          return __vite_ssr_import_4__._wrapIf(
            __vite_ssr_import_0__.Transition,
            routeProps.route.meta.pageTransition ?? defaultPageTransition,
            __vite_ssr_import_2__.wrapInKeepAlive(
              routeProps.route.meta.keepalive,
              isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => __vite_ssr_import_0__.h(Component, { key, routeProps, pageKey: key }) })
            )
          ).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const Component = __vite_ssr_import_0__.defineComponent({
  props: ["routeProps", "pageKey"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    return () => __vite_ssr_import_0__.h(props.routeProps.Component);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_ZR0LUqwyer = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_X8FM3AG1sA)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_NgApSiB2xA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /pages/calculo.vue?macro=true ($id_NKugu5NdeY)
// - /pages/estoque.vue?macro=true ($id_gpOUJzv8AJ)
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/calculo.vue ($id_HWi9vOF4TZ)
// - /pages/estoque.vue ($id_GPiAxm07De)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// --------------------
const $id_LKm8AR0uRD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/calculo.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/estoque.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/funcionarios.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/index2.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/login.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/maquinas.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "calculo",
    path: "/calculo",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/calculo.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/calculo.vue").then(m => m.default || m)
  },
  {
    name: "estoque",
    path: "/estoque",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/estoque.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/estoque.vue").then(m => m.default || m)
  },
  {
    name: "funcionarios",
    path: "/funcionarios",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/funcionarios.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/funcionarios.vue").then(m => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/index.vue").then(m => m.default || m)
  },
  {
    name: "index2",
    path: "/index2",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/index2.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/index2.vue").then(m => m.default || m)
  },
  {
    name: "login",
    path: "/login",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/login.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/login.vue").then(m => m.default || m)
  },
  {
    name: "maquinas",
    path: "/maquinas",
    file: "C:/Users/Artur/Documents/nuxt/template/pages/maquinas.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__("/pages/maquinas.vue").then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/calculo.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_37iDRbRaxx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "calculo",
  setup(__props, { expose }) {
    expose();
    const custo = __vite_ssr_import_0__.ref();
    const quantidade = __vite_ssr_import_0__.ref();
    const calculoInput = __vite_ssr_import_0__.reactive({
      custo: "",
      rendimento: "",
      area: ""
    });
    const handleClick = () => {
      if (calculoInput.custo == "" || calculoInput.area == "" || calculoInput.rendimento == "")
        return;
      quantidade.value = parseFloat(calculoInput.area) / parseFloat(calculoInput.rendimento);
      custo.value = quantidade.value * parseFloat(calculoInput.custo);
    };
    const __returned__ = { custo, quantidade, calculoInput, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex flex-col" }, _attrs))}><label for="rendimento">Rendimento | Quantos m<sup>2</sup> rende 1L do produto</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.rendimento)} name="rendimento" type="text" placeholder="Ex: 100"><label for="custo">Custo por litro</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.custo)} name="custo" type="text" placeholder="Ex: 100"><label for="area">area por litro em m<sup>2</sup> (cada hectare possui 10.000m<sup>2</sup>)</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.area)} name="area" type="text" placeholder="10000"><button>Calcular</button><p>Custo:${__vite_ssr_import_3__.ssrInterpolate($setup.custo)}</p><p>Quantidade:${__vite_ssr_import_3__.ssrInterpolate($setup.quantidade)}</p></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calculo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/calculo.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /pages/calculo.vue?macro=true ($id_NKugu5NdeY)
// - /pages/estoque.vue?macro=true ($id_gpOUJzv8AJ)
// - /components/modalNovoFuncionario.vue ($id_B85UhicDkg)
// - /components/modalEditarFuncionario.vue ($id_OKsSQ72Lpa)
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/modalFluxo.vue ($id_uhrvSGzYHX)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /components/modalNovoMaquina.vue ($id_oPoWcnQYB4)
// - /components/modalEditarMaquina.vue ($id_qdsBO9tp1o)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/calculo.vue ($id_HWi9vOF4TZ)
// - /pages/estoque.vue ($id_GPiAxm07De)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /pages/calculo.vue?macro=true ($id_NKugu5NdeY)
// - /pages/estoque.vue?macro=true ($id_gpOUJzv8AJ)
// - /components/modalNovoFuncionario.vue ($id_B85UhicDkg)
// - /components/modalEditarFuncionario.vue ($id_OKsSQ72Lpa)
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /components/modalFluxo.vue ($id_uhrvSGzYHX)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /components/modalNovoMaquina.vue ($id_oPoWcnQYB4)
// - /components/modalEditarMaquina.vue ($id_qdsBO9tp1o)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/calculo.vue ($id_HWi9vOF4TZ)
// - /pages/estoque.vue ($id_GPiAxm07De)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /layouts/default.vue ($id_dononVQSck)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/estoque.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_x8e8QyLdX9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="">Sementes</div><div class="">Fertilizantes</div><div class="">Defensivos </div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/estoque.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/pages/estoque.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/funcionarios.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalNovoFuncionario.vue ($id_B85UhicDkg)
// - /components/modalEditarFuncionario.vue ($id_OKsSQ72Lpa)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_aQC2y1HAL8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalNovoFuncionario.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/modalEditarFuncionario.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "funcionarios",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const funcionariosResponse = __vite_ssr_import_4__.ref();
    funcionariosResponse.value = ([__temp, __restore] = __vite_ssr_import_5__.withAsyncContext(() => supabase.from("funcionarios").select()), __temp = await __temp, __restore(), __temp);
    const showModalAdicionar = __vite_ssr_import_4__.ref();
    const showModalEditar = __vite_ssr_import_4__.ref();
    const tipoOrdenar = __vite_ssr_import_4__.ref();
    const reverterOrdenar = __vite_ssr_import_4__.ref();
    const pagina = __vite_ssr_import_4__.reactive({
      atual: 0,
      tamanho: 5
    });
    const funcionarioInput = __vite_ssr_import_4__.reactive({
      id: "",
      nome: "",
      numero: "",
      cargo: "",
      is_assalariado: false,
      salario: "",
      data_pagamento_salario: ""
    });
    const handleNovoFuncionario = () => {
      showModalAdicionar.value = true;
      funcionarioInput.nome = "";
      funcionarioInput.cargo = "";
      funcionarioInput.numero = "";
      funcionarioInput.is_assalariado = false;
      funcionarioInput.salario = "";
      funcionarioInput.data_pagamento_salario = "";
    };
    const handleDeleteFuncionario = async (funcionarioId) => {
      await supabase.from("funcionarios").delete().eq("id", funcionarioId);
      funcionariosResponse.value = await supabase.from("funcionarios").select();
    };
    const handleSubmitNovoFuncionario = async () => {
      await supabase.from("funcionarios").insert({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(funcionarioInput.salario.replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)
      });
      funcionariosResponse.value = await supabase.from("funcionarios").select();
      funcionarioInput.nome = "", funcionarioInput.numero = "", funcionarioInput.cargo = "", funcionarioInput.is_assalariado = false, funcionarioInput.salario = "", funcionarioInput.data_pagamento_salario = "";
      showModalAdicionar.value = false;
    };
    const handleSubmitEditarFuncionario = async () => {
      await supabase.from("funcionarios").update({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(String(funcionarioInput.salario).replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)
      }).eq("id", funcionarioInput.id);
      funcionariosResponse.value = await supabase.from("funcionarios").select();
      funcionarioInput.id = "", funcionarioInput.nome = "", funcionarioInput.numero = "", funcionarioInput.cargo = "", funcionarioInput.is_assalariado = false, funcionarioInput.salario = "", funcionarioInput.data_pagamento_salario = "";
      showModalEditar.value = false;
    };
    const handleModalEditar = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
      showModalEditar.value = true;
      funcionarioInput.nome = nome;
      funcionarioInput.cargo = cargo;
      funcionarioInput.numero = numero;
      funcionarioInput.is_assalariado = is_assalariado;
      funcionarioInput.salario = salario;
      funcionarioInput.data_pagamento_salario = diaPagamento;
      funcionarioInput.id = id;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "nome") {
        tipoOrdenar.value = porNome;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porNomeReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "cargo") {
        tipoOrdenar.value = porCargo;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCargoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "salario") {
        tipoOrdenar.value = porSalario;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porSalarioReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "dia") {
        tipoOrdenar.value = porDia;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDiaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "data") {
        tipoOrdenar.value = porData;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDataReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porNome(a, b) {
      if (a.nome > b.nome) {
        return 1;
      } else if (b.nome > a.nome) {
        return -1;
      } else {
        return 0;
      }
    }
    function porCargo(a, b) {
      if (a.cargo > b.cargo) {
        return 1;
      } else if (b.cargo > a.cargo) {
        return -1;
      } else {
        return 0;
      }
    }
    function porData(a, b) {
      if (a.data > b.data) {
        return 1;
      } else if (b.data > a.data) {
        return -1;
      } else {
        return 0;
      }
    }
    function porSalario(a, b) {
      return parseFloat(a.salario) - parseFloat(b.salario);
    }
    function porDia(a, b) {
      return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario);
    }
    function porNomeReverse(a, b) {
      if (a.nome > b.nome) {
        return -1;
      } else if (b.nome > a.nome) {
        return 1;
      } else {
        return 0;
      }
    }
    function porCargoReverse(a, b) {
      if (a.cargo > b.cargo) {
        return -1;
      } else if (b.cargo > a.cargo) {
        return 1;
      } else {
        return 0;
      }
    }
    function porDataReverse(a, b) {
      if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
      } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1;
      } else {
        return 0;
      }
    }
    function porSalarioReverse(a, b) {
      return parseFloat(b.salario) - parseFloat(a.salario);
    }
    function porDiaReverse(a, b) {
      return parseFloat(b.data_inicio) - parseFloat(a.data_inicio);
    }
    const __returned__ = { supabase, user, funcionariosResponse, showModalAdicionar, showModalEditar, tipoOrdenar, reverterOrdenar, pagina, funcionarioInput, handleNovoFuncionario, handleDeleteFuncionario, handleSubmitNovoFuncionario, handleSubmitEditarFuncionario, handleModalEditar, handlePagina, handleOrdenar, porNome, porCargo, porData, porSalario, porDia, porNomeReverse, porCargoReverse, porDataReverse, porSalarioReverse, porDiaReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalNovoFuncionario = __vite_ssr_import_0__.default;
  const _component_ModalEditarFuncionario = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}><button> novo funcionario </button><!-- Modal Novo Funcion\xE1rio -->`);
  if ($setup.showModalAdicionar) {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalNovoFuncionario, {
      onClose: ($event) => $setup.showModalAdicionar = false,
      onAdicionarFuncionario: $setup.handleSubmitNovoFuncionario
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Nome</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.nome)} type="text" placeholder="Jo\xE3o da silva" name="nome"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.numero)} type="text" placeholder="Jo\xE3o da silva" name="numero"${_scopeId}><label for="cargo"${_scopeId}>cargo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.cargo)} type="text" placeholder="Jo\xE3o da silva" name="cargo"${_scopeId}><label for="recebe_salario"${_scopeId}>\xC9 assalariado?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.funcionarioInput.is_assalariado) ? __vite_ssr_import_7__.ssrLooseContain($setup.funcionarioInput.is_assalariado, null) : $setup.funcionarioInput.is_assalariado) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
          if ($setup.funcionarioInput.is_assalariado) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>sal\xE1rio</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.salario)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>dia do pagamento</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
            __vite_ssr_import_7__.ssrRenderList(28, (i) => {
              _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
              __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Nome"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.nome = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "nome"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.nome]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.numero = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "numero"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.numero]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "cargo"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.cargo = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "cargo"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.cargo]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "\xC9 assalariado?"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.is_assalariado = $event,
                type: "checkbox",
                placeholder: "Jo\xE3o da silva",
                name: "recebe_salario"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelCheckbox, $setup.funcionarioInput.is_assalariado]
              ]),
              __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  $setup.funcionarioInput.is_assalariado ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                    key: 0,
                    class: "flex flex-col"
                  }, [
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "sal\xE1rio"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.funcionarioInput.salario = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.salario]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "dia do pagamento"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                      "onUpdate:modelValue": ($event) => $setup.funcionarioInput.data_pagamento_salario = $event,
                      placeholder: "Jo\xE3o da silva",
                      name: "data_pagamento_salario"
                    }, [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                        return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelSelect, $setup.funcionarioInput.data_pagamento_salario]
                    ])
                  ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><select><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList(Math.ceil($setup.funcionariosResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_7__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.funcionariosResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>Nome</th><th>Cargo</th><th>numero</th><th>Salario</th><th>Dia pagamento</th><th>Data cadasto</th><th>Detalhes</th><th>Deletar</th></thead><tbody><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.funcionariosResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (funcionario) => {
    _push(`<tr><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.nome)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.cargo)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.numero)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.salario)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.data_pagamento_salario)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.data_inicio)}</td><!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> edit </span></td><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> person_remove </span></td>`);
    if ($setup.showModalEditar) {
      _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalEditarFuncionario, {
        onClose: ($event) => $setup.showModalEditar = false,
        onEditarFuncionario: $setup.handleSubmitEditarFuncionario
      }, {
        default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Nome</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.nome)} type="text" placeholder="Jo\xE3o da silva" name="nome"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.numero)} type="text" placeholder="Jo\xE3o da silva" name="numero"${_scopeId}><label for="cargo"${_scopeId}>cargo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.cargo)} type="text" placeholder="Jo\xE3o da silva" name="cargo"${_scopeId}><label for="recebe_salario"${_scopeId}>\xC9 assalariado?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.funcionarioInput.is_assalariado) ? __vite_ssr_import_7__.ssrLooseContain($setup.funcionarioInput.is_assalariado, null) : $setup.funcionarioInput.is_assalariado) ? " checked" : ""} type="checkbox" disabled placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
            if ($setup.funcionarioInput.is_assalariado) {
              _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>sal\xE1rio</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.salario)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>dia do pagamento</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
              __vite_ssr_import_7__.ssrRenderList(28, (i) => {
                _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
              });
              _push2(`<!--]--></select></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
                __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Nome"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.nome = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "nome"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.nome]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.numero = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "numero"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.numero]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "cargo"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.cargo = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "cargo"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.cargo]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "\xC9 assalariado?"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.is_assalariado = $event,
                  type: "checkbox",
                  disabled: "",
                  placeholder: "Jo\xE3o da silva",
                  name: "recebe_salario"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelCheckbox, $setup.funcionarioInput.is_assalariado]
                ]),
                __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    $setup.funcionarioInput.is_assalariado ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "flex flex-col"
                    }, [
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "sal\xE1rio"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.funcionarioInput.salario = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.salario]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "dia do pagamento"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                        "onUpdate:modelValue": ($event) => $setup.funcionarioInput.data_pagamento_salario = $event,
                        placeholder: "Jo\xE3o da silva",
                        name: "data_pagamento_salario"
                      }, [
                        (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                          return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelSelect, $setup.funcionarioInput.data_pagamento_salario]
                      ])
                    ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/funcionarios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/funcionarios.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/modalNovoFuncionario.vue
// Parents: 
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_SoJ1RdmDLN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  }, _attrs))}><div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-2xl h-full md:h-auto"><!-- Modal content --><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><!-- Modal header --><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white"> Novo funcion??rio </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><!-- Modal body --><div class="p-6 space-y-6">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><!-- Modal footer --><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"><button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Adicionar</button><button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button></div></div></div></div><!-- Backdrop --><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modalNovoFuncionario.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/components/modalNovoFuncionario.vue"]]);
}


// --------------------
// Request: /components/modalEditarFuncionario.vue
// Parents: 
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_N886yx2xwZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  }, _attrs))}><div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-2xl h-full md:h-auto"><!-- Modal content --><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><!-- Modal header --><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white"> Editar funcion??rio </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><!-- Modal body --><div class="p-6 space-y-6">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><!-- Modal footer --><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"><button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Adicionar</button><button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button></div></div></div></div><!-- Backdrop --><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modalEditarFuncionario.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/components/modalEditarFuncionario.vue"]]);
}


// --------------------
// Request: /composables/useSupabase.ts
// Parents: 
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// Dependencies: 
// - @supabase/supabase-js ($id_uQhgE3ya8u)
// --------------------
const $id_ldWZ8HPmjw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("@supabase/supabase-js");

const supabaseUrl = "https://nsorslktwhwctyyvrvcb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb3JzbGt0d2h3Y3R5eXZydmNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MzEwMzAwMywiZXhwIjoxOTc4Njc5MDAzfQ.QWfQ1QtJRvidDaAEY1GdRKkkRN7XNxtwovzaVeL8qlo";
const useSupabase = () => {
  const supabase = __vite_ssr_import_0__.createClient(supabaseUrl, supabaseKey);
  return {
    supabase
  };
};
__vite_ssr_exports__.default = useSupabase;
;
}


// --------------------
// Request: @supabase/supabase-js
// Parents: 
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// Dependencies: 

// --------------------
const $id_9XNII2VSge = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@supabase/supabase-js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@supabase/supabase-js\".")
  })


// --------------------
// Request: /composables/useAuth.ts
// Parents: 
// - /pages/funcionarios.vue?macro=true ($id_moCb0vVMGK)
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/funcionarios.vue ($id_88Kugd218j)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// - /pages/login.vue ($id_sJIhc9o139)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// - /middleware/auth.ts ($id_e5KqhuTNzv)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// --------------------
const $id_OqK7ZbuKel = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const useAuth = () => {
  const user = __vite_ssr_import_0__.useState("user", () => null, '$OWrSqFye87');
  const router = __vite_ssr_import_0__.useRouter();
  const { supabase } = __vite_ssr_import_1__.default();
  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null;
  });
  const signUp = async ({ email, password, ...metadata }) => {
    const { user: u, error } = await supabase.auth.signUp(
      {
        email,
        password
      },
      {
        data: metadata,
        redirectTo: `${window.location.origin}/myProfile?source=email`
      }
    );
    if (error)
      throw error;
    return u;
  };
  const signIn = async ({ email, password }) => {
    const { user: u, error } = await supabase.auth.signIn({
      email,
      password
    });
    if (error)
      throw error;
    return u;
  };
  const signOut = async ({}) => {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw error;
    router.push("/");
  };
  const isLoggedIn = () => {
    return !!user.value;
  };
  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn
  };
};
__vite_ssr_exports__.default = useAuth;
;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_a81thUgcqy = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Calculoplantio.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Calculoplantio = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Calculoplantio, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Calculoplantio.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Calculoplantio.vue?vue&type=style&index=0&scoped=94267614&lang.css ($id_3k0DnXyrJW)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_FmKM2RLRZP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "Calculoplantio",
  setup(__props, { expose }) {
    expose();
    const calculoSafra = __vite_ssr_import_0__.reactive({
      safra: "",
      areaPlantio: 0,
      sacasHa: 0,
      valorSaca: 0
    });
    const resultadoSafra = __vite_ssr_import_0__.reactive({
      totalSacas: 0,
      totalValor: 0
    });
    const calcularSafra = () => {
      resultadoSafra.totalSacas = calculoSafra.areaPlantio * calculoSafra.sacasHa;
      resultadoSafra.totalValor = resultadoSafra.totalSacas * calculoSafra.valorSaca;
    };
    const __returned__ = { calculoSafra, resultadoSafra, calcularSafra };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)} data-v-94267614><div class="container-inputs" data-v-94267614><label data-v-94267614>Safra <input placeholder="ex: milho"${__vite_ssr_import_2__.ssrRenderAttr("value", $setup.calculoSafra.safra)} data-v-94267614></label><label data-v-94267614>Area total do plantio (em ha) <input placeholder="ex: 30"${__vite_ssr_import_2__.ssrRenderAttr("value", $setup.calculoSafra.areaPlantio)} data-v-94267614></label><label data-v-94267614>Sacas esperada por ha <input placeholder="ex: 30"${__vite_ssr_import_2__.ssrRenderAttr("value", $setup.calculoSafra.sacasHa)} data-v-94267614></label><label data-v-94267614>Pre\xE7o esperado por saca <input placeholder="ex: 110"${__vite_ssr_import_2__.ssrRenderAttr("value", $setup.calculoSafra.valorSaca)} data-v-94267614></label><button data-v-94267614>Calcular</button><p data-v-94267614>${__vite_ssr_import_2__.ssrInterpolate($setup.resultadoSafra.totalValor)}</p></div></div>`);
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/Calculoplantio.vue?vue&type=style&index=0&scoped=94267614&lang.css");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Calculoplantio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-94267614"], ["__file", "C:/Users/Artur/Documents/nuxt/template/components/Calculoplantio.vue"]]);
;
}


// --------------------
// Request: /components/Calculoplantio.vue?vue&type=style&index=0&scoped=94267614&lang.css
// Parents: 
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// Dependencies: 

// --------------------
const $id_VMcb5MMrhc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n*[data-v-94267614] {\n}\n.container-inputs[data-v-94267614] {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: right;\r\n        flex-direction: column;\n}\ninput[data-v-94267614] {\r\n        border: 1px solid black;\r\n        width: 10vw;\r\n        margin-top: 1rem;\r\n        border-radius: 0.25rem;\r\n        outline: none;\n}\nbutton[data-v-94267614] {\r\n        background: grey;\r\n        color: white;\r\n        margin-top: 1rem;\r\n        padding: 0.2rem 0.7rem;\r\n        border-radius: 0.25rem;\n}\r\n";
}


// --------------------
// Request: /pages/index2.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalFluxo.vue ($id_uhrvSGzYHX)
// - vue ($id_VkOCJnUZrn)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vlGiJWWsSf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalFluxo.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index2",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const showModal = __vite_ssr_import_1__.ref();
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const saldoResponse = __vite_ssr_import_1__.ref();
    const fluxoResponse = __vite_ssr_import_1__.ref();
    const fluxoEntrada = __vite_ssr_import_1__.ref();
    const fluxoSaida = __vite_ssr_import_1__.ref();
    const saldoResult = __vite_ssr_import_1__.ref();
    const detalhe_Tipo_fluxo = __vite_ssr_import_1__.ref();
    const detalhe_Categoria = __vite_ssr_import_1__.ref();
    const detalhe_Fornecedor = __vite_ssr_import_1__.ref();
    const detalhe_Produto = __vite_ssr_import_1__.ref();
    const detalhe_Valor = __vite_ssr_import_1__.ref();
    const tipoOrdenar = __vite_ssr_import_1__.ref();
    const reverterOrdenar = __vite_ssr_import_1__.ref();
    const pagina = __vite_ssr_import_1__.reactive({
      atual: 0,
      tamanho: 5
    });
    saldoResponse.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.from("usuario").select().eq("id", 1)), __temp = await __temp, __restore(), __temp);
    fluxoResponse.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.from("fluxo").select()), __temp = await __temp, __restore(), __temp);
    fluxoEntrada.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.rpc("soma_fluxo", { t_fluxo: "entrada" })), __temp = await __temp, __restore(), __temp);
    fluxoSaida.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.rpc("soma_fluxo", { t_fluxo: "saida" })), __temp = await __temp, __restore(), __temp);
    saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
    const despesaInput = __vite_ssr_import_1__.reactive({
      categoria: "",
      fornecedor: "",
      nota_fiscal: "",
      produto: "",
      valor: ""
    });
    const entradaInput = __vite_ssr_import_1__.reactive({
      categoria: "",
      fornecedor: "",
      nota_fiscal: "",
      produto: "",
      valor: ""
    });
    const regexDespesa = () => {
      let length = despesaInput.valor.length;
      despesaInput.valor = despesaInput.valor.replace(/[^0-9]/g, "");
      if (length >= 14)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 13)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 11)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 10)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 9)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 7)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 6)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{2})$/, "$1,$2");
      if (length >= 5)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{2})$/, "$1,$2");
      if (length >= 3)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{2})$/, "$1,$2");
    };
    const regexEntrada = () => {
      let length = entradaInput.valor.length;
      entradaInput.valor = entradaInput.valor.replace(/[^0-9]/g, "");
      if (length >= 14)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 13)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 11)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 10)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 9)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 7)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 6)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{2})$/, "$1,$2");
      if (length >= 5)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{2})$/, "$1,$2");
      if (length >= 3)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{2})$/, "$1,$2");
    };
    const handleSubmitDespesa = async () => {
      await supabase.from("fluxo").insert({
        tipo_fluxo: "saida",
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor: parseFloat(despesaInput.valor.replace(".", "").replace(",", ".")),
        user_id: user.value.id
      });
      saldoResponse.value = await supabase.from("usuario").select().eq("id", 1);
      fluxoResponse.value = await supabase.from("fluxo").select();
      fluxoEntrada.value = await supabase.rpc("soma_fluxo", { t_fluxo: "entrada" });
      fluxoSaida.value = await supabase.rpc("soma_fluxo", { t_fluxo: "saida" });
      saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
      despesaInput.categoria = "";
      despesaInput.fornecedor = "";
      despesaInput.nota_fiscal = "";
      despesaInput.produto = "";
      despesaInput.valor = "";
    };
    const handleSubmitEntrada = async () => {
      await supabase.from("fluxo").insert({
        tipo_fluxo: "entrada",
        categoria: entradaInput.categoria,
        fornecedor: entradaInput.fornecedor,
        produto: entradaInput.produto,
        valor: parseFloat(entradaInput.valor.replace(".", "").replace(",", ".")),
        user_id: user.value.id
      });
      saldoResponse.value = await supabase.from("usuario").select().eq("id", 1);
      fluxoResponse.value = await supabase.from("fluxo").select();
      fluxoEntrada.value = await supabase.rpc("soma_fluxo", { t_fluxo: "entrada" });
      fluxoSaida.value = await supabase.rpc("soma_fluxo", { t_fluxo: "saida" });
      saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
      entradaInput.categoria = "";
      entradaInput.fornecedor = "";
      entradaInput.nota_fiscal = "";
      entradaInput.produto = "";
      entradaInput.valor = "";
    };
    const handleDetalheFluxo = (id, tipo_fluxo, categoria, fornecedor, produto, valor) => {
      detalhe_Tipo_fluxo.value = tipo_fluxo;
      detalhe_Categoria.value = categoria;
      detalhe_Fornecedor.value = fornecedor;
      detalhe_Produto.value = produto;
      detalhe_Valor.value = valor;
      showModal.value = true;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "categoria") {
        tipoOrdenar.value = porCategoria;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCategoriaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "fornecedor") {
        tipoOrdenar.value = porFornecedor;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porFornecedorReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "produto") {
        tipoOrdenar.value = porProduto;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porProdutoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "valor") {
        tipoOrdenar.value = porValor;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porValorReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porCategoria(a, b) {
      if (a.categoria > b.categoria) {
        return 1;
      } else if (b.categoria > a.categoria) {
        return -1;
      } else {
        return 0;
      }
    }
    function porFornecedor(a, b) {
      if (a.fornecedor > b.fornecedor) {
        return 1;
      } else if (b.fornecedor > a.fornecedor) {
        return -1;
      } else {
        return 0;
      }
    }
    function porProduto(a, b) {
      if (a.produto > b.produto) {
        return 1;
      } else if (b.produto > a.produto) {
        return -1;
      } else {
        return 0;
      }
    }
    function porValor(a, b) {
      return parseFloat(a.valor) - parseFloat(b.valor);
    }
    function porCategoriaReverse(a, b) {
      if (a.categoria > b.categoria) {
        return -1;
      } else if (b.categoria > a.categoria) {
        return 1;
      } else {
        return 0;
      }
    }
    function porFornecedorReverse(a, b) {
      if (a.fornecedor > b.fornecedor) {
        return -1;
      } else if (b.fornecedor > a.fornecedor) {
        return 1;
      } else {
        return 0;
      }
    }
    function porProdutoReverse(a, b) {
      if (a.produto > b.produto) {
        return -1;
      } else if (b.produto > a.produto) {
        return 1;
      } else {
        return 0;
      }
    }
    function porValorReverse(a, b) {
      return parseFloat(b.valor) - parseFloat(a.valor);
    }
    const __returned__ = { showModal, supabase, user, saldoResponse, fluxoResponse, fluxoEntrada, fluxoSaida, saldoResult, detalhe_Tipo_fluxo, detalhe_Categoria, detalhe_Fornecedor, detalhe_Produto, detalhe_Valor, tipoOrdenar, reverterOrdenar, pagina, despesaInput, entradaInput, regexDespesa, regexEntrada, handleSubmitDespesa, handleSubmitEntrada, handleDetalheFluxo, handlePagina, handleOrdenar, porCategoria, porFornecedor, porProduto, porValor, porCategoriaReverse, porFornecedorReverse, porProdutoReverse, porValorReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalFluxo = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}><div class="flex flex-row justify-evenly"><div><h3>Fluxo de Entrada</h3><h1>${__vite_ssr_import_6__.ssrInterpolate($setup.fluxoEntrada.data.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div><div><h3>Fluxo de saida</h3><h1>${__vite_ssr_import_6__.ssrInterpolate($setup.fluxoSaida.data.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div><div><h3>Saldo</h3><h1>${__vite_ssr_import_6__.ssrInterpolate((parseFloat($setup.fluxoEntrada.data) - parseFloat($setup.fluxoSaida.data)).toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div></div><!-- <lineChart :chartData="testData" /> --><div class="flex flex-row"><div class="flex flex-row"><form class="flex flex-col"><h1>Adicionar despezas</h1><label for="categoria">Categoria</label><select name="categoria" id="cars" form="carform"><option value="insumo">Insumo</option><option value="combustivel">Combust\xEDvel</option><option value="manutencao">Manuten\xE7\xE3o</option><option value="Financiamento">Financiamento</option></select><label for="fornecedor">Fornecedor</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.fornecedor)} name="fornecedor" type="text"><label for="nota fiscal">Nota Fiscal</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.nota_fiscal)} name="nota fiscal" type="number"><label for="produto">Produto</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.produto)} name="produto" type="text"><label for="valor">Valor</label><input placeholder="R$ 1.000,00"${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.valor)} name="valor" type="text"><button type="button">Criar</button></form></div><div class="flex flex-row"><form class="flex flex-col"><h1>Adicionar Entradas</h1><label for="categoria">Categoria</label><select name="categoria" id="cars" form="carform"><option value="insumo">Insumo</option><option value="combustivel">Combust\xEDvel</option><option value="manutencao">Manuten\xE7\xE3o</option><option value="Financiamento">Financiamento</option></select><label for="fornecedor">Fornecedor</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.fornecedor)} name="fornecedor" type="text"><label for="nota fiscal">Nota Fiscal</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.nota_fiscal)} name="nota fiscal" type="number"><label for="produto">Produto</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.produto)} name="produto" type="text"><label for="valor">Valor</label><input placeholder="R$ 1.000,00"${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.valor)} name="valor" type="text"><button type="button">Criar</button></form></div></div><div><select><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList(Math.ceil($setup.fluxoResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_6__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_6__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_6__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_6__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_6__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.fluxoResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>A\xE7\xE3o</th><th>Categoria</th><th>Fornecedor</th><th>Produto</th><th>Valor</th><th>Detalhes</th></thead><tbody><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.fluxoResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (fluxo) => {
    _push(`<tr><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.tipo_fluxo)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.categoria)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.fornecedor)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.produto)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.valor)}</td><!-- <td>{{fluxo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> manage_search </span></td></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
  if ($setup.showModal) {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ModalFluxo, {
      onClose: ($event) => $setup.showModal = false
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Tipo_fluxo)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Categoria)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Fornecedor)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Produto)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Valor)}`);
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString($setup.detalhe_Tipo_fluxo) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Categoria) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Fornecedor) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Produto) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Valor), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/index2.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/modalFluxo.vue
// Parents: 
// - /pages/index2.vue?macro=true ($id_NZzLC1HuMH)
// - /pages/index2.vue ($id_SOFbo5iYqU)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Oslbb4uoZw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  }, _attrs))}><div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-2xl h-full md:h-auto"><!-- Modal content --><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><!-- Modal header --><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white"> Terms of Service </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><!-- Modal body --><div class="p-6 space-y-6">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><!-- Modal footer --><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"><button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button><button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button></div></div></div></div><!-- Backdrop --><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modalFluxo.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/components/modalFluxo.vue"]]);
}


// --------------------
// Request: /pages/login.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_24okfJ3TNH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Auth.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const { supabase } = __vite_ssr_import_1__.default();
    const { user } = __vite_ssr_import_2__.default();
    const notesResponse = __vite_ssr_import_3__.ref();
    const __returned__ = { supabase, user, notesResponse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Auth = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "" }, _attrs))}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Auth, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/login.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/Auth.vue
// Parents: 
// - /pages/login.vue?macro=true ($id_ITuqivn9Dh)
// - /pages/login.vue ($id_sJIhc9o139)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue/server-renderer ($id_UyJffsox60)
// - /components/Auth.vue?vue&type=style&index=0&scoped=ee860cc1&lang.css ($id_TxODjVgxSz)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_srwFyTRhDe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "Auth",
  setup(__props, { expose }) {
    expose();
    const authState = __vite_ssr_import_0__.ref("login");
    const authError = __vite_ssr_import_0__.ref("");
    const showConfirmEmailMessage = __vite_ssr_import_0__.ref(false);
    const input = __vite_ssr_import_0__.reactive({
      password: "",
      email: ""
    });
    const router = __vite_ssr_import_1__.useRouter();
    const { signUp, signIn, signOut, user } = __vite_ssr_import_2__.default();
    const toggleAuthState = () => {
      if (authState.value === "login") {
        authState.value = "signup";
      } else {
        authState.value = "login";
      }
      input.email = "";
      input.password = "";
    };
    const handleSubmit = async () => {
      try {
        if (authState.value === "login") {
          await signIn({ email: input.email, password: input.password });
          router.push("/myProfile");
        } else {
          await signUp({ email: input.email, password: input.password });
          showConfirmEmailMessage.value = true;
        }
      } catch (err) {
        authError.value = err.message;
      }
    };
    const __returned__ = { authState, authError, showConfirmEmailMessage, input, router, signUp, signIn, signOut, user, toggleAuthState, handleSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NCard = __vite_ssr_import_4__.resolveComponent("NCard");
  const _component_NButton = __vite_ssr_import_4__.resolveComponent("NButton");
  _push(`<div${__vite_ssr_import_5__.ssrRenderAttrs(_attrs)} data-v-ee860cc1>`);
  if (!$setup.showConfirmEmailMessage) {
    _push(`<div data-v-ee860cc1>`);
    _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NCard, { class: "card" }, {
      default: __vite_ssr_import_4__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<h3 data-v-ee860cc1${_scopeId}>${__vite_ssr_import_5__.ssrInterpolate($setup.authState)}</h3><div class="input-container" data-v-ee860cc1${_scopeId}>${__vite_ssr_import_5__.ssrInterpolate($setup.input.password)} <input type="text" placeholder="email"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.input.email)} data-v-ee860cc1${_scopeId}><input type="password" placeholder="Password"${__vite_ssr_import_5__.ssrRenderAttr("value", $setup.input.password)} data-v-ee860cc1${_scopeId}></div>`);
          _push2(__vite_ssr_import_5__.ssrRenderComponent(_component_NButton, { onClick: $setup.handleSubmit }, {
            default: __vite_ssr_import_4__.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Submit`);
              } else {
                return [
                  __vite_ssr_import_4__.createTextVNode("Submit")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if ($setup.authError) {
            _push2(`<p class="error" data-v-ee860cc1${_scopeId}>${__vite_ssr_import_5__.ssrInterpolate($setup.authError)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<p data-v-ee860cc1${_scopeId}>${__vite_ssr_import_5__.ssrInterpolate($setup.authState === "login" ? "Don't have an account? Creato one now" : "Alreadyhave an account? Go ahead and login")}</p>`);
        } else {
          return [
            __vite_ssr_import_4__.createVNode("h3", null, __vite_ssr_import_4__.toDisplayString($setup.authState), 1),
            __vite_ssr_import_4__.createVNode("div", { class: "input-container" }, [
              __vite_ssr_import_4__.createTextVNode(__vite_ssr_import_4__.toDisplayString($setup.input.password) + " ", 1),
              __vite_ssr_import_4__.withDirectives(__vite_ssr_import_4__.createVNode("input", {
                type: "text",
                placeholder: "email",
                "onUpdate:modelValue": ($event) => $setup.input.email = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_4__.vModelText, $setup.input.email]
              ]),
              __vite_ssr_import_4__.withDirectives(__vite_ssr_import_4__.createVNode("input", {
                type: "password",
                placeholder: "Password",
                "onUpdate:modelValue": ($event) => $setup.input.password = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_4__.vModelText, $setup.input.password]
              ])
            ]),
            __vite_ssr_import_4__.createVNode(_component_NButton, { onClick: $setup.handleSubmit }, {
              default: __vite_ssr_import_4__.withCtx(() => [
                __vite_ssr_import_4__.createTextVNode("Submit")
              ]),
              _: 1
            }),
            $setup.authError ? (__vite_ssr_import_4__.openBlock(), __vite_ssr_import_4__.createBlock("p", {
              key: 0,
              class: "error"
            }, __vite_ssr_import_4__.toDisplayString($setup.authError), 1)) : __vite_ssr_import_4__.createCommentVNode("v-if", true),
            __vite_ssr_import_4__.createVNode("p", { onClick: $setup.toggleAuthState }, __vite_ssr_import_4__.toDisplayString($setup.authState === "login" ? "Don't have an account? Creato one now" : "Alreadyhave an account? Go ahead and login"), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<div data-v-ee860cc1><h3 data-v-ee860cc1>Check email for confirmation message</h3></div>`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Auth.vue?vue&type=style&index=0&scoped=ee860cc1&lang.css");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee860cc1"], ["__file", "C:/Users/Artur/Documents/nuxt/template/components/Auth.vue"]]);
;
}


// --------------------
// Request: /components/Auth.vue?vue&type=style&index=0&scoped=ee860cc1&lang.css
// Parents: 
// - /components/Auth.vue ($id_bD8to5qKKa)
// Dependencies: 

// --------------------
const $id_hXyNCI6Ozm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.card[data-v-ee860cc1] {\r\n    padding: 2rem;\r\n    width: 25rem;\n}\n.card h3[data-v-ee860cc1] {\r\n    font-size: 1.75rem;\r\n    text-transform: capitalize;\n}\n.input-container[data-v-ee860cc1] {\r\n    display: flex;\r\n    flex-direction: column;\n}\n.input-container input[data-v-ee860cc1] {\r\n    margin-bottom: .3rem;\r\n    padding: .5rem;\r\n    outline: none;\r\n    border: .1rem solid rgba(0, 0, 0, .5);\r\n    border-radius: .2rem;\n}\np[data-v-ee860cc1] {\r\n    color: lightblue;\r\n    font-size: .8rem;\r\n    cursor: pointer;\n}\n.error[data-v-ee860cc1] {\r\n    color: red\n}\r\n";
}


// --------------------
// Request: /pages/maquinas.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalNovoMaquina.vue ($id_oPoWcnQYB4)
// - /components/modalEditarMaquina.vue ($id_qdsBO9tp1o)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_GPxxkHGDrR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalNovoMaquina.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/modalEditarMaquina.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "maquinas",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const maquinasResponse = __vite_ssr_import_4__.ref();
    maquinasResponse.value = ([__temp, __restore] = __vite_ssr_import_5__.withAsyncContext(() => supabase.from("maquinas").select()), __temp = await __temp, __restore(), __temp);
    const showModalAdicionar = __vite_ssr_import_4__.ref();
    const showModalEditar = __vite_ssr_import_4__.ref();
    const tipoOrdenar = __vite_ssr_import_4__.ref();
    const reverterOrdenar = __vite_ssr_import_4__.ref();
    const pagina = __vite_ssr_import_4__.reactive({
      atual: 0,
      tamanho: 5
    });
    const maquinaInput = __vite_ssr_import_4__.reactive({
      id: "",
      categoria: "",
      modelo: "",
      ano: "",
      is_pago: false,
      valor_parcelas: "",
      num_parcelas: "",
      data_pagamento_parcelas: ""
    });
    const handleNovoMaquina = () => {
      showModalAdicionar.value = true;
      maquinaInput.categoria = "";
      maquinaInput.modelo = "";
      maquinaInput.ano = "";
      maquinaInput.is_pago = false;
      maquinaInput.valor_parcelas = "";
      maquinaInput.num_parcelas = "";
      maquinaInput.data_pagamento_parcelas = "";
    };
    const handleDeleteMaquina = async (maquinaId) => {
      await supabase.from("maquinas").delete().eq("id", maquinaId);
      maquinasResponse.value = await supabase.from("maquinas").select();
    };
    const handleSubmitNovoMaquina = async () => {
      await supabase.from("maquinas").insert({
        categoria: maquinaInput.categoria,
        modelo: maquinaInput.modelo,
        ano: maquinaInput.ano,
        is_pago: maquinaInput.is_pago,
        valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
        num_parcelas: parseInt(maquinaInput.num_parcelas),
        data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)
      });
      maquinasResponse.value = await supabase.from("maquinas").select();
      maquinaInput.categoria = "", maquinaInput.ano = "", maquinaInput.modelo = "", maquinaInput.is_pago = false, maquinaInput.valor_parcelas = "", maquinaInput.num_parcelas = "";
      showModalAdicionar.value = false;
    };
    const handleSubmitEditarMaquina = async () => {
      if (!maquinaInput.is_pago) {
        await supabase.from("maquinas").update({
          categoria: maquinaInput.categoria,
          modelo: maquinaInput.modelo,
          ano: maquinaInput.ano,
          is_pago: maquinaInput.is_pago,
          valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
          num_parcelas: parseInt(maquinaInput.num_parcelas),
          data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)
        }).eq("id", maquinaInput.id);
      } else {
        await supabase.from("maquinas").update({
          categoria: maquinaInput.categoria,
          modelo: maquinaInput.modelo,
          ano: maquinaInput.ano,
          is_pago: maquinaInput.is_pago,
          valor_parcelas: 0,
          num_parcelas: 0,
          data_parcelas: 0
        }).eq("id", maquinaInput.id);
      }
      maquinasResponse.value = await supabase.from("maquinas").select();
      maquinaInput.id = "", maquinaInput.categoria = "", maquinaInput.ano = "", maquinaInput.modelo = "", maquinaInput.is_pago = false, maquinaInput.valor_parcelas = "", maquinaInput.num_parcelas = "";
      showModalEditar.value = false;
    };
    const handleModalEditar = (categoria, modelo, ano, is_pago, valor_parcelas, num_parcelas, data_pagamento_parcelas, id) => {
      showModalEditar.value = true;
      maquinaInput.categoria = categoria;
      maquinaInput.modelo = modelo;
      maquinaInput.ano = ano;
      maquinaInput.is_pago = is_pago;
      maquinaInput.valor_parcelas = valor_parcelas;
      maquinaInput.num_parcelas = num_parcelas;
      maquinaInput.data_pagamento_parcelas = data_pagamento_parcelas;
      maquinaInput.id = id;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "nome") {
        tipoOrdenar.value = porNome;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porNomeReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "cargo") {
        tipoOrdenar.value = porCargo;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCargoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "salario") {
        tipoOrdenar.value = porSalario;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porSalarioReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "dia") {
        tipoOrdenar.value = porDia;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDiaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "data") {
        tipoOrdenar.value = porData;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDataReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porNome(a, b) {
      if (a.nome > b.nome) {
        return 1;
      } else if (b.nome > a.nome) {
        return -1;
      } else {
        return 0;
      }
    }
    function porCargo(a, b) {
      if (a.cargo > b.cargo) {
        return 1;
      } else if (b.cargo > a.cargo) {
        return -1;
      } else {
        return 0;
      }
    }
    function porData(a, b) {
      if (a.data > b.data) {
        return 1;
      } else if (b.data > a.data) {
        return -1;
      } else {
        return 0;
      }
    }
    function porSalario(a, b) {
      return parseFloat(a.salario) - parseFloat(b.salario);
    }
    function porDia(a, b) {
      return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario);
    }
    function porNomeReverse(a, b) {
      if (a.nome > b.nome) {
        return -1;
      } else if (b.nome > a.nome) {
        return 1;
      } else {
        return 0;
      }
    }
    function porCargoReverse(a, b) {
      if (a.cargo > b.cargo) {
        return -1;
      } else if (b.cargo > a.cargo) {
        return 1;
      } else {
        return 0;
      }
    }
    function porDataReverse(a, b) {
      if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
      } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1;
      } else {
        return 0;
      }
    }
    function porSalarioReverse(a, b) {
      return parseFloat(b.salario) - parseFloat(a.salario);
    }
    function porDiaReverse(a, b) {
      return parseFloat(b.data_inicio) - parseFloat(a.data_inicio);
    }
    const __returned__ = { supabase, user, maquinasResponse, showModalAdicionar, showModalEditar, tipoOrdenar, reverterOrdenar, pagina, maquinaInput, handleNovoMaquina, handleDeleteMaquina, handleSubmitNovoMaquina, handleSubmitEditarMaquina, handleModalEditar, handlePagina, handleOrdenar, porNome, porCargo, porData, porSalario, porDia, porNomeReverse, porCargoReverse, porDataReverse, porSalarioReverse, porDiaReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalNovoMaquina = __vite_ssr_import_0__.default;
  const _component_ModalEditarMaquina = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>${__vite_ssr_import_7__.ssrInterpolate($setup.maquinaInput.categoria)} <button> novo maquina </button><!-- Modal Novo Funcion\xE1rio -->`);
  if ($setup.showModalAdicionar) {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalNovoMaquina, {
      onClose: ($event) => $setup.showModalAdicionar = false,
      onAdicionarMaquina: $setup.handleSubmitNovoMaquina
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Categoria do m\xE1quina</label><select type="text" placeholder="Jo\xE3o da silva"${_scopeId}><option value="tratores"${_scopeId}>Tratores</option><option value="ceifadeira/colheitadeira"${_scopeId}>Ceifadeira ou Colheitadeira</option><option value="atv/utv"${_scopeId}>ATVs ou UTVs</option><option value="acessorios/trator"${_scopeId}>Assess\xF3rios para trator</option><option value="arados"${_scopeId}>Arados</option><option value="distribuidores_de_fertilizante"${_scopeId}>Distribuidores De Fertilizante</option><option value="semeadores"${_scopeId}>Semeadores</option><option value="enfardadeiras"${_scopeId}>Enfardadeiras</option><option value="vagoes/reboque"${_scopeId}>Vag\xF5es ou reboque</option><option value="outro"${_scopeId}>Outro</option></select><label for="cargo"${_scopeId}>Modelo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.modelo)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.ano)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="recebe_salario"${_scopeId}>Est\xE1 Pago?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.maquinaInput.is_pago) ? __vite_ssr_import_7__.ssrLooseContain($setup.maquinaInput.is_pago, null) : $setup.maquinaInput.is_pago) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
          if (!$setup.maquinaInput.is_pago) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>Parcelas Restantes</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.num_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="salario"${_scopeId}>Valor da parcela</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.valor_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>Dia de pagamento parcela</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
            __vite_ssr_import_7__.ssrRenderList(28, (i) => {
              _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
              __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Categoria do m\xE1quina"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.categoria = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, [
                __vite_ssr_import_6__.createVNode("option", { value: "tratores" }, "Tratores"),
                __vite_ssr_import_6__.createVNode("option", { value: "ceifadeira/colheitadeira" }, "Ceifadeira ou Colheitadeira"),
                __vite_ssr_import_6__.createVNode("option", { value: "atv/utv" }, "ATVs ou UTVs"),
                __vite_ssr_import_6__.createVNode("option", { value: "acessorios/trator" }, "Assess\xF3rios para trator"),
                __vite_ssr_import_6__.createVNode("option", { value: "arados" }, "Arados"),
                __vite_ssr_import_6__.createVNode("option", { value: "distribuidores_de_fertilizante" }, "Distribuidores De Fertilizante"),
                __vite_ssr_import_6__.createVNode("option", { value: "semeadores" }, "Semeadores"),
                __vite_ssr_import_6__.createVNode("option", { value: "enfardadeiras" }, "Enfardadeiras"),
                __vite_ssr_import_6__.createVNode("option", { value: "vagoes/reboque" }, "Vag\xF5es ou reboque"),
                __vite_ssr_import_6__.createVNode("option", { value: "outro" }, "Outro")
              ], 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.categoria]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "Modelo"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.modelo = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.modelo]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.ano = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.ano]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "Est\xE1 Pago?"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.is_pago = $event,
                type: "checkbox",
                placeholder: "Jo\xE3o da silva",
                name: "recebe_salario"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelCheckbox, $setup.maquinaInput.is_pago]
              ]),
              __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  !$setup.maquinaInput.is_pago ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                    key: 0,
                    class: "flex flex-col"
                  }, [
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Parcelas Restantes"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.num_parcelas = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.num_parcelas]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Valor da parcela"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.valor_parcelas = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.valor_parcelas]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "Dia de pagamento parcela"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.data_pagamento_parcelas = $event,
                      placeholder: "Jo\xE3o da silva",
                      name: "data_pagamento_salario"
                    }, [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                        return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.data_pagamento_parcelas]
                    ])
                  ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><select><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList(Math.ceil($setup.maquinasResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_7__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.maquinasResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>Categoria</th><th>Modelo</th><th>Ano</th><th>Pago</th><th>valor_parcelas</th><th>num_parcelas</th><th>data_pagamento_parcelas</th><th>Detalhes</th><th>Deletar</th></thead><tbody><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.maquinasResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (maquina) => {
    _push(`<tr><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.categoria)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.modelo)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.ano)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.is_pago)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.valor_parcelas)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.num_parcelas)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.data_parcelas)}</td><!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> edit </span></td><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> delete </span></td>`);
    if ($setup.showModalEditar) {
      _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalEditarMaquina, {
        onClose: ($event) => $setup.showModalEditar = false,
        onEditarMaquina: $setup.handleSubmitEditarMaquina
      }, {
        default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Categoria do m\xE1quina</label><select type="text" placeholder="Jo\xE3o da silva"${_scopeId}><option value="tratores"${_scopeId}>Tratores</option><option value="ceifadeira/colheitadeira"${_scopeId}>Ceifadeira ou Colheitadeira</option><option value="atv/utv"${_scopeId}>ATVs ou UTVs</option><option value="acessorios/trator"${_scopeId}>Assess\xF3rios para trator</option><option value="arados"${_scopeId}>Arados</option><option value="distribuidores_de_fertilizante"${_scopeId}>Distribuidores De Fertilizante </option><option value="semeadores"${_scopeId}>Semeadores</option><option value="enfardadeiras"${_scopeId}>Enfardadeiras</option><option value="vagoes/reboque"${_scopeId}>Vag\xF5es ou reboque</option><option value="outro"${_scopeId}>Outro</option></select><label for="cargo"${_scopeId}>Modelo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.modelo)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.ano)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="recebe_salario"${_scopeId}>Est\xE1 Pago?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.maquinaInput.is_pago) ? __vite_ssr_import_7__.ssrLooseContain($setup.maquinaInput.is_pago, null) : $setup.maquinaInput.is_pago) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
            if (!$setup.maquinaInput.is_pago) {
              _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>Parcelas Restantes</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.num_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="salario"${_scopeId}>Valor da parcela</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.valor_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>Dia de pagamento parcela</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
              __vite_ssr_import_7__.ssrRenderList(28, (i) => {
                _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
              });
              _push2(`<!--]--></select></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
                __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Categoria do m\xE1quina"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.categoria = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, [
                  __vite_ssr_import_6__.createVNode("option", { value: "tratores" }, "Tratores"),
                  __vite_ssr_import_6__.createVNode("option", { value: "ceifadeira/colheitadeira" }, "Ceifadeira ou Colheitadeira"),
                  __vite_ssr_import_6__.createVNode("option", { value: "atv/utv" }, "ATVs ou UTVs"),
                  __vite_ssr_import_6__.createVNode("option", { value: "acessorios/trator" }, "Assess\xF3rios para trator"),
                  __vite_ssr_import_6__.createVNode("option", { value: "arados" }, "Arados"),
                  __vite_ssr_import_6__.createVNode("option", { value: "distribuidores_de_fertilizante" }, "Distribuidores De Fertilizante "),
                  __vite_ssr_import_6__.createVNode("option", { value: "semeadores" }, "Semeadores"),
                  __vite_ssr_import_6__.createVNode("option", { value: "enfardadeiras" }, "Enfardadeiras"),
                  __vite_ssr_import_6__.createVNode("option", { value: "vagoes/reboque" }, "Vag\xF5es ou reboque"),
                  __vite_ssr_import_6__.createVNode("option", { value: "outro" }, "Outro")
                ], 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.categoria]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "Modelo"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.modelo = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.modelo]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.ano = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.ano]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "Est\xE1 Pago?"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.is_pago = $event,
                  type: "checkbox",
                  placeholder: "Jo\xE3o da silva",
                  name: "recebe_salario"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelCheckbox, $setup.maquinaInput.is_pago]
                ]),
                __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    !$setup.maquinaInput.is_pago ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "flex flex-col"
                    }, [
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Parcelas Restantes"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.num_parcelas = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.num_parcelas]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Valor da parcela"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.valor_parcelas = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.valor_parcelas]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "Dia de pagamento parcela"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.data_pagamento_parcelas = $event,
                        placeholder: "Jo\xE3o da silva",
                        name: "data_pagamento_salario"
                      }, [
                        (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                          return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.data_pagamento_parcelas]
                      ])
                    ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maquinas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/maquinas.vue"]]);

const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/modalNovoMaquina.vue
// Parents: 
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_KhEOW9Unsa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  }, _attrs))}><div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-2xl h-full md:h-auto"><!-- Modal content --><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><!-- Modal header --><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white"> Nova M??quina </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><!-- Modal body --><div class="p-6 space-y-6">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><!-- Modal footer --><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"><button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Adicionar</button><button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button></div></div></div></div><!-- Backdrop --><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modalNovoMaquina.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/components/modalNovoMaquina.vue"]]);
}


// --------------------
// Request: /components/modalEditarMaquina.vue
// Parents: 
// - /pages/maquinas.vue?macro=true ($id_DVPKMjx96J)
// - /pages/maquinas.vue ($id_cVjqSraWNu)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_U9co9LMSVr = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
  }, _attrs))}><div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-full max-w-2xl h-full md:h-auto"><!-- Modal content --><div class="relative bg-white rounded-lg shadow dark:bg-gray-700"><!-- Modal header --><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white"> Editar M??quina </h3><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div><!-- Modal body --><div class="p-6 space-y-6">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><!-- Modal footer --><div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"><button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Adicionar</button><button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button></div></div></div></div><!-- Backdrop --><!--]-->`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/modalEditarMaquina.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/components/modalEditarMaquina.vue"]]);
}


// --------------------
// Request: /pages/calculo.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_iQGoq5svl9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "calculo",
  setup(__props, { expose }) {
    expose();
    const custo = __vite_ssr_import_0__.ref();
    const quantidade = __vite_ssr_import_0__.ref();
    const calculoInput = __vite_ssr_import_0__.reactive({
      custo: "",
      rendimento: "",
      area: ""
    });
    const handleClick = () => {
      if (calculoInput.custo == "" || calculoInput.area == "" || calculoInput.rendimento == "")
        return;
      quantidade.value = parseFloat(calculoInput.area) / parseFloat(calculoInput.rendimento);
      custo.value = quantidade.value * parseFloat(calculoInput.custo);
    };
    const __returned__ = { custo, quantidade, calculoInput, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "flex flex-col" }, _attrs))}><label for="rendimento">Rendimento | Quantos m<sup>2</sup> rende 1L do produto</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.rendimento)} name="rendimento" type="text" placeholder="Ex: 100"><label for="custo">Custo por litro</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.custo)} name="custo" type="text" placeholder="Ex: 100"><label for="area">area por litro em m<sup>2</sup> (cada hectare possui 10.000m<sup>2</sup>)</label><input${__vite_ssr_import_3__.ssrRenderAttr("value", $setup.calculoInput.area)} name="area" type="text" placeholder="10000"><button>Calcular</button><p>Custo:${__vite_ssr_import_3__.ssrInterpolate($setup.custo)}</p><p>Quantidade:${__vite_ssr_import_3__.ssrInterpolate($setup.quantidade)}</p></div>`);
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/calculo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/calculo.vue"]]);
;
}


// --------------------
// Request: /pages/estoque.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ga3OsdUAiX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}><div class="">Sementes</div><div class="">Fertilizantes</div><div class="">Defensivos </div></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/estoque.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/pages/estoque.vue"]]);
}


// --------------------
// Request: /pages/funcionarios.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalNovoFuncionario.vue ($id_B85UhicDkg)
// - /components/modalEditarFuncionario.vue ($id_OKsSQ72Lpa)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_6EkVlFDrL2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalNovoFuncionario.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/modalEditarFuncionario.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "funcionarios",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const funcionariosResponse = __vite_ssr_import_4__.ref();
    funcionariosResponse.value = ([__temp, __restore] = __vite_ssr_import_5__.withAsyncContext(() => supabase.from("funcionarios").select()), __temp = await __temp, __restore(), __temp);
    const showModalAdicionar = __vite_ssr_import_4__.ref();
    const showModalEditar = __vite_ssr_import_4__.ref();
    const tipoOrdenar = __vite_ssr_import_4__.ref();
    const reverterOrdenar = __vite_ssr_import_4__.ref();
    const pagina = __vite_ssr_import_4__.reactive({
      atual: 0,
      tamanho: 5
    });
    const funcionarioInput = __vite_ssr_import_4__.reactive({
      id: "",
      nome: "",
      numero: "",
      cargo: "",
      is_assalariado: false,
      salario: "",
      data_pagamento_salario: ""
    });
    const handleNovoFuncionario = () => {
      showModalAdicionar.value = true;
      funcionarioInput.nome = "";
      funcionarioInput.cargo = "";
      funcionarioInput.numero = "";
      funcionarioInput.is_assalariado = false;
      funcionarioInput.salario = "";
      funcionarioInput.data_pagamento_salario = "";
    };
    const handleDeleteFuncionario = async (funcionarioId) => {
      await supabase.from("funcionarios").delete().eq("id", funcionarioId);
      funcionariosResponse.value = await supabase.from("funcionarios").select();
    };
    const handleSubmitNovoFuncionario = async () => {
      await supabase.from("funcionarios").insert({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(funcionarioInput.salario.replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)
      });
      funcionariosResponse.value = await supabase.from("funcionarios").select();
      funcionarioInput.nome = "", funcionarioInput.numero = "", funcionarioInput.cargo = "", funcionarioInput.is_assalariado = false, funcionarioInput.salario = "", funcionarioInput.data_pagamento_salario = "";
      showModalAdicionar.value = false;
    };
    const handleSubmitEditarFuncionario = async () => {
      await supabase.from("funcionarios").update({
        nome: funcionarioInput.nome,
        numero: funcionarioInput.numero,
        cargo: funcionarioInput.cargo,
        is_assalariado: funcionarioInput.is_assalariado,
        salario: parseFloat(String(funcionarioInput.salario).replace(".", "").replace(",", ".")),
        data_pagamento_salario: parseInt(funcionarioInput.data_pagamento_salario)
      }).eq("id", funcionarioInput.id);
      funcionariosResponse.value = await supabase.from("funcionarios").select();
      funcionarioInput.id = "", funcionarioInput.nome = "", funcionarioInput.numero = "", funcionarioInput.cargo = "", funcionarioInput.is_assalariado = false, funcionarioInput.salario = "", funcionarioInput.data_pagamento_salario = "";
      showModalEditar.value = false;
    };
    const handleModalEditar = (nome, cargo, numero, is_assalariado, salario, diaPagamento, id) => {
      showModalEditar.value = true;
      funcionarioInput.nome = nome;
      funcionarioInput.cargo = cargo;
      funcionarioInput.numero = numero;
      funcionarioInput.is_assalariado = is_assalariado;
      funcionarioInput.salario = salario;
      funcionarioInput.data_pagamento_salario = diaPagamento;
      funcionarioInput.id = id;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "nome") {
        tipoOrdenar.value = porNome;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porNomeReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "cargo") {
        tipoOrdenar.value = porCargo;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCargoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "salario") {
        tipoOrdenar.value = porSalario;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porSalarioReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "dia") {
        tipoOrdenar.value = porDia;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDiaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "data") {
        tipoOrdenar.value = porData;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDataReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porNome(a, b) {
      if (a.nome > b.nome) {
        return 1;
      } else if (b.nome > a.nome) {
        return -1;
      } else {
        return 0;
      }
    }
    function porCargo(a, b) {
      if (a.cargo > b.cargo) {
        return 1;
      } else if (b.cargo > a.cargo) {
        return -1;
      } else {
        return 0;
      }
    }
    function porData(a, b) {
      if (a.data > b.data) {
        return 1;
      } else if (b.data > a.data) {
        return -1;
      } else {
        return 0;
      }
    }
    function porSalario(a, b) {
      return parseFloat(a.salario) - parseFloat(b.salario);
    }
    function porDia(a, b) {
      return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario);
    }
    function porNomeReverse(a, b) {
      if (a.nome > b.nome) {
        return -1;
      } else if (b.nome > a.nome) {
        return 1;
      } else {
        return 0;
      }
    }
    function porCargoReverse(a, b) {
      if (a.cargo > b.cargo) {
        return -1;
      } else if (b.cargo > a.cargo) {
        return 1;
      } else {
        return 0;
      }
    }
    function porDataReverse(a, b) {
      if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
      } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1;
      } else {
        return 0;
      }
    }
    function porSalarioReverse(a, b) {
      return parseFloat(b.salario) - parseFloat(a.salario);
    }
    function porDiaReverse(a, b) {
      return parseFloat(b.data_inicio) - parseFloat(a.data_inicio);
    }
    const __returned__ = { supabase, user, funcionariosResponse, showModalAdicionar, showModalEditar, tipoOrdenar, reverterOrdenar, pagina, funcionarioInput, handleNovoFuncionario, handleDeleteFuncionario, handleSubmitNovoFuncionario, handleSubmitEditarFuncionario, handleModalEditar, handlePagina, handleOrdenar, porNome, porCargo, porData, porSalario, porDia, porNomeReverse, porCargoReverse, porDataReverse, porSalarioReverse, porDiaReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalNovoFuncionario = __vite_ssr_import_0__.default;
  const _component_ModalEditarFuncionario = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}><button> novo funcionario </button><!-- Modal Novo Funcion\xE1rio -->`);
  if ($setup.showModalAdicionar) {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalNovoFuncionario, {
      onClose: ($event) => $setup.showModalAdicionar = false,
      onAdicionarFuncionario: $setup.handleSubmitNovoFuncionario
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Nome</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.nome)} type="text" placeholder="Jo\xE3o da silva" name="nome"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.numero)} type="text" placeholder="Jo\xE3o da silva" name="numero"${_scopeId}><label for="cargo"${_scopeId}>cargo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.cargo)} type="text" placeholder="Jo\xE3o da silva" name="cargo"${_scopeId}><label for="recebe_salario"${_scopeId}>\xC9 assalariado?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.funcionarioInput.is_assalariado) ? __vite_ssr_import_7__.ssrLooseContain($setup.funcionarioInput.is_assalariado, null) : $setup.funcionarioInput.is_assalariado) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
          if ($setup.funcionarioInput.is_assalariado) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>sal\xE1rio</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.salario)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>dia do pagamento</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
            __vite_ssr_import_7__.ssrRenderList(28, (i) => {
              _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
              __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Nome"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.nome = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "nome"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.nome]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.numero = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "numero"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.numero]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "cargo"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.cargo = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva",
                name: "cargo"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.cargo]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "\xC9 assalariado?"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.funcionarioInput.is_assalariado = $event,
                type: "checkbox",
                placeholder: "Jo\xE3o da silva",
                name: "recebe_salario"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelCheckbox, $setup.funcionarioInput.is_assalariado]
              ]),
              __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  $setup.funcionarioInput.is_assalariado ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                    key: 0,
                    class: "flex flex-col"
                  }, [
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "sal\xE1rio"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.funcionarioInput.salario = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.salario]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "dia do pagamento"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                      "onUpdate:modelValue": ($event) => $setup.funcionarioInput.data_pagamento_salario = $event,
                      placeholder: "Jo\xE3o da silva",
                      name: "data_pagamento_salario"
                    }, [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                        return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelSelect, $setup.funcionarioInput.data_pagamento_salario]
                    ])
                  ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><select><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList(Math.ceil($setup.funcionariosResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_7__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.funcionariosResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>Nome</th><th>Cargo</th><th>numero</th><th>Salario</th><th>Dia pagamento</th><th>Data cadasto</th><th>Detalhes</th><th>Deletar</th></thead><tbody><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.funcionariosResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (funcionario) => {
    _push(`<tr><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.nome)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.cargo)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.numero)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.salario)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.data_pagamento_salario)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(funcionario.data_inicio)}</td><!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> edit </span></td><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> person_remove </span></td>`);
    if ($setup.showModalEditar) {
      _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalEditarFuncionario, {
        onClose: ($event) => $setup.showModalEditar = false,
        onEditarFuncionario: $setup.handleSubmitEditarFuncionario
      }, {
        default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Nome</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.nome)} type="text" placeholder="Jo\xE3o da silva" name="nome"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.numero)} type="text" placeholder="Jo\xE3o da silva" name="numero"${_scopeId}><label for="cargo"${_scopeId}>cargo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.cargo)} type="text" placeholder="Jo\xE3o da silva" name="cargo"${_scopeId}><label for="recebe_salario"${_scopeId}>\xC9 assalariado?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.funcionarioInput.is_assalariado) ? __vite_ssr_import_7__.ssrLooseContain($setup.funcionarioInput.is_assalariado, null) : $setup.funcionarioInput.is_assalariado) ? " checked" : ""} type="checkbox" disabled placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
            if ($setup.funcionarioInput.is_assalariado) {
              _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>sal\xE1rio</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.funcionarioInput.salario)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>dia do pagamento</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
              __vite_ssr_import_7__.ssrRenderList(28, (i) => {
                _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
              });
              _push2(`<!--]--></select></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
                __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Nome"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.nome = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "nome"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.nome]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.numero = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "numero"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.numero]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "cargo"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.cargo = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva",
                  name: "cargo"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.cargo]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "\xC9 assalariado?"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.funcionarioInput.is_assalariado = $event,
                  type: "checkbox",
                  disabled: "",
                  placeholder: "Jo\xE3o da silva",
                  name: "recebe_salario"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelCheckbox, $setup.funcionarioInput.is_assalariado]
                ]),
                __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    $setup.funcionarioInput.is_assalariado ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "flex flex-col"
                    }, [
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "sal\xE1rio"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.funcionarioInput.salario = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.funcionarioInput.salario]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "dia do pagamento"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                        "onUpdate:modelValue": ($event) => $setup.funcionarioInput.data_pagamento_salario = $event,
                        placeholder: "Jo\xE3o da silva",
                        name: "data_pagamento_salario"
                      }, [
                        (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                          return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelSelect, $setup.funcionarioInput.data_pagamento_salario]
                      ])
                    ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/funcionarios.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/funcionarios.vue"]]);
;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/Calculoplantio.vue ($id_WUGMUKzzoS)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_qJrOPQ5EaW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Calculoplantio.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Calculoplantio = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_Calculoplantio, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/pages/index.vue"]]);
}


// --------------------
// Request: /pages/index2.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalFluxo.vue ($id_uhrvSGzYHX)
// - vue ($id_VkOCJnUZrn)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue/server-renderer ($id_UyJffsox60)
// - /pages/index2.vue?vue&type=style&index=0&lang.css ($id_hrbtwqewha)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_q0S2nbRMZF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalFluxo.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "index2",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const showModal = __vite_ssr_import_1__.ref();
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const saldoResponse = __vite_ssr_import_1__.ref();
    const fluxoResponse = __vite_ssr_import_1__.ref();
    const fluxoEntrada = __vite_ssr_import_1__.ref();
    const fluxoSaida = __vite_ssr_import_1__.ref();
    const saldoResult = __vite_ssr_import_1__.ref();
    const detalhe_Tipo_fluxo = __vite_ssr_import_1__.ref();
    const detalhe_Categoria = __vite_ssr_import_1__.ref();
    const detalhe_Fornecedor = __vite_ssr_import_1__.ref();
    const detalhe_Produto = __vite_ssr_import_1__.ref();
    const detalhe_Valor = __vite_ssr_import_1__.ref();
    const tipoOrdenar = __vite_ssr_import_1__.ref();
    const reverterOrdenar = __vite_ssr_import_1__.ref();
    const pagina = __vite_ssr_import_1__.reactive({
      atual: 0,
      tamanho: 5
    });
    saldoResponse.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.from("usuario").select().eq("id", 1)), __temp = await __temp, __restore(), __temp);
    fluxoResponse.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.from("fluxo").select()), __temp = await __temp, __restore(), __temp);
    fluxoEntrada.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.rpc("soma_fluxo", { t_fluxo: "entrada" })), __temp = await __temp, __restore(), __temp);
    fluxoSaida.value = ([__temp, __restore] = __vite_ssr_import_4__.withAsyncContext(() => supabase.rpc("soma_fluxo", { t_fluxo: "saida" })), __temp = await __temp, __restore(), __temp);
    saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
    const despesaInput = __vite_ssr_import_1__.reactive({
      categoria: "",
      fornecedor: "",
      nota_fiscal: "",
      produto: "",
      valor: ""
    });
    const entradaInput = __vite_ssr_import_1__.reactive({
      categoria: "",
      fornecedor: "",
      nota_fiscal: "",
      produto: "",
      valor: ""
    });
    const regexDespesa = () => {
      let length = despesaInput.valor.length;
      despesaInput.valor = despesaInput.valor.replace(/[^0-9]/g, "");
      if (length >= 14)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 13)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 11)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 10)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 9)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 7)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 6)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{3})(\d{2})$/, "$1,$2");
      if (length >= 5)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{2})(\d{2})$/, "$1,$2");
      if (length >= 3)
        return despesaInput.valor = despesaInput.valor.replace(/^(\d{1})(\d{2})$/, "$1,$2");
    };
    const regexEntrada = () => {
      let length = entradaInput.valor.length;
      entradaInput.valor = entradaInput.valor.replace(/[^0-9]/g, "");
      if (length >= 14)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 13)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 11)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
      if (length >= 10)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 9)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 7)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{3})(\d{2})$/, "$1.$2,$3");
      if (length >= 6)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{3})(\d{2})$/, "$1,$2");
      if (length >= 5)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{2})(\d{2})$/, "$1,$2");
      if (length >= 3)
        return entradaInput.valor = entradaInput.valor.replace(/^(\d{1})(\d{2})$/, "$1,$2");
    };
    const handleSubmitDespesa = async () => {
      await supabase.from("fluxo").insert({
        tipo_fluxo: "saida",
        categoria: despesaInput.categoria,
        fornecedor: despesaInput.fornecedor,
        produto: despesaInput.produto,
        valor: parseFloat(despesaInput.valor.replace(".", "").replace(",", ".")),
        user_id: user.value.id
      });
      saldoResponse.value = await supabase.from("usuario").select().eq("id", 1);
      fluxoResponse.value = await supabase.from("fluxo").select();
      fluxoEntrada.value = await supabase.rpc("soma_fluxo", { t_fluxo: "entrada" });
      fluxoSaida.value = await supabase.rpc("soma_fluxo", { t_fluxo: "saida" });
      saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
      despesaInput.categoria = "";
      despesaInput.fornecedor = "";
      despesaInput.nota_fiscal = "";
      despesaInput.produto = "";
      despesaInput.valor = "";
    };
    const handleSubmitEntrada = async () => {
      await supabase.from("fluxo").insert({
        tipo_fluxo: "entrada",
        categoria: entradaInput.categoria,
        fornecedor: entradaInput.fornecedor,
        produto: entradaInput.produto,
        valor: parseFloat(entradaInput.valor.replace(".", "").replace(",", ".")),
        user_id: user.value.id
      });
      saldoResponse.value = await supabase.from("usuario").select().eq("id", 1);
      fluxoResponse.value = await supabase.from("fluxo").select();
      fluxoEntrada.value = await supabase.rpc("soma_fluxo", { t_fluxo: "entrada" });
      fluxoSaida.value = await supabase.rpc("soma_fluxo", { t_fluxo: "saida" });
      saldoResult.value = parseFloat(fluxoEntrada.value) - parseFloat(fluxoSaida.value);
      entradaInput.categoria = "";
      entradaInput.fornecedor = "";
      entradaInput.nota_fiscal = "";
      entradaInput.produto = "";
      entradaInput.valor = "";
    };
    const handleDetalheFluxo = (id, tipo_fluxo, categoria, fornecedor, produto, valor) => {
      detalhe_Tipo_fluxo.value = tipo_fluxo;
      detalhe_Categoria.value = categoria;
      detalhe_Fornecedor.value = fornecedor;
      detalhe_Produto.value = produto;
      detalhe_Valor.value = valor;
      showModal.value = true;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "categoria") {
        tipoOrdenar.value = porCategoria;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCategoriaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "fornecedor") {
        tipoOrdenar.value = porFornecedor;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porFornecedorReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "produto") {
        tipoOrdenar.value = porProduto;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porProdutoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "valor") {
        tipoOrdenar.value = porValor;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porValorReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porCategoria(a, b) {
      if (a.categoria > b.categoria) {
        return 1;
      } else if (b.categoria > a.categoria) {
        return -1;
      } else {
        return 0;
      }
    }
    function porFornecedor(a, b) {
      if (a.fornecedor > b.fornecedor) {
        return 1;
      } else if (b.fornecedor > a.fornecedor) {
        return -1;
      } else {
        return 0;
      }
    }
    function porProduto(a, b) {
      if (a.produto > b.produto) {
        return 1;
      } else if (b.produto > a.produto) {
        return -1;
      } else {
        return 0;
      }
    }
    function porValor(a, b) {
      return parseFloat(a.valor) - parseFloat(b.valor);
    }
    function porCategoriaReverse(a, b) {
      if (a.categoria > b.categoria) {
        return -1;
      } else if (b.categoria > a.categoria) {
        return 1;
      } else {
        return 0;
      }
    }
    function porFornecedorReverse(a, b) {
      if (a.fornecedor > b.fornecedor) {
        return -1;
      } else if (b.fornecedor > a.fornecedor) {
        return 1;
      } else {
        return 0;
      }
    }
    function porProdutoReverse(a, b) {
      if (a.produto > b.produto) {
        return -1;
      } else if (b.produto > a.produto) {
        return 1;
      } else {
        return 0;
      }
    }
    function porValorReverse(a, b) {
      return parseFloat(b.valor) - parseFloat(a.valor);
    }
    const __returned__ = { showModal, supabase, user, saldoResponse, fluxoResponse, fluxoEntrada, fluxoSaida, saldoResult, detalhe_Tipo_fluxo, detalhe_Categoria, detalhe_Fornecedor, detalhe_Produto, detalhe_Valor, tipoOrdenar, reverterOrdenar, pagina, despesaInput, entradaInput, regexDespesa, regexEntrada, handleSubmitDespesa, handleSubmitEntrada, handleDetalheFluxo, handlePagina, handleOrdenar, porCategoria, porFornecedor, porProduto, porValor, porCategoriaReverse, porFornecedorReverse, porProdutoReverse, porValorReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalFluxo = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(_attrs)}><div class="flex flex-row justify-evenly"><div><h3>Fluxo de Entrada</h3><h1>${__vite_ssr_import_6__.ssrInterpolate($setup.fluxoEntrada.data.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div><div><h3>Fluxo de saida</h3><h1>${__vite_ssr_import_6__.ssrInterpolate($setup.fluxoSaida.data.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div><div><h3>Saldo</h3><h1>${__vite_ssr_import_6__.ssrInterpolate((parseFloat($setup.fluxoEntrada.data) - parseFloat($setup.fluxoSaida.data)).toLocaleString("pt-br", { style: "currency", currency: "BRL" }))}</h1></div></div><!-- <lineChart :chartData="testData" /> --><div class="flex flex-row"><div class="flex flex-row"><form class="flex flex-col"><h1>Adicionar despezas</h1><label for="categoria">Categoria</label><select name="categoria" id="cars" form="carform"><option value="insumo">Insumo</option><option value="combustivel">Combust\xEDvel</option><option value="manutencao">Manuten\xE7\xE3o</option><option value="Financiamento">Financiamento</option></select><label for="fornecedor">Fornecedor</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.fornecedor)} name="fornecedor" type="text"><label for="nota fiscal">Nota Fiscal</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.nota_fiscal)} name="nota fiscal" type="number"><label for="produto">Produto</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.produto)} name="produto" type="text"><label for="valor">Valor</label><input placeholder="R$ 1.000,00"${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.despesaInput.valor)} name="valor" type="text"><button type="button">Criar</button></form></div><div class="flex flex-row"><form class="flex flex-col"><h1>Adicionar Entradas</h1><label for="categoria">Categoria</label><select name="categoria" id="cars" form="carform"><option value="insumo">Insumo</option><option value="combustivel">Combust\xEDvel</option><option value="manutencao">Manuten\xE7\xE3o</option><option value="Financiamento">Financiamento</option></select><label for="fornecedor">Fornecedor</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.fornecedor)} name="fornecedor" type="text"><label for="nota fiscal">Nota Fiscal</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.nota_fiscal)} name="nota fiscal" type="number"><label for="produto">Produto</label><input${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.produto)} name="produto" type="text"><label for="valor">Valor</label><input placeholder="R$ 1.000,00"${__vite_ssr_import_6__.ssrRenderAttr("value", $setup.entradaInput.valor)} name="valor" type="text"><button type="button">Criar</button></form></div></div><div><select><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList(Math.ceil($setup.fluxoResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_6__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_6__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_6__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_6__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_6__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.fluxoResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>A\xE7\xE3o</th><th>Categoria</th><th>Fornecedor</th><th>Produto</th><th>Valor</th><th>Detalhes</th></thead><tbody><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($setup.fluxoResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (fluxo) => {
    _push(`<tr><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.tipo_fluxo)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.categoria)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.fornecedor)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.produto)}</td><td>${__vite_ssr_import_6__.ssrInterpolate(fluxo.valor)}</td><!-- <td>{{fluxo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> manage_search </span></td></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
  if ($setup.showModal) {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ModalFluxo, {
      onClose: ($event) => $setup.showModal = false
    }, {
      default: __vite_ssr_import_5__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Tipo_fluxo)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Categoria)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Fornecedor)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Produto)} ${__vite_ssr_import_6__.ssrInterpolate($setup.detalhe_Valor)}`);
        } else {
          return [
            __vite_ssr_import_5__.createTextVNode(__vite_ssr_import_5__.toDisplayString($setup.detalhe_Tipo_fluxo) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Categoria) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Fornecedor) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Produto) + " " + __vite_ssr_import_5__.toDisplayString($setup.detalhe_Valor), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/index2.vue?vue&type=style&index=0&lang.css");

const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/index2.vue"]]);
;
}


// --------------------
// Request: /pages/index2.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/index2.vue ($id_SOFbo5iYqU)
// Dependencies: 

// --------------------
const $id_S4sAc354kM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.pop-enter-from {\r\n    scale: 30%;\r\n    opacity: 0;\n}\n.pop-enter-to {\r\n    scale: 100%;\n}\n.pop-enter-active {\r\n    transition: all .2s cubic-bezier(0,1.15,.47,1.15);\n}\n.pop-leave-from {\r\n    scale: 100%;\n}\n.pop-leave-to {\r\n    scale: 30%;\r\n    opacity: 0;\n}\n.pop-leave-active {\r\n    transition: all .2s cubic-bezier(0,1.15,.47,1.15);\n}\r\n";
}


// --------------------
// Request: /pages/login.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/Auth.vue ($id_bD8to5qKKa)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_zw9cVPKHCf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Auth.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "login",
  setup(__props, { expose }) {
    expose();
    const { supabase } = __vite_ssr_import_1__.default();
    const { user } = __vite_ssr_import_2__.default();
    const notesResponse = __vite_ssr_import_3__.ref();
    const __returned__ = { supabase, user, notesResponse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Auth = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "" }, _attrs))}>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_Auth, null, null, _parent));
  _push(`</div>`);
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/login.vue"]]);
;
}


// --------------------
// Request: /pages/maquinas.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs ($id_hgTMwVPhJw)
// Dependencies: 
// - /components/modalNovoMaquina.vue ($id_oPoWcnQYB4)
// - /components/modalEditarMaquina.vue ($id_qdsBO9tp1o)
// - /composables/useSupabase.ts ($id_yN6LjTobpZ)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_XOf7fSBOfu = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/modalNovoMaquina.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/modalEditarMaquina.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/composables/useSupabase.ts");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/composables/useAuth.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "maquinas",
  async setup(__props, { expose }) {
    expose();
    let __temp, __restore;
    const { supabase } = __vite_ssr_import_2__.default();
    const { user } = __vite_ssr_import_3__.default();
    const maquinasResponse = __vite_ssr_import_4__.ref();
    maquinasResponse.value = ([__temp, __restore] = __vite_ssr_import_5__.withAsyncContext(() => supabase.from("maquinas").select()), __temp = await __temp, __restore(), __temp);
    const showModalAdicionar = __vite_ssr_import_4__.ref();
    const showModalEditar = __vite_ssr_import_4__.ref();
    const tipoOrdenar = __vite_ssr_import_4__.ref();
    const reverterOrdenar = __vite_ssr_import_4__.ref();
    const pagina = __vite_ssr_import_4__.reactive({
      atual: 0,
      tamanho: 5
    });
    const maquinaInput = __vite_ssr_import_4__.reactive({
      id: "",
      categoria: "",
      modelo: "",
      ano: "",
      is_pago: false,
      valor_parcelas: "",
      num_parcelas: "",
      data_pagamento_parcelas: ""
    });
    const handleNovoMaquina = () => {
      showModalAdicionar.value = true;
      maquinaInput.categoria = "";
      maquinaInput.modelo = "";
      maquinaInput.ano = "";
      maquinaInput.is_pago = false;
      maquinaInput.valor_parcelas = "";
      maquinaInput.num_parcelas = "";
      maquinaInput.data_pagamento_parcelas = "";
    };
    const handleDeleteMaquina = async (maquinaId) => {
      await supabase.from("maquinas").delete().eq("id", maquinaId);
      maquinasResponse.value = await supabase.from("maquinas").select();
    };
    const handleSubmitNovoMaquina = async () => {
      await supabase.from("maquinas").insert({
        categoria: maquinaInput.categoria,
        modelo: maquinaInput.modelo,
        ano: maquinaInput.ano,
        is_pago: maquinaInput.is_pago,
        valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
        num_parcelas: parseInt(maquinaInput.num_parcelas),
        data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)
      });
      maquinasResponse.value = await supabase.from("maquinas").select();
      maquinaInput.categoria = "", maquinaInput.ano = "", maquinaInput.modelo = "", maquinaInput.is_pago = false, maquinaInput.valor_parcelas = "", maquinaInput.num_parcelas = "";
      showModalAdicionar.value = false;
    };
    const handleSubmitEditarMaquina = async () => {
      if (!maquinaInput.is_pago) {
        await supabase.from("maquinas").update({
          categoria: maquinaInput.categoria,
          modelo: maquinaInput.modelo,
          ano: maquinaInput.ano,
          is_pago: maquinaInput.is_pago,
          valor_parcelas: parseFloat(maquinaInput.valor_parcelas.replace(".", "").replace(",", ".")),
          num_parcelas: parseInt(maquinaInput.num_parcelas),
          data_parcelas: parseInt(maquinaInput.data_pagamento_parcelas)
        }).eq("id", maquinaInput.id);
      } else {
        await supabase.from("maquinas").update({
          categoria: maquinaInput.categoria,
          modelo: maquinaInput.modelo,
          ano: maquinaInput.ano,
          is_pago: maquinaInput.is_pago,
          valor_parcelas: 0,
          num_parcelas: 0,
          data_parcelas: 0
        }).eq("id", maquinaInput.id);
      }
      maquinasResponse.value = await supabase.from("maquinas").select();
      maquinaInput.id = "", maquinaInput.categoria = "", maquinaInput.ano = "", maquinaInput.modelo = "", maquinaInput.is_pago = false, maquinaInput.valor_parcelas = "", maquinaInput.num_parcelas = "";
      showModalEditar.value = false;
    };
    const handleModalEditar = (categoria, modelo, ano, is_pago, valor_parcelas, num_parcelas, data_pagamento_parcelas, id) => {
      showModalEditar.value = true;
      maquinaInput.categoria = categoria;
      maquinaInput.modelo = modelo;
      maquinaInput.ano = ano;
      maquinaInput.is_pago = is_pago;
      maquinaInput.valor_parcelas = valor_parcelas;
      maquinaInput.num_parcelas = num_parcelas;
      maquinaInput.data_pagamento_parcelas = data_pagamento_parcelas;
      maquinaInput.id = id;
    };
    const handlePagina = (i) => {
      if (i === "proxima") {
        pagina.atual++;
      }
      if (i === "anterior") {
        pagina.atual--;
      }
    };
    const handleOrdenar = (i) => {
      if (i === "nome") {
        tipoOrdenar.value = porNome;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porNomeReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "cargo") {
        tipoOrdenar.value = porCargo;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porCargoReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "salario") {
        tipoOrdenar.value = porSalario;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porSalarioReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "dia") {
        tipoOrdenar.value = porDia;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDiaReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
      if (i === "data") {
        tipoOrdenar.value = porData;
        if (reverterOrdenar.value === i) {
          tipoOrdenar.value = porDataReverse;
          reverterOrdenar.value = "";
          return;
        }
        reverterOrdenar.value = i;
      }
    };
    function porNome(a, b) {
      if (a.nome > b.nome) {
        return 1;
      } else if (b.nome > a.nome) {
        return -1;
      } else {
        return 0;
      }
    }
    function porCargo(a, b) {
      if (a.cargo > b.cargo) {
        return 1;
      } else if (b.cargo > a.cargo) {
        return -1;
      } else {
        return 0;
      }
    }
    function porData(a, b) {
      if (a.data > b.data) {
        return 1;
      } else if (b.data > a.data) {
        return -1;
      } else {
        return 0;
      }
    }
    function porSalario(a, b) {
      return parseFloat(a.salario) - parseFloat(b.salario);
    }
    function porDia(a, b) {
      return parseFloat(a.data_pagamento_salario) - parseFloat(b.data_pagamento_salario);
    }
    function porNomeReverse(a, b) {
      if (a.nome > b.nome) {
        return -1;
      } else if (b.nome > a.nome) {
        return 1;
      } else {
        return 0;
      }
    }
    function porCargoReverse(a, b) {
      if (a.cargo > b.cargo) {
        return -1;
      } else if (b.cargo > a.cargo) {
        return 1;
      } else {
        return 0;
      }
    }
    function porDataReverse(a, b) {
      if (a.data_pagamento_salario > b.data_pagamento_salario) {
        return -1;
      } else if (b.data_pagamento_salario > a.data_pagamento_salario) {
        return 1;
      } else {
        return 0;
      }
    }
    function porSalarioReverse(a, b) {
      return parseFloat(b.salario) - parseFloat(a.salario);
    }
    function porDiaReverse(a, b) {
      return parseFloat(b.data_inicio) - parseFloat(a.data_inicio);
    }
    const __returned__ = { supabase, user, maquinasResponse, showModalAdicionar, showModalEditar, tipoOrdenar, reverterOrdenar, pagina, maquinaInput, handleNovoMaquina, handleDeleteMaquina, handleSubmitNovoMaquina, handleSubmitEditarMaquina, handleModalEditar, handlePagina, handleOrdenar, porNome, porCargo, porData, porSalario, porDia, porNomeReverse, porCargoReverse, porDataReverse, porSalarioReverse, porDiaReverse };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ModalNovoMaquina = __vite_ssr_import_0__.default;
  const _component_ModalEditarMaquina = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(_attrs)}>${__vite_ssr_import_7__.ssrInterpolate($setup.maquinaInput.categoria)} <button> novo maquina </button><!-- Modal Novo Funcion\xE1rio -->`);
  if ($setup.showModalAdicionar) {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalNovoMaquina, {
      onClose: ($event) => $setup.showModalAdicionar = false,
      onAdicionarMaquina: $setup.handleSubmitNovoMaquina
    }, {
      default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Categoria do m\xE1quina</label><select type="text" placeholder="Jo\xE3o da silva"${_scopeId}><option value="tratores"${_scopeId}>Tratores</option><option value="ceifadeira/colheitadeira"${_scopeId}>Ceifadeira ou Colheitadeira</option><option value="atv/utv"${_scopeId}>ATVs ou UTVs</option><option value="acessorios/trator"${_scopeId}>Assess\xF3rios para trator</option><option value="arados"${_scopeId}>Arados</option><option value="distribuidores_de_fertilizante"${_scopeId}>Distribuidores De Fertilizante</option><option value="semeadores"${_scopeId}>Semeadores</option><option value="enfardadeiras"${_scopeId}>Enfardadeiras</option><option value="vagoes/reboque"${_scopeId}>Vag\xF5es ou reboque</option><option value="outro"${_scopeId}>Outro</option></select><label for="cargo"${_scopeId}>Modelo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.modelo)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.ano)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="recebe_salario"${_scopeId}>Est\xE1 Pago?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.maquinaInput.is_pago) ? __vite_ssr_import_7__.ssrLooseContain($setup.maquinaInput.is_pago, null) : $setup.maquinaInput.is_pago) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
          if (!$setup.maquinaInput.is_pago) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>Parcelas Restantes</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.num_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="salario"${_scopeId}>Valor da parcela</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.valor_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>Dia de pagamento parcela</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
            __vite_ssr_import_7__.ssrRenderList(28, (i) => {
              _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          return [
            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
              __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Categoria do m\xE1quina"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.categoria = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, [
                __vite_ssr_import_6__.createVNode("option", { value: "tratores" }, "Tratores"),
                __vite_ssr_import_6__.createVNode("option", { value: "ceifadeira/colheitadeira" }, "Ceifadeira ou Colheitadeira"),
                __vite_ssr_import_6__.createVNode("option", { value: "atv/utv" }, "ATVs ou UTVs"),
                __vite_ssr_import_6__.createVNode("option", { value: "acessorios/trator" }, "Assess\xF3rios para trator"),
                __vite_ssr_import_6__.createVNode("option", { value: "arados" }, "Arados"),
                __vite_ssr_import_6__.createVNode("option", { value: "distribuidores_de_fertilizante" }, "Distribuidores De Fertilizante"),
                __vite_ssr_import_6__.createVNode("option", { value: "semeadores" }, "Semeadores"),
                __vite_ssr_import_6__.createVNode("option", { value: "enfardadeiras" }, "Enfardadeiras"),
                __vite_ssr_import_6__.createVNode("option", { value: "vagoes/reboque" }, "Vag\xF5es ou reboque"),
                __vite_ssr_import_6__.createVNode("option", { value: "outro" }, "Outro")
              ], 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.categoria]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "Modelo"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.modelo = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.modelo]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.ano = $event,
                type: "text",
                placeholder: "Jo\xE3o da silva"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.ano]
              ]),
              __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "Est\xE1 Pago?"),
              __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                "onUpdate:modelValue": ($event) => $setup.maquinaInput.is_pago = $event,
                type: "checkbox",
                placeholder: "Jo\xE3o da silva",
                name: "recebe_salario"
              }, null, 8, ["onUpdate:modelValue"]), [
                [__vite_ssr_import_6__.vModelCheckbox, $setup.maquinaInput.is_pago]
              ]),
              __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                default: __vite_ssr_import_6__.withCtx(() => [
                  !$setup.maquinaInput.is_pago ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                    key: 0,
                    class: "flex flex-col"
                  }, [
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Parcelas Restantes"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.num_parcelas = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.num_parcelas]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Valor da parcela"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.valor_parcelas = $event,
                      type: "text",
                      placeholder: "Jo\xE3o da silva",
                      name: "salario"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.valor_parcelas]
                    ]),
                    __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "Dia de pagamento parcela"),
                    __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                      "onUpdate:modelValue": ($event) => $setup.maquinaInput.data_pagamento_parcelas = $event,
                      placeholder: "Jo\xE3o da silva",
                      name: "data_pagamento_salario"
                    }, [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                        return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                      }), 64))
                    ], 8, ["onUpdate:modelValue"]), [
                      [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.data_pagamento_parcelas]
                    ])
                  ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                ]),
                _: 1
              })
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><select><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList(Math.ceil($setup.maquinasResponse.data.length / $setup.pagina.tamanho), (i) => {
    _push(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i - 1)}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
  });
  _push(`<!--]--></select><select><option${__vite_ssr_import_7__.ssrRenderAttr("value", 5)}> 5 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 10)}> 10 </option><option${__vite_ssr_import_7__.ssrRenderAttr("value", 250)}> 25 </option></select>`);
  if ($setup.pagina.atual < Math.ceil($setup.maquinasResponse.data.length / $setup.pagina.tamanho) - 1) {
    _push(`<button> prox </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br>`);
  if ($setup.pagina.atual > 0) {
    _push(`<button> ant </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><table><thead><th>Categoria</th><th>Modelo</th><th>Ano</th><th>Pago</th><th>valor_parcelas</th><th>num_parcelas</th><th>data_pagamento_parcelas</th><th>Detalhes</th><th>Deletar</th></thead><tbody><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList($setup.maquinasResponse.data.slice($setup.pagina.atual * $setup.pagina.tamanho, $setup.pagina.tamanho * $setup.pagina.atual + $setup.pagina.tamanho).sort($setup.tipoOrdenar), (maquina) => {
    _push(`<tr><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.categoria)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.modelo)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.ano)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.is_pago)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.valor_parcelas)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.num_parcelas)}</td><td>${__vite_ssr_import_7__.ssrInterpolate(maquina.data_parcelas)}</td><!-- <td>{{fluxo.salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td> --><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> edit </span></td><td><span class="cursor-pointer material-icons block text-center hover:text-xl"> delete </span></td>`);
    if ($setup.showModalEditar) {
      _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ModalEditarMaquina, {
        onClose: ($event) => $setup.showModalEditar = false,
        onEditarMaquina: $setup.handleSubmitEditarMaquina
      }, {
        default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}><label for="nome"${_scopeId}>Categoria do m\xE1quina</label><select type="text" placeholder="Jo\xE3o da silva"${_scopeId}><option value="tratores"${_scopeId}>Tratores</option><option value="ceifadeira/colheitadeira"${_scopeId}>Ceifadeira ou Colheitadeira</option><option value="atv/utv"${_scopeId}>ATVs ou UTVs</option><option value="acessorios/trator"${_scopeId}>Assess\xF3rios para trator</option><option value="arados"${_scopeId}>Arados</option><option value="distribuidores_de_fertilizante"${_scopeId}>Distribuidores De Fertilizante </option><option value="semeadores"${_scopeId}>Semeadores</option><option value="enfardadeiras"${_scopeId}>Enfardadeiras</option><option value="vagoes/reboque"${_scopeId}>Vag\xF5es ou reboque</option><option value="outro"${_scopeId}>Outro</option></select><label for="cargo"${_scopeId}>Modelo</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.modelo)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="numero"${_scopeId}>numero</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.ano)} type="text" placeholder="Jo\xE3o da silva"${_scopeId}><label for="recebe_salario"${_scopeId}>Est\xE1 Pago?</label><input${__vite_ssr_import_7__.ssrIncludeBooleanAttr(Array.isArray($setup.maquinaInput.is_pago) ? __vite_ssr_import_7__.ssrLooseContain($setup.maquinaInput.is_pago, null) : $setup.maquinaInput.is_pago) ? " checked" : ""} type="checkbox" placeholder="Jo\xE3o da silva" name="recebe_salario"${_scopeId}>`);
            if (!$setup.maquinaInput.is_pago) {
              _push2(`<div class="flex flex-col"${_scopeId}><label for="salario"${_scopeId}>Parcelas Restantes</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.num_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="salario"${_scopeId}>Valor da parcela</label><input${__vite_ssr_import_7__.ssrRenderAttr("value", $setup.maquinaInput.valor_parcelas)} type="text" placeholder="Jo\xE3o da silva" name="salario"${_scopeId}><label for="data_pagamento_salario"${_scopeId}>Dia de pagamento parcela</label><select placeholder="Jo\xE3o da silva" name="data_pagamento_salario"${_scopeId}><!--[-->`);
              __vite_ssr_import_7__.ssrRenderList(28, (i) => {
                _push2(`<option${__vite_ssr_import_7__.ssrRenderAttr("value", i)}${_scopeId}>${__vite_ssr_import_7__.ssrInterpolate(i)}</option>`);
              });
              _push2(`<!--]--></select></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col" }, [
                __vite_ssr_import_6__.createVNode("label", { for: "nome" }, "Categoria do m\xE1quina"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.categoria = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, [
                  __vite_ssr_import_6__.createVNode("option", { value: "tratores" }, "Tratores"),
                  __vite_ssr_import_6__.createVNode("option", { value: "ceifadeira/colheitadeira" }, "Ceifadeira ou Colheitadeira"),
                  __vite_ssr_import_6__.createVNode("option", { value: "atv/utv" }, "ATVs ou UTVs"),
                  __vite_ssr_import_6__.createVNode("option", { value: "acessorios/trator" }, "Assess\xF3rios para trator"),
                  __vite_ssr_import_6__.createVNode("option", { value: "arados" }, "Arados"),
                  __vite_ssr_import_6__.createVNode("option", { value: "distribuidores_de_fertilizante" }, "Distribuidores De Fertilizante "),
                  __vite_ssr_import_6__.createVNode("option", { value: "semeadores" }, "Semeadores"),
                  __vite_ssr_import_6__.createVNode("option", { value: "enfardadeiras" }, "Enfardadeiras"),
                  __vite_ssr_import_6__.createVNode("option", { value: "vagoes/reboque" }, "Vag\xF5es ou reboque"),
                  __vite_ssr_import_6__.createVNode("option", { value: "outro" }, "Outro")
                ], 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.categoria]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "cargo" }, "Modelo"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.modelo = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.modelo]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "numero" }, "numero"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.ano = $event,
                  type: "text",
                  placeholder: "Jo\xE3o da silva"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.ano]
                ]),
                __vite_ssr_import_6__.createVNode("label", { for: "recebe_salario" }, "Est\xE1 Pago?"),
                __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                  "onUpdate:modelValue": ($event) => $setup.maquinaInput.is_pago = $event,
                  type: "checkbox",
                  placeholder: "Jo\xE3o da silva",
                  name: "recebe_salario"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [__vite_ssr_import_6__.vModelCheckbox, $setup.maquinaInput.is_pago]
                ]),
                __vite_ssr_import_6__.createVNode(__vite_ssr_import_6__.Transition, { name: "pop" }, {
                  default: __vite_ssr_import_6__.withCtx(() => [
                    !$setup.maquinaInput.is_pago ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "flex flex-col"
                    }, [
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Parcelas Restantes"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.num_parcelas = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.num_parcelas]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "salario" }, "Valor da parcela"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("input", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.valor_parcelas = $event,
                        type: "text",
                        placeholder: "Jo\xE3o da silva",
                        name: "salario"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelText, $setup.maquinaInput.valor_parcelas]
                      ]),
                      __vite_ssr_import_6__.createVNode("label", { for: "data_pagamento_salario" }, "Dia de pagamento parcela"),
                      __vite_ssr_import_6__.withDirectives(__vite_ssr_import_6__.createVNode("select", {
                        "onUpdate:modelValue": ($event) => $setup.maquinaInput.data_pagamento_parcelas = $event,
                        placeholder: "Jo\xE3o da silva",
                        name: "data_pagamento_salario"
                      }, [
                        (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList(28, (i) => {
                          return __vite_ssr_import_6__.createVNode("option", { value: i }, __vite_ssr_import_6__.toDisplayString(i), 9, ["value"]);
                        }), 64))
                      ], 8, ["onUpdate:modelValue"]), [
                        [__vite_ssr_import_6__.vModelSelect, $setup.maquinaInput.data_pagamento_parcelas]
                      ])
                    ])) : __vite_ssr_import_6__.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maquinas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "C:/Users/Artur/Documents/nuxt/template/pages/maquinas.vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 

// --------------------
const $id_nmhVZR4Lu2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_oJCXe6nyyh)
// Dependencies: 
// - /middleware/auth.ts ($id_e5KqhuTNzv)
// --------------------
const $id_fDirMoZFok = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {
  auth: () => __vite_ssr_dynamic_import__("/middleware/auth.ts")
}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /middleware/auth.ts
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/middleware.mjs ($id_cmOGM8ihkZ)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /composables/useAuth.ts ($id_ugW7Jl6Lz5)
// --------------------
const $id_eYTDozfLHd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/composables/useAuth.ts");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = __vite_ssr_import_1__.default();
  if (!isLoggedIn()) {
    return __vite_ssr_import_0__.navigateTo("/");
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/root-component.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_ZnmS7tMcFt = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/root-component.mjs ($id_dRtn1YxR56)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/error-component.mjs ($id_Sc5CL4MU5w)
// --------------------
const $id_DhqeeVNPcF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const ErrorComponent = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/error-component.mjs"))

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_1__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_1__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.showError, [err])
  }
})

const __returned__ = { ErrorComponent, nuxtApp, onResolve, results, error, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, provide: __vite_ssr_import_0__.provide, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, isNuxtError: __vite_ssr_import_1__.isNuxtError, showError: __vite_ssr_import_1__.showError, useError: __vite_ssr_import_1__.useError, useRoute: __vite_ssr_import_1__.useRoute, useNuxtApp: __vite_ssr_import_1__.useNuxtApp }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_2__.resolveComponent("App")

  __vite_ssr_import_3__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_3__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_PzPoMRVYRi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/error-component.mjs ($id_Sc5CL4MU5w)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_oJmg2cbTZL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"))
const _Error = true
  ? __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"))
  : __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_6yHtfHy3cx)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_wtJQN9npeb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_eo7mRknLGO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_tzUUgT5kx6)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_jdey1ZRnCg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/app-component.mjs
// Parents: 
// - C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry ($id_bv3QzDah4l)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// --------------------
const $id_DwIm27mpiT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/app-component.mjs ($id_2fbj2oa9Hn)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Zf8VYe9D5b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_bGEBDyzLuq)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_acUmhqj8VN)
// - /node_modules/nuxt/dist/app/index.mjs ($id_NpJ0d20vMd)
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs ($id_N8uK2ejzkJ)
// --------------------
const $id_yrU9drFKIO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(
        __vite_ssr_import_0__.Transition,
        hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition),
        __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)
      ).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_OQA4gz7rLc)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /layouts/default.vue ($id_dononVQSck)
// --------------------
const $id_VXatdSV6Wo = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/layouts/default.vue"))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs ($id_N8uK2ejzkJ)
// Dependencies: 
// - vue/server-renderer ($id_UyJffsox60)
// - vue ($id_VkOCJnUZrn)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_2jhiaBlcl9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue/server-renderer");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_0__.ssrRenderAttrs(_attrs)}>`)
  __vite_ssr_import_0__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Artur/Documents/nuxt/template/layouts/default.vue"]]);
}


const __modules__ = {
  "C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry": $id_pQ3nsHJMAU,
  vue: $id_G33erDMZ5a,
  "@vue/runtime-dom": $id_9sriful2d8,
  ohmyfetch: $id_kLE5W6MKaY,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/paths.mjs": $id_Mj9f4rSF49,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/index.mjs": $id_fgrt3UeQEL,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_lfCjBrgcte,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_YvAaozTraC,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_XTtQ30wmO3,
  "vue-router": $id_7dT9jx0uwT,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_BHNdDlA1Pk,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_6bgT8vIFHQ,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_oMJXouc9nw,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_kP3GBeDzaR,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_0OCs51rfoK,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_zYOrYjkwm9,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_XUZhFBVStH,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_BjnOCDcfIZ,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_72OrpZA28S,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_HRAmKRepZ0,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_aAoWaPsGgE,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_DBzckdbLOm,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_TG3cDPMBp5,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/css.mjs": $id_5jdRJFxKk9,
  "/assets/css/tailwind.css": $id_y847I0Wk29,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/plugins/server.mjs": $id_DpEYD16RxI,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_1SAEi7QN5N,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/components.plugin.mjs": $id_mYd3bDVqQx,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_wRsEVKfW1P,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_19kbcSkZ7c,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_5bJGHAvzpI,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_PE2LM6mDyc,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/meta.config.mjs": $id_oQ7jbBsd37,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_gp8vVf86Au,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_L9I1eoE7dW,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_ZR0LUqwyer,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_NgApSiB2xA,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/routes.mjs": $id_LKm8AR0uRD,
  "/pages/calculo.vue?macro=true": $id_37iDRbRaxx,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/pages/estoque.vue?macro=true": $id_x8e8QyLdX9,
  "/pages/funcionarios.vue?macro=true": $id_aQC2y1HAL8,
  "/components/modalNovoFuncionario.vue": $id_SoJ1RdmDLN,
  "/components/modalEditarFuncionario.vue": $id_N886yx2xwZ,
  "/composables/useSupabase.ts": $id_ldWZ8HPmjw,
  "@supabase/supabase-js": $id_9XNII2VSge,
  "/composables/useAuth.ts": $id_OqK7ZbuKel,
  "/pages/index.vue?macro=true": $id_a81thUgcqy,
  "/components/Calculoplantio.vue": $id_FmKM2RLRZP,
  "/components/Calculoplantio.vue?vue&type=style&index=0&scoped=94267614&lang.css": $id_VMcb5MMrhc,
  "/pages/index2.vue?macro=true": $id_vlGiJWWsSf,
  "/components/modalFluxo.vue": $id_Oslbb4uoZw,
  "/pages/login.vue?macro=true": $id_24okfJ3TNH,
  "/components/Auth.vue": $id_srwFyTRhDe,
  "/components/Auth.vue?vue&type=style&index=0&scoped=ee860cc1&lang.css": $id_hXyNCI6Ozm,
  "/pages/maquinas.vue?macro=true": $id_GPxxkHGDrR,
  "/components/modalNovoMaquina.vue": $id_KhEOW9Unsa,
  "/components/modalEditarMaquina.vue": $id_U9co9LMSVr,
  "/pages/calculo.vue": $id_iQGoq5svl9,
  "/pages/estoque.vue": $id_ga3OsdUAiX,
  "/pages/funcionarios.vue": $id_6EkVlFDrL2,
  "/pages/index.vue": $id_qJrOPQ5EaW,
  "/pages/index2.vue": $id_q0S2nbRMZF,
  "/pages/index2.vue?vue&type=style&index=0&lang.css": $id_S4sAc354kM,
  "/pages/login.vue": $id_zw9cVPKHCf,
  "/pages/maquinas.vue": $id_XOf7fSBOfu,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/router.options.mjs": $id_nmhVZR4Lu2,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/middleware.mjs": $id_fDirMoZFok,
  "/middleware/auth.ts": $id_eYTDozfLHd,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/root-component.mjs": $id_ZnmS7tMcFt,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_DhqeeVNPcF,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/error-component.mjs": $id_PzPoMRVYRi,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_oJmg2cbTZL,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_wtJQN9npeb,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_eo7mRknLGO,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_jdey1ZRnCg,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/app-component.mjs": $id_DwIm27mpiT,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_Zf8VYe9D5b,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_yrU9drFKIO,
  "/@id/virtual:nuxt:C:/Users/Artur/Documents/nuxt/template/.nuxt/layouts.mjs": $id_VXatdSV6Wo,
  "/layouts/default.vue": $id_2jhiaBlcl9
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/app/entry")