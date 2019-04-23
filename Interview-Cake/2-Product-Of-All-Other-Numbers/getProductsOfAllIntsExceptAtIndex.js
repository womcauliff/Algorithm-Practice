/**
 * Generates an array in which each element is the product of all
 * other elements, except itself.
 * @param {Number[]} intArray The array of integers
 * @return {Number[]} The array of products.
 */
function getProductsOfAllIntsExceptAtIndex(intArray) {
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

export default getProductsOfAllIntsExceptAtIndex;
