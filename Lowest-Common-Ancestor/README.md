# Lowest Common Ancestor

## Problem Description

> Find the lowest common ancestor of two items in a binary tree.
> **Assumptions**:
>
> - Each value in the tree is unique (there are no two nodes with the same value).
> - Each node has at most two children, left and right.
> - You do **not** have a **_level_** attribute in each of your nodes (for example, 1st layer, 2nd layer, and so on).
> - Each node has pointers to left and right children, but there's no back link (a child node does not point back to its parent node).
>
> **Example**:
>
> ```
> head = 5
>       / \
>      1   4
>     /\   /\
>    3  8 9  2
>   /\
>  6  7
> ```
>
> - LCA of 8 and 7 is 1.
> - LCA of 4 and 2 is 4.
>
> **NOTE:** In our test code, the following two trees will be used.
>
> ```
> head1 = 0
>        / \
>       1   2
>      /\   /\
>     3  4 5  6
> ```
>
> ```
> head2 = 5
>       /   \
>      1     4
>     / \    / \
>    3   8  9   2
>   /\
>  6  7
> ```

## Solution

I've written an implementation that determines the solution in `O(n)` time complexity in the worst case, where `n` is the number of Nodes in the Binary Tree.

Languages Implemented:

- [JavaScript Solution](./solution.js)
  - [JS Test File](./checkSolution.test.js)
