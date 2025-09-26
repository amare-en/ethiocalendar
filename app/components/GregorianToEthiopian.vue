<template>
  <v-container class="d-flex justify-center">
    <v-row
      class="flex-column rounded-lg pa-6"
      style="max-width: 800px;"
    >
      <!-- Title -->
      <h2 class="text-h6 text-center mb-6 font-weight-bold text-primary">
        Gregorian → Ethiopian Converter
      </h2>

      <!-- Gregorian Inputs -->
      <v-row dense class="mb-6">
        <!-- Day -->
        <v-col cols="12" md="4">
          <v-select
            v-model="grDay"
            :items="daysInGrMonth"
            label="Day"
            :disabled="daysInGrMonth.length === 0"
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
            v-model="grMonth"
            :items="GR_MONTHS"
            label="Month"
            variant="outlined"
            density="comfortable"
            rounded="lg"
          />
        </v-col>

        <!-- Year -->
        <v-col cols="12" md="4">
          <v-select
            v-model="grYear"
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
          variant="elevated"
          size="large"
          rounded="xl"
          class="text-capitalize px-6"
          @click="onConvert"
          :disabled="!grMonth || !grYear || !grDay"
        >
          Convert Date
        </v-btn>
      </div>

      <!-- Ethiopian Result -->
      <div
        v-if="formattedEthiopianDate"
        class="text-center text-h6 font-weight-medium text-success"
      >
        {{ formattedEthiopianDate }}
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
import { ref, computed, watch } from "vue";
import { useDateConversion } from "@/composables/useDateConversion";

// Extract composable state
const {
  grDay,
  grMonth,
  grYear,
  convertedToEthiopian,
  convertGrToEth,
  GR_MONTHS,
  ETH_MONTHS,
  generateDays,
  generateYears,
} = useDateConversion();

// Error state
const errorMessage = ref("");
const gregorianDateOnConvert = ref<Date | null>(null);

// Set default to current Gregorian date
const today = new Date();
grYear.value = today.getFullYear();
grMonth.value = GR_MONTHS[today.getMonth()]; // JS months are 0-based
grDay.value = today.getDate();

// Reactive days for the selected Gregorian month
const daysInGrMonth = computed(() => {
  const monthIndex = GR_MONTHS.indexOf(grMonth.value ?? "");
  if (monthIndex === -1) return [];
  
  // monthIndex is 0-based, so we need to add 1 for the month number
  const month = monthIndex + 1;
  const year = grYear.value;
  
  // Get the number of days in the selected Gregorian month
  const days = new Date(year, month, 0).getDate();
  return generateDays(days);
});

// Month hint (adds clarity for February)
const monthHint = computed(() => {
  const monthIndex = GR_MONTHS.indexOf(grMonth.value ?? "");
  if (monthIndex === 1) { // February
    const year = grYear.value;
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return isLeap ? "February has 29 days this year (leap year)" : "February has 28 days this year";
  }
  const days = daysInGrMonth.value.length;
  return days ? `${days} days` : "";
});

// Validate day range
watch([grYear, grMonth], () => {
  const maxDays = daysInGrMonth.value.length;
  if (grDay.value > maxDays) {
    grDay.value = maxDays;
  }
});

// Convert handler
const onConvert = () => {
  errorMessage.value = "";
  const monthIndex = GR_MONTHS.indexOf(grMonth.value ?? "");
  if (monthIndex === -1) {
    convertedToEthiopian.value = null;
    gregorianDateOnConvert.value = null;
    errorMessage.value = "Invalid Gregorian month selected.";
    return;
  }

  // Using UTC to create date to avoid timezone issues
  gregorianDateOnConvert.value = new Date(Date.UTC(grYear.value, monthIndex, grDay.value));

  const result = convertGrToEth(
    grYear.value,
    monthIndex + 1,
    grDay.value
  );
  if (!result) {
    errorMessage.value = "Conversion failed. Please check your input.";
    convertedToEthiopian.value = null;
    gregorianDateOnConvert.value = null;
  } else {
    convertedToEthiopian.value = result;
  }
};

// Amharic day and month names
const ETH_WEEKDAYS_AM = ['እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ'];
const ETH_MONTHS_AM = ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'];

// Formatted Ethiopian Date
const formattedEthiopianDate = computed(() => {
  if (convertedToEthiopian.value && gregorianDateOnConvert.value) {
    const [year, month, day] = convertedToEthiopian.value;

    // Numeric format
    const numericDate = `${day}/${month}/${year}`;

    // Full Amharic format
    const weekdayIndex = gregorianDateOnConvert.value.getUTCDay();
    const weekday = ETH_WEEKDAYS_AM[weekdayIndex];
    const monthName = ETH_MONTHS_AM[month - 1];
    const amharicDate = `${weekday}, ${monthName} ${day} ${year}`;
    
    return `${amharicDate} or ${numericDate}`;
  }
  return "";
});
</script>

<style scoped>
.v-btn {
  font-weight: 500;
  text-transform: none;
}
</style>
