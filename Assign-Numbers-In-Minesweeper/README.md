# Assign Numbers in Minesweeper

## Problem Description

> Implement a function that assigns correct numbers in a field of Minesweeper, which is represented as a 2 dimensional array.
>
> Your function should return the resulting 2D array after taking the following three arguments:
>
> 1. **bombs**: A list of bomb locations. Given as an array of arrays.
> 2. **num_rows**: The number of rows in the resulting field.
> 3. **num_columns**: The number of columns in the resulting field.
>
> In the resulting field:
>
> - **-1** represents that there is a bomb in that location
> - **1, 2, 3... etc.** represents that there are **1, 2, 3... etc.** bombs in the surrounding cells (including diagonally adjacent cells).
> - **0** represents that there are no bombs in the surrounding cells.

## Solution

- [JavaScript](./solution.js)

  - [JS Test File](./checkSolution.test.js)
