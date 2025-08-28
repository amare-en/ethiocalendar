import { ref } from 'vue';
import { toEthiopian, toGregorian } from 'ethiopian-date';

// Ethiopian months
export const ETH_MONTHS = [
  "መስከረም","ጥቅምት","ህዳር","ታኅሣሥ",
  "ጥር","የካቲት","መጋቢት","ሚያዝያ",
  "ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","ጳጉሜ"
];

// Gregorian months
export const GR_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function useDateConversion() {
  // Ethiopian to Gregorian state
  const ethDay = ref(1);
  const ethMonth = ref(ETH_MONTHS[0]);
  const ethYear = ref(2015);
  const convertedToGregorian = ref<Date | null>(null);

  // Gregorian to Ethiopian state
  const grDay = ref(1);
  const grMonth = ref(GR_MONTHS[0]);
  const grYear = ref(new Date().getFullYear());
  const convertedToEthiopian = ref<[number, number, number] | null>(null);

  // Convert Ethiopian → Gregorian
  const convertEthToGr = (year: number, month: number, day: number) => {
    try {
      return toGregorian(year, month, day);
    } catch (e) {
      console.error('Invalid Ethiopian date:', e);
      return null;
    }
  };

  // Convert Gregorian → Ethiopian
  const convertGrToEth = (year: number, month: number, day: number) => {
    try {
      return toEthiopian(year, month, day);
    } catch (e) {
      console.error('Invalid Gregorian date:', e);
      return null;
    }
  };

  // Generate days for dropdown
  const generateDays = (count: number) => Array.from({ length: count }, (_, i) => i + 1);

  // Generate years for dropdown
  const generateYears = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Get number of days in Ethiopian month
  const getDaysInMonth = (year: number, month: number) => {
    if (month === 13) {
      return (year % 4 === 3) ? 6 : 5; // Pagume has 6 days in a leap year
    }
    return 30;
  };

  // Get current Ethiopian date
  const getCurrentEthiopianDate = () => {
    const today = new Date();
    const [year, month, day] = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate());
    return { year, month, day };
  };

  return {
    ethDay,
    ethMonth,
    ethYear,
    convertedToGregorian,
    grDay,
    grMonth,
    grYear,
    convertedToEthiopian,
    convertEthToGr,
    convertGrToEth,
    ETH_MONTHS,
    GR_MONTHS,
    generateDays,
    generateYears,
    getDaysInMonth,
    getCurrentEthiopianDate,
  };
}
