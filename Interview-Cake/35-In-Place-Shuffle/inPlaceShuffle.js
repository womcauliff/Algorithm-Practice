/**
 * Returns random value between floor (inclusive) and ceiling (inclusive)
 * @param {Number} floor
 * @param {Number} ceiling
 * @returns {Number} The random value
 */
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

/**
 * Performs an in-place shuffle of the input array
 * ([Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)).
 * @param {Number[]} theArray
 * @return {Number[]} The input array with all elements shuffled with uniform random distribution.
 */
function inPlaceShuffle(theArray) {
  // Step through each index of array, selecting another element at random to place into the index.
  // The loop stops one element before the end, because the last element will always swapped with itself.
  for (
    let destinationIndex = 0;
    destinationIndex < theArray.length - 1;
    destinationIndex++
  ) {
    // Select a random element *after* the current index location to achieve uniform random distribution.
    const randomIndex = getRandom(destinationIndex, theArray.length - 1);

    // If the random element selected is already in its destination index, no swap is needed
    if (destinationIndex === randomIndex) {
      continue;
    }

    // Swap the element into the destination location.
    const temp = theArray[destinationIndex];
    theArray[destinationIndex] = theArray[randomIndex];
    theArray[randomIndex] = temp;
  }

  return theArray;
}

export default inPlaceShuffle;
