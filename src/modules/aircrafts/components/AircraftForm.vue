<template>
  <v-form ref="formRef" v-model="valid" @submit.prevent="confirm">
    <v-card v-model="open" :subtitle="data?.subtitle" :text="data?.text">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-headline-samll text-medium-emphasis ps-2">
          {{ data?.title }}
        </span>
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>
      <v-divider class="mb-4" />
      <v-card-text>
        <v-autocomplete
          v-model="form.airlineID"
          label="Airline"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="form.registrationNo"
          label="Registration number"
          :rules="[rules.required]"
        />
        <v-autocomplete
          v-model="form.modelID"
          label="Model"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-autocomplete
          v-model="form.manufacturerID"
          label="Manufacturer"
          :items="['']"
          item-title="name"
          item-value="id"
          :rules="[rules.required]"
        />
        <v-number-input v-model="form.totalSeats" label="Total seats" :rules="[rules.required]" />
      </v-card-text>
      <v-divider class="mt-2" />
      <v-card-actions class="justify-end">
        <v-btn color="error" @click="reset">Reset</v-btn>
        <v-btn type="submit" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script setup lang="ts">
import { DIALOG_DATA, DIALOG_REF, type DialogRef } from '@/plugins/dialog'

import { inject, reactive, ref } from 'vue'
import type { VForm } from 'vuetify/components'

interface ConfirmData {
  title: string
  subtitle: string
  text: string
}
interface AircraftForm {
  airlineID?: string
  registrationNo?: string
  modelID?: string
  manufacturerID?: string
  totalSeats?: number
}
const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const valid = ref(false)
const formRef = ref<VForm>()
const form = reactive<AircraftForm>({})
async function confirm() {
  const isValid = (await formRef.value?.validate())?.valid
  if (!isValid) return
  dialogRef?.close({ a: 'yes', b: 'no' })
}
function reset() {
  formRef.value?.reset()
  formRef.value?.resetValidation()
}
function close() {
  dialogRef?.close(false)
}
const open = ref(false)
</script>
