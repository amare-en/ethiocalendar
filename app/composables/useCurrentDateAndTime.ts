import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
  gregorianToEthiopian,
  getEthiopianMonthName,
  getEthiopianDayName,
} from '~/utils/ethiopianDate';

/**
 * Composable to get and update the current Ethiopian and Gregorian date and time.
 * @returns An object containing reactive date and time properties.
 */
export function useCurrentDateAndTime() {
  const currentDate = ref(new Date());
  let timer: ReturnType<typeof setInterval>;
  // Convert the current Gregorian date to Ethiopian
  const ethiopian = computed(() => gregorianToEthiopian(currentDate.value));

  // Formatted Gregorian date string
  const gregorianDate = computed(() =>
    currentDate.value.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })
  );

  // Formatted Ethiopian date string
  const ethiopianDate = computed(() => {
    const { year, month, day } = ethiopian.value;
    const monthName = getEthiopianMonthName(month);
    // getDay() returns 0 for Sunday, 1 for Monday, etc. This matches the Ethiopian day name utility.
    const dayName = getEthiopianDayName(currentDate.value.getDay());
    return `${dayName}, ${monthName} ${day}, ${year}`;
  });

  // Formatted Ethiopian time string
  const ethiopianTime = computed(() => {
    // Assuming your gregorianToEthiopian function returns the Ethiopian hour, minute, and second.
    // Ethiopia uses a 12-hour clock system that starts at 6:00 AM Gregorian time.
    // The following conversion adjusts for this.
    let hour = currentDate.value.getHours() - 6;
    if (hour < 0) {
      hour += 24;
    }
    const minute = currentDate.value.getMinutes();
    const second = currentDate.value.getSeconds();

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
  });

  // Formatted Gregorian time string
  const gregorianTime = computed(() =>
    currentDate.value.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use 24-hour format
    })
  );

  // Start the timer to update the date every second
  onMounted(() => {
    timer = setInterval(() => {
      currentDate.value = new Date();
    }, 1000);
  });

  // Clean up the timer when the component is unmounted
  onUnmounted(() => {
    clearInterval(timer);
  });

  return { ethiopianDate, ethiopianTime, gregorianDate, gregorianTime };
}