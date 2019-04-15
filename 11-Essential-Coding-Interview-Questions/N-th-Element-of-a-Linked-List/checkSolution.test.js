import Node from "./Node";
import nthFromLast from "./solution";

let current = new Node(1, null);
for (let i = 2; i < 8; i++) {
  current = new Node(i, current);
}
// head = 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> (null)
const head = current;
test(`1st from the end`, () => {
  expect(nthFromLast(head, 1)).toBe(1);
});
test(`5th from the end`, () => {
  expect(nthFromLast(head, 5)).toBe(5);
});
test(`Bad Param: No Pointer to Head`, () => {
  expect(nthFromLast(null, 1)).toBe(null);
});

let current2 = new Node(4, null);
for (let i = 3; i > 0; i--) {
  current2 = new Node(i, current2);
}
// head2 = 1 -> 2 -> 3 -> 4 -> (null)
const head2 = current2;
test(`2nd from Last`, () => {
  expect(nthFromLast(head2, 2)).toBe(3);
});
test(`4th from Last`, () => {
  expect(nthFromLast(head2, 4)).toBe(1);
});
test(`Bad Param: Past the beginning of the List`, () => {
  expect(nthFromLast(head2, 5)).toBe(null);
});
