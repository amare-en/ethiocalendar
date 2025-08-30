<template>
  <v-row class="d-flex flex-column rounded-lg max-w-lg mx-auto pa-6">
    <h2 class="text-h6 text-center mb-4">
      Gregorian → Ethiopian Converter
    </h2>

    <!-- Gregorian Inputs -->
    <v-row class="mb-4" dense>
      <v-col cols="4">
        <v-select
          v-model="grDay"
          :items="generateDays(31)"
          label="Day"
          dense
          outlined
        />
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="grMonth"
          :items="GR_MONTHS"
          label="Month"
          dense
          outlined
        />
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="grYear"
          :items="generateYears(1900, 2100)"
          label="Year"
          dense
          outlined
        />
      </v-col>
    </v-row>
    <!-- Convert Button -->
    <div class="text-center">
      <v-btn color="primary" class="mb-4 text-capitalize" @click="onConvert" rounded large>
        Convert Date
      </v-btn>
    </div>

    <!-- Ethiopian Result -->
    <div v-if="convertedToEthiopian" class="text-center text-subtitle-1">
      {{ convertedToEthiopian[2] }} 
      {{ ETH_MONTHS[convertedToEthiopian[1] - 1] }} 
      {{ convertedToEthiopian[0] }}
    </div>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDateConversion } from "@/composables/useDateConversion";

// Extract composable state
const {
  grDay, grMonth, grYear,
  convertedToEthiopian, convertGrToEth,
  GR_MONTHS, ETH_MONTHS, generateDays, generateYears
} = useDateConversion();

// ✅ Set default to current Gregorian date
  const today = new Date();
  grYear.value = today.getFullYear();
  grMonth.value = GR_MONTHS[today.getMonth()]; // JS months are 0-based
  grDay.value = today.getDate();

  // Convert handler
  const onConvert = () => {
    convertedToEthiopian.value = convertGrToEth(
      grYear.value,
      GR_MONTHS.indexOf(grMonth.value) + 1,
    grDay.value
  );
};
</script>
<style scoped>
.v-btn {
  font-weight: 500;
  text-transform: none;
}
</style>

