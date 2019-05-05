import productOfAllOthers from "./productOfAllOthers";

test(`[1, 2, 3, 4, 5] returns [120, 60, 40, 30, 24]`, () => {
  expect(productOfAllOthers([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test(`[3, 2, 1] returns [2, 3, 6]`, () => {
  expect(productOfAllOthers([3, 2, 1])).toEqual([2, 3, 6]);
});

test(`finds result when array has one zero`, () => {
  expect(productOfAllOthers([6, 2, 0, 3])).toEqual([0, 0, 36, 0]);
});

test(`finds result when array has two zeros`, () => {
  expect(productOfAllOthers([4, 0, 9, 1, 0])).toEqual([0, 0, 0, 0, 0]);
});
