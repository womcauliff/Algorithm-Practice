# Two Missing Numbers

## Problem Description

> Given an array containing all the numbers from 1 to n except two, find the two missing numbers.
>
> eg.
>
> `missing([4, 2, 3]) = 1, 5`

## Implementation

My solution finds the missing integer under the time complexity of `O(n)`, where `n` is the number of elements in the source array. The solution generates the result with assumption that no duplicates exist, which allows for an implementation that needs achieves constant space complexity `O(1)`.

- JavaScript
  - [Solution](./findTwoMissingNumbers.js)
  - [Jest Test File](./findTwoMissingNumbers.test.js)
  - [CodeSandbox](https://codesandbox.io/s/734326mlrx?autoresize=1&fontsize=14&module=%2FfindTwoMissingNumbers.js&previewwindow=tests)
