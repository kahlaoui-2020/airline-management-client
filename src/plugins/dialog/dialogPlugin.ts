import type { App } from 'vue'
import { useDialog } from './useDialog'

export const dialogPlugin = {
  install(app: App) {
    app.config.globalProperties.$dialog = useDialog()
  },
}
declare module 'vue' {
  interface ComponentCustomProperties {
    $dialog: ReturnType<typeof useDialog>
  }
}
