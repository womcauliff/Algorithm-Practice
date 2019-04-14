# Apple Stocks

## Problem Description

> I grabbed Apple's stock prices from yesterday and put them in an array called `stockPrices`, where:
>
> - The **indices** are the time (in minutes) past trade opening time, which was 9:30am local time.
> - The **values** are the price (in US dollars) of one share of Apple stock at that time.
>
> Write an efficient function that takes `stockPrices` and returns **the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday**.

## Implementation

Using a greedy algorithm, my solution returns a result within a time complexity of `O(n)`, and constant space complexity `O(1)`, where `n` is the number of stock prices.

- JavaScript
  - [Solution](./findMaxProfit.js)
  - [JS Test File](./findMaxProfit.test.js)
  - [CodeSandbox](https://codesandbox.io/s/3ymvm68l75?autoresize=1&fontsize=14&module=%2FfindMaxProfit.js&previewwindow=tests)
