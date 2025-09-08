<template>
  <v-container class="py-8">
    <v-sheet class="mx-auto pa-6 pa-sm-10 holiday-container">
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

      <!-- Year Selector -->
      <v-row justify="center" class="mb-6">
        <v-col cols="12" sm="6" md="4">
          <v-select
            v-model="selectedYear"
            :items="availableYears"
            label="Select Year"
            outlined
            dense
          ></v-select>
        </v-col>
      </v-row>

      <!-- Holidays Table -->
      <v-card flat>
        <v-data-table
          :headers="headers"
          :items="holidays"
          class="elevation-1"
          item-key="title.en"
        >
          <template v-slot:item.name="{ item }">
            <div>
               <p class="text-grey-darken-1">{{ item.title.am }}</p>
              <p class="font-weight-bold">{{ item.title.en }}</p>
             
            </div>
          </template>

          <template v-slot:item.date="{ item }">
            <div>
              <p class="font-weight-medium">
                {{ monthName(item.ethiopianDate.month) }} {{ item.ethiopianDate.day }}, {{ item.ethiopianDate.year }}
              </p>
              <p class="text-caption text-grey-darken-1">
                ({{ item.gregorianDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) }})
              </p>
            </div>
          </template>

          <template v-slot:item.day="{ item }">
            <span>{{ item.dayOfWeek }}</span>
          </template>

          <template v-slot:item.category="{ item }">
            <v-chip :color="getCategoryColor(item.category)" small>
              {{ item.category }}
            </v-chip>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn small @click="showDetails(item)">
              Read More
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-sheet>

    <!-- Holiday Details Dialog -->
    <HolidayDialog v-model="dialog" :holiday="selectedHoliday" />
  </v-container>
</template>

<script setup>
import { useEthiopianHolidays } from '@/composables/useEthiopianHolidays';
import HolidayDialog from '@/components/holidays/HolidayDialog.vue';
import { getCategoryColor } from '@/utils/holidayUtils';

const {
  selectedYear,
  holidays,
  availableYears,
  dialog,
  selectedHoliday,
  showDetails,
} = useEthiopianHolidays();

const headers = [
  { title: 'Holiday Name', value: 'name', sortable: true },
  { title: 'Date', value: 'date', sortable: true },
  { title: 'Day', value: 'day', sortable: false },
  { title: 'Category', value: 'category', sortable: true },
  { title: 'Actions', value: 'actions', sortable: false },
];

const ethiopianMonths = [
  'Meskerem', 'Tekemt', 'Hidar', 'Tahsas', 'Tir', 'Yekatit',
  'Megabit', 'Miyazya', 'Ginbot', 'Sene', 'Hamle', 'Nehase', 'Pagume'
];

const monthName = (month) => {
  return ethiopianMonths[month - 1];
};
</script>

<style scoped>
.holiday-container {
  background: #f9f9f9;
}

.holiday-title {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}

.v-data-table {
  background: #ffffff;
}
</style>
