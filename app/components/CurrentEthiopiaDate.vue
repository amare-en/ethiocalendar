<script setup lang="ts">
import { useCurrentDateAndTime } from '~/composables/useCurrentDateAndTime';

// Use the separate composable to get the current date and time data
const { ethiopianDate, ethiopianTime, gregorianDate, gregorianTime } = useCurrentDateAndTime();

</script>

<template>
  <v-container class="border rounded-lg pa-4 text-center">
    <h1 class="text-h6 font-bold">የዛሬ ቀን & ሰዓት</h1>
    <v-divider class="my-3" />

    <v-row>
      <v-col cols="12" md="6" class="mb-4 mb-md-0">
        <div class="text-subtitle-2 mb-1">ኢትዮጵያዊ ቀን</div>
        <div class="text-h6 font-semibold">{{ ethiopianDate }}</div>
        <div class="text-subtitle-2 mt-3">ኢትዮጵያዊ ሰዓት</div>
        <div class="text-h5 font-bold">{{ ethiopianTime }}</div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-subtitle-2 mb-1">Gregorian Date</div>
        <div class="text-h6 font-semibold">{{ gregorianDate }}</div>
        <div class="text-subtitle-2 mt-3">Gregorian Time</div>
        <div class="text-h5 font-bold">{{ gregorianTime }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>