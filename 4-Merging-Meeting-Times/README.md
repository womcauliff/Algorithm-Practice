# 4. Merging Meeting Times

## Problem Description

> Write a function `mergeRanges()` that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

## Implementation

My solution sorts the array of meeting times and then merges those that overlap. I perform the merge operation in linear time, so the most expensive operation is the time spent sorting the array. Thus, the solution is `O(n log n)`.

- [JavaScript](./solution.js)
  - [JS Test File](./checkSolution.test.js)
