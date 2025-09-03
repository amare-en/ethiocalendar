<script setup lang="ts">
import { useCurrentDateAndTime } from '~/composables/useCurrentDateAndTime';
// Use the separate composable to get the current date and time data
const { ethiopianDate, ethiopianTime, gregorianDate, gregorianTime } = useCurrentDateAndTime();
</script>

<template>
  <v-container class="border rounded-lg pa-4 text-center">
    <h1 class="text-h6 font-bold"> Current Date & Time</h1>
    <v-divider class="my-3" />
    <v-row class="gap-4" align="center" justify="center">
      <v-col cols="12" md="6" class="border rounded-lg">
        <div class="text-subtitle-2 mb-1">ኢትዮጵያዊ ቀን</div>
        <div class="text-h6 font-semibold">{{ ethiopianDate }}</div>
        <div class="text-subtitle-2 mt-3">ኢትዮጵያዊ ሰዓት</div>
        <div class="mt-auto text-center">
          <v-btn
            color="black"
            variant="flat"
            size="x-large"
            class="rounded-lg border px-8 py-4 text-h6 font-weight-bold 
            bg-gradient-to-r from-indigo-500 via-black-600 to-cyan-500 
            text-white shadow-md hover:shadow-xl hover:scale-105 
            transition-all duration-300 ease-in-out" >
              {{ ethiopianTime }}
          </v-btn>
      </div>
      </v-col>
      <v-col cols="12" md="6" class="border rounded-lg">
        <div class="text-subtitle-2 mb-1">Gregorian Date</div>
        <div class="text-h6 font-semibold">{{ gregorianDate }}</div>
        <div class="text-subtitle-2 mt-3">Gregorian Time</div>

         <div class="mt-auto text-center">
          <v-btn
            color="black"
            variant="flat"
            size="x-large"
            class="rounded-lg border px-8 py-4 text-h6 font-weight-bold 
            bg-gradient-to-r from-indigo-500 via-black-600 to-cyan-500 
            text-white shadow-md hover:shadow-xl hover:scale-105 
            transition-all duration-300 ease-in-out" >
              {{ gregorianTime }}
          </v-btn>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>