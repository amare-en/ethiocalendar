// Try this instead
import * as ethiopianDate from 'ethiopian-date';
// Or
// Convert Gregorian to Ethiopian date :cite[5]
export function gregorianToEthiopian(date) {
  const result = ethiopianDate.toEthiopian(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  return {
    year: result[0],
    month: result[1],
    day: result[2],
    monthName: getEthiopianMonthName(result[1]),
    dayName: getEthiopianDayName(date.getDay())
  };
}

// Convert Ethiopian to Gregorian date :cite[5]
export function ethiopianToGregorian(year, month, day) {
  const result = ethiopianDate.toGregorian(year, month, day);
  return new Date(result[0], result[1] - 1, result[2]);
}

// Get Ethiopian month names
export function getEthiopianMonthName(month) {
  const monthNames = [
    'መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 
    'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 
    'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜ'
  ];
  return monthNames[month - 1] || '';
}

// Add English month names for broader use
export const ethiopianMonths = [
  'Meskerem', 'Tekemt', 'Hidar', 'Tahsas', 'Tir', 'Yekatit',
  'Megabit', 'Miyazya', 'Ginbot', 'Sene', 'Hamle', 'Nehase', 'Pagume'
];

// Get English Ethiopian month names
export function getEnglishEthiopianMonthName(month) {
  return ethiopianMonths[month - 1] || '';
}

// Get Ethiopian day names
export function getEthiopianDayName(dayIndex) {
  const dayNames = [
    'እሑድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 
    'ሐሙስ', 'ዓርብ', 'ቅዳሜ'
  ];
  return dayNames[dayIndex] || '';
}

// Get all days in an Ethiopian month
export function getEthiopianMonthDays(year, month) {
  // The 13th month (Pagume) has 5 or 6 days depending on leap year :cite[1]:cite[2]
  if (month === 13) {
    return isEthiopianLeapYear(year) ? 6 : 5;
  }
  return 30; // All other months have 30 days :cite[1]
}

// Check if it's an Ethiopian leap year
export function isEthiopianLeapYear(year) {
  // Ethiopian leap years occur every 4 years :cite[2]
  return year % 4 === 3;
}

// Get current Ethiopian date
export function getCurrentEthiopianDate() {
  return gregorianToEthiopian(new Date());
}