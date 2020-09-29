// a stack holds a list of elements
// last in, first out

class Stack {
  constructor() {
    this.storage = [];
  }

  // O(1) Constant
  push(value) { // adds an item to the top of the stack.
    this.storage.push(value);
  }

  // O(1) Constant
  peek() { // returns the top value without deleting.
    return this.storage[this.size() - 1];
  }

  // O(1) Constant
  pop() { // removes the top item from the stack.
    return this.storage.pop();
  }

  // O(1) Constant
  isEmpty() { // checks if the stack is empty.
    return this.size() === 0;
  }

  // O(n) Linear
  printStack() { // prints the current stack.
    return this.storage.join(' ');
  }

  // O(1) Constant
  size() { // returns how many items are in the stack.
    return this.storage.length;
  }
}

module.exports = Stack;
