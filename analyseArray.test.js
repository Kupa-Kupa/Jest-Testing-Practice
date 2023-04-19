import { analyseArray } from './analuseArray.js';

const a1 = [1];
const output1 = analyseArray(a1);

const a2 = [1, 3, 6, 10];
const output2 = analyseArray(a2);

const a3 = [];
const output3 = analyseArray(a3);

const a4 = ['a', 1, 5, 8, 23, 44, null, {}];
const output4 = analyseArray(a4);

describe('Analyse Array', () => {
  test('should return an object', () => {
    expect(typeof output1).toBe('object');
  });

  describe('returned object has average, min, max and length properties', () => {
    test('should have an average property', () => {
      expect(output1.average).toBe(1);
    });

    test('should have an min property', () => {
      expect(output1.min).toBe(1);
    });

    test('should have an max property', () => {
      expect(output1.max).toBe(1);
    });

    test('should have an length property', () => {
      expect(output1.length).toBe(1);
    });
  });

  describe('correctly calculates property values for array', () => {
    test('should correctly calculate', () => {
      expect(output2.average).toBe(5);
    });

    test('should correctly calculate min', () => {
      expect(output2.min).toBe(1);
    });

    test('should correctly calculate max', () => {
      expect(output2.max).toBe(10);
    });

    test('should correctly calculate length', () => {
      expect(output2.length).toBe(4);
    });
  });

  describe('correctly handles empty array', () => {
    test('should correctly calculate', () => {
      expect(output3.average).toBe(null);
    });

    test('should correctly calculate min', () => {
      expect(output3.min).toBe(null);
    });

    test('should correctly calculate max', () => {
      expect(output3.max).toBe(null);
    });

    test('should correctly calculate length', () => {
      expect(output3.length).toBe(0);
    });
  });

  describe('correctly handles an array of mixed data', () => {
    test('should correctly calculate', () => {
      expect(output4.average).toBe(16.2);
    });

    test('should correctly calculate min', () => {
      expect(output4.min).toBe(1);
    });

    test('should correctly calculate max', () => {
      expect(output4.max).toBe(44);
    });

    test('should correctly calculate length', () => {
      expect(output4.length).toBe(5);
    });
  });
});
