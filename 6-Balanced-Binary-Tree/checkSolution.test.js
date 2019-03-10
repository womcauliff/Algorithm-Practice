import BinaryTreeNode from "./BinaryTreeNode";
import isBalanced from "./solution";

test(`full tree`, () => {
  const treeRoot = new BinaryTreeNode(5);
  const leftNode = treeRoot.insertLeft(8);
  leftNode.insertLeft(1);
  leftNode.insertRight(2);
  const rightNode = treeRoot.insertRight(6);
  rightNode.insertLeft(3);
  rightNode.insertRight(4);
  expect(isBalanced(treeRoot)).toBe(true);
});

test(`both leaves at the same depth`, () => {
  const treeRoot = new BinaryTreeNode(3);
  const leftNode = treeRoot.insertLeft(4);
  leftNode.insertLeft(1);
  const rightNode = treeRoot.insertRight(6);
  rightNode.insertRight(9);
  expect(isBalanced(treeRoot)).toBe(true);
});

test(`leaf heights differ by one`, () => {
  const treeRoot = new BinaryTreeNode(6);
  treeRoot.insertLeft(1);
  const rightNode = treeRoot.insertRight(0);
  rightNode.insertRight(7);
  expect(isBalanced(treeRoot)).toBe(true);
});

test(`leaf heights differ by two`, () => {
  const treeRoot = new BinaryTreeNode(6);
  treeRoot.insertLeft(1);
  const rightNode = treeRoot.insertRight(0);
  rightNode.insertRight(7).insertRight(8);
  expect(isBalanced(treeRoot)).toBe(false);
});

test(`three leaves total`, () => {
  const treeRoot = new BinaryTreeNode(1);
  treeRoot.insertLeft(5);
  const rightNode = treeRoot.insertRight(9);
  rightNode.insertLeft(8);
  rightNode.insertRight(5);
  expect(isBalanced(treeRoot)).toBe(true);
});

test(`both subtrees superbalanced`, () => {
  const treeRoot = new BinaryTreeNode(1);
  treeRoot.insertLeft(5);
  const rightNode = treeRoot.insertRight(9);
  rightNode.insertLeft(8).insertLeft(7);
  rightNode.insertRight(5);
  expect(isBalanced(treeRoot)).toBe(false);
});

test(`only one node`, () => {
  const treeRoot = new BinaryTreeNode(1);
  expect(isBalanced(treeRoot)).toBe(true);
});

test(`linked list tree`, () => {
  const treeRoot = new BinaryTreeNode(1);
  treeRoot
    .insertRight(2)
    .insertRight(3)
    .insertRight(4);
  expect(isBalanced(treeRoot)).toBe(true);
});
