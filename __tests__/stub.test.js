// @ts-check

import { expect, test } from '@jest/globals';
import returnTrue from '../src/scripts/empty.js';
import convertToMetricLength from '../src/convertlength.js';

test('stub', () => {
  expect(returnTrue()).toBe(true);
});

test('should convert kilometers to all units', () => {
  const value = 3;
  const unit = 'km';
  const result = convertToMetricLength(value, unit);
  expect(result).toEqual({
    kilometers: 3,
    meters: 3000,
    centimeters: 300000,
    millimeters: 3000000,
  });
});

test('should convert meters to all units', () => {
  const value = 500;
  const unit = 'm';
  const result = convertToMetricLength(value, unit);
  expect(result).toEqual({
    kilometers: 0.5,
    meters: 500,
    centimeters: 50000,
    millimeters: 500000,
  });
});

test('should convert centimeters to all units', () => {
  const value = 10000;
  const unit = 'cm';
  const result = convertToMetricLength(value, unit);
  expect(result).toEqual({
    kilometers: 0.1,
    meters: 100,
    centimeters: 10000,
    millimeters: 100000,
  });
});

test('should convert millimeters to all units', () => {
  const value = 50000;
  const unit = 'mm';
  const result = convertToMetricLength(value, unit);
  expect(result).toEqual({
    kilometers: 0.05,
    meters: 50,
    centimeters: 5000,
    millimeters: 50000,
  });
});

test('should return null for unsupported unit', () => {
  const value = 10;
  const unit = 'glty';
  const result = convertToMetricLength(value, unit);
  expect(result).toBeNull();
});
