<template>
  <div class="max-w-4xl mx-auto text-center py-12">
    <!-- Title -->
    <h1
      class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text"
    >
      Current Date in Ethiopia
    </h1>
    <p class="text-gray-500 mt-3 text-lg">
      Live updates of Ethiopian & Gregorian calendar
    </p>

    <!-- Cards -->
    <v-container class="mt-12">
      <v-row dense>
        <!-- Ethiopian Date Card -->
        <v-col cols="12" md="6">
          <div
            class="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <h2
              class="text-2xl font-semibold flex items-center justify-center gap-2 text-indigo-600"
            >
              <v-icon icon="mdi-calendar-blank" size="28" class="text-indigo-500" />
              Ethiopian Date
            </h2>
            <p class="text-xl mt-4 font-bold text-gray-900 tracking-wide">
              {{ ethiopianDate }}
            </p>
            <div
              class="mt-5 flex items-center justify-center gap-2 text-indigo-600 font-medium"
            >
              <v-icon icon="mdi-clock-time-four-outline" size="22" />
              <span class="text-lg">{{ ethiopianTime }}</span>
            </div>
          </div>
        </v-col>

        <!-- Gregorian Date Card -->
        <v-col cols="12" md="6">
          <div
            class="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <h2
              class="text-2xl font-semibold flex items-center justify-center gap-2 text-pink-600"
            >
              <v-icon icon="mdi-calendar-range" size="28" class="text-pink-500" />
              Gregorian Date
            </h2>
            <p class="text-xl mt-4 font-bold text-gray-900 tracking-wide">
              {{ gregorianDate }}
            </p>
            <div
              class="mt-5 flex items-center justify-center gap-2 text-pink-600 font-medium"
            >
              <v-icon icon="mdi-clock-outline" size="22" />
              <span class="text-lg">{{ gregorianTime }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useCurrentDateAndTime } from '~/composables/useCurrentDateAndTime'

const { ethiopianDate, gregorianDate, ethiopianTime, gregorianTime } =
  useCurrentDateAndTime()
</script>

<style scoped>
/* Glassmorphism card style */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.3s ease-in-out;
}
</style>
