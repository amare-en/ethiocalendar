import { ref } from 'vue';
import { toEthiopian, toGregorian } from 'ethiopian-date';

// Ethiopian months
export const ETH_MONTHS = [
  "1 - መስከረም / Meskerem","2 - ጥቅምት / Teqember","3 - ህዳር / Hidar","4 - ታኅሣሥ / Tahsas",
  "5 - ጥር / Tir","6 - የካቲት / Genbot","7 - መጋቢት / Megabit","8 - ሚያዝያ / Miyazya",
  "9 - ግንቦት / Ginbot","10 - ሰኔ / Sene","11 - ሐምሌ / Hamle","12 - ነሐሴ / Nehasé","13 - ጳጉሜ / Paguemé"
];

// Gregorian months
export const GR_MONTHS = [
  "1 - January", "2 - February", "3 - March", "4 - April", "5 - May", "6 - June",
  "7 - July", "8 - August", "9 - September", "10 - October", "11 - November", "12 - December"
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
  // inside useDateConversion() - replace the old convertEthToGr
const convertEthToGr = (year: number, month: number, day: number): Date | null => {
  try {
    const res = toGregorian(year, month, day);

    if (!res) return null;

    // If the library already returned a Date
    if (res instanceof Date) {
      return res;
    }

    // If the library returned [year, month, day]
    if (Array.isArray(res) && res.length >= 3) {
      const [y, m, d] = res;
      return new Date(y, m - 1, d);
    }

    // If the library returned an object { year, month, day }
    if (typeof res === 'object' && 'year' in res && 'month' in res && 'day' in res) {
      // @ts-ignore - defensive access
      const y = (res as any).year;
      const m = (res as any).month;
      const d = (res as any).day;
      return new Date(y, m - 1, d);
    }

    // If it's a string or other, try to coerce to Date
    const coerced = new Date(res as any);
    return isNaN(coerced.getTime()) ? null : coerced;
  } catch (e) {
    console.error('Invalid Ethiopian date (convertEthToGr):', e);
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
  //get current Gregorian date
//  const currentGregorianDate = new Date();

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
