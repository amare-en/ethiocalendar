<template>
  <v-container class="py-12">
    <!-- Title -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text">
        What Time is it in Ethiopia?
      </h1>
      <p class="text-gray-500 mt-2 text-lg">
        Live Ethiopian & Gregorian time updates
      </p>
    </div>

    <!-- Time Cards -->
    <v-row dense>
      <!-- Ethiopian Time -->
      <v-col cols="12" md="6">
        <div class="glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center">
          <v-icon
            icon="mdi-clock-time-four-outline"
            size="40"
            class="mb-4 text-indigo-500"
          />
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Local Ethiopian Time
          </h2>
          <div class="time-display rounded-xl p-6 mb-4">
            <h4 class="text-3xl font-bold text-gray-900 glow">
              {{ ethiopianTime }}
            </h4>
          </div>
          <p class="text-sm text-gray-500">
            Addis Ababa (EAT)
          </p>
        </div>
      </v-col>

      <!-- Gregorian Time -->
      <v-col cols="12" md="6">
        <div class="glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-center">
          <v-icon
            icon="mdi-clock-time-four-outline"
            size="40"
            class="mb-4 text-pink-500"
          />
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Current Gregorian Time
          </h2>
          <div class="time-display rounded-xl p-6 mb-4">
            <h4 class="text-3xl font-bold text-gray-900 glow">
              {{ gregorianTime }}
            </h4>
          </div>
          <p class="text-sm text-gray-500">
            Addis Ababa, EAT (UTC+3)
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCurrentDateAndTime } from '~/composables/useCurrentDateAndTime'

// Use the composable for live time
const { ethiopianTime, gregorianTime } = useCurrentDateAndTime()
</script>

<style scoped>
/* Glassmorphism card style */
.glass-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Time display box */
.time-display {
  background-color: #f0f4f8;
  box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}
.time-display:hover {
  transform: scale(1.05);
}

/* Glowing text effect for time */
.glow {
  text-shadow: 0 0 8px rgba(99, 102, 241, 0.6),
               0 0 16px rgba(236, 72, 153, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .time-display h4 {
    font-size: 2.2rem;
  }
  h1 {
    font-size: 2.5rem;
  }
}
</style>
