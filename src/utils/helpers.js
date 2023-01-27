export function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const positiveModulo = (a, b) => ((a % b) + b) % b;
