/*
    A capitalize function that takes a string and returns it 
    with the first character capitalized.
*/

function capitalise(string) {
  // posix bracket expressions like [[:alpha:]] are NOT supported in JS
  const regex = /[a-zA-Z]/;
  const firstLetter = string.match(regex);

  if (firstLetter === null) return string;

  const indexOfFirstLetter = string.indexOf(firstLetter);

  return (
    string.slice(0, indexOfFirstLetter) +
    string[indexOfFirstLetter].toUpperCase() +
    string.slice(indexOfFirstLetter + 1)
  );
}

export { capitalise };
