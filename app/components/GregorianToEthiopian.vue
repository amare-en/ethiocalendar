<template>
  <v-card class="pa-6 rounded-xl shadow-lg max-w-lg mx-auto">
    <v-card-title class="text-h6 text-center mb-4">Gregorian → Ethiopian Converter</v-card-title>

    <v-row class="mb-4" dense>
      <v-col cols="4">
        <v-select
          v-model="grDay"
          :items="generateDays(31)"
          label="Day"
          dense
        />
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="grMonth"
          :items="GR_MONTHS"
          label="Month"
          dense
        />
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="grYear"
          :items="generateYears(1900, 2100)"
          label="Year"
          dense
        />
      </v-col>
    </v-row>

    <v-btn color="primary" class="mb-4" @click="onConvert">Convert</v-btn>

    <div v-if="convertedToEthiopian" class="text-center text-subtitle-1">
      {{ convertedToEthiopian[2] }} {{ ETH_MONTHS[convertedToEthiopian[1] - 1] }} {{ convertedToEthiopian[0] }}
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useDateConversion } from '@/composables/useDateConversion';

const {
  grDay, grMonth, grYear,
  convertedToEthiopian, convertGrToEth,
  GR_MONTHS, ETH_MONTHS, generateDays, generateYears
} = useDateConversion();

const onConvert = () => {
  convertedToEthiopian.value = convertGrToEth(
    grYear.value,
    GR_MONTHS.indexOf(grMonth.value) + 1,
    grDay.value
  );
};
</script>
