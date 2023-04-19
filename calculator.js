/*
    A calculator object that contains functions for the basic operations:

    add, subtract, divide, and multiply.
    
    Each of these functions should take two numbers and return the 
    correct calculation.
*/

const calculator = {
  add: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('inputs must be valid numbers');
      return null;
    }

    return a + b;
  },

  subtract: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('inputs must be valid numbers');
      return null;
    }

    return a - b;
  },

  divide: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('inputs must be valid numbers');
      return null;
    }

    return a / b;
  },

  multiply: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('inputs must be valid numbers');
      return null;
    }

    return a * b;
  },
};

export { calculator };
