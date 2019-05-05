/**
 * Recursively traverses a binary tree, calculating the number of unival subtrees.
 * @param {BinaryTreeNode} treeNode The current node
 * @returns {[Number, Boolean]} An array pair, where the first element is the number of
 * unival subtrees below the current node, and the second element is a boolean indicating
 * whether the current node is itself the root of a unival subtree.
 */
function recursiveUnivalHelper(treeNode) {
  if (!treeNode.left && !treeNode.right) {
    // base case: a leaf node is an occurence of univalue tree
    return [1, true];
  }

  // The number of unival subtrees below this current node
  let count = 0;

  // To determine if the current node is the root of another unival subtree,
  // we must confirm:
  // 1. each child node is root of unival subtree
  // 2. current node's value matches each child node's value
  let sameValue = true;
  let isUnival = true;

  if (treeNode.left) {
    // Get left-subtree count
    const [leftCount, leftIsUnival] = recursiveUnivalHelper(treeNode.left);
    count += leftCount;

    // Determine if current node is root of unival subtree
    sameValue = sameValue && treeNode.value === treeNode.left.value;
    isUnival = isUnival && leftIsUnival && sameValue;
  }
  if (treeNode.right) {
    // Get right-subtree count
    const [rightCount, rightIsUnival] = recursiveUnivalHelper(treeNode.right);
    count += rightCount;

    // Determine if current node is root of unival subtree
    sameValue = sameValue && treeNode.value === treeNode.right.value;
    isUnival = isUnival && rightIsUnival && sameValue;
  }

  if (isUnival && sameValue) {
    // The current node is root of a unival subtree
    // Increment count.
    count += 1;
  }
  // 	Return array pair
  return [count, isUnival];
}

/**
 * Finds the number of unival subtrees ("universal value", a tree where all nodes
 * under it have the same value).
 * @param {BinaryTreeNode} treeNode The root node of the binary tree
 * @returns {Number} The number of unival subtrees
 */
function countUnivalTrees(rootNode) {
  if (!rootNode) return 0;

  const [count] = recursiveUnivalHelper(rootNode);
  return count;
}

export default countUnivalTrees;
