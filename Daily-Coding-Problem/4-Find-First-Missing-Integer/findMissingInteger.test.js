import findMissingInteger from "./findMissingInteger";

describe(`findMissingInteger()`, () => {
  test(`[3, 4, -1, 1] to be 2`, () => {
    expect(findMissingInteger([3, 4, -1, 1])).toBe(2);
  });

  test(`[1, 2, 0] to be 3`, () =>
    expect(findMissingInteger([1, 2, 0])).toBe(3));

  test(`[28, 26, 24, 25] to be 27`, () => {
    expect(findMissingInteger([28, 26, 24, 25])).toBe(27);
  });
});
