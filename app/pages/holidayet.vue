<template>
  <v-container class="py-8">
    <v-sheet
      class="mx-auto pa-4 pa-sm-8 border rounded-lg"
    >
      <!-- Header -->
      <h2 class="text-h4 text-sm-h3 font-weight-bold text-center mb-6">
        <span class="text-blue-darken-4">የኢትዮጵያ በዓላት</span><br />
        <span class="text-sm-h5 text-blue-grey-darken-3">Ethiopian Holidays</span>
      </h2>

      <v-divider class="mb-6" />

      <!-- Filters -->
      <v-row justify="center" class="mb-4">
        <v-col cols="12" sm="10" md="8">
          <HolidayFilter v-model="filterCategory" />
        </v-col>
      </v-row>

      <!-- Holiday List -->
      <v-row class="mt-4">
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
