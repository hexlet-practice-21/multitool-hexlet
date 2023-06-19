// @ts-check

import { expect, test } from '@jest/globals';
import speedConversion from '../src/scripts/conversion/speedConversion.js';


test('should convert kilometers to all units', () => {
    expect(speedConversion(10, 'km')).toEqual({
        kilometers: 10,
        miles: 6.21371,
        knots: 5.39957,
    });
});
test('should convert miles to all units', () => {
    expect(speedConversion(15, 'mil')).toEqual({
        miles: 15,
        kilometers: 24.14016,
        knots: 13.03465,
    });
});
test('should convert knots to all units', () => {
    expect(speedConversion(20, 'knots')).toEqual({
        knots: 20,
        miles: 23.01558,
        kilometers: 37.04,
    });
});
test('should convert null for unsupported unit', () => {
    expect(speedConversion(20, 'swings')).toBeNull();
});
