const gen = function* () {
  const arr = this;

  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
    break;
  }
}

const arr = [1, 2, 5, 1, 32, 6];

arr[Symbol.iterator] = gen;

for (const value of arr) {
  console.log(value);
}
