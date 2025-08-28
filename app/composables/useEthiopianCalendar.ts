import { ref, onMounted, onUnmounted } from 'vue';
import { toEthiopian } from 'ethiopian-date';

export const ETH_MONTHS = [
  "መስከረም", "ጥቅምት", "ህዳር", "ታኅሣሥ",
  "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ",
  "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"
];

export function useEthiopianCalendar() {
  const now = ref(new Date());
  const ethiopianDate = ref('');
  const ethiopianTime = ref('');
  const gregorianDate = ref('');
  const gregorianTime = ref('');
  let timer: any;

  const updateDateTime = () => {
    now.value = new Date();
    const today = now.value;

    // Ethiopian Date
    const [year, month, day] = toEthiopian(today.getFullYear(), today.getMonth() + 1, today.getDate());
    ethiopianDate.value = `${ETH_MONTHS[month - 1]} ${day}, ${year}`;

    // Ethiopian Time
    // Ethiopian time starts from sunrise (6:00 AM).
    let hours = today.getHours() - 6;
    if (hours < 0) {
      hours += 24;
    }
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const ampm = hours >= 12 ? 'ከሰዓት' : 'ከጠዋቱ';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    ethiopianTime.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;


    // Gregorian Date
    gregorianDate.value = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Gregorian Time
    gregorianTime.value = today.toLocaleTimeString('en-US');
  };

  onMounted(() => {
    updateDateTime();
    timer = setInterval(updateDateTime, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return {
    ethiopianDate,
    ethiopianTime,
    gregorianDate,
    gregorianTime,
  };
}
