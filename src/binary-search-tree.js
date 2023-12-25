const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }

  root() {
    return this.rootValue;
  }
  find(value) {
    if (this.comparator(this.value, value) === 0) return this;

    if (this.comparator(this.value, value) < 0 && this.left) {
      return this.left.find(value);
    }

    if (this.comparator(this.value, value) > 0 && this.right) {
      return this.right.find(value);
    }

    return null;
  }
  add(value) {
    this.rootValue = addWithin(this.rootValue, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.rootValue, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data
        ? searchWithin(node.left, value)
        : searchWithin(node.right, value);
    }
  }

  remove(value) {
    this.rootValue = removeNode(this.rootValue, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootValue) {
      return;
    }

    let node = this.rootValue;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootValue) {
      return;
    }

    let node = this.rootValue;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  leftTraverse(cb) {
    doLeft(this.rootValue, cb);

    function doLeft(node, cb) {
      if (node) {
        doLeft(node.left, cb);
        cb(node);
        
        doLeft(node.right, cb);
      }
    }
  }

  rightTraverse(cb) {
    doRight(this.rootValue, cb);

    function doRight(node, cb) {
      if (node) {
        doRight(node.right, cb);
        cb(node.data);
        doRight(node.left, cb);
      }
    }
  }
  find(value) {
    let dump = null;
    console.log("  Left Traverse:");
    // for (var prop in Things) {
    //   Things[prop]
    // }

    this.leftTraverse((val) => val.data == value && (dump = val));
    //console.debug(dump);
    return dump;
  }
}

module.exports = {
  BinarySearchTree,
};
