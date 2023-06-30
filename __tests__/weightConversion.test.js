// @ts-check

import { expect, test } from '@jest/globals';
import weightConversion from '../src/scripts/weightConversion.js';

test('should convert kilogram to all units', () => {
  const value = 10;
  const weight = 'kilograms';
  const result = weightConversion(value, weight);
  expect(result).toEqual({
    kilograms: 10,
    gram: 10000,
    ton: 0.01,
    pound: 22.0462,
    ounce: 352.74,
  });
});

test('should convert gram to all units', () => {
  const value = 15;
  const weight = 'gram';
  const result = weightConversion(value, weight);
  expect(result).toEqual({
    kilograms: 0.015,
    gram: 15,
    ton: 0.000015,
    pound: 0.0330688,
    ounce: 0.5291099,
  });
});

test('should convert ton to all units', () => {
  const value = 10;
  const weight = 'ton';
  const result = weightConversion(value, weight);
  expect(result).toEqual({
    kilograms: 10000,
    gram: 10000000,
    ton: 10,
    pound: 22046.2,
    ounce: 352740,
  });
});

test('should convert pound to all units', () => {
  const value = 15;
  const weight = 'pound';
  const result = weightConversion(value, weight);
  expect(result).toEqual({
    kilograms: 6.8027211,
    gram: 6803.88,
    ton: 0.0068027,
    pound: 15,
    ounce: 240,
  });
});

test('should convert ounce to all units', () => {
  const value = 10;
  const weight = 'ounce';
  const result = weightConversion(value, weight);
  expect(result).toEqual({
    kilograms: 0.2834949,
    gram: 283.495,
    ton: 0.0002835,
    pound: 0.625,
    ounce: 10,
  });
});

test('should convert null for unsupported unit', () => {
  const value = 100;
  const weight = 'swings';
  const result = weightConversion(value, weight);
  expect(result).toBeNull();
});