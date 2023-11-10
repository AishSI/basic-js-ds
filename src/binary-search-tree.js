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

    let currNode = this.rootNode;

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

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    if (!this.root) {
      return null;
    }
    let currNode = this.rootNode;
    while (currNode) {
      if (data === currNode.data) {
        return currNode;
      } else if (data < currNode.data) {
        currNode = currNode.left;
      } else if (data > currNode.data) {
        currNode = currNode.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min(currNode = this.rootNode) {
    if (!currNode) {
      return;
    }
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max(currNode = this.rootNode) {
    if (!currNode) {
      return;
    }
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
console.log(`max - ${tree.max()}`); // 128
console.log(`min - ${tree.min()}`); // 1
// //false);
// console.log(`🚀 ~ tree.has(14):`, tree.has(14));
// //false);
// console.log(`🚀 ~ tree.has(8):`, tree.has(8));
// //false);
// console.log(`🚀 ~ tree.has(9):`, tree.has(9));
// //true);
// console.log(`🚀 ~ tree.has(2):`, tree.has(2));
// //true);
// console.log(`🚀 ~ tree.has(6):`, tree.has(6));
// //true);
// console.log(`🚀 ~ tree.has(128):`, tree.has(128));
// //true);
// console.log(`🚀 ~ tree.has(31):`, tree.has(31));
// //true);
// console.log(`🚀 ~ tree.has(54):`, tree.has(54));
// //true);
// console.log(`🚀 ~ tree.has(1):`, tree.has(1));

module.exports = {
  BinarySearchTree,
};
