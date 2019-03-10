/**
 * Finds the most-frequently occuring value in O(n) Time.
 * @param {number[]} givenArray An array of numbers
 * @return {number|null} The most frequently occuring value
 * (null if array is empty)
 */
function mostFrequent(givenArray) {
  // This datastructure maps each element in the given array to its total frequency.
  // (`seen` is an object, rather than an array,
  // in order to account for negative integer elements).
  const seen = {};

  // These variables allow us track the result to return.
  // We avoid sweeping through the `seen` hashmap again.
  let mostFreq = null;
  let highestFreqAmount = 0;

  givenArray.forEach(val => {
    // Increment by one if the value was seen previously.
    // A never-before-seen value will start at 1.
    seen[val] = seen[val] + 1 || 1;

    // Check if this makes the value the most-frequent
    if (seen[val] > highestFreqAmount) {
      highestFreqAmount = seen[val];
      mostFreq = val;
    }
  });

  return mostFreq;
}

console.assert(
  mostFrequent([1, 3, 1, 3, 2, 1]) === 1,
  "mostFrequent(list1) should return 1"
);
console.assert(
  mostFrequent([]) === null,
  "mostFrequent(list2) should return null"
);
console.assert(
  mostFrequent([3, 3, 1, 3, 2, 1]) === 3,
  "mostFrequent(list3) should return 3"
);
console.assert(mostFrequent([0]) === 0, "mostFrequent(list4) should return 0");
console.assert(
  mostFrequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1]) === -1,
  "mostFrequent(list5) should return -1"
);
