<template>
  <v-form ref="formRef" v-model="valid" @submit.prevent="confirm">
    <v-card v-model="open" :subtitle="data?.subtitle" :text="data?.message">
      <v-card-title class="d-flex justify-space-between align-center">
        <span class="text-headline-samll text-medium-emphasis ps-2">
          {{ data?.title }}
        </span>
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-alert v-if="st.error" type="error" variant="tonal" class="mb-4">
          {{ st.error }}
        </v-alert>
        <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" />
        <v-text-field v-model="form.description" label="Description" />
      </v-card-text>
      <v-divider />
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
import type { ConfirmData } from '@/shared/types/api'
import type { AircraftModel } from '../../types'
import { useAircraftModel } from '../../store/model'

const rules = {
  required: (v: unknown) => !!v,
}
const data = inject<ConfirmData>(DIALOG_DATA)
const dialogRef = inject<DialogRef<boolean>>(DIALOG_REF)
const valid = ref(false)
const formRef = ref<VForm>()
const form = reactive<Partial<AircraftModel>>({})
const st = useAircraftModel()
async function confirm() {
  const isValid = (await formRef.value?.validate())?.valid
  if (!isValid) return
  const created = await st.createModel(form)
  if (created) {
    dialogRef?.close(true)
  }
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
