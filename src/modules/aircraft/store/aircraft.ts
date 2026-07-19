import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getErrorMessage } from '@/shared/api/api-error'
import aircraftService from '../api/aircraft.service'
import type { Aircraft } from '../types'

export const useAircraft = defineStore('aircraft', () => {
  const aircrafts = ref<Aircraft[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadAircrafts() {
    loading.value = true
    try {
      const response = await aircraftService.findAll()
      aircrafts.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function createAircraft(data: Partial<Aircraft>) {
    loading.value = true
    error.value = null
    try {
      const response = await aircraftService.create(data)
      aircrafts.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = getErrorMessage(err)
      return null
    } finally {
      loading.value = false
    }
  }
  async function removeAircraft(id: string) {
    loading.value = true
    try {
      await aircraftService.delete(id)
      aircrafts.value = aircrafts.value.filter((a) => a.airlineID !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    aircrafts,
    loading,
    error,
    loadAircrafts,
    createAircraft,
    removeAircraft,
  }
})
