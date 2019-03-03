# Non-Repeating Character

## Problem Description

> Implement a function that takes a string and returns the **first** character that does not appear twice or more.
> Example:
>
> - `"abacc"` -> `'b'` (`'a'` appears twice, and so does `'c'`)
> - `"xxyzx"` -> `'y'` (`'y'` and `'z'` are non-repeating characters, and `'y'` appears first)

> If there is no non-repeating character, return `None` or `null`.

## Solution

I've written an implementation that determines the solution in `O(n)` time complexity, where `n` is the number of characters in the given string.

- [JavaScript](./solution.js)
