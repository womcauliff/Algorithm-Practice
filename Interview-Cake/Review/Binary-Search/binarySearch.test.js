import binarySearch from "./binarySearch";

describe(`binarySearch()`, () => {
  it(`finds index location of target element`, () => {
    const input = [
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
    expect(binarySearch(input, 1002)).toEqual(10);
  });
  it(`returns -1 if target element does not exist in list`, () => {
    const input = [
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
    expect(binarySearch(input, 1002)).toBe(-1);
  });

  it(`handles arrays of single element`, () => {
    const input = [24];
    expect(binarySearch(input, 24)).toBe(0);
  });
  it(`handles empty arrays`, () => {
    const input = [];
    expect(binarySearch(input, 24)).toBe(-1);
  });
});
