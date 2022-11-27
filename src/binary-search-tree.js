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

  remove(data) {
    this.node = this.removeFromNode(this.node, data);
  };

  removeFromNode(node, data) {
    if (node === null) return node;
    if (data < node.data) {
      node.left = this.removeFromNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeFromNode(node.right, data);
      return node;
    };

    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    };

    node.data = this.min(node.right);
    node.right = this.removeFromNode(node.right, node.data);
    return node;
  };

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
