/**
 * Merges two sorted arrays of numbers into a single sorted array.
 * @param {Number[]} myArray The first input array
 * @param {Number[]} alicesArray The second input array
 * @return {Number[]} A sorted array containing all elements from the input arrays.
 */ function mergeArrays(myArray, alicesArray) {
  let ptr1 = 0;
  let ptr2 = 0;
  let merged = [];

  // Loop through the two arrays, stopping when at least one array is exhausted
  while (ptr1 < myArray.length && ptr2 < alicesArray.length) {
    // Add the lesser of the two elements, and increment that array's pointer
    if (myArray[ptr1] <= alicesArray[ptr2]) {
      merged.push(myArray[ptr1]);
      ptr1++;
    } else {
      merged.push(alicesArray[ptr2]);
      ptr2++;
    }
  }

  // The longer array will still contain leftover elements to merge
  // Pull those elements in, as-is, since they are already sorted.
  if (ptr1 < myArray.length) {
    merged = [...merged, ...myArray.slice(ptr1)];
  }
  if (ptr2 < alicesArray.length) {
    merged = [...merged, ...alicesArray.slice(ptr2)];
  }

  return merged;
}

export default mergeArrays;
