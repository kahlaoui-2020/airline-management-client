import type { App } from 'vue'
import vuetify from './vuetify'
import router from './router'
import { createPinia } from 'pinia'

export function registerPlugins(app: App) {
  // Register your plugins here
  // Example: app.use(SomePlugin)
  app.use(vuetify)
  app.use(router)
  app.use(createPinia())
}
