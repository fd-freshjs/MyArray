try {
  throw new RangeError('random error')
} catch (err) {

  if(err instanceof TypeError) {
    console.error(err)
  }

  if(err instanceof RangeError) {
    console.error(err)
    alert('попробуйте еше раз')
  }
} finally {
  console.log('final');
}

// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (arg) {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === arg) {
        return true;
      }
    }
    return false;
  },


  indexOf: function () {
    for(let i = 0; i < this.length; i++) {
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

myarray.array[0] = 4
myarray.length = 1

const result = myarray.includes(4)

console.log(result);
