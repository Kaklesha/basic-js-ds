const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.storage={};
    this.size=0;
  }
  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
this.size+=1;
this.storage[this.size]=element;
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let removed = this.storage[this.size];
    delete this.storage[this.size]
    this.size-=1;
    return removed;
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.storage[this.size];
  }
}

module.exports = {
  Stack
};
