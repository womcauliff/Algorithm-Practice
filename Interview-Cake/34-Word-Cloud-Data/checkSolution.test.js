import WordCloudData from "./WordCloudData";

describe(`WordCloudData`, () => {
  let actual = null;
  let expected = null;

  test(`simple sentence`, () => {
    actual = new WordCloudData("I like cake").wordsToCounts;
    expected = new Map([["i", 1], ["like", 1], ["cake", 1]]);
    expect(actual).toEqual(expected);
  });

  test(`longer sentence`, () => {
    actual = new WordCloudData(
      "Chocolate cake for dinner and pound cake for dessert"
    ).wordsToCounts;
    expected = new Map([
      ["chocolate", 1],
      ["cake", 2],
      ["for", 2],
      ["dinner", 1],
      ["and", 1],
      ["pound", 1],
      ["dessert", 1]
    ]);
    expect(actual).toEqual(expected);
  });

  test(`punctuation`, () => {
    actual = new WordCloudData("Strawberry short cake? Yum!").wordsToCounts;
    expected = new Map([
      ["strawberry", 1],
      ["short", 1],
      ["cake", 1],
      ["yum", 1]
    ]);
    expect(actual).toEqual(expected);
  });

  test(`hyphenated Words`, () => {
    actual = new WordCloudData("Dessert - mille-feuille cake").wordsToCounts;
    expected = new Map([["dessert", 1], ["mille-feuille", 1], ["cake", 1]]);
    expect(actual).toEqual(expected);
  });

  test(`ellipses between words`, () => {
    actual = new WordCloudData("Mmm...mmm...decisions...decisions")
      .wordsToCounts;
    expected = new Map([["mmm", 2], ["decisions", 2]]);
    expect(actual).toEqual(expected);
  });

  test(`apostrophes`, () => {
    actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
    expected = new Map([
      ["allie's", 1],
      ["bakery", 1],
      ["sasha's", 1],
      ["cakes", 1]
    ]);
    expect(actual).toEqual(expected);
  });

  test(`parentheses`, () => {
    actual = new WordCloudData(
      "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
    ).wordsToCounts;
    expected = new Map([
      ["we", 4],
      ["came", 1],
      ["saw", 1],
      ["conquered", 1],
      ["then", 1],
      ["ate", 1],
      ["bill's", 1],
      ["mille-feuille", 1],
      ["cake", 1]
    ]);
    expect(actual).toEqual(expected);
  });
});
