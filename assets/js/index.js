// constructor func
function MyArray() {
  this.length = 0;
}

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function () {
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
