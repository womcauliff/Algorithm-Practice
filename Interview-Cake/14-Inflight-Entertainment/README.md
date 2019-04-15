# 14. Inflight Entertainment

## Problem Description

> You've built an inflight entertainment system with on-demand movie streaming. Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. You're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
>
> Write a function that takes an integer `flightLength` (in minutes) and an array of integers `movieLengths` (in minutes) and returns a boolean indicating whether there are two numbers in `movieLengths` whose sum equals `flightLength`.

## Implementation

Relying a hashtable, in the worst-case my implementation will return a result in `O(n)` time complexity, with `O(n)` space complexity.

- JavaScript
  - [Solution](./solution.js)
  - [Test file](./checkSolution.test.js)
  - [CodeSandbox](https://codesandbox.io/s/815xv44om2?autoresize=1&fontsize=14&module=%2Fsolution.js&previewwindow=tests)
