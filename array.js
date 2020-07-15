const memory = require('./memory');

const Memory = new memory();

class Array {
  constructor(){
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
    this._capacity = 0;
  }
  push(value){
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    let location = this.ptr + this.length;
    Memory.set(location,value);
    this.length ++;
  }
  _resize(length){
    let old_ptr = this.ptr;
    this.ptr = Memory.allocate(length);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr,old_ptr,this.length);
    Memory.free(old_ptr);
    this._capacity = length;
  }
  pop(){
    if (this.length == 0) {
      throw new Error('Index error');
    }
    this.length --;
    return Memory.get(this.ptr+this.length);
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    this._resize(this.length + 1);
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

function main(){
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
}

main();
