/** @jest-environment jsdom */
import { expect, test } from '@jest/globals';

import { createSelectOptions, fillSelect, speedFillSelects } from '../src/scripts/dynamicSelectFill.js';
import { buttonResult, isNumeric, speedButtonResult } from '../src/scripts/buttonResults.js';
import { buttonSwitch, speedButtonSwitch } from '../src/scripts/buttonSwitch.js';

test('Numeric validation function', () => {
  expect(isNumeric('123')).toBeTruthy();
  expect(isNumeric('0.123')).toBeTruthy();
  expect(isNumeric('0..123')).toBeFalsy();
  expect(isNumeric('0.1.2.3')).toBeFalsy();
  expect(isNumeric('0123')).toBeFalsy();
  expect(isNumeric(' 123')).toBeFalsy();
  expect(isNumeric('+123')).toBeFalsy();
  expect(isNumeric('fdskl')).toBeFalsy();
  expect(isNumeric('')).toBeFalsy();
});

beforeEach(() => {
  document.body.innerHTML = `
    <form> 
        <input id="speed-number" placeholder="Number" aria-label="text" required="" pattern="^[0-9]+$">
        <div id="speed-number-validator">Please use only numbers</div>
        <select name="select" id="speed-first-select">
        </select>
        <button type="button" id="speed-switch-button"></button>
        <select class="form-select" name="select" id="speed-second-select">
        </select>
        <button type="button" id="speed-result-button"></button>
        <input id="speed-result-output" type="text" disabled readonly>
    </form>`; // Генерируем тестовый html
  speedFillSelects();
  const resultButton = document.getElementById('speed-result-button');
  resultButton.addEventListener('click', speedButtonResult);
  const switchButton = document.getElementById('speed-switch-button');
  switchButton.addEventListener('click', speedButtonSwitch);
});

test('Dynamic selects', () => {
  const selectOptionCount = (id) => document.getElementById(id).children.length;
  const result = selectOptionCount('speed-first-select') === 3 && selectOptionCount('speed-second-select') === 3;
  expect(result).toBeTruthy();
});

test('Switch button', () => {
  const firstSelect = document.getElementById('speed-first-select');
  const secondSelect = document.getElementById('speed-second-select');
  firstSelect.value = 'Miles';
  secondSelect.value = 'Knots';
  document.getElementById('speed-switch-button').click();
  const result = firstSelect.value === 'Knots' && secondSelect.value === 'Miles';
  expect(result).toBeTruthy();
});

// add test 'display result and copy to clipboard'
// add test 'Validation display'
