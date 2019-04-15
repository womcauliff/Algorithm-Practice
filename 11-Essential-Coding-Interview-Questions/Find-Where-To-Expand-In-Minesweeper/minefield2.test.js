import click from "./solution";

const field2 = [[-1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, -1]];

test(`Clicked on Bomb`, () => {
  expect(click(field2, 4, 4, 0, 1)).toEqual([
    [-1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, -1]
  ]);
});

test(`Reveal 2 corners`, () => {
  expect(click(field2, 4, 4, 1, 3)).toEqual([
    [-1, 1, -2, -2],
    [1, 1, -2, -2],
    [-2, -2, 1, 1],
    [-2, -2, 1, -1]
  ]);
});
