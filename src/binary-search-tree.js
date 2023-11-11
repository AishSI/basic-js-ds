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

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (node.data > data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    const minRightSubdir = this.min(node.right);
    node.data = minRightSubdir;
    node.right = this.removeNode(node.right, minRightSubdir);

    return node;
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

module.exports = {
  BinarySearchTree,
};
