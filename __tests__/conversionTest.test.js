// @ts-check

import { expect, test } from '@jest/globals';
import speedConversion from '../src/scripts/conversion/weigthConversion.js';

test('should convert kilogram to all units', () => {
  expect(speedConversion(10, 'Kilograms')).toEqual({
    Kilograms: 10,
    Gram: 10000,
    Ton: 0.01,
    Pound: 22.0462,
    Ounce: 352.74,
  });
});
test('should convert gram to all units', () => {
  expect(speedConversion(15, 'Gram')).toEqual({
    Kilograms: 0.015,
    Gram: 15,
    Ton: 0.000015,
    Pound: 0.0330688,
    Ounce: 0.5291099,
  });
});
test('should convert ton to all units', () => {
  expect(speedConversion(10, 'Ton')).toEqual({
    Kilograms: 10000,
    Gram: 10000000,
    Ton: 10,
    Pound: 22046.2,
    Ounce: 352740,
  });
});
test('should convert pound to all units', () => {
  expect(speedConversion(15, 'Pound')).toEqual({
    Kilograms: 6.8027211,
    Gram: 6803.88,
    Ton: 0.0068027,
    Pound: 15,
    Ounce: 240,
  });
});
test('should convert ounce to all units', () => {
  expect(speedConversion(10, 'Ounce')).toEqual({
    Kilograms: 0.2834949,
    Gram: 283.495,
    Ton: 0.0002835,
    Pound: 0.625,
    Ounce: 10,
  });
});
test('should convert null for unsupported unit', () => {
  expect(speedConversion(20, 'swings')).toBeNull();
});
