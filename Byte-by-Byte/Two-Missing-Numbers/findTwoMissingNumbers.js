/**
 * Finds the two missing positive integers from a given series.
 * Note: Cannot handle duplicate elements.
 * @param {Number[]} arr The array of integers.
 * @returns {Number[]} The two smallest positive elements missing from array.
 */
export function missingTwoNoDuplicates(arr) {
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

/**
 * Finds a given number of missing positive integers from a given series. Can handle
 * duplicate values and negative integers.
 * @param {Number[]} arr The array of integers.
 * @param {Number} numMissing The number of positive integers missing from the given series.
 * @returns {Number[]} The given number of smallest positive elements missing from array, in ascending order.
 */
function missing(arr, numMissing) {
  // Handle case where no array is passed.
  if (!arr) {
    const result = new Array(numMissing);
    for (let i = 0; i < result.length; i++) {
      result[i] = i + 1;
    }
    return result;
  }

  // Iterate over list once.
  for (let i = 0; i < arr.length; i++) {
    // Begin the swapping-loop if the current value is not in its proper location.
    // Ignore negative values, and positive values greater than the array length.
    // (This nested while-loop is actually *not* O(n^2) because each element is only swapped *once*!)
    while (arr[i] !== i + 1 && arr[i] > 0 && arr[i] <= arr.length) {
      // Swap current value into its proper destination location.
      const destinationIndex = arr[i] - 1;
      const temp = arr[destinationIndex];
      arr[destinationIndex] = arr[i];
      arr[i] = temp;

      // Stop swapping once we replace two equivalent values
      if (arr[i] === arr[destinationIndex]) {
        break;
      }
    }
  }

  // Iterate over the swapped-elements arary, and record which elements are missing.
  // Continue until we have recorded the given number missing elements.
  const missing = [];
  let currentVal = 1;
  while (missing.length < numMissing) {
    let searchIndex = currentVal - 1;

    if (searchIndex >= arr.length) {
      // If we have swept through list and still need additional missing elements,
      // check only last element in the list.
      searchIndex = arr.length - 1;
    }
    if (currentVal !== arr[searchIndex]) {
      // If there is a mismach, this is a missing value from the series.
      missing.push(currentVal);
    }
    currentVal += 1;
  }

  return missing;
}

/**
 * Finds the two missing positive integers from a given series.
 * @param {Number[]} arr The array of integers.
 * @returns {Number[]} The two smallest positive elements missing from array, in ascending order.
 */
export function missingTwo(arr) {
  // partial function application
  return missing(arr, 2);
}

export default missing;
