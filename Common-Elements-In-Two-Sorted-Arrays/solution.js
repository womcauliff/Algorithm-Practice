/**
 * @param {number} num1 The first number
 * @param {number} num2 The second number
 * @return {number} The lesser of the two numbers, or num1 if
 * the two numbers are equal.
 */
function returnLesser(num1, num2) {
  return num1 - num2 < 0 ? num1 : num2;
}

/**
 * @param {number[]} list1 The first array of integers.
 * @param {number[]} list2 The second array of integers.
 * @return {number[]} Returns the array of integers that the two arrays
 * have in common. If none are found, returns an empty array.
 */
function commonElements(list1, list2) {
  const result = [];
  let index1 = 0; // index-pointer for list1
  let index2 = 0; // index-pointer for list2
  // Start the search at the *lower* of the two first elements.
  let currentValue = returnLesser(list1[0], list2[0]);
  // Loop through the two arrays.
  while (
    // Stop the search when one of the index-pointer variables
    // hit the end of their array length.
    index1 < list1.length &&
    index2 < list2.length
  ) {
    // Search for the lesser of the two current values
    currentValue = returnLesser(list1[index1], list2[index2]);

    // Determine if this is a value in common
    if (list1[index1] === list2[index2]) {
      result.push(currentValue);
    }

    // Each time an array DOES contain the current value we are looking for,
    // advance the array's corresponding index-pointer variable.
    if (currentValue === list1[index1]) {
      index1++;
    }
    if (currentValue === list2[index2]) {
      index2++;
    }
  }
  return result;
}

export default commonElements;
