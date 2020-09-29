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
});
