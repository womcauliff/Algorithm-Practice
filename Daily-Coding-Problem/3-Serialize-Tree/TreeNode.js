/**
 * @property {Number} val The node's value
 * @property {TreeNode|null} left The left child
 * @property {TreeNode|null} right The right child
 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

export default TreeNode;
