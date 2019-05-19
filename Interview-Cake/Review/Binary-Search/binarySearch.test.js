import binarySearch from "./binarySearch";
import binarySearch2 from "./binarySearch2";

describe(`binary search implementations`, () => {
  const longInput = [
    50,
    74,
    99,
    100,
    995,
    997,
    998,
    999,
    1000,
    1001,
    1002,
    1003,
    1004,
    1005,
    1300,
    1400,
    1500,
    1700,
    2000
  ];
  const longInputNoTarget = [
    50,
    74,
    99,
    100,
    995,
    997,
    998,
    999,
    1000,
    1001,
    1003,
    1004,
    1005,
    1300,
    1400,
    1500,
    1700,
    2000
  ];
  const singleElement = [24];
  const emptyArray = [];
  describe(`binarySearch()`, () => {
    it(`finds index location of target element`, () => {
      expect(binarySearch(longInput, 1002)).toEqual(10);
    });
    it(`returns -1 if target element does not exist in list`, () => {
      expect(binarySearch(longInputNoTarget, 1002)).toBe(-1);
    });
    it(`handles arrays of single element`, () => {
      expect(binarySearch(singleElement, 24)).toBe(0);
      expect(binarySearch(singleElement, 100)).toBe(-1);
    });
    it(`handles empty arrays`, () => {
      expect(binarySearch(emptyArray, 24)).toBe(-1);
    });
  });
  describe(`binarySearch2()`, () => {
    it(`finds index location of target element`, () => {
      expect(binarySearch2(longInput, 1002)).toEqual(10);
    });
    it(`returns -1 if target element does not exist in list`, () => {
      expect(binarySearch2(longInputNoTarget, 1002)).toBe(-1);
    });
    it(`handles arrays of single element`, () => {
      expect(binarySearch2(singleElement, 24)).toBe(0);
      expect(binarySearch2(singleElement, 100)).toBe(-1);
    });
    it(`handles empty arrays`, () => {
      expect(binarySearch2(emptyArray, 24)).toBe(-1);
    });
  });
});
