import reverse from "./solution";

test(`empty string`, () => {
  const input = "".split("");
  reverse(input); // reverses in place
  expect(input.join("")).toBe("");
});

test(`single character string`, () => {
  const input = "A".split("");
  reverse(input); // reverses in place
  expect(input.join("")).toBe("A");
});

test(`longer string`, () => {
  const input = "ABCDE".split("");
  reverse(input); // reverses in place
  expect(input.join("")).toBe("EDCBA");
});
