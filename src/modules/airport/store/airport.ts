import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getErrorMessage } from '@/shared/api/api-error'
import airportService from '../api/airport.service'
import type { Airport } from '../types'

export const useAirport = defineStore('airport', () => {
  const airports = ref<Airport[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  async function loadAircrafts() {
    loading.value = true
    try {
      const response = await airportService.findAll()
      airports.value = response.data ?? []
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function createAirport(data: Partial<Airport>) {
    loading.value = true
    error.value = null
    try {
      const response = await airportService.create(data)
      airports.value.push(response.data)
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
      await airportService.delete(id)
      airports.value = airports.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    airports,
    loading,
    error,
    loadAircrafts,
    createAirport,
    removeAircraft,
  }
})
