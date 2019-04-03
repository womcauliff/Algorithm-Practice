/**
 * Given a square 2-dimentional array, rotates all values 90 degrees clockwise, *in place*.
 * @param {Number[][]} arr The 2-dimensional grid.
 * @param {Number} n The equal number of rows and columns.
 * @returns {Number[][]} Returns the original 2-dimensional array with all values rotated.
 */
function rotate(arr, n) {
  // Rotate the array in a clockwise spiral pattern, going from outside rings inward.
  let ringLength = n;
  let ringOffset = 0;
  // Stop when the current ring length is less than 2, since a ring of length 1 does not need rotation.
  while (ringLength >= 2) {
    for (
      let ringStart = ringOffset;
      ringStart < ringOffset + ringLength - 1;
      ringStart++
    ) {
      // rotate the four corresponding cells
      let currentRow = ringOffset;
      let currentCol = ringStart;
      let writeVal = arr[currentRow][currentCol];
      let tempVal2 = 0;

      for (let shuffle = 0; shuffle < 4; shuffle++) {
        // Calculate the next location that should be overwritten.
        let nextRow = currentCol;
        let nextCol = ringLength - 1 - currentRow + ringOffset * 2;

        // Save the value temporarily
        tempVal2 = arr[nextRow][nextCol];
        // Overwrite the value
        arr[nextRow][nextCol] = writeVal;

        // Use the saved temp value as the overwrite value in the next shuffle loop
        writeVal = tempVal2;
        // Use the overwritten location as the starting point in the next shuffle loop
        currentRow = nextRow;
        currentCol = nextCol;
      }
    }
    // With each ring toward the center, the ring's length shortens by 2,
    // and the corner of the ring moves diagonally inward by 1.
    ringLength -= 2;
    ringOffset += 1;
  }

  return arr;
}

export default rotate;
