class Queue {
  constructor() {
    this.storage = [];
  }

  // adds an item to the end of the queue.
  enqueue(value) {
    this.storage.push(value);
  }

  // returns the first item in the queue.
  peek() {
    return this.storage[0];
  }

  // removes and returns the item at the front of the queue.
  dequeue() {
    return this.storage.shift();
  }

  // checks if the queue is empty.
  isEmpty() {
    return this.size() === 0;
  }

  // prints the contents of the queue.
  printQueue() {
    return this.storage.join(' ');
  }

  // returns how many items are in the queue.
  size() {
    return this.storage.length;
  }
}

module.exports = Queue;
