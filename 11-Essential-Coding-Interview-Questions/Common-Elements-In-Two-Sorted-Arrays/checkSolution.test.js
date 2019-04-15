import commonElements from "./solution";

/* Test A */
test("Equal-length arrays with common elements.", () => {
  const listA1 = [1, 3, 4, 6, 7, 9];
  const listA2 = [1, 2, 4, 5, 9, 10];
  const expectedResultA = [1, 4, 9];
  const resultA = commonElements(listA1, listA2);
  expect(resultA).toEqual(expectedResultA);
});

/* Test B */
test("Differing-length arrays with common elements.", () => {
  const listB1 = [1, 2, 9, 10, 11, 12];
  const listB2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15];
  const resultB = commonElements(listB1, listB2);
  const expectedResultB = [1, 2, 9, 10, 12];
  expect(resultB).toEqual(expectedResultB);
});

/* Test C */
test("Same-length arrays with zero common elements.", () => {
  const listC1 = [0, 1, 2, 3, 4, 5];
  const listC2 = [6, 7, 8, 9, 10, 11];
  const resultC = commonElements(listC1, listC2);
  const expectedResultC = [];
  expect(resultC).toEqual(expectedResultC);
});
