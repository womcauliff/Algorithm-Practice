/**
 * @param {Node} head A reference to the head Node of a linked list.
 * @param {Number} n A positive integer representing a Node's location
 * in the linked list, counting from the end.
 * @return {Number|null} Returns the value of the nth Node from the end,
 * or `null` if it cannot be determined with the given inputs.
 */
function nthFromLast(head, n) {
  if (head === null) return null;

  // Tracking the number of Nodes seen in the linked list
  let totalLength = 1;

  // The leading Node pointer
  let leadingPtr = head;

  // The trailing Node pointer, which will eventually point
  // to the nth Node from the end.
  let trailingPtr = head;

  // Advance through the linked list.
  while (leadingPtr.nextNode) {
    // Advance leading pointer
    totalLength += 1;
    leadingPtr = leadingPtr.nextNode;

    // Make sure the trailing Node pointer is always
    // `n` Nodes away from the leading Node pointer.
    if (totalLength - n > 0) {
      trailingPtr = trailingPtr.nextNode;
    }
  }

  // Guard against a location that is larger than the list's length
  if (n > totalLength) {
    return null;
  }

  return trailingPtr.value;
}

export default nthFromLast;
