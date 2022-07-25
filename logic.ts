export const computeX = (D: number, F: number, N: number, C: number) => N /((C - 2 * F) * D);

export const isValid = (value: string) => {
  const num = parseFloat(value);
  return (!isNaN(num) && num > 0);
}

export const isValidFandCValues = (c: number, f: number) => c > 2 * f;