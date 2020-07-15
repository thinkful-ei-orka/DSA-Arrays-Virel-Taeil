import memory from './memory.js';

class Array {
  constructor(){
    this.length = 0;
    this.ptr = memory.allocate(this.length);
  }
  push(value){
    this._resize(this.length + 1);
    let location = this.ptr + this.length;
    memory.set(location,value);
    this.length ++;
  }
  _resize(length){
    let old_ptr = this.ptr;
    this.ptr = memory.allocate(length);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr,old_ptr,this.length);
    memory.free(old_ptr);
  }
  pop(){
    if (this.length == 0) {
      throw new Error('Index error');
    }
    this.length --;
    return memory.get(this.ptr+this.length);
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    this._resize(this.length + 1);
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
