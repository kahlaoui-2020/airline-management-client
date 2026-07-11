import type { Component } from 'vue'
import { closeAll, hasOpenDialogs, openDialog } from './dialogService'
import type { DialogConfig, DialogRef } from './types'

export function useDialog() {
  return {
    open: <D = unknown, R = unknown>(
      component: Component,
      config?: DialogConfig<D>,
    ): DialogRef<R> => openDialog<D, R>(component, config),
    closeAll,
    hasOpenDialogs,
  }
}
