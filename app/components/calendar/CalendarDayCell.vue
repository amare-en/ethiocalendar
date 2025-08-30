<template>
  <td
    class="text-center day-cell"
    :class="{
      'current-day': isCurrentDay,
      'selected-day': isSelected,
      'holiday-day': isHoliday,
      'different-month': day && !day.isCurrentMonth,
      'is-clickable': day,
    }"
    @click="$emit('select-date', day)"
  >
    <div v-if="day" class="day-content">
      <div class="top-row">
        <span class="geez-numeral">{{ toGeez(day.day) }}</span>
        <span class="arabic-numeral">{{ day.day }}</span>
      </div>
      <div v-if="showGregorian" class="gregorian-date-display">
        {{ day.gregorianDate }}
      </div>
    </div>
    <div v-else class="empty-day"></div>
  </td>
</template>

<script setup lang="ts">
import { toGeez } from '~/utils/numerals';

interface Day {
  day: number;
  isCurrentMonth: boolean;
  ethiopian: { year: number; month: number; day: number };
  gregorianDate: string;
  date: Date;
}

defineProps<{
  day: Day | null;
  isCurrentDay: boolean;
  isSelected: boolean;
  isHoliday: boolean; // <-- Added prop
  showGregorian: boolean;
}>();

defineEmits(['select-date']);
</script>

<style scoped>
.day-cell {
  height: 80px;
  width: calc(100% / 7);
  padding: 4px;
  border: 1px solid #e0e0e0;
  position: relative;
  transition: background-color 0.2s ease-in-out;
}

.day-cell.is-clickable {
  cursor: pointer;
}

.day-cell.is-clickable:hover {
  background-color: #f5f5f5;
}

.day-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.top-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.geez-numeral {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: #1e1e2f;
}

.arabic-numeral {
  font-size: 1rem;
  color: #757575;
}

.gregorian-date-display {
  font-size: 0.8rem;
  font-weight: 500;
  color: #757575;
}

/* Day states and highlights */
.current-day {
  background-color: #e3f2fd;
  border: 2px solid #1976d2;
  border-radius: 8px;
  z-index: 1;
}

.selected-day {
  background-color: #bbdefb;
}

.holiday-day {
  background-color: #fce4ec; /* Light pink background */
  border: 2px solid #d81b60; /* Dark pink border */
  color: #d81b60;
  border-radius: 8px;
}

.holiday-day .geez-numeral,
.holiday-day .arabic-numeral,
.holiday-day .gregorian-date-display {
  color: #d81b60;
}

.different-month {
  color: #b0b0b0;
  background-color: #fafafa;
}

.empty-day {
  height: 100%;
}
</style>