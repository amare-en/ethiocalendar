const holidays: Record<number, Record<number, { am: string; en: string }>> = {
    1: {
        1: { am: 'አዲስ ዓመት', en: 'New Year' },
        17: { am: 'መስቀል', en: 'Finding of the True Cross' }
    },
    4: { 29: { am: 'ልደት', en: 'Christmas' } },
    5: { 11: { am: 'ጥምቀት', en: 'Epiphany' } },
    6: { 23: { am: 'የሰማዕታት ቀን', en: 'Martyrs\' Day' } },
    8: { 24: { am: 'የድል ቀን', en: 'Victory Day' } },
    9: { 1: { am: 'ላባ', en: 'Labor Day' } },
    10: { 20: { am: 'የነጻነት ቀን', en: 'Freedom Day' } },
};

export function isHoliday(month: number, day: number): { am: string; en: string } | null {
    return holidays[month]?.[day] || null;
}

export function getHolidaysForYear(year: number): Array<{ month: number, day: number, name: { am: string; en: string } }> {
    const yearHolidays = [];
    for (const month in holidays) {
        for (const day in holidays[month]) {
            yearHolidays.push({
                month: parseInt(month),
                day: parseInt(day),
                name: holidays[month][day]
            });
        }
    }
    // In a real app, you would calculate floating holidays for the given 'year' here.
    return yearHolidays;
}
