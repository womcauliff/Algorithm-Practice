import hasPalindromePermutation from "./solution";

test(`permutation with odd number of chars`, () => {
  expect(hasPalindromePermutation("aabcbcd")).toBe(true);
});

test(`permutation with even number of chars`, () => {
  expect(hasPalindromePermutation("aabccbdd")).toBe(true);
});

test(`no permutation with odd number of chars`, () => {
  expect(hasPalindromePermutation("aabcd")).toBe(false);
});

test(`no permutation with even number of chars`, () => {
  expect(hasPalindromePermutation("aabbcd")).toBe(false);
});

test(`empty string`, () => {
  expect(hasPalindromePermutation("")).toBe(true);
});

test(`one character string `, () => {
  expect(hasPalindromePermutation("a")).toBe(true);
});
