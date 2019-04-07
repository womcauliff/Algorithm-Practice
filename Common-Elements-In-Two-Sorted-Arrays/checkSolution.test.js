import commonElements from "./solution";

/* Test A */
const listA1 = [1, 3, 4, 6, 7, 9];
const listA2 = [1, 2, 4, 5, 9, 10];
const expectedResultA = [1, 4, 9];
const resultA = commonElements(listA1, listA2);
console.assert(
  resultA.reduce(
    (result, currentElement, currentIndex) =>
      result && currentElement === expectedResultA[currentIndex],
    true
  ) === true,
  "Test A failed: commonElements(listA1, listA2) should return [1, 4, 9](a list)."
);

/* Test B */
const listB1 = [1, 2, 9, 10, 11, 12];
const listB2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15];
const resultB = commonElements(listB1, listB2);
const expectedResultB = [1, 2, 9, 10, 12];
console.assert(
  resultB.reduce(
    (result, currentElement, currentIndex) =>
      result && currentElement === expectedResultB[currentIndex],
    true
  ) === true,
  "Test B failed: commonElements(listB1, listB2) should return [1, 2, 9, 10, 12](a list)."
);

const listC1 = [0, 1, 2, 3, 4, 5];
const listC2 = [6, 7, 8, 9, 10, 11];
const resultC = commonElements(listC1, listC2);
const expectedResultC = [];
console.assert(
  resultC.reduce(
    (result, currentElement, currentIndex) =>
      result && currentElement === expectedResultC[currentIndex],
    true
  ) === true,
  "Test C failed: commonElements(listC1, listC2) should return [](an empty list)."
);
