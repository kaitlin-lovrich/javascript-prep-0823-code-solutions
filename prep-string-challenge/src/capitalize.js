/* exported capitalize */
function capitalize(string) {
  const first = string[0].toUpperCase();
  const restOfWord = string.slice(1, string.length).toLowerCase();
  let newWord = '';
  newWord += first + restOfWord;
  return newWord;
}
