/**
 * @typedef {Object} BinaryTreeNode
 * @property {BinaryTreeNode|null} left The left child
 * @property {BinaryTreeNode|null} right The right child
 * @property {Number} value The node's value
 */

/**
 * Determines if a given binary tree is "superbalanced", which means the difference between the
 * depths of any two leaf nodes is no greater than one.
 * @param {BinaryTreeNode} treeRoot The root node of the tree.
 * @return {boolean} Returns a boolean indicating if the tree is balanced or not.
 */
function isBalanced(treeRoot) {
  // To verify the tree's balance, we do not need to actually do a complete comparison
  // of each leaf to every other leaf (thankfully!).
  // Rather, while traversing the tree, if we view leaves at **more** than two depths,
  // or if there are leaves at two depths **more than one level apart**,
  // we can conclude the tree is **not** balanced.

  // An empty tree is considered balanced.
  if (!treeRoot) {
    return true;
  }

  // Track the unique leaf depths seen so far.
  const leafDepths = [];

  // We will perform an iterative DFS traversal of the tree.
  // We rely on a Stack (LIFO) containing BinaryTreeNode objects and their depths.
  const nodeStack = [[treeRoot, 0]];

  // Continue DFS while there are still BinaryTreeNode objects on the Stack
  while (nodeStack.length > 0) {
    // Pop node from top of Stack
    const [currNode, currNodeDepth] = nodeStack.pop();

    // Check if current node has children
    if (currNode.left === null && currNode.right === null) {
      // No children; thus, this is a leaf.
      // Add its depth into the leafDepths array (only if unique)
      if (leafDepths.indexOf(currNodeDepth) === -1) {
        leafDepths.push(currNodeDepth);
      }

      if (leafDepths.length > 2) {
        // We have discovered leaf nodes at more than two unique depths.
        // Stop searching now; the tree is not balanced.
        return false;
      } else if (
        leafDepths.length === 2 &&
        Math.abs(leafDepths[0] - leafDepths[1]) > 1
      ) {
        // We have found leaves at two depths that are more than one level apart.
        // Stop searching now; the tree is not balanced.
        return false;
      }
    } else {
      // Add the node's children to the Stack, incrementing the depth.
      if (currNode.left !== null) {
        nodeStack.push([currNode.left, currNodeDepth + 1]);
      }
      if (currNode.right !== null) {
        nodeStack.push([currNode.right, currNodeDepth + 1]);
      }
    }
  }

  // We have fully completed tree search without finding BinaryTreeNodes that
  // fail our conditions for balance.
  // Thus, the tree is balanced.
  return true;
}

export default isBalanced;
