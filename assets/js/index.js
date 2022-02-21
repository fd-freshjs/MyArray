// prototype obj
const arrayPrototype = {
  // Class.prototype.includes
  includes: function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return true;
      }
    }

    return false;
  },

  indexOf: function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return i;
      }
    }

    return -1;
  },

  slice: function (begin = 0, end = 0) {
    if (begin < 0) {
      const newBegin = this.length + begin;
      begin = newBegin < 0 ? 0 : newBegin;
    }

    if (end < 0) {
      const newEnd = this.length + end;
      end = newEnd < 0 ? 0 : newEnd;
    }

    const newArr = new MyArray();

    for (let i = begin; i < end; i++) {
      newArr.array[i - begin] = this.array[begin];
      newArr.length++;
    }

    return newArr;
  },
  push: function (item) {
    if (item === undefined) {
      return this.length;
    }

    this.array[this.length] = item;
    this.length++;

    return this.length;
  },

  concat: function (item) {
    if (item === undefined) {
      return Object.assign(new MyArray(), this);
    }

    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.array[i] = this.array[i];
      newArr.length++;
    }
    
    if (item.length) {
      for (let i = 0; i < item.length; i++) {

        if (MyArray.isMyArray(item)) {
          newArr.array[this.length + i] = item.array[i];
        } else if (Array.isArray(item)) {
          newArr.array[this.length + i] = item[i];
        }

        newArr.length++;
      }
    } else {
      newArr[newArr.length] = item;
      newArr.length++;
    }

    return newArr;
  },
};

// constructor func
function MyArray() {
  this.array = {};
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    const elem = arguments[i];
    this.array[i] = elem;
    this.length++;
  }
}

// bind prototype obj (Class.prototype)
MyArray.prototype = Object.assign(MyArray.prototype, arrayPrototype);

// static method (Class.method)
MyArray.isMyArray = (arg) => {
  if (arg instanceof MyArray) {
    return true;
  }
  return false;
};

// create instance (new)
const myarray = new MyArray();

myarray.array[0] = 4;
myarray.length = 1;

const result = myarray.includes(4);

console.log(result);
