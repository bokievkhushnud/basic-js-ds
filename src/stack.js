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
  constructor() {
    this.stackArray = [];
  }

  push(element) {
    this.stackArray.push(element);
  }

  peek() {
    if (this.stackArray.length === 0) {
      return undefined;
    }
    return this.stackArray[this.stackArray.length - 1];
  }

  pop() {
    if (this.stackArray.length === 0) {
      return undefined;
    }
    return this.stackArray.pop();
  }
}

module.exports = {
  Stack
};
