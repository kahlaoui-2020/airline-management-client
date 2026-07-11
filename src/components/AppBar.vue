<template>
  <v-app-bar>
    <template #prepend>
      <v-app-bar-nav-icon @click="emit('toggle-drawer')" />
    </template>
    <v-toolbar-title>My App</v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'toggle-drawer'): void
}>()
</script>
