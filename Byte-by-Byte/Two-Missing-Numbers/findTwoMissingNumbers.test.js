import { missingTwo } from "./findTwoMissingNumbers";

describe(`missingTwo()`, () => {
  const smallSeries = [1, 4];
  const longSeries = [1, 2, 3, 4, 5, 7, 9];
  const unsorted = [4, 1, 9, 8, 7, 6, 3];
  const missingOne = [1, 2, 3, 4, 6];
  const completeSeries = [6, 5, 4, 3, 2, 1];
  const messySeries = [-2, 5, 3, 1, 3, 3, 2, 100];

  it(`handles empty series`, () => {
    expect(missingTwo([])).toEqual([1, 2]);
  });

  it(`finds two missing elements with small series`, () => {
    expect(missingTwo(smallSeries)).toEqual([2, 3]);
  });

  it(`finds two missing elements with long sorted series`, () => {
    expect(missingTwo(longSeries)).toEqual([6, 8]);
  });

  it(`finds two missing elements with long unsorted series`, () => {
    expect(missingTwo(unsorted)).toEqual([2, 5]);
  });

  it(`returns the missing element and one larger integer given a series with only one missing.`, () => {
    expect(missingTwo(missingOne)).toEqual([5, 7]);
  });

  it(`returns the next two larger integers given a complete series`, () => {
    expect(missingTwo(completeSeries)).toEqual([7, 8]);
  });

  it(`finds two missing elements given a series with negative integers and duplicates.`, () => {
    expect(missingTwo(messySeries)).toEqual([4, 6]);
  });
});
