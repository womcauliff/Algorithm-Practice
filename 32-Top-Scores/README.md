# Top Scores

## Problem Description

> Write a function that takes:
>
> 1. an array of `unsortedScores`
> 2. the `highestPossibleScore` in the game
>
> and returns a sorted array of scores in less than `O(n lg n)` time.
>
> Treat `highestPossibleScore` as a constant instead of factoring it into the big O time and space costs because the highest possible score isn’t going to change.

## Implementation

My solution sorts the scores within `O(n)` time complexity, and `O(n)` space complexity, given `n` scores.

- JavaScript
  - [Solution](./sortScores.js)
  - [JS Test File](./sortScores.test.js)
  - [CodeSandbox](https://codesandbox.io/s/4z74n80z70?autoresize=1&fontsize=14&module=%2FsortScores.js&previewwindow=tests)
