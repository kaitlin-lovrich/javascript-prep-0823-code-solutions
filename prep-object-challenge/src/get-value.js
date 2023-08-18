/* exported getValue */
// eslint-disable-next-line no-unused-vars
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
