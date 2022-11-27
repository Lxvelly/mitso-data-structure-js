const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  node = null;
  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) return this.node = new Node(data);

    let node = this.node;
    while (node) {
      if (data < node.data) {
        if (!node.left) return node.left = new Node(data);
        node = node.left;
      } else {
        if (!node.right) return node.right = new Node(data);
        node = node.right;
      };
    };
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let node = this.node;
    while (node) {
      if (data === node.data) return node;
      node = data < node.data ? node.left : node.right;
    };

    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min(node = null) {
    if (!node) node = this.node;
    while (node.left) node = node.left;

    return node.data;
  }

  max() {
    let node = this.node;
    while (node.right) node = node.right;

    return node.data;
  }
};
