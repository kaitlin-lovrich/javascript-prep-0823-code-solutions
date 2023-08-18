/* exported compact */
function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-compare-neg-zero
    if (
      array[i] !== false &&
      array[i] !== null &&
      Number.isNaN(array[i]) === false &&
      array[i] !== 0 &&
      array[i] !== -0 &&
      array[i] !== undefined &&
      array[i] !== ''
    ) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
