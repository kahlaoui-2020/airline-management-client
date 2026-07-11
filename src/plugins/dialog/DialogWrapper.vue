<template>
  <component :is="dialog.component" />
</template>
<script setup lang="ts">
import { provide } from 'vue'
import type { DialogInstance } from './types'
import { DIALOG_DATA, DIALOG_REF } from './dialogService'

const props = defineProps<{ dialog: DialogInstance }>()
provide(DIALOG_DATA, props.dialog.config.data)
provide(DIALOG_REF, props.dialog.dialogRef)
</script>
