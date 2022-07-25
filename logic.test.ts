import { computeX, isValid } from './logic'

describe('computeX tests', () => {
    it('should return one less when C is equal to N and D and F are 1', () => {
        const C = 80
        const N = 80
        const D = 1
        const F = 1

        const x = computeX(D, F, N, C)
        expect(x).toBe(79)
    })

    it('should return three less when count of trips are 3 and D and F are 1', () => {
        const C = 75
        const N = 80
        const D = 1
        const F = 1

        const x = computeX(D, F, N, C)
        expect(x).toBe(77)
    })

    it('should return five less when count of trips are 5 and D and F are 1', () => {
        const C = 30
        const N = 80
        const D = 1
        const F = 1

        const x = computeX(D, F, N, C)
        expect(x).toBe(75)
    })

    it('should return 10 less when count of trips are 10 and D is equal to 2 and F is 1', () => {
        const C = 30
        const N = 80
        const D = 2
        const F = 1

        const x = computeX(D, F, N, C)
        expect(x).toBe(70)
    })

    it('should return 10 less when count of trips are 10 and D is equal to 1 and F is 2', () => {
        const C = 30
        const N = 80
        const D = 1
        const F = 2

        const x = computeX(D, F, N, C)
        expect(x).toBe(70)
    })
})

describe('isValid tests', () => {
    it('should return false for 0', () => expect(isValid('0')).toBe(false))
    it('should return true for 1', () => expect(isValid('1')).toBe(true))
    it('should return false for -1', () => expect(isValid('-1')).toBe(false))
    it('should return true for 1.5', () => expect(isValid('1.5')).toBe(true))
    it('should return false for test', () =>
        expect(isValid('test')).toBe(false))
    it('should return false for empty space', () =>
        expect(isValid('')).toBe(false))
    it('should return false for white space', () =>
        expect(isValid('  ')).toBe(false))
})
