import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getErrorMessage } from '@/shared/api/api-error'
import type { Manufacturer } from '../types'
import manufacturerService from '../api/manufacturer.service'

export const useManufacturer = defineStore('manufacturer', () => {
  const manufacturers = ref<Manufacturer[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadManufacturers() {
    loading.value = true
    try {
      const response = await manufacturerService.findAll()
      manufacturers.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function createManufacturer(data: Partial<Manufacturer>) {
    loading.value = true
    error.value = null
    try {
      const response = await manufacturerService.create(data)
      manufacturers.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = getErrorMessage(err)
      return null
    } finally {
      loading.value = false
    }
  }
  async function removeManufacturer(id: string) {
    loading.value = true
    try {
      await manufacturerService.delete(id)
      manufacturers.value = manufacturers.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    manufacturers,
    loading,
    error,
    loadManufacturers,
    createManufacturer,
    removeManufacturer,
  }
})
