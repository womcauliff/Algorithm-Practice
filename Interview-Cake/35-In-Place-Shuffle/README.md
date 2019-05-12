# In-Place Shuffle

## Problem Description

> Write a function for doing an in-place shuffle of an array. The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

## Implementation

My solution is an implementation of the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle), which will ensure the resulting shuffle follows a random uniform distribution. My solution returns a result in `O(n)` time, where `n` is the length of the input array, and `O(1)` space because the shuffle is performed in-place.

- JavaScript
  - [Solution](./inPlaceShuffle.js)
