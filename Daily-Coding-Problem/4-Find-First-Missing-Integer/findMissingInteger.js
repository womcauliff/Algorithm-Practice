/**
 * Finds the smallest positive integer missing from a series.
 * Note: mutates the input array in-place to achieve constant space complexity.
 * @param {Number[]} nums Array of integers.
 * @return {Number} The first missing positive integer
 */
export function findMissingInteger(nums) {
  if (!nums) return 1;

  // Algorithm:
  // We will swap array values in-place, so that each array index points to its
  // corresponding the positive integer (array[0] === 1, array[1] === 2, etc.)
  // Negative values and positive values *larger* than the array's length
  // will end up on the right side of the array.
  // After swapping is complete, sweep through the array, and return the first missing
  // positive value. Otherwise, if the series is a complete set with no missing values,
  // then return the next positive value.

  // Iterate over list once.
  for (let i = 0; i < nums.length; i++) {
    // Begin the swapping-loop if the current value is not in its proper location.
    // (Ignore negative values, and positive values greater than the array length)
    while (i + 1 !== nums[i] && 0 < nums[i] && nums[i] <= nums.length) {
      // Swap current value into its proper destination location.
      const destinationIndex = nums[i] - 1;
      const temp = nums[destinationIndex];
      nums[destinationIndex] = nums[i];
      nums[i] = temp;

      // Stop swapping once we replace two equivalent values
      if (nums[i] === nums[destinationIndex]) {
        break;
      }
    }
  }

  // Iterate over array, and return the first element
  // that does not match it's location.
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // No gaps in the series found.
  // Return the next largest positive integer.
  return nums.length + 1;
}

/**
 * Finds the smallest positive integer missing from a series, in
 * which the series may begin at any positive number.
 * @param {Number[]} integers Array of integers.
 * @return {Number} The first missing positive integer
 */
export function findMissingIntegerAboveFloor(integers) {
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
