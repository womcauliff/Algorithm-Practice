/**
 * Recursively determines if a Binary Tree also fulfills the definition of a Binary Search Tree.
 * @param {TreeNode} node The current Node of a Binary Tree.
 * @param {Number} lowerLim The expected lower limit for the Node's value.
 * @param {Number} upperLim The expected upper limit for the Node's value.
 * @return {Boolean} Returns true if the tree is a Binary Search Tree.
 */
function isBST(node, lowerLim = null, upperLim = null) {
  // Check if current Node's value is within previously seen limits.
  if (lowerLim && node.value < lowerLim) return false;
  if (upperLim && node.value > upperLim) return false;

  // Recursively check children Nodes,
  // passing down the current Node's value as one of the limits.
  let leftSide = true;
  let rightSide = true;
  if (node.left) {
    leftSide = isBST(node.left, lowerLim, node.value);
  }
  if (node.right) {
    rightSide = isBST(node.right, node.value, upperLim);
  }
  return leftSide && rightSide;
}
export default isBST;
