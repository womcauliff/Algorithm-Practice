# Find Where to Expand in Minesweeper

## Problem Description

> Implement a function that turns revealed cells into `-2` given a location that the user wants to click.
>
> For simplicity, only reveal cells that have a `0` in them. If the user clicks on any other type of cell (for example, `-1` / bomb or `1`, `2`, or `3`), just ignore the click and return the original field. If a user clicks `0`, reveal all other `0`'s that are connected to it.
>
> Your function should take:
>
> - `field`: The given field as a 2D array
> - `numRows`: The number of rows in the given field.
> - `numCols`: The number of columns in the resulting field.
> - `givenI`: The row index of the cell the user wants to click.
> - `givenJ`: The column index of the cell the user wants to click.

## Solution

My implementation will return the solution with a time complexity of `O(numRows * numCols)`, and because it follows a breadth-first search, the space complexity is `O(n + m)`.

- JavaScript
  - [Solution](./solution.js)
  - [JS Test 1](./minefield1.test.js)
  - [JS Test 2](./minefield2.test.js)
  - [CodeSandbox](https://codesandbox.io/s/20mvzq1kvp?autoresize=1&fontsize=14&previewwindow=tests)
