
import { ref, computed } from 'vue';
import { getHolidaysForYear } from '@/utils/holidayUtils';
import { toEthiopian } from 'ethiopian-date';

export function useEthiopianHolidays() {
  const today = new Date();
  const ethiopianToday = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate());
  
  const selectedYear = ref(ethiopianToday[0]);
  const dialog = ref(false);
  const selectedHoliday = ref(null);

  const holidays = computed(() => {
    return getHolidaysForYear(selectedYear.value);
  });

  const availableYears = computed(() => {
    const currentYear = ethiopianToday[0];
    const years = [];
    for (let i = -5; i <= 5; i++) {
      years.push(currentYear + i);
    }
    return years;
  });

  function showDetails(holiday) {
    selectedHoliday.value = holiday;
    dialog.value = true;
  }

  return {
    selectedYear,
    holidays,
    availableYears,
    dialog,
    selectedHoliday,
    showDetails,
  };
}
