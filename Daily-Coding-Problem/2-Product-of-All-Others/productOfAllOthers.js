/**
 * Given an array of integers, returns a new array such that each element at index i
 * of the new array is the product of all the numbers in the original array
 * except the one at i.
 * @param {Number[]} arr An array of integers.
 * @return {Number[]} The resulting array.
 */
function productOfAllOthers(arr) {
  // Reduce the elements of source array into the total product of all elements
  const totalProduct = arr.reduce(
    (runningProduct, currentVal) => (runningProduct *= currentVal),
    1
  );

  // Map over the source array to return a result array where each
  // resulting element is the totalProduct divided by the original element.
  return arr.map(num => totalProduct / num);
}

// Naive brute-force approach
function bruteForceProductOfAllOthers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

export default productOfAllOthers;
