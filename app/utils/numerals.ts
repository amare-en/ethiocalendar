// utils/numerals.ts
const GEEZ_MAP: Record<number, string> = {
  1: "፩", 2: "፪", 3: "፫", 4: "፬", 5: "፭",
  6: "፮", 7: "፯", 8: "፰", 9: "፱",
  10: "፲", 20: "፳", 30: "፴", 40: "፵", 50: "፶",
  60: "፷", 70: "፸", 80: "፹", 90: "፺",
  100: "፻", 10000: "፼"
};

/**
 * Convert a (positive) integer to a Ge'ez numeral string.
 * Sufficient for date values (days up to 31, years).
 */
export function toGeez(n: number): string {
  if (n === 0) return "0";
  if (n <= 10) return GEEZ_MAP[n] ?? String(n);

  let out = "";
  let num = n;

  if (num >= 10000) {
    const blocks = Math.floor(num / 10000);
    out += toGeez(blocks) + GEEZ_MAP[10000];
    num %= 10000;
  }

  if (num >= 100) {
    const hundreds = Math.floor(num / 100);
    if (hundreds > 1) out += toGeez(hundreds);
    out += GEEZ_MAP[100];
    num %= 100;
  }

  if (num >= 10) {
    const tens = Math.floor(num / 10) * 10;
    out += GEEZ_MAP[tens] ?? "";
    num %= 10;
  }

  if (num > 0) out += GEEZ_MAP[num] ?? "";

  return out || String(n);
}
