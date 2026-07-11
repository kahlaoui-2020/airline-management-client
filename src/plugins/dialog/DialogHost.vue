<template>
  <v-dialog
    v-for="dialog in dialogs"
    :key="dialog.id"
    :model-value="true"
    :width="dialog.config.width"
    :max-width="dialog.config.maxWidth"
    :height="dialog.config.height"
    :persistent="dialog.config.disableClose"
    v-bind="dialog.config.vuetifyProps"
    @update:model-value="onUpdateModelValue(dialog, $event)"
  >
    <DialogWrapper :dialog="dialog" />
  </v-dialog>
</template>
<script setup lang="ts">
import { closeDialog, dialogs } from './dialogService'
import type { DialogInstance } from './types'
import DialogWrapper from './DialogWrapper.vue'
function onUpdateModelValue(dialog: DialogInstance, value: boolean) {
  if (!value) {
    closeDialog(dialog.id)
  }
}
</script>
<style scoped>
.dialog-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

.dialog-panel {
  background: #fff;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.18s ease;
}
.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>
