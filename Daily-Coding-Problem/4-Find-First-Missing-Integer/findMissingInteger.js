/**
 * Finds the smallest positive integer missing from a series.
 * @param {Number[]} integers Array of integers.
 * @return {Number} The first missing positive integer
 */
function findMissingInteger(integers) {
  // Sweep over integers, and calculate the following:
  // 1. max - the largest positive integer
  // 2. min - the smallest positive integer
  // 3. sum - the total of all positive integers
  const initialObject = { max: -Infinity, min: Infinity, sum: 0 };
  const result = integers.reduce((accumulator, currentValue) => {
    // Ignore non-positive values
    if (currentValue < 1) {
      return accumulator;
    }

    const { max, min, sum } = accumulator;
    accumulator.max = Math.max(currentValue, max);
    accumulator.min = Math.min(currentValue, min);
    accumulator.sum = sum + currentValue;
    return accumulator;
  }, initialObject);

  const { max, min, sum } = result;

  // Caclculate the expected total if all numbers from min to max are present
  // If sum from 1 to n === n * (n + 1) / 2
  // Then sum from a to n === [n * (n + 1) / 2] – [(a - 1) * a / 2]
  const expectedTotal = (max * (max + 1)) / 2 - ((min - 1) * min) / 2;

  // Calculate the difference to see if a number is missing from expected total
  const difference = expectedTotal - sum;

  // Return the missing number,
  // or, if no numbers misisng, the next highest positive integer after max.
  return difference > 0 ? difference : max + 1;
}

export default findMissingInteger;
