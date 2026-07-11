<template>
  <v-navigation-drawer v-model="open" location="left" width="300">
    <v-list nav>
      <v-list-item to="" prepend-icon="mdi-home" title="Dashboard" />
      <v-list-item to="/aircrafts" prepend-icon="mdi-airplane" title="Aircrafts" />
      <v-list-item to="/settings" prepend-icon="mdi-settings" title="Settings" />
      <v-divider />
      <v-list-item to="/logout" prepend-icon="mdi-logout" title="Logout" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const open = defineModel({ required: true, type: Boolean })
</script>
