/**
 * Tests whether a value is valid, which is defined as being
 * within range of zero to max value, inclusive.
 * @param {Number} value The value to be tested for validity
 * @param {Number} maxValue The maximum value allowed
 * @returns {Boolean} The validity of the value
 */
function isValidValue(value, maxValue) {
  return value > -1 && value < maxValue;
}

/**
 * Tests whether a particular cell inside a 2-dimensional array is
 * *not* the given value.
 * @param {Number} row The row coordinate
 * @param {Number} col The column coordinate
 * @param {Number[][]} mineField The 2-dimensional array of values
 * @param {Number} value The value that is not allowed
 * @returns {Boolean}
 */
function isNotValue(row, col, mineField, value) {
  return mineField[row][col] !== value;
}

/**
 *
 * @param {Number[][]} mineCoords An array containing coordinate pairs for bomb locations
 * @param {Number} numRows Number of rows in the minefield.
 * @param {Number} numCols Number of columns in the minefield
 * @returns {Number[][]} Returns a 2-dimensional array with bombs places and
 * danger values placed in adjacent spaces.
 */
function mineSweeper(mineCoords, numRows, numCols) {
  const mineField = new Array(numRows);
  for (let i = 0; i < mineField.length; i++) {
    const row = new Array(numCols);
    for (let j = 0; j < row.length; j++) {
      row[j] = 0;
    }
    mineField[i] = row;
  }

  // Curried utility functions to reduce verbosity.
  function isValidCol(col) {
    return isValidValue(col, numCols);
  }
  function isValidRow(row) {
    return isValidValue(row, numRows);
  }
  function isNotBomb(row, col) {
    return isNotValue(row, col, mineField, -1);
  }

  mineCoords.forEach(([x, y]) => {
    // Mark current bomb location
    mineField[x][y] = -1;

    // Increase bomb risk values for all adjacent cells to the current bomb,
    // unless the adjacent cell already contains another bomb.
    const rowAbove = x - 1;
    const rowBelow = x + 1;
    const colBefore = y - 1;
    const colAfter = y + 1;

    // Row above bomb,
    if (isValidRow(rowAbove)) {
      if (isValidCol(colBefore) && isNotBomb(rowAbove, colBefore)) {
        mineField[rowAbove][colBefore] += 1;
      }
      if (isNotBomb(rowAbove, y)) {
        mineField[rowAbove][y] += 1;
      }
      if (isValidCol(colAfter) && isNotBomb(rowAbove, colAfter)) {
        mineField[rowAbove][colAfter] += 1;
      }
    }

    // Same row as bomb
    if (isValidCol(colBefore) && isNotBomb(x, colBefore)) {
      mineField[x][colBefore] += 1;
    }
    if (isValidCol(colAfter) && isNotBomb(x, colAfter)) {
      mineField[x][colAfter] += 1;
    }

    // Row below bomb
    if (isValidRow(rowBelow)) {
      if (isValidCol(colBefore) && isNotBomb(rowBelow, colBefore)) {
        mineField[rowBelow][colBefore] += 1;
      }
      if (isNotBomb(rowBelow, y)) {
        mineField[rowBelow][y] += 1;
      }
      if (isValidCol(colAfter) && isNotBomb(rowBelow, colAfter)) {
        mineField[rowBelow][colAfter] += 1;
      }
    }
  });
  return mineField;
}

export default mineSweeper;
