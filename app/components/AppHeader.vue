<template>
  <v-app-bar color="#1A1A1A">
    <v-toolbar-title>
      <NuxtLink to="/" class="text-white text-decoration-none">
        Ethiopian Calendar
      </NuxtLink>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <NuxtLink to="/" class="text-white">Home</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/EthiopiaCalendar" class="text-white">Ethiopian Calendar</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/Converter" class="text-white">Ethiopian Calendar Converter</NuxtLink>
    </v-btn>
    <v-btn text>
      <NuxtLink to="/Holidays" class="text-white">Holidays</NuxtLink>
    </v-btn>
  </v-app-bar>
</template>
<script setup lang="ts"></script>