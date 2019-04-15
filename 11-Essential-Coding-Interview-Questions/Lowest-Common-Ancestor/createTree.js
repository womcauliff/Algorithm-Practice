import TreeNode from "./TreeNode";
/**
 * Generates a Binary Tree
 * @param {Object} mapping An Object map where keys represent Node values,
 * and values are arrays of children Nodes.
 * @param {Number} headValue The property key of the mapping Object
 * which represents the Binary Tree's head Node.
 * @return {TreeNode} Returns a reference to the head TreeNode.
 */
function createTree(mapping, headValue) {
  const head = new TreeNode(headValue);
  const nodes = { [headValue]: head };
  nodes[headValue] = head;

  Object.keys(mapping).forEach(key => {
    if (mapping.hasOwnProperty(key)) {
      let value = mapping[key];
      let leftChild = new TreeNode(value[0]);
      let rightChild = new TreeNode(value[1]);
      nodes[value[0]] = leftChild;
      nodes[value[1]] = rightChild;
    }
  });

  Object.keys(mapping).forEach(key => {
    if (mapping.hasOwnProperty(key)) {
      let value = mapping[key];
      nodes[key].left = nodes[value[0]];
      nodes[key].right = nodes[value[1]];
    }
  });

  return head;
}
export default createTree;
