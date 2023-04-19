import { capitalise } from './capitalise.js';

const string1 = 'test string';
const string2 = ' space first';
const string3 = '@%&$$% (>?<ignore non letters';
const string4 = 'Already capitalised';
const string5 = '$@)^*$ $)&+=^@<>?';

describe('capitalise string', () => {
  test('Should capitalise first letter', () => {
    expect(capitalise(string1)).toBe('Test string');
  });

  test('Should ignore preceding space and capitalise first letter', () => {
    expect(capitalise(string2)).toBe(' Space first');
  });

  test('Should ignore all preceding special characters', () => {
    expect(capitalise(string3)).toBe('@%&$$% (>?<Ignore non letters');
  });

  test('Should leave first letter capitalised if it already is', () => {
    expect(capitalise(string4)).toBe('Already capitalised');
  });

  test('Should return unchanged string if no letters', () => {
    expect(capitalise(string5)).toBe('$@)^*$ $)&+=^@<>?');
  });
});
