import findRotationPoint from "./findRotationPoint";

describe(`findRotationPoint()`, () => {
  let inputArray;
  it(`handles small array`, () => {
    inputArray = ["cape", "cake"];
    expect(findRotationPoint(inputArray)).toBe(1);
  });
  it(`handles medium array`, () => {
    inputArray = ["grape", "orange", "plum", "radish", "apple"];
    expect(findRotationPoint(inputArray)).toBe(4);
  });
  it(`handles large array`, () => {
    inputArray = [
      "ptolemaic",
      "retrograde",
      "supplant",
      "undulate",
      "xenoepist",
      "asymptote",
      "babka",
      "banoffee",
      "engender",
      "karpatka",
      "othellolagkage"
    ];
    expect(findRotationPoint(inputArray)).toBe(5);
  });

  describe(`handles bad input`, () => {
    it(`returns 0 when passed no input`, () => {
      expect(findRotationPoint()).toBe(0);
    });
    it(`returns 0 for empty array`, () => {
      expect(findRotationPoint([])).toBe(0);
    });
  });
});
