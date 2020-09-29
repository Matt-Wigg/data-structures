const Stack = require('../stack/stack');

describe('stack', () => {
  let stack;
  const Instantiator = Stack;

  beforeEach(() => {
    stack = new Instantiator();
  });

  describe('stack properties and methods:', () => {
    it('stack.storage property exists', () => {
      expect.assertions(1);
      expect(stack.storage).toBeDefined();
    });
    it('stack.storage is an array', () => {
      expect.assertions(1);
      expect(Array.isArray(stack.storage)).toBe(true);
    });

    const methods = ['push', 'peek', 'pop', 'isEmpty', 'printStack', 'size'];

    methods.forEach((method) => {
      it(`stack.${method}() method exists`, () => {
        expect.assertions(1);
        expect(typeof stack[method]).toBe('function');
      });
    });
  });

  describe('stack.push()', () => {
    it('stack.push() should add items to the top of the stack', () => {
      expect.assertions(4);
      stack.push('Hello');
      expect(stack.pop()).toStrictEqual('Hello');
      stack.push(1337);
      expect(stack.pop()).toStrictEqual(1337);
      stack.push({});
      expect(stack.pop()).toStrictEqual({});
      stack.push('');
      expect(stack.pop()).toStrictEqual('');
    });
  });

  describe('stack.peek()', () => {
    it('stack.peek() should return the top item from the stack', () => {
      expect.assertions(3);
      stack.push(4);
      expect(stack.peek()).toStrictEqual(4);
      stack.push(5);
      stack.push(6);
      expect(stack.peek()).toStrictEqual(6);
      stack.pop();
      stack.pop();
      expect(stack.peek()).toStrictEqual(4);
    });
    it('stack.peek() should not delete the returned item from the stack', () => {
      expect.assertions(4);
      stack.push([1, 2, 3]);
      stack.peek();
      expect(stack.peek()).toStrictEqual([1, 2, 3]);
      stack.push('Stack');
      expect(stack.peek()).toStrictEqual('Stack');
      expect(stack.peek()).toStrictEqual('Stack');
      expect(stack.peek()).toStrictEqual('Stack');
    });
  });

  describe('stack.pop()', () => {
    it('stack.pop() should return the top item from the stack', () => {
      expect.assertions(4);
      stack.push('Hello');
      expect(stack.pop()).toStrictEqual('Hello');
      stack.push(1337);
      expect(stack.pop()).toStrictEqual(1337);
      stack.push({});
      expect(stack.pop()).toStrictEqual({});
      stack.push('');
      expect(stack.pop()).toStrictEqual('');
    });
    it('stack.pop() should delete the top item from the stack', () => {
      expect.assertions(5);
      stack.push('Hello');
      expect(stack.pop()).toStrictEqual('Hello');
      expect(stack.pop()).toBeUndefined();
      stack.push(1337);
      stack.push({});
      expect(stack.pop()).toStrictEqual({});
      expect(stack.pop()).toStrictEqual(1337);
      expect(stack.pop()).toBeUndefined();
    });
  });

  describe('stack.isEmpty()', () => {
    it('stack.isEmpty() should return true when the stack is empty', () => {
      expect.assertions(1);
      expect(stack.isEmpty()).toStrictEqual(true);
    });
    it('stack.isEmpty() should return false when the stack is not empty', () => {
      expect.assertions(1);
      stack.push('Hello');
      expect(stack.isEmpty()).toStrictEqual(false);
    });
    it('stack.isEmpty() should change from true to false when items are added', () => {
      expect.assertions(4);
      expect(stack.isEmpty()).toStrictEqual(true);
      stack.push('Hello');
      expect(stack.isEmpty()).toStrictEqual(false);
      stack.pop('Hello');
      expect(stack.isEmpty()).toStrictEqual(true);
      stack.push('');
      expect(stack.isEmpty()).toStrictEqual(false);
    });
  });

  describe('stack.printStack()', () => {
    const itFunction = () => null;
    const itObject = { hello: 'world!', theUniverse: 42, aFunction: itFunction };

    it('stack.printStack() should return an empty string when the Stack is empty', () => {
      expect.assertions(1);
      expect(stack.printStack()).toStrictEqual('');
    });
    it('stack.printStack() should return the contents of the stack as a string', () => {
      expect.assertions(2);
      stack.push(4);
      stack.push(5);
      expect(stack.printStack()).toStrictEqual('4 5');
      expect(typeof stack.printStack()).toStrictEqual('string');
    });
    it('stack.printStack() should return objects and functions', () => {
      expect.assertions(2);
      stack.push(itFunction);
      expect(stack.printStack()).toStrictEqual('() => null');
      stack.push(itObject);
      expect(stack.printStack()).toStrictEqual('() => null [object Object]');
    });
  });

  describe('stack.size()', () => {
    it('stack.size() should return 0 when the Stack is empty', () => {
      expect.assertions(1);
      expect(stack.size()).toStrictEqual(0);
    });
    it('stack.size() should return the correct size when items are added to the stack', () => {
      expect.assertions(3);
      expect(stack.size()).toStrictEqual(0);
      stack.push(4);
      expect(stack.size()).toStrictEqual(1);
      stack.push(10);
      stack.push(9);
      stack.push(5);
      expect(stack.size()).toStrictEqual(4);
    });
    it('stack.size() should return 0 if pop() is called on an empty Stack', () => {
      expect.assertions(3);
      expect(stack.size()).toStrictEqual(0);
      stack.push(4);
      stack.push(9);
      expect(stack.size()).toStrictEqual(2);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.size()).toStrictEqual(0);
    });
  });
});
