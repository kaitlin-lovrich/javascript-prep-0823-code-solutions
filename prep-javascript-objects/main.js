const person = {
  firstName: 'Kaitlin',
  lastName: 'Lovrich',
  hobby: 'coding',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Potato';
console.log("The person's current job is:", person.job);
person['previousJob'] = 'Barber';
console.log("The person's previous job was:", person['previousJob']);

console.log(person);
