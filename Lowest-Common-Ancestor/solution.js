/**
 * Finds the value of the Lowest Common Ancestor (LCA) between two nodes of a binary tree.
 * https://en.wikipedia.org/wiki/Lowest_common_ancestor
 * @param {TreeNode} root The root node of the tree.
 * @param {Number} j The value of the first target node.
 * @param {Number} k The value of the second target node.
 * @return {Number} The value of the LCA node.
 */
function lca(root, j, k) {
  // Return if reference to root node is missing.
  if (root === null) return null;

  // A single target node is its own LCA.
  if (j === k) return j;

  // Perform depth-first search (DFS) for target nodes,
  // while also saving the path from root to current node (its "ancestors")
  const stack = [];
  stack.push({ node: root, path: [root.value] });
  let pathToJ = [];
  let pathToK = [];

  let searchCompleted = false;
  let targetNodesFound = false;
  // Stop DFS when tree has been completely searched, or when both target nodes are found.
  while (!searchCompleted && !targetNodesFound) {
    const { node, path } = stack.pop();

    // If we find target node with value j or k,
    // save the path of its ancestor nodes.
    if (node.value === j) {
      pathToJ = path;
    }
    if (node.value === k) {
      pathToK = path;
    }

    // Push child nodes onto stack
    const leftChild = node.left;
    const rightChild = node.right;
    if (rightChild) {
      stack.push({
        node: rightChild,
        path: [...path, rightChild.value]
      });
    }
    if (leftChild) {
      stack.push({
        node: leftChild,
        path: [...path, leftChild.value]
      });
    }

    searchCompleted = stack.length === 0;
    targetNodesFound = pathToJ.length !== 0 && pathToK.length !== 0;
  }

  // Return if either one of the target nodes do not exist on tree.
  if (pathToJ.length === 0) return null;
  if (pathToK.length === 0) return null;

  // track value of lowest common ancestor
  let lca = null;
  // sweep through the two paths, stopping sweep when:
  //   end of one path is reached
  //   or diverging ancestor is found
  for (let i = 0; i < pathToJ.length && i < pathToK.length; i++) {
    // If diverging ancestor is found, stop sweep.
    if (pathToJ[i] !== pathToK[i]) break;

    // otherwise, both paths match, update value of lca
    lca = pathToJ[i];
  }

  // return the value of lowest common ancestor
  return lca;
}

export default lca;
