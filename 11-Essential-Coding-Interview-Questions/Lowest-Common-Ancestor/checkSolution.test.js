import lca from "./solution";
import createTree from "./createTree";

describe("lca(), given tree 1", () => {
  const head = createTree({ 0: [1, 2], 1: [3, 4], 2: [5, 6] }, 0);
  /**
   * This tree is:
   * head1 = 0
   *        / \
   *       1   2
   *      /\   /\
   *     3  4 5  6
   */
  it(`can find root as common ancestor.`, () => {
    expect(lca(head, 1, 5)).toBe(0);
  });
  it(`can find second input itself as common ancestor.`, () => {
    expect(lca(head, 3, 1)).toBe(1);
  });
  it(`can find first input itself as common ancestor.`, () => {
    expect(lca(head, 1, 4)).toBe(1);
  });
  it(`can receive root and leaf as input and find root as common ancestor.`, () => {
    expect(lca(head, 0, 5)).toBe(0);
  });
});

describe("lca(), given tree 2", () => {
  const head = createTree({ 5: [1, 4], 1: [3, 8], 4: [9, 2], 3: [6, 7] }, 5);
  /**
   * This tree is:
   * head2 = 5
   *       /   \
   *      1     4
   *     / \    / \
   *    3   8  9   2
   *   /\
   *  6  7
   */

  it(`can find root as common ancestor.`, () => {
    expect(lca(head, 4, 7)).toBe(5);
  });
  it(`can find a single node as its own common ancestor.`, () => {
    expect(lca(head, 3, 3)).toBe(3);
  });
  it(`can find common ancestor between two leaves.`, () => {
    expect(lca(head, 8, 7)).toBe(1);
  });
  it(`can handle bad input where node does not exist in tree.`, () => {
    expect(lca(head, 3, 0)).toBe(null);
  });
});
