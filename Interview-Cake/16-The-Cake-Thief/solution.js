/**
 * Finds the **optimal** maximum British shilling value of cakes that a duffelbag can carry, in `O(n * k)`
 * time, where `n` is the number of cakes, and `k` is the duffelbag's weight capacity.
 * Side Note: a "greedy algorithm" would not be guaranteed to produce optimal solution. -- why?
 * Because the greedy algorithm might have us put a few extremely HEAVY things that happen to have highest value,
 * and the optimal solution would be to fill bag with a huge amount of LIGHT objects with very high value.
 *
 * @param {{weight: number, value: number}[]} cakeTypes An array of Cake type objects.
 * @param {number} weightCapacity The total weight in kilograms that the duffelbag can carry.
 * @returns {number|Infinity} Returns the maximum value that the duffelbag can hold, or `Infinity` if
 * a particular cake has zero weight and a non-zero value.
 */
function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // A bag that cannot carry any weight means we cannot steal any cakes.
  if (weightCapacity === 0) {
    return 0;
  }

  // This is an array lookup table, which is used to store the maximum-possible-value solutions
  // for particular duffelbag weight capacities. Each index represents a weight capacity.
  // We start at zero weight and go up to the actual weight capacity of the bag.
  // Note: this data structure helps us avoid the overlapping sub-problems issue,
  // a type of inefficiency in which a calculation involves repeatedly solving subproblem(s) multiple times.
  let maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  // Loop through one duffelbag weight capacity at a time,
  // starting at zero and going up to the actual weight capacity:
  for (
    let currentCapacity = 0;
    currentCapacity <= weightCapacity;
    currentCapacity++
  ) {
    // We will track the maximum value seen for this current weight capacity
    let currentMaxValue = 0;

    // Loop through all cakes:
    // (conditionally ignoring the cakes that are too heavy to fit)
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      //  Return `Infinity` if a particular cake has zero weight and a non-zero value.
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // Only check cakes that can fit at-or-under the current weight capacity
      if (cakeType.weight <= currentCapacity) {
        // If we take this cake, how much room is leftover in the duffelbag?
        const leftOverCapacity = currentCapacity - cakeType.weight;

        // Add this cake's value to the *best possible value* for the *leftover* weight capacity in the bag.
        // (We use the lookup-array to retrieve the best possible value for the leftover capacity).
        const maxValueUsingCake =
          cakeType.value + maxValuesAtCapacities[leftOverCapacity];

        // Finally, we verify if this value calculation is the best we've seen for this particular
        // weight capacity. If it is, save it.
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // Save this max value for use in future calculations.
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}

export default maxDuffelBagValue;
