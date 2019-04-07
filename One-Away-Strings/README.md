# One Away Strings

## Problem Description

> Write a function that takes two strings and returns `True` if they are **_one away_** from each other.
> They are one away from each other if a single operation (changing a character, deleting a character, or adding a character) will change one of the strings to the other.
>
> Examples:
>
> - `"abcde"` and `"abcd"` are one away (deleting a character)
> - `"a"` and `"a"` are one away (changing the only character `'a'` to the equivalent character `'a'`)
> - `"abc"` and `"bcc"` are **NOT** one away. (They are two operations away)

## Solution

I've written an implementation that determines the solution in `O(n)` time complexity, where `n` is the number of characters in the longer string.

- JavaScript
  - [Solution](./solution.js)
  - [JS Test File](./isOneAway.test.js)
  - [CodeSandbox](https://codesandbox.io/s/9l5ly2mp9p?autoresize=1&fontsize=14&module=%2FisOneAway.test.js&previewwindow=tests)
- [Python](./solution.py)
