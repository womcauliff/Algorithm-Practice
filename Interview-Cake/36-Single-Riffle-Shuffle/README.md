# Single Riffle Shuffle

## Problem Description

> Write a function to tell us if a full deck of cards `shuffledDeck` is a single riffle of two other halves `half1` and `half2`.
> We'll represent a stack of cards as an array of integers in the range `1..52` (since there are `52` distinct cards in a deck).

## Implementation

My solution returns a result in the worst-case in `O(n)` time, where `n` is the length of the shuffled deck, and `O(1)` space.

- JavaScript
  - [Solution](./solution.js)
  - [JS Test File](./checkSolution.test.js)
  - [CodeSandbox](https://codesandbox.io/s/0owzyvz3vv?autoresize=1&fontsize=14&module=%2Fsolution.js&previewwindow=tests)
