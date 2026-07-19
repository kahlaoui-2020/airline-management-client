import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getErrorMessage } from '@/shared/api/api-error'
import modelService from '../api/model.service'
import type { AircraftModel } from '../types'

export const useAircraftModel = defineStore('aircraftModel', () => {
  const models = ref<AircraftModel[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadModels() {
    loading.value = true
    try {
      const response = await modelService.findAll()
      models.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function createModel(data: Partial<AircraftModel>) {
    loading.value = true
    error.value = null
    try {
      const response = await modelService.create(data)
      models.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = getErrorMessage(err)
      return null
    } finally {
      loading.value = false
    }
  }
  async function removeModel(id: string) {
    loading.value = true
    try {
      await modelService.delete(id)
      models.value = models.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    models,
    loading,
    error,
    loadModels,
    createModel,
    removeModel,
  }
})
