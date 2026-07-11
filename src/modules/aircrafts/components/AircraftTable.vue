<template>
  <v-data-table :headers="headers" :items="items" class="fill-height" :loading="loading">
    <template #top>
      <v-toolbar color="primary" flat>
        <v-toolbar-title>Aircrafts</v-toolbar-title>
        <v-spacer />
        <v-btn
          color="white"
          text="Add Aircraft"
          prepend-icon="mdi-plus"
          variant="flat"
          @click="add"
        />
      </v-toolbar>
    </template>
  </v-data-table>
</template>
<script setup lang="ts">
import { useDialog } from '@/plugins/dialog'
import AddAircraft from './AircraftForm.vue'
import type { Aircraft } from '../types.ts'

defineProps<{ items: Aircraft[]; loading: boolean }>()
const headers = [
  { title: 'ID', value: 'id' },
  { title: 'Model', value: 'model' },
  { title: 'Registration', value: 'registrationNo' },
]

const dialog = useDialog()
async function add() {
  const dialogRef = dialog.open(AddAircraft, {
    data: { title: 'Delete' },
    width: '400px',
    disableClose: false,
  })
  const confirmed = await dialogRef.afterClose()
  if (confirmed) {
    console.log('success')
  } else {
    console.log('error')
  }
}
</script>
