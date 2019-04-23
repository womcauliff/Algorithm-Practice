import getProductsOfAllIntsExceptAtIndex from "./getProductsOfAllIntsExceptAtIndex";

describe(`getProductsOfAllIntsExceptAtIndex()`, () => {
  let actual = null;
  let expected = null;

  it(`finds result with a short array`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
    expected = [6, 3, 2];
    expect(actual).toEqual(expected);
  });

  it(`finds result with a longer array`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
    expected = [120, 480, 240, 320, 960, 192];
    expect(actual).toEqual(expected);
  });

  it(`finds result when array has one zero`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
    expected = [0, 0, 36, 0];
    expect(actual).toEqual(expected);
  });

  it(`finds result when array has two zeros`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
    expected = [0, 0, 0, 0, 0];
    expect(actual).toEqual(expected);
  });

  it(`finds result when array has one negative number`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
    expected = [32, -12, -24];
    expect(actual).toEqual(expected);
  });

  it(`finds result when array has all negative numbers`, () => {
    actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
    expected = [-8, -56, -14, -28];
    expect(actual).toEqual(expected);
  });

  it(`throws error with empty array`, () => {
    expect(() => getProductsOfAllIntsExceptAtIndex([])).toThrow();
  });

  it(`throws error with one number`, () => {
    expect(() => getProductsOfAllIntsExceptAtIndex([1])).toThrow();
  });
});
