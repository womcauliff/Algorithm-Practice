import { serialize, deserialize } from "./serializeTree";
import TreeNode from "./TreeNode";

describe(`serialize()`, () => {
  it(`reproduces BST of integers`, () => {
    /**
     * Tree Structure:
     *   1
     *  / \
     * 2   3
     *    / \
     *   4   5
     */

    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);
    expect(deserialize(serialize(root))).toEqual(root);
  });

  it(`reproduces tree of mixed types`, () => {
    /**
     * Tree Structure:
     *  Infinity
     *   /  \
     * "2"  "3"
     *      / \
     *     4  5.9
     */

    const root = new TreeNode(Infinity);
    root.left = new TreeNode("2");
    root.right = new TreeNode("3");
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5.9);
    expect(deserialize(serialize(root))).toEqual(root);
  });
});
