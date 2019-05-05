/**
 * @property {BinaryTreeNode|null} left The left child
 * @property {BinaryTreeNode|null} right The right child
 * @property {Number} value The node's value
 */
class BinaryTreeNode {
  /**
   * @param {Number} value The value that the node should maintain.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Adds the given value into this node's left child node.
   * @param {Number} value The value to insert into the left child node.
   * @returns {BinaryTreeNode} Pointer to the left child node.
   */
  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  /**
   * Adds the given value into this node's right child node.
   * @param {Number} value The value to insert into the right child node.
   * @returns {BinaryTreeNode} Pointer to the right child node.
   */
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

export default BinaryTreeNode;
