import type { Component } from 'vue'

export interface DialogConfig<D = unknown> {
  data?: D
  width?: string
  maxWidth?: string
  height?: string
  disableClose?: boolean
  panelClass?: string | string[]
  backdropClass?: string
  vuetifyProps?: Record<string, unknown>
}
export interface DialogRef<R = unknown> {
  id: string
  close: (result?: R | unknown) => void
  afterClose: () => Promise<R | undefined>
}
export interface DialogInstance {
  id: string
  component: Component
  config: DialogConfig
  dialogRef: DialogRef
}
