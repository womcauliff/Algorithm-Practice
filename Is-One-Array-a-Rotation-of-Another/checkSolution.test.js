import isRotation from "./solution";

describe(`isRotation()`, () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7];
  const array2a = [4, 5, 6, 7, 8, 1, 2, 3];
  const array2b = [4, 5, 6, 7, 1, 2, 3];
  const array2c = [4, 5, 6, 9, 1, 2, 3];
  const array2d = [4, 6, 5, 7, 1, 2, 3];
  const array2e = [4, 5, 6, 7, 0, 2, 3];
  const array2f = [1, 2, 3, 4, 5, 6, 7];
  it(`returns true if the arrays are identical.`, () => {
    expect(isRotation(array1, array2f)).toBe(true);
  });
  it(`returns true if it arrays are a true rotation.`, () => {
    expect(isRotation(array1, array2b)).toBe(true);
  });
  it(`returns false when element is added.`, () => {
    expect(isRotation(array1, array2a)).toBe(false);
  });
  it(`returns false when element is modified.`, () => {
    expect(isRotation(array1, array2c)).toBe(false);
  });
  it(`returns false when elements are switched.`, () => {
    expect(isRotation(array1, array2d)).toBe(false);
  });
  it(`returns false when starting point of first array does not exist.`, () => {
    expect(isRotation(array1, array2e)).toBe(false);
  });
});
