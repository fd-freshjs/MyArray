const iter = function () {
  let index = Math.trunc(this.length / 2);
  const end = this.length;
  
  return {
    next: () => {
      if (index < end) {
        return {
          value: this[index++] ,
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      }
    }
  }
}

const arr = [1, 2, 5, 1, 32, 6];

arr[Symbol.iterator] = iter;

for(const value of arr) {
  console.log(value)
}
