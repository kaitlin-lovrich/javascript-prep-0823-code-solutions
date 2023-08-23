/* exported getWords */
function getWords(string) {
  const newArray = string.split(' ');
  const emptyArray = [];
  if (string.length === 0) {
    return emptyArray;
  }
  return newArray;
}
