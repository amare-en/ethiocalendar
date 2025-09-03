<template>
  <v-container
    class="holiday-item pa-5 transition-all"
    :class="{ 'upcoming-item': holiday.daysLeft <= 7 }"
  >
    <v-row align="center" no-gutters>
      <v-col cols="12">
        <!-- Title -->
        <div class="text-h6 text-blue-darken-4 font-weight-bold mb-2">
          {{ holiday.title.am }} / {{ holiday.title.en }}
              <v-chip
            :color="color"
            class="font-weight-bold text-white"
            size="small"
            label
          >
            {{ holiday.category }}
          </v-chip>
        </div>
      
        <!-- Dates -->
        <div class="d-flex flex-wrap gap-3 mb-3">
          <div class="text-body-2 font-weight-medium">
            📅 {{ holiday.ethiopianDate }} / {{ holiday.gregorianDate }}
          </div>
        </div>
        <!-- Description -->
        <p class="text-body-2 text-medium-emphasis clamp-lines mb-3">
          {{ holiday.description }}
          <NuxtLink to="#" class="text-primary text-decoration-none d-inline-flex align-center">
          Read More
          <v-icon icon="mdi-chevron-right" size="small" class="ml-1"></v-icon>
        </NuxtLink>
        </p>
        <!-- Countdown & Category -->
        <div class="d-flex align-center flex-wrap gap-3 mb-2">
          <div class="text-h6 font-weight-bold" :class="countdownColor">
            {{ holiday.daysLeft >= 0 ? `${holiday.daysLeft} days left` : 'Passed' }}
          </div>
        </div>
      </v-col>
    </v-row>

    <v-divider class="mt-4"></v-divider>
  </v-container>
</template>

<script setup>
import { NuxtLink } from "#components";
import { getCategoryColor, getCountdownColor } from "@/utils/holidayUtils";

const props = defineProps({
  holiday: { type: Object, required: true }
});

const color = getCategoryColor(props.holiday.category);
const countdownColor = getCountdownColor(props.holiday.daysLeft);
</script>

<style scoped>
.holiday-item {
  transition: background-color 0.25s ease;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  border: 1px solid transparent;
}
.upcoming-item {
  border-color: #1976d2;
}
.holiday-item:hover {
  background-color: #f5f5f5;
}
</style>
<!--

       <v-btn
            text
            small
            color="blue-darken-4"
            class="text-none font-weight-medium ml-1"
            @click="$emit('details', holiday)"
          >
            Read More
          </v-btn>
-->