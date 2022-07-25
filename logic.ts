export const computeX = (D: number, F: number, N: number, C: number) => { 
  const cantTrip = Math.ceil(N / C);
  const rounds = cantTrip % 2 ? 1 : 2;
  return N - (rounds * F * D);
};

export const isValid = (value: string) => {
  const num = parseFloat(value);
  return (!isNaN(num) && num > 0);
}

export const isValidFandCValues = (c: number, f: number) => c > 2 * f;