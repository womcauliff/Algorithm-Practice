/**
 * Reverses the given input array of characters in place. Performed in `O(n)` time
 * and `O(1)` space.
 * @param {String[]} arrayOfChars The array of single character Strings.
 * @return {String[]} Returns the input array, with elements reversed.
 */
function reverse(arrayOfChars) {
  // Begin pointers at start and at end of array, swapping the elements.
  // Stop once the pointers reach the middle of the array.
  for (let i = 0, j = arrayOfChars.length - 1; i < j; i++, j--) {
    const charA = arrayOfChars[i];
    const charB = arrayOfChars[j];
    arrayOfChars[i] = charB;
    arrayOfChars[j] = charA;
  }

  return arrayOfChars;
}

export default reverse;
