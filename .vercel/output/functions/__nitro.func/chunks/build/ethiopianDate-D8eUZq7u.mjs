import * as ethiopianDate from 'ethiopian-date';

function gregorianToEthiopian(date) {
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
function ethiopianToGregorian(year, month, day) {
  const result = ethiopianDate.toGregorian(year, month, day);
  return new Date(result[0], result[1] - 1, result[2]);
}
function getEthiopianMonthName(month) {
  const monthNames = [
    "መስከረም",
    "ጥቅምት",
    "ኅዳር",
    "ታኅሣሥ",
    "ጥር",
    "የካቲት",
    "መጋቢት",
    "ሚያዝያ",
    "ግንቦት",
    "ሰኔ",
    "ሐምሌ",
    "ነሐሴ",
    "ጳጉሜ"
  ];
  return monthNames[month - 1] || "";
}
const ethiopianMonths = [
  "Meskerem",
  "Tekemt",
  "Hidar",
  "Tahsas",
  "Tir",
  "Yekatit",
  "Megabit",
  "Miyazya",
  "Ginbot",
  "Sene",
  "Hamle",
  "Nehase",
  "Pagume"
];
function getEnglishEthiopianMonthName(month) {
  return ethiopianMonths[month - 1] || "";
}
function getEthiopianDayName(dayIndex) {
  const dayNames = [
    "እሑድ",
    "ሰኞ",
    "ማክሰኞ",
    "ረቡዕ",
    "ሐሙስ",
    "ዓርብ",
    "ቅዳሜ"
  ];
  return dayNames[dayIndex] || "";
}
function getEthiopianMonthDays(year, month) {
  if (month === 13) {
    return isEthiopianLeapYear(year) ? 6 : 5;
  }
  return 30;
}
function isEthiopianLeapYear(year) {
  return year % 4 === 3;
}
function getCurrentEthiopianDate() {
  return gregorianToEthiopian(/* @__PURE__ */ new Date());
}

export { getCurrentEthiopianDate as a, getEthiopianMonthName as b, getEthiopianDayName as c, getEthiopianMonthDays as d, ethiopianToGregorian as e, gregorianToEthiopian as f, getEnglishEthiopianMonthName as g };
//# sourceMappingURL=ethiopianDate-D8eUZq7u.mjs.map
