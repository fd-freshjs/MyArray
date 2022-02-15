function factorCycle(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

let result = factorCycle(5); // 120
console.log(result);

function factorRecurs(n) {
  if (n <= 1) {
    return 1;
  }

  return factorRecurs(n - 1) * n;
}

result = factorRecurs(5);
console.log(result);

function fibCycle(n) {
  let a = 1,
    b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

result = fibCycle(6);
console.log(result);



function isArray(value) {
  if (value instanceof Object) {
    return true;
  }

  return false;
}

function isNotArray(value) {
  if (value instanceof Object) {
    return false;
  }

  return true;
}

const nestedArray = [1, 2, 3, [1, 2, 3, 4], 56, 7, 8, 9, 10];

function flatSum1(array) {
  const index = array.findIndex(isArray);

  if (index >= 0) {
    //recursive
    return flatSum(array.at(index)) + 
      array
        .filter(isNotArray)
        .reduce((accum, currentValue) => accum + currentValue);
  }

  // base
  return array.reduce((accum, currentValue) => accum + currentValue);
}

function flatSum(array) {
  const flatted = array.flat(Infinity);
  
  return flatted.reduce((accum, currentValue) => accum + currentValue);
}


function recursePow(x, n) {

  if (n === 0) {
    return 1;
  }

  return recursePow(x, n - 1) * x;
}

result = recursePow(2, 5);
console.log(result);

let x = prompt()
let n = prompt()
let buffer = 1;
for (let i = 1; i <= n; i++) {
  buffer *= x;
}




function recurseLog(n, m = -n + 1) {
  if (m === 1) {
    return;
  }

  console.log(m + n);
  recurseLog(n, m + 1);
}
