# Is This a Binary Search Tree?

## Problem Description

> Write a function that takes a binary tree and returns `true` if it is a **_binary search tree_**, and `false` if not.
> In tests, use the following examples:
>
> ```
> head1 = 0
>        / \
>       1   2
>      /\   /\
>     3  4 5  6
> ```
>
> **head1** is NOT a binary search tree.
>
> ```
> head2 = 3
>        / \
>       1   4
>      /\   /\
>     0  2 5  6
> ```
>
> **head2** is NOT a binary search tree.
>
> ```
> head3 = 3
>        / \
>       1   5
>      /\
>     0  4
> ```
>
> **head3** is NOT a binary search tree.
>
> ```
> head4 = 3
>        / \
>       1   5
>      /\   /\
>     0  2 4  6
> ```
>
> **head4** is a binary search tree.

## Solution

I've written an implementation that determines the solution in `O(n)` time complexity in the worst case, where `n` is the number of Nodes in the Binary Tree.

Languages Implemented:

- JavaScript
  - [Solution](./solution.js)
  - [JS Test File](./checkSolution.test.js)
  - [CodeSandbox](https://codesandbox.io/s/ykpllz6k7x?autoresize=1&fontsize=14&module=%2Fsolution.js&previewwindow=tests)
