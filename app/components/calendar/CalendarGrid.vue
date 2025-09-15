<template>
  <v-card class="mb-4">
    <v-card-title class="bg-primary text-white text-center text-subtitle-1 font-weight-bold">
      {{ monthName }} {{ year }}
    </v-card-title>
    <v-card-text>
 <v-table
  density="comfortable"
  fixed-header
  class="calendar-table"
>
  <CalendarWeekdays 
    :weekdays="weekDays" 
    :show-gregorian="showGregorian" 
  />
  <tbody>
    <tr v-for="(week, index) in calendarGrid" :key="index">
      <CalendarDayCell  
        v-for="(day, dayIndex) in week"
        :key="dayIndex"
        :day="day"
        :is-current-day="isCurrentDay(day)"
        :is-selected="isSelected(day)"
        :is-holiday="isHoliday(day)"
        :show-gregorian="showGregorian"
        @select-date="selectDate"
      />
    </tr>
  </tbody>
</v-table>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  ethiopianToGregorian,
  getEthiopianMonthDays,
  getEthiopianDayName,
  getEthiopianMonthName,
  getCurrentEthiopianDate,
} from '~/utils/ethiopianDate';
import CalendarWeekdays from '~/components/calendar/CalendarWeekdays.vue';
import CalendarDayCell from '~/components/calendar/CalendarDayCell.vue';

// Define the type for a day object
interface Day {
  day: number;
  isCurrentMonth: boolean;
  ethiopian: { year: number; month: number; day: number };
  gregorianDate: string;
  date: Date;
}

const props = defineProps<{
  year: number;
  month: number;
  showGregorian: boolean;
  holidays: any[];
}>();

const selectedDate = ref<Day | null>(null);
const monthName = computed(() => getEthiopianMonthName(props.month));
const weekDays = computed(() => Array.from({ length: 7 }, (_, i) => getEthiopianDayName(i)));



const calendarGrid = computed(() => {
  const daysInMonth = getEthiopianMonthDays(props.year, props.month);
  const firstDayOfEthMonth = ethiopianToGregorian(props.year, props.month, 1);
  const startingDayOfWeek = firstDayOfEthMonth.getDay();

  const days: (Day | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const gregorianDate = ethiopianToGregorian(props.year, props.month, day);
    days.push({
      day,
      isCurrentMonth: true,
      ethiopian: { year: props.year, month: props.month, day },
      gregorianDate: gregorianDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      date: gregorianDate,
    });
  }

  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    const week = days.slice(i, i + 7);
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }
  return weeks;
});

function isCurrentDay(day: Day | null): boolean {
  if (!day) return false;
  const today = getCurrentEthiopianDate();
  return (
    day.ethiopian.year === today.year &&
    day.ethiopian.month === today.month &&
    day.ethiopian.day === today.day
  );
}

function isSelected(day: Day | null): boolean {
  if (!day || !selectedDate.value) return false;
  return (
    day.ethiopian.year === selectedDate.value.ethiopian.year &&
    day.ethiopian.month === selectedDate.value.ethiopian.month &&
    day.ethiopian.day === selectedDate.value.ethiopian.day
  );
}

function isHoliday(day: Day | null): boolean {
  if (!day) return false;
  return props.holidays.some(
    (holiday) =>
      holiday.year === day.ethiopian.year &&
      holiday.month === day.ethiopian.month &&
      holiday.day === day.ethiopian.day
  );
}
function selectDate(day: Day | null) {
  if (!day) return;
  selectedDate.value = day;
}
</script>
<style scoped>
.calendar-table {
  width: 100%;
  table-layout: fixed; /* Keeps equal column widths */
  border-collapse: collapse;
 
}

.calendar-table th,
.calendar-table td {
  text-align: center;
  white-space: nowrap;
  padding: 6px;
  font-size: 0.95rem;
}

/* 🔹 Small screens: shrink font & padding */
@media (max-width: 768px) {
  .calendar-table th,
  .calendar-table td {
    font-size: 0.8rem;
    padding: 4px;
  }
}

/* 🔹 Extra small screens: stack-friendly */
@media (max-width: 480px) {
  .calendar-table th,
  .calendar-table td {
    font-size: 0.7rem;
    padding: 2px;
  }
}
</style>
