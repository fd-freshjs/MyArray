// prototype obj
const arrayPrototype = {


  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      debugger
      if (this.array[i] === arg) {
        return true;
      }
    }
    return false;
  },


  indexOf: function () {
    for(let i = 0; i < this.length; i++) {
      debugger
      if (this.array[i] === arg) {
        return i;
      }
    }
    return -1;
  }
}




// constructor func
function MyArray() {
  this.array = {}
  this.length = 0;
}

// bind prototype obj (Class.prototype)
MyArray.prototype = Object.assign(
  MyArray.prototype, 
  arrayPrototype
);

// static method (Class.method)
MyArray.isMyArray = (arg) => {
  if (arg instanceof MyArray) {
    return true;
  }
  return false;
}




// create instance (new)
const myarray = new MyArray()

myarray.array[this.length] = 4
myarray.length = 1

const result = myarray.includes(5)

console.log(result);
