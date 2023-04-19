import { calculator } from './calculator.js';

describe('calculator', () => {
  test('should add two numbers', () => {
    expect(calculator.add(1, 4)).toBe(5);
  });

  test('should correctly add two negative numbers', () => {
    expect(calculator.add(-2, -7)).toBe(-9);
  });

  test('should subtract two numbers', () => {
    expect(calculator.subtract(1, 4)).toBe(-3);
  });

  test('should correctly subtract two negative numbers', () => {
    expect(calculator.subtract(-10, -6)).toBe(-4);
  });

  test('should divide two numbers', () => {
    expect(calculator.divide(1, 4)).toBe(0.25);
  });

  test('should multiply two numbers', () => {
    expect(calculator.multiply(1, 4)).toBe(4);
  });

  test('should return null if inputs are not numbers', () => {
    expect(calculator.add('a', 2)).toBe(null);
  });

  test('should return null if no inputs are given', () => {
    expect(calculator.add()).toBe(null);
  });
});
