// @ts-check

import { expect, test } from '@jest/globals';
import returnTrue from '../src/scripts/empty.js';
import convertToMetricLength from '../src/scripts/convertlength.js';
import yaml from 'js-yaml';
import convertYamlJson from '../src/scripts/convertYamlJson.js';

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

const { jsonToYamlConverter, yamlToJsonConverter } = convertYamlJson;




describe('JSON to YAML Converter', () => {
  test('should convert JSON object to YAML', () => {
    const json = {
      name: 'John Doe',
      age: 30,
    };
    const expectedYaml = 'name: John Doe\nage: 30\n';
    const convertedYaml = jsonToYamlConverter(json);
    expect(convertedYaml).toEqual(expectedYaml);
  });

  test('should return null for invalid JSON', () => {
    const invalidJson = '{ name: John Doe, age: 30 }';
    const convertedYaml = jsonToYamlConverter(invalidJson);
    expect(convertedYaml).toBeNull();
  });
});

describe('YAML to JSON Converter', () => {
  test('should convert YAML to JSON object', () => {
    const yamlData = 'name: John Doe\nage: 30\n';
    const expectedJson = {
      name: 'John Doe',
      age: 30,
    };
    const convertedJson = yamlToJsonConverter(yamlData);
    expect(convertedJson).toEqual(expectedJson);
  });

  test('should return null for invalid YAML', () => {
    const invalidYaml = 'name: John Doe, age: 30';
    const convertedJson = yamlToJsonConverter(invalidYaml);
    expect(convertedJson).toBeNull();
  });
});