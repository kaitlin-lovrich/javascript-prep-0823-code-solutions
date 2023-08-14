/* eslint-disable no-undef */
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log(whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 19) {
    array.push(i);
    i += 2;
  }
  return array;
}
console.log(whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log(forLoop1());

function forLoop2() {
  let str = '';
  for (let i = 100; i > 0; i--) {
    str += `Time till explosion ${i}!\n`;
  }
  return str;
}
console.log(forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  const array = [];
  for (key in object) {
    array.push(key);
  }
  return array;
}
console.log(forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (key in object) {
    array.push(object[key]);
  }
  return array;
}
console.log(forInLoop2(object));
