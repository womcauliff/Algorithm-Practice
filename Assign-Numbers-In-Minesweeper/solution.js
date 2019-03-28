function mineSweeper(mineCoords, numRows, numCols) {
  const mineField = new Array(numRows);
  for (let i = 0; i < mineField.length; i++) {
    const row = new Array(numCols);
    for (let j = 0; j < row.length; j++) {
      row[j] = 0;
    }
    mineField[i] = row;
  }

  mineCoords.forEach(([x, y]) => {
    // Mark bomb location
    mineField[x][y] = -1;

    // row above bomb
    if (mineField[x - 1]) {
      if (
        mineField[x - 1][y - 1] !== undefined &&
        mineField[x - 1][y - 1] !== -1
      ) {
        mineField[x - 1][y - 1] += 1;
      }
      if (mineField[x - 1][y] !== undefined && mineField[x - 1][y] !== -1) {
        mineField[x - 1][y] += 1;
      }
      if (
        mineField[x - 1][y + 1] !== undefined &&
        mineField[x - 1][y + 1] !== -1
      ) {
        mineField[x - 1][y + 1] += 1;
      }
    }
    // row below bomb
    if (mineField[x + 1]) {
      if (
        mineField[x + 1][y - 1] !== undefined &&
        mineField[x + 1][y - 1] !== -1
      ) {
        mineField[x + 1][y - 1] += 1;
      }
      if (mineField[x + 1][y] !== undefined && mineField[x + 1][y] !== -1) {
        mineField[x + 1][y] += 1;
      }
      if (
        mineField[x + 1][y + 1] !== undefined &&
        mineField[x + 1][y + 1] !== -1
      ) {
        mineField[x + 1][y + 1] += 1;
      }
    }
    // rightside of bomb
    if (mineField[x][y + 1] !== undefined && mineField[x][y + 1] !== -1) {
      mineField[x][y + 1] += 1;
    }
    // leftside of bomb
    if (mineField[x][y - 1] !== undefined && mineField[x][y - 1] !== -1) {
      mineField[x][y - 1] += 1;
    }
  });
  return mineField;
}

export default mineSweeper;
