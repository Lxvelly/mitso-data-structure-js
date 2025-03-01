const { NotImplementedError } = require("../extensions/index.js");

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
module.exports = class Stack {
  #array = []; // создание массива элементов в стеке

  push(element) {
    return this.#array.push(element);
    // remove line with erro  r and write your code here
  }

  pop() {
    return this.#array.pop();
    // remove line with error and write your code here
  }

  peek() {
    return this.#array.at(-1);
    // remove line with error and write your code here
  }
};
