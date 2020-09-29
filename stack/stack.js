class Stack {
  constructor() {
    this.storage = [];
  }

  // adds an item to the top of the stack.
  push(value) {
    this.storage.push(value);
  }

  // returns the top item from the stack.
  peek() {
    return this.storage[this.size() - 1];
  }

  // removes and returns the top item from the stack.
  pop() {
    return this.storage.pop();
  }

  // checks if the stack is empty.
  isEmpty() {
    return this.size() === 0;
  }

  // prints the contents of the stack.
  printStack() {
    return this.storage.join(' ');
  }

  // returns how many items are in the stack.
  size() {
    return this.storage.length;
  }
}

module.exports = Stack;
