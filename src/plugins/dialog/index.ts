export { default as DialogHost } from './DialogHost.vue'
export { useDialog } from './useDialog.ts'
export {
  openDialog,
  closeDialog,
  closeAll,
  hasOpenDialogs,
  DIALOG_DATA,
  DIALOG_REF,
} from './dialogService.ts'
export type { DialogConfig, DialogRef, DialogInstance } from './types.ts'
export { dialogPlugin } from './dialogPlugin.ts'
