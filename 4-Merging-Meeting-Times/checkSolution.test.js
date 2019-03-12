import mergeRanges from "./solution";

test(`meetings overlap`, () => {
  expect(
    mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }])
  ).toEqual([{ startTime: 1, endTime: 4 }]);
});

test(`meetings touch`, () => {
  expect(
    mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }])
  ).toEqual([{ startTime: 5, endTime: 8 }]);
});

test(`meeting contains other meeting`, () => {
  expect(
    mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }])
  ).toEqual([{ startTime: 1, endTime: 8 }]);
});

test(`meetings stay separate`, () => {
  expect(
    mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }])
  ).toEqual([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
});

test(`multiple merged meetings`, () => {
  expect(
    mergeRanges([
      { startTime: 1, endTime: 4 },
      { startTime: 2, endTime: 5 },
      { startTime: 5, endTime: 8 }
    ])
  ).toEqual([{ startTime: 1, endTime: 8 }]);
});

test(`meetings not sorted`, () => {
  expect(
    mergeRanges([
      { startTime: 5, endTime: 8 },
      { startTime: 1, endTime: 4 },
      { startTime: 6, endTime: 8 }
    ])
  ).toEqual([{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }]);
});

test(`One long meeting contains smaller meetings`, () => {
  expect(
    mergeRanges([
      { startTime: 1, endTime: 10 },
      { startTime: 2, endTime: 5 },
      { startTime: 6, endTime: 8 },
      { startTime: 9, endTime: 10 },
      { startTime: 10, endTime: 12 }
    ])
  ).toEqual([{ startTime: 1, endTime: 12 }]);
});

test(`sample input`, () => {
  expect(
    mergeRanges([
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 5 },
      { startTime: 4, endTime: 8 },
      { startTime: 10, endTime: 12 },
      { startTime: 9, endTime: 10 }
    ])
  ).toEqual([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }
  ]);
});
