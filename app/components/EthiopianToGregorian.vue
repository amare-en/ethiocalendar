<template>
  <v-container class="d-flex justify-center">
    <v-row
      class="flex-column rounded-lg pa-6"
      style="max-width: 800px;"
    >
      <!-- Title -->
      <h2 class="text-h6 text-center mb-6 font-weight-bold text-primary">
        Ethiopian → Gregorian Converter
      </h2>

      <!-- Input Fields -->
      <v-row dense class="mb-6">
        <!-- Day -->
        <v-col cols="12" md="4">
          <v-select
            v-model="ethDay"
            :items="daysInMonth"
            label="Day"
            :disabled="daysInMonth.length === 0"
            :hint="monthHint"
            persistent-hint
            variant="outlined"
            density="comfortable"
            rounded="lg"
          />
        </v-col>

        <!-- Month -->
        <v-col cols="12" md="4">
          <v-select
            v-model="ethMonth"
            :items="ETH_MONTHS"
            label="Month"
            variant="outlined"
            density="comfortable"
            rounded="lg"
          />
        </v-col>

        <!-- Year -->
        <v-col cols="12" md="4">
          <v-select
            v-model="ethYear"
            :items="generateYears(1900, 2100)"
            label="Year"
            variant="outlined"
            density="comfortable"
            rounded="lg"
          />
        </v-col>
      </v-row>

      <!-- Convert Button -->
      <div class="text-center mb-6">
        <v-btn
          color="primary"
          size="large"
          rounded="xl"
          variant="elevated"
          class="px-6 text-capitalize"
          @click="onConvert"
          :disabled="!ethMonth || !ethYear || !ethDay"
        >
          Convert Date
        </v-btn>
      </div>

      <!-- Result -->
      <div
        v-if="formattedGregorianDate"
        class="text-center text-h6 font-weight-medium text-success"
      >
        {{ formattedGregorianDate }}
      </div>

      <!-- Error Message -->
      <v-alert
        v-if="errorMessage"
        type="error"
        variant="tonal"
        density="comfortable"
        class="mt-4"
      >
        {{ errorMessage }}
      </v-alert>
    </v-row>
  </v-container>
</template>


<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useDateConversion } from "@/composables/useDateConversion";

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
  getCurrentEthiopianDate,
} = useDateConversion();

// Error state
const errorMessage = ref("");

// Set default to current Ethiopian date
const { year: currYear, month: currMonth, day: currDay } = getCurrentEthiopianDate();
ethYear.value = currYear;
ethMonth.value = ETH_MONTHS[currMonth - 1];
ethDay.value = currDay;

// Reactive days for the selected month
const daysInMonth = computed(() => {
  const monthIndex = ETH_MONTHS.indexOf(ethMonth.value ?? "");
  if (monthIndex === -1) return [];
  const numDays = getDaysInMonth(ethYear.value, monthIndex + 1);
  return generateDays(numDays);
});

// Month hint (adds clarity for Pagume)
const monthHint = computed(() => {
  const monthIndex = ETH_MONTHS.indexOf(ethMonth.value ?? "");
  if (monthIndex === 12) {
    return (ethYear.value % 4 === 3)
      ? "ጳጉሜ has 6 days this year (leap year)"
      : "ጳጉሜ has 5 days this year";
  }
  return "30 days";
});

// Validate day range
watch([ethYear, ethMonth], () => {
  const maxDays = daysInMonth.value.length;
  if (ethDay.value > maxDays) {
    ethDay.value = maxDays;
  }
});

// Convert button handler
const onConvert = () => {
  errorMessage.value = "";
  const monthIndex = ETH_MONTHS.indexOf(ethMonth.value ?? "");
  if (monthIndex === -1) {
    convertedToGregorian.value = null;
    errorMessage.value = "Invalid Ethiopian month selected.";
    return;
  }
  const result = convertEthToGr(ethYear.value, monthIndex + 1, ethDay.value);
  if (!result) {
    errorMessage.value = "Conversion failed. Please check your input.";
  }
  convertedToGregorian.value = result;
};

// Formatted result
const formattedGregorianDate = computed(() => {
  if (convertedToGregorian.value) {
    const date = convertedToGregorian.value;

    // Full format
    const fullDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Numeric format
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const numericDate = `${day}/${month}/${year}`;

    return `${fullDate} or ${numericDate}`;
  }
  return "";
});
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
  color: #1e1e2f;
}

.v-btn {
  font-weight: 500;
  text-transform: none;
}
</style>

<!--

Pulls state and helpers from the composable:

State refs: ethDay, ethMonth, ethYear, convertedToGregorian.

Converters: convertEthToGr (wraps toGregorian from ethiopian-date).

Data/Helpers: ETH_MONTHS, generateYears, getDaysInMonth, generateDays, getCurrentEthiopianDate.
-->