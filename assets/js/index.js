// constructor func
function MyArray() {
  this.length = 1;
}

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function () {
    debugger
    return this.length
  },
  indexOf: function () {

  }
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

// myarray.includes()
// myarray.__proto__.includes()
// MyArray.prototype.includes()

const myIncludes = myarray.includes

const binded =  myIncludes.bind(myarray)

binded()
