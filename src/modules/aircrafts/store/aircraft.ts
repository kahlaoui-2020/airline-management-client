import { defineStore } from 'pinia'
import { ref } from 'vue'
import aircraftService from '../api/aricraft.service'
import type { Aircraft } from '../types'

export const useAircraft = defineStore('aircraft', () => {
  const aircrafts = ref<Aircraft[]>([])
  const loading = ref(false)
  async function loadAircrafts() {
    loading.value = true
    try {
      const response = await aircraftService.findAll()
      aircrafts.value = response.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  async function removeAircraft(id: string) {
    loading.value = true
    try {
      await aircraftService.delete(id)
      aircrafts.value = aircrafts.value.filter((a) => a.id !== id)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }
  return {
    aircrafts,
    loading,
    loadAircrafts,
    removeAircraft,
  }
})
