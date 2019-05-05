import countUnivalTrees from "./countUnivalTrees";
import BinaryTreeNode from "./BinaryTreeNode";

describe(`countUnivalTrees()`, () => {
  it(`returns count with leaves only`, () => {
    /**
     * Tree Structure:
     *     a
     *    / \
     *   a   a
     *       /\
     *      a  a
     *          \
     *           A
     */
    const root = new BinaryTreeNode("a");
    root.insertLeft("a");
    root.insertRight("a");
    root.right.insertLeft("a");
    root.right.insertRight("a");
    root.right.right.insertRight("A");

    expect(countUnivalTrees(root)).toBe(3);
  });

  it(`returns count that adds leaves and unival subtrees`, () => {
    /**
     * Tree Structure:
     *     a
     *    / \
     *   c   b
     *       /\
     *      b  b
     *          \
     *           b
     */
    const root = new BinaryTreeNode("a");
    root.insertLeft("c");
    root.insertRight("b");
    root.right.insertLeft("b");
    root.right.insertRight("b");
    root.right.right.insertRight("b");

    expect(countUnivalTrees(root)).toBe(5);
  });

  it(`returns count that adds leaves and unival subtrees (integers)`, () => {
    /**
     * Tree Structure:
     *   0
     *  / \
     * 1   0
     *    / \
     *   1   0
     *  / \
     * 1   1
     */
    const root = new BinaryTreeNode(0);
    root.insertLeft(1);
    root.insertRight(0);
    root.right.insertRight(0);
    root.right.insertLeft(1);
    root.right.left.insertLeft(1);
    root.right.left.insertRight(1);

    expect(countUnivalTrees(root)).toBe(5);
  });
});
