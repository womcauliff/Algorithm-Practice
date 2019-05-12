# Find Rotation Point

## Problem Description

> I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:
>
> ```
> const words = [
> 'ptolemaic',
> 'retrograde',
> 'supplant',
> 'undulate',
> 'xenoepist',
> 'asymptote',  // <-- rotates here!
> 'babka',
> 'banoffee',
> 'engender',
> 'karpatka',
> 'othellolagkage',
> ];
> ```
>
> **Write a function for finding the index of the "rotation point,"** which is where I started working from the beginning of the dictionary.

## Implementation

Because the input array is a _rotation_ of an alphabetically sorted array, my solution implements a variation of the standard Binary Search algorihtm to return a result with time and space complexities of `O(log n)` and `O(1)`, respectively.

- JavaScript
  - [Solution](./findRotationPoint.js)
  - [Jest Tests](./findRotationPoint.test.js)
  - [CodeSandbox]()
