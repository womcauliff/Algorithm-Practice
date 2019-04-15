# Problem #2 [Hard]

## Problem Description

> Given an array of integers, return a new array such that each element at index `i` of the new array is the product of all the numbers in the original array except the one at `i`.

## Implementation

My solution generates the result array by sweeping through the source array twice, which means it falls under time complexity of `O(n)`, where `n` is the number of elements in the source array.

- JavaScript
  - [Solution](./productOfAllOthers.js)
  - [Jest Test File](./productOfAllOthers.test.js)
  - [CodeSandbox](https://codesandbox.io/s/586mk36lx?autoresize=1&fontsize=14&module=%2FproductOfAllOthers.js&previewwindow=tests)
