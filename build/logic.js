"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFandCValues = exports.isValid = exports.computeX = void 0;
const computeX = (D, F, N, C) => N / ((C - 2 * F) * D);
exports.computeX = computeX;
const isValid = (value) => {
    const num = parseFloat(value);
    return (!isNaN(num) && num > 0);
};
exports.isValid = isValid;
const isValidFandCValues = (c, f) => c > 2 * f;
exports.isValidFandCValues = isValidFandCValues;
