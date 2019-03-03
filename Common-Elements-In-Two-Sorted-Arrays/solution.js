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

  // Loop through the two arrays.
  // Stop the search when one of the index-pointer variables
  // hit the end of their array length.
  while (index1 < list1.length && index2 < list2.length) {
    // Check if this value is one in common, add it to the result array,
    // and increment both pointers.
    // Else, increment the pointer for the array with the lesser value.
    if (list1[index1] === list2[index2]) {
      result.push(currentValue);
      index1++;
      index2++;
    } else if (list1[index1] < list2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }
  return result;
}

export default commonElements;
