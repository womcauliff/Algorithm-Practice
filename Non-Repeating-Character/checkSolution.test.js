import nonRepeating from "./solution";

test(`Checks "abcab" to return "c"`, () => {
  expect(nonRepeating("abcab")).toBe("c");
});

test(`Checks "abab" to return null`, () => {
  expect(nonRepeating("abab")).toBe(null);
});

test(`Checks "aabbbc" to return "c"`, () => {
  expect(nonRepeating("aabbbc")).toBe("c");
});

test(`Checks "aabbdbc" to return "d"`, () => {
  expect(nonRepeating("aabbdbc")).toBe("d");
});

test(`Checks "xxzyx" to return "z"`, () => {
  expect(nonRepeating("xxzyx")).toBe("z");
});
