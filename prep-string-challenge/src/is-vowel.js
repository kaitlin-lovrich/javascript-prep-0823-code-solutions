/* exported isVowel */
function isVowel(char) {
  const regex = /[AEIOU]/;
  return regex.test(char.toUpperCase());
}
