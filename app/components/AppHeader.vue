<template>
  <v-container>
  <v-app-bar color="#111827" class="head">
    <v-toolbar-title>
      <NuxtLink to="/" class="text-white text-decoration-none">
        <v-img src="/logo2.png" alt="Logo" contain height="60" />
      </NuxtLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <NuxtLink to="/" class="text-white text-capitalize">Home</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/EthiopiaCalendar" class="text-white text-capitalize">Ethiopian Calendar</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/Converter" class="text-white text-capitalize">Ethiopian Calendar Converter</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/Holidays" class="text-white text-capitalize">Holidays</NuxtLink>
    </v-btn>
  </v-app-bar>
  </v-container>
</template>
<script setup lang="ts">
</script>
<style scoped>
.head {
 background: linear-gradient(135deg, #2C5F2D 0%, #FCD116 50%, #DA121A 100%); /* Green, Yellow, Red */
}
</style>