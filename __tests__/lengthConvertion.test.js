// @ts-check

import { expect, test } from '@jest/globals';
import lengthConversion from '../src/scripts/conversion/lengthConversion.js';

test('should convert kilometers to all units', () => {
  const value = 3;
  const unit = 'Kilometers';
  const result = lengthConversion(value, unit);
  expect(result).toEqual({
    Kilometers: 3,
    Meters: 3000,
    Centimeters: 300000,
    Millimeters: 3000000,
  });
});

test('should convert meters to all units', () => {
  const value = 500;
  const unit = 'Meters';
  const result = lengthConversion(value, unit);
  expect(result).toEqual({
    Kilometers: 0.5,
    Meters: 500,
    Centimeters: 50000,
    Millimeters: 500000,
  });
});

test('should convert centimeters to all units', () => {
  const value = 10000;
  const unit = 'Centimeters';
  const result = lengthConversion(value, unit);
  expect(result).toEqual({
    Kilometers: 0.1,
    Meters: 100,
    Centimeters: 10000,
    Millimeters: 100000,
  });
});

test('should convert millimeters to all units', () => {
  const value = 50000;
  const unit = 'Millimeters';
  const result = lengthConversion(value, unit);
  expect(result).toEqual({
    Kilometers: 0.05,
    Meters: 50,
    Centimeters: 5000,
    Millimeters: 50000,
  });
});

test('should return null for unsupported unit', () => {
  const value = 10;
  const unit = 'glty';
  const result = lengthConversion(value, unit);
  expect(result).toBeNull();
});
