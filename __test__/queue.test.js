const Queue = require('../queue/queue');

describe('queue', () => {
  let queue;
  const Instantiator = Queue;

  beforeEach(() => {
    queue = new Instantiator();
  });

  describe('queue properties and methods:', () => {
    it('queue.storage property exists', () => {
      expect.assertions(1);
      expect(queue.storage).toBeDefined();
    });
    it('queue.storage is an array', () => {
      expect.assertions(1);
      expect(Array.isArray(queue.storage)).toBe(true);
    });

    const methods = ['enqueue', 'peek', 'dequeue', 'isEmpty', 'printQueue', 'size'];

    methods.forEach((method) => {
      it(`queue.${method}() method exists`, () => {
        expect.assertions(1);
        expect(typeof queue[method]).toBe('function');
      });
    });
  });

  describe('queue.enqueue()', () => {
    it('queue.enqueue() should add items to the end of the queue', () => {
      expect.assertions(3);
      queue.enqueue(3);
      expect(queue.storage.pop()).toStrictEqual(3);
      queue.enqueue(1);
      queue.enqueue(12);
      queue.enqueue(23);
      expect(queue.storage.pop()).toStrictEqual(23);
      expect(queue.storage.pop()).toStrictEqual(12);
    });
  });

  describe('queue.peek()', () => {
    it('queue.peek() should return the first item in the queue', () => {
      expect.assertions(3);
      queue.enqueue(2);
      expect(queue.peek()).toStrictEqual(2);
      queue.enqueue(100);
      queue.dequeue();
      expect(queue.peek()).toStrictEqual(100);
      queue.enqueue('Hello');
      queue.dequeue();
      queue.dequeue();
      expect(queue.peek()).toBeUndefined();
    });
    it('queue.peek() should not delete the returned item from the queue', () => {
      expect.assertions(2);
      queue.enqueue(2);
      expect(queue.peek()).toStrictEqual(2);
      expect(queue.peek()).toStrictEqual(2);
    });
  });

  describe('queue.dequeue()', () => {
    it('queue.dequeue() should return the item at the front of the queue', () => {
      expect.assertions(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toStrictEqual(2);
    });
    it('queue.dequeue() should delete the top item from the queue', () => {
      expect.assertions(5);
      queue.enqueue('Hello');
      expect(queue.dequeue()).toStrictEqual('Hello');
      expect(queue.dequeue()).toBeUndefined();
      queue.enqueue(1337);
      queue.enqueue({});
      expect(queue.dequeue()).toStrictEqual(1337);
      expect(queue.dequeue()).toStrictEqual({});
      expect(queue.dequeue()).toBeUndefined();
    });
  });

  describe('queue.isEmpty()', () => {
    it('queue.isEmpty() should return true when the queue is empty', () => {
      expect.assertions(1);
      expect(queue.isEmpty()).toStrictEqual(true);
    });
    it('queue.isEmpty() should return false when the queue is not empty', () => {
      expect.assertions(1);
      queue.enqueue('Hello');
      expect(queue.isEmpty()).toStrictEqual(false);
    });
    it('queue.isEmpty() should change from true to false when items are added', () => {
      expect.assertions(4);
      expect(queue.isEmpty()).toStrictEqual(true);
      queue.enqueue('Hello');
      expect(queue.isEmpty()).toStrictEqual(false);
      queue.dequeue();
      expect(queue.isEmpty()).toStrictEqual(true);
      queue.enqueue('');
      expect(queue.isEmpty()).toStrictEqual(false);
    });
  });

  describe('queue.printQueue()', () => {
    const itFunction = () => null;
    const itObject = { hello: 'world!', theUniverse: 42, aFunction: itFunction };

    it('queue.printQueue() should return an empty string when the queue is empty', () => {
      expect.assertions(1);
      expect(queue.printQueue()).toStrictEqual('');
    });
    it('queue.printQueue() should return the contents of the queue as a string', () => {
      expect.assertions(2);
      queue.enqueue(4);
      queue.enqueue(5);
      expect(queue.printQueue()).toStrictEqual('4 5');
      expect(typeof queue.printQueue()).toStrictEqual('string');
    });
    it('queue.printQueue() should return objects and functions', () => {
      expect.assertions(2);
      queue.enqueue(itFunction);
      expect(queue.printQueue()).toStrictEqual('() => null');
      queue.enqueue(itObject);
      expect(queue.printQueue()).toStrictEqual('() => null [object Object]');
    });
  });

  describe('queue.size()', () => {
    it('queue.size() should return 0 when the queue is empty', () => {
      expect.assertions(1);
      expect(queue.size()).toStrictEqual(0);
    });
    it('queue.size() should return the correct size when items are added to the queue', () => {
      expect.assertions(3);
      expect(queue.size()).toStrictEqual(0);
      queue.enqueue(4);
      expect(queue.size()).toStrictEqual(1);
      queue.enqueue(10);
      queue.enqueue(9);
      queue.enqueue(5);
      expect(queue.size()).toStrictEqual(4);
    });
    it('queue.size() should return 0 if pop() is called on an empty queue', () => {
      expect.assertions(3);
      expect(queue.size()).toStrictEqual(0);
      queue.enqueue(4);
      queue.enqueue(9);
      expect(queue.size()).toStrictEqual(2);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.size()).toStrictEqual(0);
    });
  });
});
