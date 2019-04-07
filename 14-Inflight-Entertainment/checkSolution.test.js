import canTwoMoviesFillFlight from "./solution";

describe(`canTwoMoviesFillFlight()`, () => {
  test(`short flight`, () => {
    expect(canTwoMoviesFillFlight([2, 4], 1)).toBe(false);
  });

  test(`long flight`, () => {
    expect(canTwoMoviesFillFlight([2, 4], 6)).toBe(true);
  });

  test(`one movie half flight length`, () => {
    expect(canTwoMoviesFillFlight([3, 8], 6)).toBe(false);
  });

  test(`two movies half flight length`, () => {
    expect(canTwoMoviesFillFlight([3, 8, 3], 6)).toBe(true);
  });

  test(`lots of possible pairs`, () => {
    expect(canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7)).toBe(true);
  });

  test(`not using first movie`, () => {
    expect(canTwoMoviesFillFlight([4, 3, 2], 5)).toBe(true);
  });

  test(`only one movie`, () => {
    expect(canTwoMoviesFillFlight([6], 6)).toBe(false);
  });

  test(`no movies`, () => {
    expect(canTwoMoviesFillFlight([], 2)).toBe(false);
  });
});
