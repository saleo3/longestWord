const letters = 'ote';
const words = ['to', 'toe', 'toes', 'toeto', 'toesto', 'txe'];

function longestWord(search, dict) {
  return dict.reduce(
    (result, word) =>
      [...word].every(letter => search.includes(letter)) &&
      word.length > result.length
        ? word
        : result,
    ''
  );
}

console.log(longestWord(letters, words));
