import highestProductOf3 from "./highestProductOf3";

describe(`highestProductOf3()`, () => {
  it(`finds highest product given a short array`, () => {
    expect(highestProductOf3([1, 2, 3, 4])).toBe(24);
  });

  it(`finds highest product given a longer array`, () => {
    expect(highestProductOf3([6, 1, 3, 5, 7, 8, 2])).toBe(336);
  });

  it(`finds highest product given a array has one negative`, () => {
    expect(highestProductOf3([-5, 4, 8, 2, 3])).toBe(96);
  });

  it(`finds highest product given a array has two negatives`, () => {
    expect(highestProductOf3([-10, 1, 3, 2, -10])).toBe(300);
  });

  it(`finds highest product given a array is all negatives`, () => {
    expect(highestProductOf3([-5, -1, -3, -2])).toBe(-6);
  });

  it(`Throws an error given an empty array`, () => {
    expect(() => highestProductOf3([])).toThrow();
  });

  it(`Throws an error given an array with one number`, () => {
    expect(() => highestProductOf3([1])).toThrow();
  });

  it(`Throws an error given an array with two numbers`, () => {
    expect(() => highestProductOf3([1, 1])).toThrow();
  });
});
