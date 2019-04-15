import mostFrequent from "./solution";

test(`mostFrequent(list1) should return 1`, () =>
  expect(mostFrequent([1, 3, 1, 3, 2, 1])).toBe(1));

test(`mostFrequent(list2) should return null`, () =>
  expect(mostFrequent([])).toBe(null));

test(`mostFrequent(list3) should return 3`, () =>
  expect(mostFrequent([3, 3, 1, 3, 2, 1])).toBe(3));

test(`mostFrequent(list4) should return 0`, () =>
  expect(mostFrequent([0])).toBe(0));

test(`mostFrequent(list5) should return -1`, () =>
  expect(mostFrequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1])).toBe(-1));
