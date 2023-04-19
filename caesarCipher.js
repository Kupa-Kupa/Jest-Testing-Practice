/*
    A caesarCipher function that takes a string and a shift factor and 
    returns it with each character “shifted”.

    Don’t forget to test wrapping from z to a.
    Don’t forget to test keeping the same case.
    Don’t forget to test punctuation!
*/

function caesarCipher(string, factor) {
  if (string.length < 1) return null;

  // for large factors get the mod of 26 to make the factor usable,
  // i.e. make the factor <= 26
  if (factor > 26 || factor < -26) {
    factor = factor % 26;
  }

  // a negative factor means we want to reverse through the alphabet
  // a => z => y etc. The negative factor + 26 will give us the equivalent
  // positive factor to use. (a, -1) = (a, 25)
  if (factor < 0) {
    factor = factor + 26;
  }

  const arr = string.split('');

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const charCode = arr[i].charCodeAt(0);

    let newCharCode = charCode;

    if (charCode >= 97 && charCode <= 122) {
      if (newCharCode + factor > 122) {
        newCharCode = newCharCode + factor - 26;
      } else {
        newCharCode += factor;
      }
    } else if (charCode >= 65 && charCode <= 90) {
      if (newCharCode + factor > 90) {
        newCharCode = newCharCode + factor - 26;
      } else {
        newCharCode += factor;
      }
    }

    newArr.push(String.fromCharCode(newCharCode));
  }

  return newArr.join('');
}

export { caesarCipher };
