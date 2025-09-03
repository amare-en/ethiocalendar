/**
 * Static Ethiopian holidays data.
 * This data can be easily updated without modifying the main component logic.
 */
const staticHolidays = [
  {
    title: { am: 'አዲስ ዓመት', en: 'Ethiopian New Year' },
    date: { month: 1, day: 1 },
    category: 'National',
    description: 'Marks the beginning of the Ethiopian calendar year, also known as Enkutatash.'
  },
  {
    title: { am: 'መስቀል', en: 'Meskel' },
    date: { month: 1, day: 17 },
    category: 'Religious',
    description: 'A major religious holiday commemorating the finding of the True Cross.'
  },
  {
    title: { am: 'ገና', en: 'Christmas' },
    date: { month: 4, day: 29 },
    category: 'Religious',
    description: 'The Ethiopian Orthodox celebration of the birth of Jesus Christ.'
  },
  {
    title: { am: 'ጥምቀት', en: 'Epiphany / Timkat' },
    date: { month: 5, day: 11 },
    category: 'Religious',
    description: 'Celebrates the baptism of Jesus Christ in the Jordan River.'
  },
  {
    title: { am: 'የአድዋ ድል በዓል', en: 'Adwa Victory Day' },
    date: { month: 6, day: 23 },
    category: 'National',
    description: 'Commemorates Ethiopia\'s victory over Italy in the Battle of Adwa.'
  },
  {
    title: { am: 'የዓለም የሠራተኞች ቀን', en: 'International Workers\' Day' },
    date: { month: 8, day: 23 },
    category: 'Cultural',
    description: 'A global holiday celebrating the achievements of workers.'
  },
  {
    title: { am: 'የአርበኞች ቀን', en: 'Patriots\' Victory Day' },
    date: { month: 8, day: 27 },
    category: 'National',
    description: 'Honors the Ethiopian patriots who fought against the Italian occupation.'
  },
];

export default staticHolidays;
