import isSingleRiffle from "./solution";

test(`both halves are the same length`, () => {
  expect(isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])).toBe(true);
});

test(`halves are different lengths`, () => {
  expect(isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])).toBe(false);
});

test(`one half is empty`, () => {
  expect(isSingleRiffle([], [2, 3, 6], [2, 3, 6])).toBe(true);
});

test(`shuffled deck is missing cards`, () => {
  expect(isSingleRiffle([1, 5], [2, 3, 6], [1, 6, 3, 5])).toBe(false);
});

test(`shuffled deck has extra cards`, () => {
  expect(isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])).toBe(false);
});
