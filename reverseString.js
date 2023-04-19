/*
    A reverseString function that takes a string and returns it reversed.
*/

function reverseString(string) {
  if (string.length < 2) return string;

  const arr = string.split('');
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr.join('');
}

export { reverseString };
