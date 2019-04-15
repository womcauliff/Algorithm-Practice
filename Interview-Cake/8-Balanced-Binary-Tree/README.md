# 8. Balanced Binary Tree

## Problem Description

> Write a function to see if a binary tree is "superbalanced" (a new tree property we just made up).
>
> A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.

## Implementation

My solution relies on an iterative depth-first search approach to reach all leaf nodes, and checks if the leaf nodes' depth values contradict the given definition of a balanced binary tree. The worst case is one in which the algorithm checks all nodes on the tree to verify the the tree **is balanced**. Thus, this solution solves the problem in `O(n)` time, where `n` is the number of nodes in the binary tree.

- JavaScript
  - [Solution](./solution.js)
  - [JS Test File](./checkSolution.test.js)
  - [CodeSandbox](https://codesandbox.io/s/l74yr4k72q?autoresize=1&fontsize=14&module=%2Fsolution.js&previewwindow=tests)
