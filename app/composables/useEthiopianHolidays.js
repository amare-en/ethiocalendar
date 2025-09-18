import { ref, computed } from 'vue';
import { useAsyncData } from '#app';
import { getHolidaysForYear } from '@/utils/holidayUtils';
import { toEthiopian } from 'ethiopian-date';

export function useEthiopianHolidays() {
  const today = new Date();
  // Safely get Ethiopian today's date
  const ethiopianToday = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate()) || [new Date().getFullYear() - 8, 1, 1];

  const selectedYear = ref(ethiopianToday[0]);

  const { data: holidays, pending, error } = useAsyncData(
    'holidays',
    async () => {
      try {
        // Wrap synchronous function in a promise to handle errors
        const result = await Promise.resolve(getHolidaysForYear(selectedYear.value));
        return result;
      } catch (e) {
        console.error(`Failed to get holidays for year ${selectedYear.value}:`, e);
        // Throw a new error to be exposed by useAsyncData
        throw new Error('There was a problem calculating the holidays. Please try a different year or refresh the page.');
      }
    },
    {
      // Watch for changes in selectedYear to automatically refetch data
      watch: [selectedYear],
    }
  );

  const availableYears = computed(() => {
    const currentYear = ethiopianToday[0];
    const years = [];
    for (let i = -5; i <= 5; i++) {
      years.push(currentYear + i);
    }
    return years;
  });

  return {
    selectedYear,
    holidays,
    availableYears,
    pending,
    error,
  };
}