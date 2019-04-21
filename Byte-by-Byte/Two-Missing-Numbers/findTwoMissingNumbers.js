/**
 * Finds the two missing positive integers from a given series.
 * @param {Number[]} arr The array of integers.
 * @returns {Number[]} The two smallest positive elements missing from array.
 */
function missing(arr) {
  if (!arr) return [1, 2];

  // Reduce array to find the total sum of elements in the array (actual),
  const { total: actualTotal, max } = arr.reduce(
    (obj, num) => {
      obj.total += num;
      obj.max = Math.max(obj.max, num);
      return obj;
    },
    { total: 0, max: arr[0] }
  );

  // Calculate the sum of 1 to n (expected)
  const expectedTotal = (max * max + max) / 2;

  // If expected and actual totals are equal
  if (expectedTotal === actualTotal) {
    // The series is not missing any elements.
    // Return the next two integers greater than the maximum.
    return [max + 1, max + 2];
  }

  // The difference between the sums itself represents either
  // the sum of two missing integers, or the series' only missing integer.
  const diff = expectedTotal - actualTotal;
  const midpoint = Math.floor(diff / 2);

  const expected2 = (midpoint * midpoint + midpoint) / 2;
  // Calculate the actual total for all integers less than midpoint.
  const actual2 = arr.reduce((runningTotal, num) => {
    if (num <= midpoint) {
      return (runningTotal += num);
    }
    return runningTotal;
  }, 0);

  // If the expected and actual midpoint sums are equal
  if (expected2 === actual2) {
    // Then the series is missing only one element (the diff itself).
    // The second element returned will be integer one greater than the maximum.
    return [diff, max + 1];
  }

  // Else, the series is missing two elements, which when added together,
  // equal the diff.
  return [expected2 - actual2, diff - (expected2 - actual2)];
}

export default missing;
