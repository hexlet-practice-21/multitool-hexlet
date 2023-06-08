// @ts-check

import { expect, test } from '@jest/globals';
import returnTrue from '../src/scripts/empty.js';
import speedConversion from '../src/scripts/index.js';

test('stub', () => {
  expect(returnTrue()).toBe(true);
});

test('speedConversion', () => {
  // @ts-ignore
  expect(speedConversion(10, 'kilph in mph')).toEqual(6.21371);
  // @ts-ignore
  expect(speedConversion(10, 'kilph in knph')).toEqual(5.39957);
  // @ts-ignore
  expect(speedConversion(10, 'kmph in kilph')).toEqual(16.09344);
  // @ts-ignore
  expect(speedConversion(10, 'mph in knph')).toEqual(8.68977);
  // @ts-ignore
  expect(speedConversion(10, 'knph in mph')).toEqual(11.50779);
  // @ts-ignore
  expect(speedConversion(10, 'knph in kilph')).toEqual(18.52);
  expect(speedConversion()).toBeNull();
});
