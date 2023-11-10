const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currNode = this.rootNode; // переменная для перебора нод

    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let currNode = this.rootNode;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let currNode = this.rootNode;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

const tree = new BinarySearchTree();
tree.add(8);
tree.add(7);
tree.add(9);
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(2);
tree.add(11);

console.log(`🚀 ~ tree.max():`, tree.max());
console.log(`🚀 ~ tree.min():`, tree.min());
console.log(`🚀 ~ tree:`, tree);

module.exports = {
  BinarySearchTree,
};
