import { toGregorian, toEthiopian } from 'ethiopian-date';

// --- Islamic Holiday Calculation ---
function islamicToGregorian(hYear, hMonth, hDay) {
    const julianDay = hDay + Math.ceil(29.5 * (hMonth - 1)) + (hYear - 1) * 354 +
        Math.floor((3 + 11 * hYear) / 30) + 1948439.5 - 1;
    const l = julianDay + 68569;
    const n = Math.floor(4 * l / 146097);
    const l2 = l - Math.floor((146097 * n + 3) / 4);
    const i = Math.floor(4000 * (l2 + 1) / 1461001);
    const l3 = l2 - Math.floor(1461 * i / 4) + 31;
    const j = Math.floor(80 * l3 / 2447);
    const gDay = l3 - Math.floor(2447 * j / 80);
    const l4 = Math.floor(j / 11);
    const gMonth = j + 2 - 12 * l4;
    const gYear = 100 * (n - 49) + i + l4;
    return new Date(gYear, gMonth - 1, gDay, 0, 0, 0);
}

function getIslamicHolidays(year) {
    const holidays = {
        "Mawlid al-Nabi": { month: 3, day: 12, am: 'መውሊድ' },
        "Eid al-Fitr": { month: 10, day: 1, am: 'ኢድ አል-ፈጥር' },
        "Eid al-Adha": { month: 12, day: 10, am: 'አረፋ' },
    };
    const results = {};
    const hijriYear = Math.round((year - 622) * 33 / 32);
    for (const hijriCheckYear of [hijriYear, hijriYear + 1]) {
        for (const holidayName in holidays) {
            const holidayInfo = holidays[holidayName];
            const gregorianDate = islamicToGregorian(hijriCheckYear, holidayInfo.month, holidayInfo.day);
            if (gregorianDate.getFullYear() === year) {
                const key = results[holidayName] ? `${holidayName} (2)` : holidayName;
                results[key] = { date: gregorianDate, am: holidayInfo.am };
            }
        }
    }
    return results;
}

// --- Orthodox Christian Holiday Calculation ---
function getEthiopianEaster(year) {
  const a = year % 19;
  const b = year % 7;
  const c = year % 4;
  const d = (19 * a + 16) % 30;
  const e = (2 * c + 4 * b + 6 * d) % 7;
  const f = d + e;
  const julianMonth = f > 25 ? 4 : 3;
  const julianDay = f > 25 ? f - 25 : f + 5;
  const julianDateStr = `${year}-${String(julianMonth).padStart(2, '0')}-${String(julianDay).padStart(2, '0')}`;
  const date = new Date(julianDateStr);
  date.setDate(date.getDate() + 13);
  return date;
}

// --- Main Holiday Generation ---
export function getHolidaysForYear(etYear) {
  const holidays = [];
  const gregorianYearStart = toGregorian(etYear, 1, 1)[0];
  const gregorianYearEnd = toGregorian(etYear, 12, 30)[0];

  // 1. Fixed Ethiopian Holidays
  const fixedHolidays = [
    { title: { am: 'አዲስ ዓመት', en: 'Ethiopian New Year' }, date: { month: 1, day: 1 }, category: 'National', description: 'Marks the beginning of the Ethiopian calendar year.', detail:'/NewYear' },
    { title: { am: 'መስቀል', en: 'Finding of the True Cross' }, date: { month: 1, day: 17 }, category: 'Religious', description: 'Commemorates the finding of the True Cross.', detail:'/FindingOfTheTrueCross' },
    { title: { am: 'የገና በዓል', en: 'Ethiopian Christmas' }, date: { month: 4, day: 29 }, category: 'Religious', description: 'Celebrates the birth of Jesus Christ.', detail:'/EthiopiaChristmas'},
    { title: { am: 'ጥምቀት', en: 'Epiphany' }, date: { month: 5, day: 11 }, category: 'Religious', description: 'Celebrates the baptism of Jesus.', detail:'/EthiopiaEpiphany'},
    { title: { am: 'የአድዋ ድል በዓል', en: 'Adwa Victory Day' }, date: { month: 6, day: 23 }, category: 'National', description: 'Commemorates the Battle of Adwa.', detail:'/AdwaVictoryDay'},
    { title: { am: 'ዓለም አቀፍ የሠራተኞች ቀን', en: 'International Labor Day' }, date: { month: 8, day: 23 }, category: 'National', description: 'Celebrates workers achievements.', detail:'/LaborDay'},
    { title: { am: 'የአርበኞች ቀን', en: 'Patriots\' Victory Day' }, date: { month: 8, day: 27 }, category: 'National', description: 'Commemorates the end of Italian occupation.', detail:'/PatriotsVictoryDay'},
    { title: { am: 'የደርግ መውደቅ', en: 'Downfall of the Derg' }, date: { month: 9, day: 20 }, category: 'National', description: 'Marks the end of the Derg regime.', detail:'/DownfallOfDerg' },
  ];

  fixedHolidays.forEach(holiday => {
    const gregorianDateArr = toGregorian(etYear, holiday.date.month, holiday.date.day);
    const dateObj = new Date(gregorianDateArr[0], gregorianDateArr[1] - 1, gregorianDateArr[2]);
    holidays.push({
      ...holiday,
      ethiopianDate: { year: etYear, month: holiday.date.month, day: holiday.date.day },
      gregorianDate: dateObj,
      dayOfWeek: dateObj.toLocaleDateString('en-US', { weekday: 'long' }),
    });
  });

  // 2. Movable Orthodox Holidays
  const easterGregorian = getEthiopianEaster(gregorianYearEnd);
  const easterEthiopian = toEthiopian(easterGregorian.getFullYear(), easterGregorian.getMonth() + 1, easterGregorian.getDate());
  if (easterEthiopian[0] === etYear) {
      const goodFridayGregorian = new Date(easterGregorian);
      goodFridayGregorian.setDate(easterGregorian.getDate() - 2);
      const goodFridayEthiopian = toEthiopian(goodFridayGregorian.getFullYear(), goodFridayGregorian.getMonth() + 1, goodFridayGregorian.getDate());

      holidays.push({
        title: { am: 'ስቅለት', en: 'Good Friday' }, category: 'Religious', description: 'Commemorates the crucifixion of Jesus.', detail:'/GoodFriday' ,  ethiopianDate: { year: goodFridayEthiopian[0], month: goodFridayEthiopian[1], day: goodFridayEthiopian[2] },
        gregorianDate: goodFridayGregorian, dayOfWeek: 'Friday',
      });
      holidays.push({
        title: { am: 'ፋሲካ', en: 'Easter' }, category: 'Religious', description: 'Celebrates the resurrection of Jesus.', detail: '/Easter',
        ethiopianDate: { year: easterEthiopian[0], month: easterEthiopian[1], day: easterEthiopian[2] },
        gregorianDate: easterGregorian, dayOfWeek: 'Sunday',
      });
  }

  // 3. Movable Islamic Holidays
  const islamicHolidays = getIslamicHolidays(gregorianYearEnd);
  for (const name in islamicHolidays) {
      const holidayData = islamicHolidays[name];
      const etDate = toEthiopian(holidayData.date.getFullYear(), holidayData.date.getMonth() + 1, holidayData.date.getDate());
      if (etDate[0] === etYear) {
          holidays.push({
              title: { am: holidayData.am, en: name }, category: 'Religious',
              description: `Islamic holiday. Date is an estimate and may vary based on moon sighting.`, 
              ethiopianDate: { year: etDate[0], month: etDate[1], day: etDate[2] },
              gregorianDate: holidayData.date,
              dayOfWeek: holidayData.date.toLocaleDateString('en-US', { weekday: 'long' }),
          });
      }
  }

  // 4. Sort by Ethiopian Date
  return holidays.sort((a, b) => {
    if (a.ethiopianDate.month !== b.ethiopianDate.month) {
      return a.ethiopianDate.month - b.ethiopianDate.month;
    }
    return a.ethiopianDate.day - b.ethiopianDate.day;
  });
}

// --- Utility Functions ---
export function getCategoryColor(category) {
  switch (category) {
    case "Religious": return "teal";
    case "National": return "indigo";
    default: return "grey";
  }
}