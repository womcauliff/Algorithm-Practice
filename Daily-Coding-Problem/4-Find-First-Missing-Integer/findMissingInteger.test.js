import {
  findMissingInteger,
  findMissingIntegerAboveFloor
} from "./findMissingInteger";

describe(`findMissingInteger()`, () => {
  test(`[3, 4, -1, 1, 2, 6, 2] to be 5`, () => {
    const input = [3, 4, -1, 1, 2, 6, 2];
    expect(findMissingInteger(input)).toBe(5);
  });
  test(`[1, 2, 0] to be 3`, () =>
    expect(findMissingInteger([1, 2, 0])).toBe(3));
  test(`[1, 2, 0, 2, 3, 1, 2] to be 4`, () =>
    expect(findMissingInteger([1, 2, 0, 2, 3, 1, 2])).toBe(4));
  test(`[13, 18, 16, 12, 0, 2, 4, 4, 4, 14, -12, 15, 5, -100, 1, 3, 6, 7, 8, 9, 10, 11] to be 17`, () => {
    const input = [
      13,
      18,
      16,
      12,
      0,
      2,
      4,
      4,
      4,
      14,
      -12,
      15,
      5,
      -100,
      1,
      3,
      6,
      7,
      8,
      9,
      10,
      11
    ];
    expect(findMissingInteger(input)).toBe(17);
  });
});

describe(`findMissingIntegerAboveFloor()`, () => {
  test(`[3, 4, -1, 1] to be 2`, () => {
    expect(findMissingIntegerAboveFloor([3, 4, -1, 1])).toBe(2);
  });

  test(`[1, 2, 0] to be 3`, () =>
    expect(findMissingIntegerAboveFloor([1, 2, 0])).toBe(3));

  test(`[28, 26, 24, 25] to be 27`, () => {
    expect(findMissingIntegerAboveFloor([28, 26, 24, 25])).toBe(27);
  });
});
