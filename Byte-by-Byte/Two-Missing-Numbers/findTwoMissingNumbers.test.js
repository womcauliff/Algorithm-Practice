import missing from "./findTwoMissingNumbers";

describe(`missing()`, () => {
  const smallSeries = [1, 4];
  const longSeries = [1, 2, 3, 4, 5, 7, 9];
  const unsorted = [4, 1, 9, 8, 7, 6, 3];
  const missingOne = [1, 2, 3, 4, 6];
  const completeSeries = [6, 5, 4, 3, 2, 1];

  it(`finds two missing elements with small series`, () => {
    expect(missing(smallSeries)).toEqual([2, 3]);
  });

  it(`finds two missing elements with long sorted series`, () => {
    expect(missing(longSeries)).toEqual([6, 8]);
  });

  it(`finds two missing elements with long unsorted series`, () => {
    expect(missing(unsorted)).toEqual([2, 5]);
  });

  it(`returns the missing element and one larger integer given a series with only one missing.`, () => {
    expect(missing(missingOne)).toEqual([5, 7]);
  });

  it(`returns the next two larger integers given a complete series`, () => {
    expect(missing(completeSeries)).toEqual([7, 8]);
  });
});
