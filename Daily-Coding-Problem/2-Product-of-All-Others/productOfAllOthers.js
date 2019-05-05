/**
 * Given an array of integers, returns a new array such that each element at index i
 * of the new array is the product of all the numbers in the original array
 * except the one at i.
 * @param {Number[]} arr An array of integers.
 * @return {Number[]} The resulting array.
 */
function productOfAllOthers(intArray) {
  if (intArray.length < 2) {
    throw new Error("Array must have at least 2 integers");
  }

  const productsExceptIndex = new Array(intArray.length);

  // Find the running products starting from the left-side
  intArray.reduce((runningProduct, currentVal, currentIndex) => {
    productsExceptIndex[currentIndex] = runningProduct;
    return (runningProduct *= currentVal);
  }, 1);

  // Find the running products starting from the right-side
  intArray.reduceRight((runningProduct, currentVal, currentIndex) => {
    // Multiply each left-side product by the corresponding right-side product
    // to get the final product of all other integers.
    productsExceptIndex[currentIndex] *= runningProduct;
    return (runningProduct *= currentVal);
  }, 1);

  return productsExceptIndex;
}

/**
 * Given an array of integers, returns a new array such that each element at index i
 * of the new array is the product of all the numbers in the original array
 * except the one at i.
 * @param {Number[]} arr An array of integers.
 * @return {Number[]} The resulting array.
 */
function withDivisionproductOfAllOthers(arr) {
  let numZeroes = 0;
  // Reduce the elements of source array into the total product of all elements
  const totalProduct = arr.reduce((runningProduct, currentVal) => {
    if (currentVal === 0) {
      numZeroes += 1;
      return runningProduct;
    }
    return (runningProduct *= currentVal);
  }, 1);

  if (numZeroes > 1) {
    // If input array has more than two zeroes, then all products will be zero.
    return arr.map(() => 0);
  } else if (numZeroes === 1) {
    // If input array has a single zero, then all products will be zero,
    // except for the index containing the zero.
    return arr.map(num => (num === 0 ? totalProduct : 0));
  } else {
    // If input array contains no zeroes,
    // Map over the source array to return a result array where each
    // resulting element is the totalProduct divided by the original element.
    return arr.map(num => totalProduct / num);
  }
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
