/**
 * Calculates the highest product of three numbers.
 * @param {Number[]} arrayOfInts An array of integers with a minimum length of 3.
 * @return {Number} The highest product of three numbers.
 */
function highestProductOf3(arrayOfInts) {
  // Throw error if given array has fewer than 3 integers.
  if (arrayOfInts.length < 3)
    throw new Error("Minimum of three integers needed.");

  // Track the greatest 3 positive values in descending order
  const highestPositives = [-Infinity, -Infinity, -Infinity];
  // Track the 2 lowest values in ascending order (for negative-to-positive product)
  const lowestNegatives = [Infinity, Infinity];

  // Sweep through all given integers once.
  for (let i = 0; i < arrayOfInts.length; i++) {
    const currentInt = arrayOfInts[i];

    // Check if current integer is one of the greatest 3 values seen thus far
    // Swap as needed (cascading swaps may occur).
    let temp = currentInt;
    let temp2 = temp;

    // Largest value
    if (temp > highestPositives[0]) {
      temp2 = highestPositives[0];
      highestPositives[0] = temp;
      temp = temp2;
    }
    // 2nd Largest Value
    if (temp > highestPositives[1]) {
      temp2 = highestPositives[1];
      highestPositives[1] = temp;
      temp = temp2;
    }
    // 3rd Largest Value
    if (temp > highestPositives[2]) {
      temp2 = highestPositives[2];
      highestPositives[2] = temp;
      temp = temp2;
    }

    // Check if current integer is one of the least 2 negative values seen thus far
    // Swap as needed (cascading swaps may occur).
    if (currentInt < 0) {
      temp = currentInt;
      temp2 = temp;
      // Least Negative Value
      if (temp < lowestNegatives[0]) {
        temp2 = lowestNegatives[0];
        lowestNegatives[0] = temp;
        temp = temp2;
      }
      // 2nd Least Negative Value
      if (temp < lowestNegatives[1]) {
        temp2 = lowestNegatives[1];
        lowestNegatives[1] = temp;
        temp = temp2;
      }
    }
  }
  // Calculate the product of the greatest 3 positive values,
  const highest3 =
    highestPositives[0] * highestPositives[1] * highestPositives[2];

  // If at least two negative values were found
  if (lowestNegatives[0] !== Infinity && lowestNegatives[1] !== Infinity) {
    // Calculate the product of the greatest positive value with the 2 lowest negative values,
    // (Negative multiplied by a negative gives a positive)
    const highestWithLowest2 =
      highestPositives[0] * lowestNegatives[0] * lowestNegatives[1];
    // Return the greater result.
    return Math.max(highest3, highestWithLowest2);
  }

  return highest3;
}

export default highestProductOf3;
