import isBST from "./solution";
import createTree from "./createTree";

it(`can return false when direct left-child is not less than parent.`, () => {
  const mapping1 = { 0: [1, 2], 1: [3, 4], 2: [5, 6] };
  const head = createTree(mapping1, 0);
  expect(isBST(head)).toBe(false);
});
it(`can return false when head is less than a leaf node on right-subtree.`, () => {
  const mapping2 = { 3: [1, 4], 1: [0, 2], 4: [5, 6] };
  const head = createTree(mapping2, 3);
  expect(isBST(head)).toBe(false);
});
it(`can return false when head is greater than a leaf node on left-subtree.`, () => {
  const mapping4 = { 3: [1, 5], 1: [0, 4] };
  const head = createTree(mapping4, 3);
  expect(isBST(head)).toBe(false);
});
it(`can return true when tree fulfills definition of BST.`, () => {
  const mapping3 = { 3: [1, 5], 1: [0, 2], 5: [4, 6] };
  const head = createTree(mapping3, 3);
  expect(isBST(head)).toBe(true);
});
