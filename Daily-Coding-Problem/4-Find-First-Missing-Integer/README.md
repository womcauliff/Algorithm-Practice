# Problem #4 [Hard]

## Problem Description

> Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

## Implementation

My solution finds the missing integer under the time complexity of `O(n)`, where `n` is the number of elements in the source array. The solution generates the result with a datastructure of constant space complexity `O(1)`.

My solution does not yet account for duplicate integers.

- JavaScript
  - [Solution](./findMissingInteger.js)
  - [Jest Test File](./findMissingInteger.test.js)
  - [CodeSandbox](https://codesandbox.io/s/lrwqj2jzxz?autoresize=1&fontsize=14&module=%2FfindMissingInteger.js&previewwindow=tests)
