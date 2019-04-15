import productOfAllOthers from "./productOfAllOthers";

test(`[1, 2, 3, 4, 5] returns [120, 60, 40, 30, 24]`, () => {
  expect(productOfAllOthers([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test(`[3, 2, 1] returns [2, 3, 6]`, () => {
  expect(productOfAllOthers([3, 2, 1])).toEqual([2, 3, 6]);
});
