const arr = [1, 2]

//       0         1       2      4
const [myFirst, second, third, forth] = arr;

// console.log(myFirst, second, third, forth);



function myArray ([myFirst, second], myparam) {
    console.log(myFirst, second, myparam[0]);
}

myArray(arr, 'str');

let a = 1;
let b = 3;

console.log(a, b);

[a, b] = [b, a];

console.log(a, b);
