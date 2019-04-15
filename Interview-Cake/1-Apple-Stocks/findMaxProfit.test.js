import findMaxProfit from "./findMaxProfit";

describe(`findMaxProfit()`, () => {
  it(`can find profit when price goes up then down`, () => {
    expect(findMaxProfit([1, 5, 3, 2])).toBe(4);
  });
  it(`can find profit when price goes down then up`, () => {
    expect(findMaxProfit([7, 2, 8, 9])).toBe(7);
  });
  it(`can find profit when price goes up all day`, () => {
    expect(findMaxProfit([1, 6, 7, 9])).toBe(8);
  });
  it(`can find profit when price goes down all day`, () => {
    expect(findMaxProfit([9, 7, 4, 1])).toBe(-2);
  });
  it(`can find profit when price stays the same all day`, () => {
    expect(findMaxProfit([1, 1, 1, 1])).toBe(0);
  });
  it(`throws error when given no prices`, () => {
    expect(() => findMaxProfit([])).toThrow();
  });
  it(`throws error when given only one price`, () => {
    expect(() => findMaxProfit([1])).toThrow();
  });
});
