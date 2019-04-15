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

export default mostFrequent;
