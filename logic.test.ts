import { computeX, isValid, isValidFandCValues } from './logic'

describe('computeX tests', () => {
  it('should return a positive value when C is bigger than 2 F', () => {
    const N = 80;
    const D = 10;
    const C = 5;
    const F = 2;
    const x = computeX(D, F, N, C);

    expect(x).toBeGreaterThan(0);
  });

  it('should return a negative value when C is smaller than 2 F', () => {
    const N = 80;
    const D = 10;
    const C = 3;
    const F = 2;
    const x = computeX(D, F, N, C);

    expect(x).toBeLessThan(0);
  });
});

describe('isValid tests', () => {
  it('should return false for 0', () => expect(isValid('0')).toBe(false));
  it('should return true for 1', () => expect(isValid('1')).toBe(true));
  it('should return false for -1', () => expect(isValid('-1')).toBe(false));
  it('should return true for 1.5', () => expect(isValid('1.5')).toBe(true));
  it('should return false for test', () => expect(isValid('test')).toBe(false));
  it('should return false for empty space', () => expect(isValid('')).toBe(false));
  it('should return false for white space', () => expect(isValid('  ')).toBe(false));
});

describe('isValidFandCValues tests', () => {
  it('should return true when C is bigger than 2 times F', () => expect(isValidFandCValues(5, 2)).toBe(true));

  it('should return false when C is lesser than 2 times F', () => expect(isValidFandCValues(5, 4)).toBe(false));
});