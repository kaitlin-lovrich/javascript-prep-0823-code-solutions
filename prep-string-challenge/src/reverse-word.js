/* exported reverseWord */
function reverseWord(word) {
  let newWord = '';
  for (let i = word.length - 1; i > -1; i--) {
    newWord += word[i];
  }
  return newWord;
}

console.log(reverseWord('foo'));
