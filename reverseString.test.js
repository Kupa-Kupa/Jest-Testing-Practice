import { reverseString } from './reverseString.js';

const string1 = 'string';

const string2 = 'with spaces ';

const string3 = 's';

const string4 = '';

const string5 = '123 $_()';

describe('reverse string', () => {
  test('should reverse chars in string', () => {
    expect(reverseString(string1)).toBe('gnirts');
  });

  test('should reverse string with spaces', () => {
    expect(reverseString(string2)).toBe(' secaps htiw');
  });

  test('should return same string if a single or no characters', () => {
    expect(reverseString(string3)).toBe('s');
  });

  test('should return an empty string if input string is empty', () => {
    expect(reverseString(string4)).toBe('');
  });

  test('should handle any chars or digits', () => {
    expect(reverseString(string5)).toBe(')(_$ 321');
  });
});
