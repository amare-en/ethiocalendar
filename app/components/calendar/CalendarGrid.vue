<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="12" class="calendar-card">
          <!-- Calendar Header -->
          <v-card-title class="bg-primary py-4">
            <v-row align="center" class="px-2">
              <v-col cols="12" sm="6" class="text-center text-sm-left">
                <h1 class="text-h4 text-white">
                  {{ currentEthiopianMonth }} {{ currentEthiopianYear }}
                </h1>
                <div v-if="showGregorian" class="text-caption text-white mt-1">
                  {{ currentGregorianDate }}
                </div>
              </v-col>
              <v-col cols="12" sm="6" class="text-center text-sm-right">
                <v-btn-group variant="outlined" color="white">
                  <v-btn @click="prevYear" icon="mdi-chevron-double-left" size="small"></v-btn>
                  <v-btn @click="prevMonth" icon="mdi-chevron-left" size="small"></v-btn>
                  <v-btn @click="goToToday" class="mx-2" size="small">Today</v-btn>
                  <v-btn @click="nextMonth" icon="mdi-chevron-right" size="small"></v-btn>
                  <v-btn @click="nextYear" icon="mdi-chevron-double-right" size="small"></v-btn>
                </v-btn-group>
              </v-col>
            </v-row>
          </v-card-title>

          <!-- Week Days Header -->
          <v-card-text class="pa-0">
            <v-table density="comfortable" fixed-header>
              <thead>
                <tr>
                  <th v-for="day in weekDays" :key="day" 
                      class="text-center text-subtitle-2 font-weight-bold py-3 bg-grey-lighten-3">
                    {{ day }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(week, index) in calendarWeeks" :key="index">
                  <td 
                    v-for="(day, dayIndex) in week" 
                    :key="dayIndex"
                    class="text-center day-cell"
                    :class="{
                      'current-day': isCurrentDay(day),
                      'selected-day': isSelected(day),
                      'different-month': day && !day.isCurrentMonth
                    }"
                    @click="selectDate(day)"
                  >
                    <div v-if="day" class="day-number">{{ day.day }}</div>
                    <div v-else class="empty-day"></div>
                    <div v-if="showGregorian && day" class="gregorian-date text-caption">
                      {{ day.gregorianDate }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <!-- Calendar Controls -->
          <v-card-actions class="bg-grey-lighten-3 py-3">
            <v-switch
              v-model="showGregorian"
              label="Show Gregorian dates"
              hide-details
              color="primary"
              density="compact"
            ></v-switch>
            <v-spacer></v-spacer>
            <v-btn 
              @click="showDateConverter = true" 
              variant="outlined" 
              size="small"
              color="primary"
            >
              Date Converter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Date Converter Dialog -->
    <v-dialog v-model="showDateConverter" max-width="500">
      <DateConverterDialog @close="showDateConverter = false" />
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { 
  gregorianToEthiopian, 
  getEthiopianMonthDays, 
  getEthiopianMonthName,
  getEthiopianDayName,
  ethiopianToGregorian,
  getCurrentEthiopianDate
} from '@/utils/ethiopianDate';

const currentDate = ref(new Date());
const selectedDate = ref(null);
const showGregorian = ref(false);
const showDateConverter = ref(false);

// Get current Ethiopian date
const currentEthiopian = computed(() => {
  return gregorianToEthiopian(currentDate.value);
});

const currentEthiopianYear = computed(() => {
  return currentEthiopian.value.year;
});

const currentEthiopianMonth = computed(() => {
  return getEthiopianMonthName(currentEthiopian.value.month);
});

const currentGregorianDate = computed(() => {
  return currentDate.value.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const weekDays = computed(() => {
  return Array.from({ length: 7 }, (_, i) => getEthiopianDayName(i));
});

const calendarWeeks = computed(() => {
  const year = currentEthiopian.value.year;
  const month = currentEthiopian.value.month;
  const daysInMonth = getEthiopianMonthDays(year, month);
  
  // Get first day of the month
  const firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
  const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Create calendar grid
  const weeks = [];
  let week = Array(7).fill(null);
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dayIndex = (startingDayOfWeek + day - 1) % 7;
    
    // Calculate Gregorian date for this Ethiopian day
    const gregorianDate = ethiopianToGregorian(year, month, day);
    const gregorianFormatted = gregorianDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
    
    week[dayIndex] = {
      day,
      isCurrentMonth: true,
      ethiopian: { year, month, day },
      gregorianDate: gregorianFormatted
    };
    
    if (dayIndex === 6 || day === daysInMonth) {
      weeks.push(week);
      week = Array(7).fill(null);
    }
  }
  
  return weeks;
});

function isCurrentDay(day) {
  if (!day) return false;
  
  const today = getCurrentEthiopianDate();
  return (
    day.ethiopian.year === today.year &&
    day.ethiopian.month === today.month &&
    day.ethiopian.day === today.day
  );
}

function isSelected(day) {
  if (!day || !selectedDate.value) return false;
  
  return (
    day.ethiopian.year === selectedDate.value.ethiopian.year &&
    day.ethiopian.month === selectedDate.value.ethiopian.month &&
    day.ethiopian.day === selectedDate.value.ethiopian.day
  );
}

function selectDate(day) {
  if (!day) return;
  selectedDate.value = day;
  // Emit event or handle date selection
}

function prevMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1,
    1
  );
}

function nextMonth() {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1,
    1
  );
}

function prevYear() {
  currentDate.value = new Date(
    currentDate.value.getFullYear() - 1,
    currentDate.value.getMonth(),
    1
  );
}

function nextYear() {
  currentDate.value = new Date(
    currentDate.value.getFullYear() + 1,
    currentDate.value.getMonth(),
    1
  );
}

function goToToday() {
  currentDate.value = new Date();
  selectedDate.value = null;
}

onMounted(() => {
  // Initialize with current date
  goToToday();
});
</script>

<style scoped>
.calendar-card {
  border-radius: 12px;
  overflow: hidden;
}

.day-cell {
  height: 80px;
  width: 14.28%;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  position: relative;
}

.day-cell:hover {
  background-color: #f5f5f5;
}

.day-number {
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 8px;
}

.gregorian-date {
  font-size: 0.7rem;
  color: #757575;
  margin-top: 2px;
}

.current-day {
  background-color: #e3f2fd;
}

.current-day .day-number {
  font-weight: bold;
  color: #1976d2;
}

.selected-day {
  background-color: #bbdefb;
}

.different-month {
  color: #9e9e9e;
}

.empty-day {
  height: 100%;
}
</style>