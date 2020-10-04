class Set {
  constructor() {
    this.storage = {};
  }

  add(value) {
    this.storage[value] = true;
  }

  contains(value) {
    if (this.storage[value]) return true;
    return false;
  }

  remove(value) {
    delete this.storage[value];
  }
}

module.exports = Set;
