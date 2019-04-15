import click from "./solution";

const field1 = [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 1, -1, 1, 0]];

test(`Clicked on Bomb`, () => {
  expect(click(field1, 3, 5, 2, 2)).toEqual([
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, -1, 1, 0]
  ]);
});

test(`Reveal outside cells`, () => {
  expect(click(field1, 3, 5, 1, 4)).toEqual([
    [-2, -2, -2, -2, -2],
    [-2, 1, 1, 1, -2],
    [-2, 1, -1, 1, -2]
  ]);
});
