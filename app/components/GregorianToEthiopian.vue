<template>
  <v-container class="d-flex justify-center">
    <v-row
      class="flex-column rounded-lg pa-6"
      style="max-width: 500px;"
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
            :items="generateDays(31)"
            label="Day"
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
        >
          Convert Date
        </v-btn>
      </div>

      <!-- Ethiopian Result -->
      <div
        v-if="convertedToEthiopian"
        class="text-center text-h6 font-weight-medium text-success"
      >
        {{ convertedToEthiopian[2] }}
        {{ ETH_MONTHS[convertedToEthiopian[1] - 1] }}
        {{ convertedToEthiopian[0] }}
      </div>
    </v-row>
  </v-container>
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

