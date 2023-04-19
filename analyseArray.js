/*
    An analyzeArray function that takes an array of numbers and returns 
    an object with the following properties: 
    
    average, min, max, and length.
*/

function analyseArray(arr = []) {
  arr = arr.filter((item) => typeof item === 'number');

  if (arr.length === 0) {
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };
  }
  const average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

  const min = Math.min(...arr);

  const max = Math.max(...arr);

  const length = arr.length;

  return { average, min, max, length };
}

export { analyseArray };
