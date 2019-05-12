/**
 * Finds the rotation point in a given array.
 * @param {String[]} words A sorted array which has been rotated.
 * @returns {Number} The index location where the rotation begins.
 */
function findRotationPoint(words = []) {
  // Handle bad input
  if (words.length === 0) return 0;

  // In this variation of the standard Binary Search algorithm,
  // the first element is used to determine which half to search.
  const startWord = words[0];

  // Create start and end index pointers to mark the search space
  let startIndex = 0;
  let endIndex = words.length - 1;

  // Halt search if the index pointers move past each other
  while (endIndex > startIndex) {
    // Select the element at the midpoint of the search space.
    const midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    const midWord = words[midIndex];

    if (midWord >= startWord) {
      // If the current word alphabetically appears after start word (or is start word),
      // continue searching right-side of list.
      startIndex = midIndex;
    } else {
      // If the current word alphabetically appears before start word,
      // continue searching left-side of list.
      endIndex = midIndex;
    }

    if (startIndex + 1 === endIndex) {
      // Once the two index pointers are immediately next to each other,
      // we know we have found the array's rotation point: the endIndex value.
      break;
    }
  }

  // Return the array's rotation point
  return endIndex;
}

export default findRotationPoint;
