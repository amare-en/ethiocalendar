
import { computed, Ref } from 'vue';
import { toEthiopian, toGregorian } from 'ethiopian-date';

// A simplified function to calculate Ethiopian Easter.
const calculateEthiopianEaster = (year: number) => {
  // Algorithm to find Orthodox Easter for a given Gregorian year
  const gregorianYear = year + 8;
  const a = gregorianYear % 4;
  const b = gregorianYear % 7;
  const c = gregorianYear % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;

  // Convert Gregorian Easter to Ethiopian date
  const easterGregorian = new Date(gregorianYear, month - 1, day);
  const ethiopianDate = toEthiopian(easterGregorian.getFullYear(), easterGregorian.getMonth() + 1, easterGregorian.getDate());

  return { month: ethiopianDate[1], day: ethiopianDate[2] };
};


// Ethiopian holidays
const getFixedHolidays = (year: number) => {
  return [
    { name: 'Enkutatash (New Year)', month: 1, day: 1, category: 'National' },
    { name: 'Meskel', month: 1, day: 17, category: 'National' },
    { name: 'Genna (Christmas)', month: 4, day: 29, category: 'Religious' },
    { name: 'Timkat (Epiphany)', month: 5, day: 11, category: 'Religious' },
    { name: 'Adwa Victory Day', month: 6, day: 23, category: 'National' },
    { name: 'Labour Day', month: 8, day: 23, category: 'National' },
    { name: 'Patriots' Victory Day', month: 8, day: 27, category: 'National' },
    { name: 'Downfall of the Derg', month: 9, day: 20, category: 'National' },
  ];
};

const getMovableHolidays = (year: number) => {
  const easter = calculateEthiopianEaster(year);
  const goodFridayDateGregorian = toGregorian(year, easter.month, easter.day);
  const goodFridayDate = new Date(goodFridayDateGregorian[0], goodFridayDateGregorian[1]-1, goodFridayDateGregorian[2]);
  goodFridayDate.setDate(goodFridayDate.getDate() - 2);
  const goodFriday = toEthiopian(goodFridayDate.getFullYear(), goodFridayDate.getMonth() + 1, goodFridayDate.getDate());

  // Note: Islamic holidays depend on lunar sightings and are harder to predict.
  // This is a simplified approximation.
  return [
    { name: 'Mawlid (Birth of the Prophet)', month: 3, day: 5, category: 'Religious' }, // Rabi' al-awwal 12
    { name: 'Eid al-Fitr', month: 10, day: 1, category: 'Religious' }, // Shawwal 1
    { name: 'Eid al-Adha', month: 12, day: 10, category: 'Religious' }, // Dhu al-Hijjah 10
    { name: 'Good Friday', month: goodFriday[1], day: goodFriday[2], category: 'Religious' },
    { name: 'Fasika (Easter)', month: easter.month, day: easter.day, category: 'Religious' },
  ];
};

export function useEthiopianHolidays(year: Ref<number>) {
  const holidays = computed(() => {
    const fixed = getFixedHolidays(year.value);
    const movable = getMovableHolidays(year.value);

    return [...fixed, ...movable].map(holiday => ({
      ...holiday,
      year: year.value,
    }));
  });

  return {
    holidays,
  };
}
