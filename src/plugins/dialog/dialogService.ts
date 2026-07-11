import { markRaw, reactive, type Component } from 'vue'
import type { DialogInstance, DialogConfig, DialogRef } from './types'

export const DIALOG_DATA = Symbol('DIALOG_DATA')
export const DIALOG_REF = Symbol('DIALOG_REF')

export const dialogs = reactive<DialogInstance[]>([])
let counter = 0
const resolvers = new Map<string, (result?: unknown) => void>()
export function openDialog<D = unknown, R = unknown>(
  component: Component,
  config: DialogConfig<D> = {},
): DialogRef<R> {
  const id = `dialog-${++counter}`
  let resolveFn!: (result?: unknown) => void
  const closed = new Promise<R | undefined>((resolve) => {
    resolveFn = resolve as (result?: unknown) => void
  })
  resolvers.set(id, resolveFn)
  const dialogRef: DialogRef<R> = {
    id,
    close: (result?: R | unknown) => closeDialog(id, result),
    afterClose: () => closed,
  }
  dialogs.push({ id, component: markRaw(component), config, dialogRef })
  return dialogRef
}
export function closeDialog(id: string, result?: unknown) {
  const index = dialogs.findIndex((d) => d.id === id)
  if (index === -1) return
  dialogs.splice(index, 1)
  const resolve = resolvers.get(id)
  if (resolve) {
    resolve(result)
    resolvers.delete(id)
  }
}
export function closeAll() {
  ;[...dialogs].forEach((d) => closeDialog(d.id))
}
export function hasOpenDialogs() {
  return dialogs.length > 0
}
