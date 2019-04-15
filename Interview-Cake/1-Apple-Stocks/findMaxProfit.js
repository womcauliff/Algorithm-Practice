/**
 * Finds the maximum profit that can be made from one purchase and one sale of one share of stock.
 * @param {Number[]} stockPrices Each index represents a minute after trade opening, and each value
 * represents the stock price at that time.
 * @return {Number} The maximum profit
 */
function findMaxProfit(stockPrices) {
  // A stock cannot be bought and sold in the same minute.
  // Thus, a minimum of two stocks are needed.
  if (stockPrices.length < 2)
    throw Error("Must have at least two stock prices to make a profit.");

  // Start with an initial max profit value, using prices from minute 1 and 0.
  let maxProfit = stockPrices[1] - stockPrices[0];
  // Track the lowest price seen thus far, which will be used to determine the best profit to be made.
  let lowestSeen = Math.min(stockPrices[0], stockPrices[1]);

  // Sweep through the rest of stockPrices, starting at minute 2
  for (let minute = 2; minute < stockPrices.length; minute++) {
    const currentPrice = stockPrices[minute];
    // Calculate the profit made if we sell at current price
    const currentProfit = currentPrice - lowestSeen;

    // Save the better of the two profits
    maxProfit = Math.max(currentProfit, maxProfit);

    // Save the lower price as the lowest seen
    lowestSeen = Math.min(lowestSeen, currentPrice);
  }

  // Return result
  return maxProfit;
}
export default findMaxProfit;
