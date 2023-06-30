// @ts-check

import { expect, test } from '@jest/globals';
import speedConversion from '../src/scripts/conversion/speedConversion.js';

test('should convert kilometers to all units', () => {
  expect(speedConversion(10, 'Kilometers')).toEqual({
    Kilometers: 10,
    Miles: 6.21371,
    Knots: 5.39957,
  });
});
test('should convert miles to all units', () => {
  expect(speedConversion(15, 'Miles')).toEqual({
    Miles: 15,
    Kilometers: 24.14016,
    Knots: 13.03465,
  });
});
test('should convert knots to all units', () => {
  expect(speedConversion(20, 'Knots')).toEqual({
    Knots: 20,
    Miles: 23.01558,
    Kilometers: 37.04,
  });
});
test('should convert null for unsupported unit', () => {
  expect(speedConversion(20, 'swings')).toBeNull();
});
