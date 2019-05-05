# Problem #8 [Easy]

## Problem Description

> A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value. A leaf qualifies as a unival tree.
>
> Given the root to a binary tree, count the number of unival subtrees.
>
> For example, the following tree has 5 unival subtrees:
>
> ```
>   0
>  / \
> 1   0
>    / \
>   1   0
>  / \
> 1   1
> ```

## Implementation

I've written an implementation that determines the solution in `O(n)` time complexity, where `n` is the number of Nodes in the Binary Tree.

- JavaScript
  - [Solution](./countUnivalTrees.js)
  - [Jest Test File](./countUnivalTrees.test.js)
  - [CodeSandbox](https://codesandbox.io/s/6y2qmn95nr?autoresize=1&fontsize=14&module=%2FcountUnivalTrees.js&previewwindow=tests)
