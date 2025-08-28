<template>
  <v-card class="pa-6 rounded-xl shadow-lg max-w-lg mx-auto">
    <v-card-title class="text-h6 text-center mb-4">
      Ethiopian → Gregorian Converter
    </v-card-title>

    <v-row class="mb-4" dense>
      <v-col cols="4">
        <v-select
          v-model="ethDay"
          :items="daysInMonth"
          label="Day"
          dense
          outlined
        />
      </v-col>

      <v-col cols="4">
        <v-select
          v-model="ethMonth"
          :items="ETH_MONTHS"
          label="Month"
          dense
          outlined
        />
      </v-col>

      <v-col cols="4">
        <v-select
          v-model="ethYear"
          :items="generateYears(1900, 2100)"
          label="Year"
          dense
          outlined
        />
      </v-col>
    </v-row>

    <v-btn
      color="primary"
      class="mb-4"
      @click="onConvert"
      rounded
      large
      elevation="2"
    >
      Convert
    </v-btn>

    <v-card-text v-if="formattedGregorianDate" class="text-center text-subtitle-1">
      {{ formattedGregorianDate }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from 'vue';
import { useDateConversion } from '@/composables/useDateConversion';

// Shared composable
const {
  ethDay,
  ethMonth,
  ethYear,
  convertedToGregorian,
  convertEthToGr,
  ETH_MONTHS,
  generateYears,
  getDaysInMonth,
  generateDays,
  getCurrentEthiopianDate
} = useDateConversion();

// Set default to current Ethiopian date
const { year: currYear, month: currMonth, day: currDay } = getCurrentEthiopianDate();
ethYear.value = currYear;
ethMonth.value = ETH_MONTHS[currMonth - 1];
ethDay.value = currDay;

// Reactive days for the selected month
const daysInMonth = computed(() => {
  const monthIndex = ETH_MONTHS.indexOf(ethMonth.value ?? "");
  if (monthIndex === -1) return []; // Handle invalid month gracefully
  const numDays = getDaysInMonth(ethYear.value, monthIndex + 1);
  return generateDays(numDays);
});

// Watch for changes in year or month and reset day if it's out of range
watch([ethYear, ethMonth], () => {
  const maxDays = daysInMonth.value.length;
  if (ethDay.value > maxDays) {
    ethDay.value = maxDays;
  }
});

// Convert button handler
const onConvert = () => {
  const monthIndex = ETH_MONTHS.indexOf(ethMonth.value ?? "");
  if (monthIndex === -1) {
    convertedToGregorian.value = null;
    return;
  }
  convertedToGregorian.value = convertEthToGr(
    ethYear.value,
    monthIndex + 1,
    ethDay.value
  );
};


const formattedGregorianDate = computed(() => {
  if (convertedToGregorian.value) {
    return convertedToGregorian.value.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
  return ''; // Return an empty string if null
});

// Perform an initial conversion when the component is mounted
onMounted(() => {
  onConvert();
});
</script>


<style scoped>
.v-card-title {
  font-weight: bold;
  color: #1e1e2f;
}

.v-btn {
  width: 100%;
  font-weight: 500;
  text-transform: none;
}
</style>
