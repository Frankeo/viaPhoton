"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFandCValues = exports.isValid = exports.computeX = void 0;
const computeX = (D, F, N, C) => {
    if (N / C == 1)
        return N - (F * D);
    const cantTrip = Math.ceil(N / C);
    const rounds = cantTrip % 2 ? cantTrip + 2 : cantTrip + 1;
    return N - (rounds * F * D);
};
exports.computeX = computeX;
const isValid = (value) => {
    const num = parseFloat(value);
    return (!isNaN(num) && num > 0);
};
exports.isValid = isValid;
const isValidFandCValues = (c, f) => c > 2 * f;
exports.isValidFandCValues = isValidFandCValues;
