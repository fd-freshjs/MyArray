"use strict";

function Test (firstname) {
  // если вызов без new:
  // this = Window в обыном режиме
  // this = undefined в строгом режиме
  console.log(this);
  this.firstname = firstname;
}

const mytest = new Test(123)

console.log(mytest)

// this у методов равен обьекту
const obj = {
  key: function () {
    console.log(this);
  }
}

obj.key()
