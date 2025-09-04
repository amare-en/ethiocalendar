<template>
  <v-container class="py-12">
    <!-- Title -->
    <div class="text-center">
      <h1 class="text-h3 font-weight-bold text-gradient mb-2">
        Current Date in Ethiopia
      </h1>
      <p class="text-subtitle-1 text-medium-emphasis">
        Live updates of Ethiopian & Gregorian calendar
      </p>
    </div>

    <!-- Ethiopian & Gregorian Dates -->
    <v-row class="mt-10" dense>
      <!-- Ethiopian Date -->
      <v-col cols="12" md="6">
        <div class="pa-4 border rounded-lg text-center">
          <h2 class="text-h5 font-weight-semibold d-flex align-center justify-center text-indigo-darken-2">
            <v-icon icon="mdi-calendar-blank" size="28" class="me-2" />
            Ethiopian Date
          </h2>
          <div class="text-h6 font-weight-bold mt-3">
            {{ ethiopianDate }}
          </div>
          <div class="d-flex align-center justify-center mt-4 text-indigo-darken-2">
            <v-icon icon="mdi-clock-time-four-outline" size="22" class="me-2" />
            <span class="text-subtitle-1 font-weight-medium">
              {{ ethiopianTime }}
            </span>
          </div>
        </div>
      </v-col>

      <!-- Gregorian Date -->
      <v-col cols="12" md="6">
        <div class="pa-4 border rounded-lg text-center">
          <h2 class="text-h5 font-weight-semibold d-flex align-center justify-center text-pink-darken-2">
            <v-icon icon="mdi-calendar-range" size="28" class="me-2" />
            Gregorian Date
          </h2>
          <div class="text-h6 font-weight-bold mt-3">
            {{ gregorianDate }}
          </div>
          <div class="d-flex align-center justify-center mt-4 text-pink-darken-2">
            <v-icon icon="mdi-clock-outline" size="22" class="me-2" />
            <span class="text-subtitle-1 font-weight-medium">
              {{ gregorianTime }}
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCurrentDateAndTime } from '~/composables/useCurrentDateAndTime'

const { ethiopianDate, gregorianDate, ethiopianTime, gregorianTime } =
  useCurrentDateAndTime()
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #3f51b5, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
