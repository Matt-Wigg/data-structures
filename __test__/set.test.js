const Set = require('../set/set');

describe('set', () => {
  let set;
  const Instantiator = Set;

  beforeEach(() => {
    set = new Instantiator();
  });

  describe('set properties and methods:', () => {
    it('set.storage property exists', () => {
      expect.assertions(1);
      expect(set.storage).toBeDefined();
    });
    it('set.storage is and object', () => {
      expect.assertions(1);
      expect(typeof set.storage).toBe('object');
    });
  });

  const methods = ['add', 'contains', 'remove'];

  methods.forEach((method) => {
    it(`set.${method}() method exists`, () => {
      expect.assertions(1);
      expect(typeof set[method]).toBe('function');
    });
  });

  describe('set.add()', () => {
    it('set.add() should add items to the set', () => {
      expect.assertions(4);
      set.add(5);
      expect(set.contains(5)).toStrictEqual(true);
      set.add(3);
      expect(set.contains(3)).toStrictEqual(true);
      set.add({});
      expect(set.contains({})).toStrictEqual(true);
      set.add('');
      expect(set.contains('')).toStrictEqual(true);
    });
    it('set.add() should not add duplicate values', () => {
      expect.assertions(2);
      set.add(3);
      set.add(3);
      set.remove(3);
      expect(set.contains(3)).toStrictEqual(false);
      set.add({});
      set.add({});
      set.remove({});
      expect(set.contains({})).toStrictEqual(false);
    });
  });

  describe('set.contains()', () => {
    it('set.contains() should return true when the found', () => {
      expect.assertions(2);
      set.add(3);
      expect(set.contains(3)).toStrictEqual(true);
      set.add(1);
      expect(set.contains(1)).toStrictEqual(true);
    });
    it('set.contains() should return false when not found', () => {
      expect.assertions(2);
      set.add(3);
      set.remove(3);
      expect(set.contains()).toStrictEqual(false);
      set.add(1);
      set.remove(1);
      expect(set.contains(1)).toStrictEqual(false);
    });
  });

  describe('set.remove()', () => {
    it('set.remove() should correctly remove values', () => {
      expect.assertions(3);
      set.add(4);
      set.remove(4);
      expect(set.contains(4)).toStrictEqual(false);
      set.add({});
      set.add(2);
      set.add('');
      set.remove({});
      expect(set.contains({})).toStrictEqual(false);
      set.remove(2);
      expect(set.contains(2)).toStrictEqual(false);
    });
  });
});
