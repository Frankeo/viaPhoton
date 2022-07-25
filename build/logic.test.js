'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const logic_1 = require('./logic')
describe('isValid tests', () => {
    it('should return false for 0', () =>
        expect((0, logic_1.isValid)('0')).toBe(false))
    it('should return true for 1', () =>
        expect((0, logic_1.isValid)('1')).toBe(true))
    it('should return false for -1', () =>
        expect((0, logic_1.isValid)('-1')).toBe(false))
    it('should return true for 1.5', () =>
        expect((0, logic_1.isValid)('1.5')).toBe(true))
    it('should return false for test', () =>
        expect((0, logic_1.isValid)('test')).toBe(false))
    it('should return false for empty space', () =>
        expect((0, logic_1.isValid)('')).toBe(false))
    it('should return false for white space', () =>
        expect((0, logic_1.isValid)('  ')).toBe(false))
})
describe('isValidFandCValues tests', () => {
    it('should return true when C is bigger than 2 times F', () =>
        expect((0, logic_1.isValidFandCValues)(5, 2)).toBe(true))
    it('should return false when C is lesser than 2 times F', () =>
        expect((0, logic_1.isValidFandCValues)(5, 4)).toBe(false))
})
