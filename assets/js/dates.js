
const date = new Date();

const unixDate = new Date(0);

console.log(date);

console.log(unixDate);



console.log(date > unixDate);

console.log(unixDate > date);

console.log(Number(date) > Number(unixDate));



console.log(date.getMonth());

console.log(date.getMilliseconds());



console.log(date.toDateString());

console.log(date.toLocaleDateString());

console.log(date.toISOString());
