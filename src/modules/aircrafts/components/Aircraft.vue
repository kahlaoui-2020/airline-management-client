<template>
  <v-card
    title="Aircraft"
    subtitle="This is the Aircrafts page."
    class="fill-height d-flex flex-column"
    flat
  >
    <AircraftTable :items="aircrafts" :loading="loading" />
  </v-card>
</template>
<script setup lang="ts">
import AircraftTable from './AircraftTable.vue'
import { useAircraft } from '../store/aircraft.ts'
import { onMounted, toRefs } from 'vue'

const store = useAircraft()
const { aircrafts, loading } = toRefs(store)
onMounted(() => {
  store.loadAircrafts()
})
</script>
