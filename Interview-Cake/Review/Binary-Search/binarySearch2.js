/**
 * An alternate implementation of binary search.
 * Given a sorted list, returns the index location for a target element, or `-1`
 * if the element could not be found.
 * @param {number[]} list
 * @param {number} target
 * @returns {number}
 */
function binarySearch2(list, target) {
  // Set up initial index pointers at the bounds of list
  let floorIndex = 0;
  let ceilingIndex = list.length - 1;

  // Continue search while at least one element exists between goalposts.
  while (floorIndex <= ceilingIndex) {
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const halfIndex = floorIndex + halfDistance;

    if (list[halfIndex] === target) {
      // If target is found, return index location.
      return halfIndex;
    }

    if (list[halfIndex] < target) {
      // if element is less than target, target exists in right half.
      // Move right by updating floorIndex pointer
      floorIndex = halfIndex + 1;
    } else {
      // Else
      // If element is greater than target, target exists in left half.
      // Move left by updating ceilingIndex pointer.
      ceilingIndex = halfIndex - 1;
    }
  }

  // If element could not be found, return -1.
  return -1;
}

export default binarySearch2;
