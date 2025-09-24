<template>
  <v-container>
    <v-row class="mb-6 align-center justify-center">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-btn icon @click="prevYear" variant="text" color="primary">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <h1 class="text-h4 font-weight-bold mx-4">
          {{ selectedYear }} ዓ.ም
        </h1>
        <v-btn icon @click="nextYear" variant="text" color="primary">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-switch
          v-model="showGregorian"
          label="Show Gregorian Dates"
          color="primary"
          hide-details
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="month in 13"
        :key="month"
        cols="12"
        sm="6"
        lg="6"
        xl="3"
      >
        <CalendarGrid 
          :year="selectedYear" 
          :month="month" 
          :show-gregorian="showGregorian"
          :holidays="holidays"
        />
      </v-col>
    </v-row>
     <v-divider class="my-3" />
<!--
    <HolidaysInThatYear :year="selectedYear" :holidays="holidays" />-->
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getCurrentEthiopianDate } from '~/utils/ethiopianDate';
import CalendarGrid from '~/components/calendar/CalendarGrid.vue';
//import HolidaysInThatYear from '~/components/holidays/HolidaysInThatYear.vue';
import { useEthiopianHolidays } from '~/composables/useEthiopianHolidays';
// Get today's Ethiopian year
const todayEth = getCurrentEthiopianDate();
const selectedYear = ref(todayEth.year);
// State for the Gregorian date toggle
const showGregorian = ref(true);
// Holidays
const { holidays } = useEthiopianHolidays(selectedYear);
// Navigation
const prevYear = () => {
  selectedYear.value--;
};

const nextYear = () => {
  selectedYear.value++;
};
</script>

<style scoped>
h1 {
  color: #1e1e2f;
}
</style>