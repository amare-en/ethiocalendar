// utils/holidayUtils.js
import { ethiopianToGregorian, gregorianToEthiopian } from "./ethiopianDate";

export function formatHoliday(holiday) {
  const today = new Date();
  const currentEthiopianYear = gregorianToEthiopian(today).year;
  
  // Some holidays might fall in the next Ethiopian year
  const holidayIsNextYear = holiday.date.month < gregorianToEthiopian(today).month;
  const holidayYear = holidayIsNextYear ? currentEthiopianYear + 1 : currentEthiopianYear;

  const holidayDate = ethiopianToGregorian(holidayYear, holiday.date.month, holiday.date.day);

  const gregorianDate = holidayDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const dayOfWeek = holidayDate.toLocaleDateString("en-US", { weekday: "long" });

  const timeDifference = holidayDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return {
    ...holiday,
    ethiopianDate: `${holiday.date.day} ${holiday.date.month}, ${holidayYear}`,
    gregorianDate,
    dayOfWeek,
    daysLeft,
  };
}

export function getCategoryColor(category) {
  switch (category) {
    case "Religious": return "red-darken-2";
    case "National": return "green-darken-2";
    case "Cultural": return "yellow-darken-2";
    default: return "blue-grey-darken-2";
  }
}

export function getCountdownColor(days) {
  if (days <= 7 && days >= 0) return "text-green-darken-2";
  if (days > 7) return "text-blue-darken-2";
  return "text-grey-darken-1";
}
