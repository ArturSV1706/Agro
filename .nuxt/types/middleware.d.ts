import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "setup" | "setup-limit" | "subscription"
declare module "C:/Users/Artur/Documents/nuxt/template/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}