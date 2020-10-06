/* eslint-disable no-restricted-syntax */
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  contains(node) {
    if (this.nodes.has(node)) {
      return true;
    }
    return false;
  }

  removeNode(node) {
    const values = this.nodes.get(node).slice();
    for (let i = 0; i < values.length; i += 1) {
      this.removeEdge(node, values[i]);
    }
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
    }
  }

  hasEdge(fromNode, toNode) {
    for (const [key, value] of this.map) {
      if (key === fromNode && value.indexOf(toNode) > -1) {
        return true;
      }
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes.get(fromNode).push(toNode);
    this.nodes.get(toNode).push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    this.nodes.get(fromNode).splice(this.nodes.get(fromNode).indexOf(toNode), 1);
    this.nodes.get(toNode).splice(this.nodes.get(toNode).indexOf(fromNode), 1);
  }

  forEachNode(callback) {
    for (const [key, values] of this.nodes) {
      callback(key, values);
    }
  }
}

module.exports = Graph;
