<template>
  <v-container class="py-8 ">
    <v-sheet class="mx-auto pa-6 pa-sm-10 holiday-container  border rounded-lg pa-4">
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
            :disabled="pending"
          ></v-select>
        </v-col>
      </v-row>
      <!-- Error Alert -->
      <v-alert v-if="error" type="error" class="mb-6" prominent>
        {{ error.message }}
      </v-alert>

      <!-- Loading Indicator -->
      <div v-if="pending" class="text-center py-10">
        <v-progress-circular indeterminate color="primary" size="64"></v-progress-circular>
        <p class="mt-4 text-subtitle-1">Loading Holidays...</p>
      </div>

      <!-- Holidays Table -->
      <v-card flat v-if="!pending && !error && holidays">
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

          <template v-slot:item.description="{ item }">
            <span class="text-caption">{{ item.description }}</span>
          </template>

          <template v-slot:item.category="{ item }">
            <v-chip :color="getCategoryColor(item.category)" small>
              {{ item.category }}
            </v-chip>
          </template>
        <!-- Actions -->
        <template v-slot:item.actions="{ item }">
          <NuxtLink :to="item.detail">
            <v-btn size="small" variant="text" color="primary">
              Details
            </v-btn>
          </NuxtLink>
        </template>
        </v-data-table>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { useEthiopianHolidays } from '@/composables/useEthiopianHolidays';
import { getCategoryColor } from '@/utils/holidayUtils';
import { getEnglishEthiopianMonthName as monthName } from '@/utils/dateUtils';
const { 
  selectedYear, 
  holidays, 
  availableYears, 
  pending, 
  error 
} = useEthiopianHolidays();

const headers = [
  { title: 'Holiday Name', value: 'name', sortable: true, width: '20%'},
  { title: 'Date', value: 'date', sortable: true, width: '20%' },
  { title: 'Day', value: 'day', sortable: false, width: '10%' },
  { title: 'Description', value: 'description', sortable: false, width: '30%' },
  { title: 'Category', value: 'category', sortable: true, width: '10%' },
  { title: 'Actions', value: 'actions', sortable: false, width: '10%' },
];
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
