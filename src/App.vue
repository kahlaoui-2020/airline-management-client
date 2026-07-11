<template>
  <v-app>
    <AppBar @toggle-drawer="drawer = !drawer" />
    <SideNav v-model="drawer" />
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
  <DialogHost />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppBar from './components/AppBar.vue'
import SideNav from './components/SideNav.vue'
import DialogHost from './plugins/dialog/DialogHost.vue'

const drawer = ref(false)
</script>

<style scoped></style>
