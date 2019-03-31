/**
 * Given a location in a minefield that the user wants to click,
 * turns revealed cells into `-2`.
 * @param {Number[][]} field The given minefield as a 2D array
 * @param {Number} numRows The number of rows in the given field.
 * @param {Number} numCols The number of columns in the given field.
 * @param {Number} givenI The row index of the cell the user wants to click.
 * @param {Number} givenJ The column index of the cell the user wants to click.
 * @return {Number[][]} The minefield with all necessary cells revealed.
 */
function click(field, numRows, numCols, givenI, givenJ) {
  // If click is on a bomb, or an adjacent cell to a bomb,
  // return the given minefield immediately, unchanged.
  if (field[givenI][givenJ] !== 0) return field;

  // This is a queue which tracks neighboring cells which have been revealed.
  // These cells may in turn, cause their neighboring cell to be revealed.
  const revealedNeighbors = [];

  // Reveal the clicked area
  field[givenI][givenJ] = -2;
  // Enqueue the clicked cell, so that we can check its neighboring cells.
  revealedNeighbors.push([givenI, givenJ]);

  while (revealedNeighbors.length > 0) {
    // Dequeue a cell which is already revealed
    const [row, col] = revealedNeighbors.shift();

    // Sweep across all 8 of its neighboring cells
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        // Avoid out-of-bounds exceptions
        if (i >= 0 && j >= 0 && i < numRows && j < numCols) {
          // If cell is an empty space
          if (field[i][j] === 0) {
            // Reveal the cell
            field[i][j] = -2;
            // Enqueue this cell, since it may lead to additional cells to reveal
            revealedNeighbors.push([i, j]);
          }
        }
      }
    }
  }

  // Return the minefield
  return field;
}

export default click;
