import reverseWords from "./solution";

test(`one word`, () => {
  const input = "vault".split("");
  reverseWords(input);
  expect(input.join("")).toBe("vault");
});

test(`two words`, () => {
  const input = "thief cake".split("");
  reverseWords(input);
  expect(input.join("")).toBe("cake thief");
});

test(`three words`, () => {
  const input = "one another get".split("");
  reverseWords(input);
  expect(input.join("")).toBe("get another one");
});

test(`multiple words same length`, () => {
  const input = "rat the ate cat the".split("");
  reverseWords(input);
  expect(input.join("")).toBe("the cat ate the rat");
});

test(`multiple words different lengths`, () => {
  const input = "yummy is cake bundt chocolate".split("");
  reverseWords(input);
  expect(input.join("")).toBe("chocolate bundt cake is yummy");
});

test(`empty string`, () => {
  const input = "".split("");
  reverseWords(input);
  expect(input.join("")).toBe("");
});
