// @ts-check

import { expect, test } from '@jest/globals';
import returnTrue from '../src/scripts/empty.js';
import speedConversion from '../src/scripts/convertspeed.js';

test('stub', () => {
  expect(returnTrue()).toBe(true);
});

test('should convert kilometers to all units', () => {
  const value = 10;
  const speed = 'km';
  const result = speedConversion(value, speed);
  expect(result).toEqual({
    kilometers: 10,
    miles: 6.21371,
    knots: 5.39957,
  });
});
test('should convert miles to all units', () => {
  const value = 15;
  const speed = 'mil';
  const result = speedConversion(value, speed);
  expect(result).toEqual({
    miles: 15,
    kilometers: 24.14016,
    knots: 13.03465,
  });
});
test('should convert knots to all units', () => {
  const value = 20;
  const speed = 'knots';
  const result = speedConversion(value, speed);
  expect(result).toEqual({
    knots: 20,
    miles: 23.01558,
    kilometers: 37.04,
  });
});
test('should convert null for unsupported unit', () => {
  const value = 20;
  const speed = 'swings';
  const result = speedConversion(value, speed);
  expect(result).toBeNull();
});
