// @ts-check

import { expect, test } from '@jest/globals';
import volumeConversion from '../src/scripts/conversion/volumeConversion.js';

test('should convert Liters to all units', () => {
  expect(volumeConversion(10, 'Liters')).toEqual({
    Liters: 10,
    Milliliters: 10000,
    CubicMeter: 0.01,
  });
});
test('should convert Milliliters to all units', () => {
  expect(volumeConversion(10, 'Milliliters')).toEqual({
    Liters: 0.01,
    Milliliters: 10,
    CubicMeter: 0.00001,
  });
});
test('should convert CubicMeter to all units', () => {
  expect(volumeConversion(10, 'CubicMeter')).toEqual({
    Liters: 10000,
    Milliliters: 10000000,
    CubicMeter: 10,
  });
});
test('should convert null for unsupported unit', () => {
  expect(volumeConversion(10, 'vsfkl')).toBeNull();
});
