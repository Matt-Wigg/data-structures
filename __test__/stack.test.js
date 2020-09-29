const Stack = require('../stack/stack');

describe('Stack', () => {

  let stack;
  const instantiator = Stack;

  beforeEach(function () {
    stack = new instantiator();
  });

  describe('Stack properties and methods:', () => {
    test('Stack.storage property exists', () => {
      expect(stack.storage).toBeDefined();
    });
    test('Stack.storage is an Array', () => {
      expect(Array.isArray(stack.storage)).toBe(true);
    });

    const methods = ['push', 'peek', 'pop', 'isEmpty', 'printStack', 'size'];

    methods.forEach((method) => {
      test(`Stack.${method}() method exists`, () => {
        expect(typeof stack[method]).toBe('function');
      });
    });
  });

  describe('Stack.push()', () => {
    test('Stack.push() should add items to the top of the Stack', () => {
      stack.push('Hello');
      expect(stack.pop()).toEqual('Hello');
      stack.push(1337);
      expect(stack.pop()).toEqual(1337);
      stack.push({});
      expect(stack.pop()).toEqual({});
      stack.push('');
      expect(stack.pop()).toEqual('');
    });
  });

  describe('Stack.peek()', () => {
    test('Stack.peek() should return the top item from the Stack', () => {
      stack.push(4);
      expect(stack.peek()).toEqual(4);
      stack.push(5);
      stack.push(6);
      expect(stack.peek()).toEqual(6);
      stack.pop();
      stack.pop();
      expect(stack.peek()).toEqual(4);
    });
    test('Stack.peek() should not delete the returned item from the Stack', () => {
      stack.push([1, 2, 3]);
      stack.peek();
      expect(stack.peek()).toEqual([1, 2, 3]);
      stack.push('Stack');
      expect(stack.peek()).toEqual('Stack');
      expect(stack.peek()).toEqual('Stack');
      expect(stack.peek()).toEqual('Stack');
    });
  });

  describe('Stack.push()', () => {
    test('Stack.push() should add items to the top of the Stack', () => {
      stack.push('Hello');
      expect(stack.pop()).toEqual('Hello');
      stack.push(1337);
      expect(stack.pop()).toEqual(1337);
      stack.push({});
      expect(stack.pop()).toEqual({});
      stack.push('');
      expect(stack.pop()).toEqual('');
    });
  });

  describe('Stack.pop()', () => {
    test('Stack.pop() should return the top item from the Stack', () => {
      stack.push('Hello');
      expect(stack.pop()).toEqual('Hello');
      stack.push(1337);
      expect(stack.pop()).toEqual(1337);
      stack.push({});
      expect(stack.pop()).toEqual({});
      stack.push('');
      expect(stack.pop()).toEqual('');
    });
    test('Stack.pop() should delete the top item from the Stack', () => {
      stack.push('Hello');
      expect(stack.pop()).toEqual('Hello');
      expect(stack.pop()).toEqual(undefined);
      stack.push(1337);
      stack.push({});
      expect(stack.pop()).toEqual({});
      expect(stack.pop()).toEqual(1337);
      expect(stack.pop()).toEqual(undefined);
    });
  });

  describe('Stack.isEmpty()', () => {
    test('Stack.isEmpty() should return true when the Stack is empty', () => {
      expect(stack.isEmpty()).toEqual(true);
    });
    test('Stack.isEmpty() should return false when the Stack is not empty', () => {
      stack.push('Hello');
      expect(stack.isEmpty()).toEqual(false);
    });
    test('Stack.isEmpty() should change from true to false when items are added', () => {
      expect(stack.isEmpty()).toEqual(true);
      stack.push('Hello');
      expect(stack.isEmpty()).toEqual(false);
      stack.pop('Hello');
      expect(stack.isEmpty()).toEqual(true);
      stack.push('');
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('Stack.printStack()', () => {
    const testFunction = () => null;
    const testObject = {hello: 'world!', theUniverse: 42, aFunction: testFunction};

    test('Stack.printStack() should return an empty string when the Stack is empty', () => {
      expect(stack.printStack()).toEqual('');
    });
    test('Stack.printStack() should return the contents of the Stack as a string', () => {
      stack.push(4);
      stack.push(5);
      expect(stack.printStack()).toEqual('4 5');
      expect(typeof stack.printStack()).toEqual('string');
    });
    test('Stack.printStack() should return objects and functions', () => {
      stack.push(testFunction);
      expect(stack.printStack()).toEqual('() => null');
      stack.push(testObject);
      expect(stack.printStack()).toEqual('() => null [object Object]');
    });
  });

  describe('Stack.size()', () => {
    test('Stack.size() should return 0 when the Stack is empty', () => {
      expect(stack.size()).toEqual(0);
    });
    test('Stack.size() should return the correct size when items are added to the Stack', () => {
      expect(stack.size()).toEqual(0);
      stack.push(4);
      expect(stack.size()).toEqual(1);
      stack.push(10);
      stack.push(9);
      stack.push(5);
      expect(stack.size()).toEqual(4);
    });
    test('Stack.size() should return 0 if pop() is called on an empty Stack', () => {
      expect(stack.size()).toEqual(0);
      stack.push(4);
      stack.push(9);
      expect(stack.size()).toEqual(2);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.size()).toEqual(0);
    });
  });

});
