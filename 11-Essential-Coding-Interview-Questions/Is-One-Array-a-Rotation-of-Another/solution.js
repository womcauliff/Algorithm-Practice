/**
 * @param {number[]} array1 The first array
 * @param {number[]} array2 The second array
 * @return {Boolean} Determines if the two arrays are rotations
 * of one another.
 */
function isRotation(array1, array2) {
  // Arrays must be equal in length in order to be a rotation.
  if (array1.length !== array2.length) {
    return false;
  }

  // Initialize two array pointers
  let arrayIndex1 = 0;
  let arrayIndex2 = 0;

  let foundStartingPoint = false;
  // Sweep through Array 2, looking for the starting point of Array 1
  for (arrayIndex2 = 0; arrayIndex2 < array2.length; arrayIndex2++) {
    if (array1[arrayIndex1] === array2[arrayIndex2]) {
      foundStartingPoint = true;
      break;
    }
  }
  // If no starting point is found, return false
  if (foundStartingPoint === false) {
    return false;
  }

  // Sweep through Array 1 and 2, verifying that each element matches.
  while (arrayIndex1 < array1.length) {
    // If a mismatch is found, return false.
    if (array1[arrayIndex1] !== array2[arrayIndex2]) {
      return false;
    }

    // Increment Pointers
    arrayIndex1++;
    if (arrayIndex2 < array2.length - 1) {
      arrayIndex2++;
    } else {
      // Array 2's pointer can wrap around back to the beginning.
      arrayIndex2 = 0;
    }
  }

  // No mismatches found.
  // Therefore the arrays are rotations of each other.
  return true;
}

export default isRotation;
