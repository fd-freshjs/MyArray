"use strict";

const user = {
  age: 32,
  firstname: 'Ivan',
};

// const age = user.age;
// const name = user.name;
const { age, firstname: username, my } = user;

console.log(age, username, firstname);


const nestedObj = {
  field: {
    search: 123,
  }
}

// const { field } = nestedObj;
// const { search } = field;
const { field: { search } } = nestedObj;

console.log(search, field);


function testFunc({ phone, address }) {
  if (typeof phone !== 'string') {
    throw new Error()
  }
}

testFunc({
  phone: 'asdasd',
  firstname: 'Ivan',
  lastname: 'Ivanov',
  birthdate: new Date(),
});
