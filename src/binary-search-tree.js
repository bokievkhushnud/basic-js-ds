const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  // Done
  root() {
    return this._root;
  }

  // Done
  add(data) {
    const newNode = new Node(data)
    if (this._root === null) {
      this._root = newNode
    } else {
      let currNode = this._root
      while (currNode !== null) {
        if (data < currNode.data) {
          if (!currNode.left) {
            currNode.left = newNode
            break
          }
          currNode = currNode.left
        }
        else {
          if (!currNode.right) {
            currNode.right = newNode
            break
          }
          currNode = currNode.right
        }
      }
    }
    // remove line with error and write your code here
  }

  // Done
  has(data) {
    return !!this.find(data);
  }

  // Done

  find(data) {
    let current = this._root;

    while (current) {
      if (data === current.data) {
        return current;
      }

      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  // Done
  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      let minRightNode = node.right;
      while (minRightNode.left) {
        minRightNode = minRightNode.left;
      }
      node.data = minRightNode.data;

      node.right = this._removeNode(node.right, minRightNode.data);

      return node;
    }
  }

  //  Done
  min() {

    if (!this._root) {
      return null
    }
    let currNode = this._root
    while (currNode.left) {
      currNode = currNode.left
    }
    return currNode.data
  }
  // Done
  max() {
    if (!this._root) {
      return null
    }
    let currNode = this._root
    while (currNode.right) {
      currNode = currNode.right
    }
    return currNode.data
  }

}


module.exports = {
  BinarySearchTree
};