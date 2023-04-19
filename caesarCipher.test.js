import { caesarCipher } from './caesarCipher.js';

describe('Caesar Cipher', () => {
  test('should shift string by the factor and return the new string', () => {
    expect(caesarCipher('hello', 2)).toBe('jgnnq');
  });

  test('should only shift letters in the string', () => {
    expect(caesarCipher('a bat', 6)).toBe('g hgz');
  });

  test('should wrap from z back to a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
  });

  test('should shift capitals correctly', () => {
    expect(caesarCipher('ABZ', 1)).toBe('BCA');
  });

  test('should shift a sentence correctly', () => {
    expect(caesarCipher('There is no one here!', 16)).toBe(
      'Jxuhu yi de edu xuhu!'
    );
  });

  test('should work with a factor > 26', () => {
    expect(caesarCipher('Test!', 100)).toBe('Paop!');
  });

  test('should work with a negative factor', () => {
    expect(caesarCipher('a', -1)).toBe('z');
  });

  test('should work with a negative factor (2)', () => {
    expect(caesarCipher('negative', -15)).toBe('yprletgp');
  });

  test('should work with a large negative factor', () => {
    expect(caesarCipher('Large Negative', -155)).toBe('Mbshf Ofhbujwf');
  });

  test('should return null if no string', () => {
    expect(caesarCipher('', 5)).toBe(null);
  });

  test('should work correctly even if no letters in string', () => {
    expect(caesarCipher(' _156', 5)).toBe(' _156');
  });
});
