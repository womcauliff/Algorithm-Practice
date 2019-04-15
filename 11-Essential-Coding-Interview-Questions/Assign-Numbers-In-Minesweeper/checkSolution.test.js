import mineSweeper from "./solution";

test(`3 by 3 grid`, () => {
  expect(mineSweeper([[0, 2], [2, 0]], 3, 3)).toEqual([
    [0, 1, -1],
    [1, 2, 1],
    [-1, 1, 0]
  ]);
});

test(`3 by 4 grid`, () => {
  expect(mineSweeper([[0, 0], [0, 1], [1, 2]], 3, 4)).toEqual([
    [-1, -1, 2, 1],
    [2, 3, -1, 1],
    [0, 1, 1, 1]
  ]);
});

test(`5 by 5 grid`, () => {
  expect(mineSweeper([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5)).toEqual([
    [1, 2, 2, 1, 0],
    [1, -1, -1, 2, 0],
    [1, 3, -1, 2, 0],
    [0, 1, 2, 2, 1],
    [0, 0, 1, -1, 1]
  ]);
});
