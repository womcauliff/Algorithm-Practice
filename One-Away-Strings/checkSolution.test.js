import isOneAway from "./solution";

test(`Checks "abcde", "abcd" should return true`, () => {
  expect(isOneAway("abcde", "abcd")).toBe(true);
});
test(`Checks "abde", "abcde" should return true`, () => {
  expect(isOneAway("abde", "abcde")).toBe(true);
});
test(`Checks "a", "a" should return true`, () => {
  expect(isOneAway("a", "a")).toBe(true);
});
test(`Checks "abcde", "abcd" should return true`, () => {
  expect(isOneAway("abcdef", "abqdef")).toBe(true);
});
test(`Checks "abcdef", "abqdef" should return true`, () => {
  expect(isOneAway("abcdef", "abqdef")).toBe(true);
});
test(`Checks "abcdef", "abccef" should return true`, () => {
  expect(isOneAway("abcdef", "abccef")).toBe(true);
});
test(`Checks "abcdef", "abcde" should return true`, () => {
  expect(isOneAway("abcdef", "abcde")).toBe(true);
});
test(`Checks "aaa", "abc"should return false`, () => {
  expect(isOneAway("aaa", "abc")).toBe(false);
});
test(`Checks "abcde", "abc" should return false`, () => {
  expect(isOneAway("abcde", "abc")).toBe(false);
});
test(`Checks "abc", "abcde"should return false`, () => {
  expect(isOneAway("abc", "abcde")).toBe(false);
});
test(`Checks "abc", "bcc" should return false`, () => {
  expect(isOneAway("abc", "bcc")).toBe(false);
});
