import sortScores from "./sortScores";

describe(`sortScores()`, () => {
  let actual, expected;
  const HIGHESTSCORE = 100;

  it(`sorts no scores`, () => {
    actual = sortScores([], HIGHESTSCORE);
    expected = [];
    expect(actual).toEqual(expected);
  });

  it(`sorts one score`, () => {
    actual = sortScores([55], HIGHESTSCORE);
    expected = [55];
    expect(actual).toEqual(expected);
  });

  it(`sorts two scores`, () => {
    actual = sortScores([30, 60], HIGHESTSCORE);
    expected = [60, 30];
    expect(actual).toEqual(expected);
  });

  it(`sorts many scores`, () => {
    actual = sortScores([37, 89, 41, 65, 91, 53], HIGHESTSCORE);
    expected = [91, 89, 65, 53, 41, 37];
    expect(actual).toEqual(expected);
  });

  it(`sorts repeated scores`, () => {
    actual = sortScores([20, 10, 30, 30, 10, 20], HIGHESTSCORE);
    expected = [30, 30, 20, 20, 10, 10];
    expect(actual).toEqual(expected);
  });
});
