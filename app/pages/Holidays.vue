<template>
  <v-container class="py-8">
   <v-sheet
  class="mx-auto pa-6 pa-sm-10 holiday-container">
  <!-- Header -->
  <div class="text-center mb-6">
    <h2 class="text-h4 font-weight-bold mb-2 holiday-title">
      <span class="text-blue-darken-3">የኢትዮጵያ በዓላት</span>
    </h2>
    <p class="text-subtitle-1 text-blue-grey-darken-2 font-weight-medium">
      Ethiopian Holidays & Celebrations
    </p>
  </div>
  <v-divider class="mb-6" />
  <!-- Filters -->
  <v-row justify="center" class="mb-6">
    <v-col cols="12" sm="10" md="8">
      <HolidayFilter v-model="filterCategory" />
    </v-col>
  </v-row>

  <!-- Holiday List: One per row -->
  <v-row class="mt-4" dense>
    <v-col
      v-for="holiday in filteredHolidays"
      :key="holiday.title.en"
      cols="12"
      class="py-2"
    >
      <HolidayCard :holiday="holiday" @details="showDetails" />
    </v-col>
  </v-row>
</v-sheet>


    <!-- Holiday Details Dialog -->
    <HolidayDialog v-model="dialog" :holiday="selectedHoliday" />
  </v-container>
</template>

<script setup>
import { useHolidays } from "@/composables/useHolidays";
import HolidayFilter from "@/components/holidays/HolidayFilter.vue";
import HolidayCard from "@/components/holidays/HolidayCard.vue";
import HolidayDialog from "@/components/holidays/HolidayDialog.vue";

const {
  filterCategory,
  dialog,
  selectedHoliday,
  filteredHolidays,
  showDetails,
} = useHolidays();
</script>
<style scoped>
.holiday-container {
  background: #ffffff; /* clean, minimal background */
}

.holiday-title {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

/* Remove card/shadow styles */
</style>