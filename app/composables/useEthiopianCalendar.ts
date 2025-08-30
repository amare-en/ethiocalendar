import { ref, computed } from 'vue';
import {
  gregorianToEthiopian,
  getEthiopianMonthDays,
  getEthiopianMonthName,
  getEthiopianDayName,
  ethiopianToGregorian,
  getCurrentEthiopianDate,
} from '~/utils/ethiopianDate';

interface Day {
  day: number;
  isCurrentMonth: boolean;
  ethiopian: { year: number; month: number; day: number };
  gregorianDate: string;
  date: Date;
}

export function useEthiopianCalendar() {
  const currentDate = ref(new Date());
  const selectedDate = ref<Day | null>(null);

  const currentEthiopian = computed(() => gregorianToEthiopian(currentDate.value));
  const currentEthiopianYear = computed(() => currentEthiopian.value.year);
  const currentEthiopianMonth = computed(() => getEthiopianMonthName(currentEthiopian.value.month));
  const currentGregorianDate = computed(() =>
    currentDate.value.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  );

  const weekDays = computed(() => Array.from({ length: 7 }, (_, i) => getEthiopianDayName(i)));

  const calendarGrid = computed(() => {
    const year = currentEthiopian.value.year;
    const month = currentEthiopian.value.month;
    const daysInMonth = getEthiopianMonthDays(year, month);

    const firstDayOfEthMonth = ethiopianToGregorian(year, month, 1);
    const startingDayOfWeek = firstDayOfEthMonth.getDay(); // 0 = Sunday

    const days: (Day | null)[] = [];
    // Add blank days for the start of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const gregorianDate = ethiopianToGregorian(year, month, day);
      days.push({
        day,
        isCurrentMonth: true,
        ethiopian: { year, month, day },
        gregorianDate: gregorianDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        date: gregorianDate,
      });
    }

    // Chunk into weeks
    const weeks: (Day | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      const week = days.slice(i, i + 7);
      // Pad last week if necessary
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

  function selectDate(day: Day | null) {
    if (!day) return;
    selectedDate.value = day;
  }

  function prevMonth() { currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 15); }
  function nextMonth() { currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 15); }
  function prevYear() { currentDate.value = new Date(currentDate.value.getFullYear() - 1, currentDate.value.getMonth(), 15); }
  function nextYear() { currentDate.value = new Date(currentDate.value.getFullYear() + 1, currentDate.value.getMonth(), 15); }
  function goToToday() { currentDate.value = new Date(); selectedDate.value = null; }

  return { currentDate, selectedDate, currentEthiopianYear, currentEthiopianMonth, currentGregorianDate, weekDays, calendarGrid, isCurrentDay, isSelected, selectDate, prevMonth, nextMonth, prevYear, nextYear, goToToday };
}
