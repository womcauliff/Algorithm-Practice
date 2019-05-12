/**
 * @typedef ListNode
 * @property {Number} val
 * @property {ListNode} next
 */

/**
 * Gets a linked list's tail node and its total length.
 * @param {ListNode} head Pointer to the head of a linked list.
 * @returns {[ListNode, Number]} An array pair containing a pointer to tail node and
 * the length of the linked list.
 */
function getTailAndLength(head) {
  if (head === null) {
    return [null, 0];
  }

  let pointer = head;
  let length = 0;
  while (pointer.next !== null) {
    pointer = pointer.next;
    length += 1;
  }
  return [pointer, length];
}

/**
 * @param {ListNode} head Pointer to the head node.
 * @param {Number} n The nth node which should be returned.
 * @returns {ListNode} Pointer to the nth node from the head.
 */
function getNthNode(head, n) {
  let pointer = head;
  while (n > 0) {
    pointer = pointer.next;
    n -= 1;
  }
  return pointer;
}

/**
 * Given two singly linked lists that intersect at some point, finds the intersecting node
 * (assumes the lists are non-cyclical).
 * @param {ListNode} headA Pointer to the head node of linked list A.
 * @param {ListNode} headB Pointer to the head node of linked list B.
 * @return {ListNode} Pointer to the node where list A and B intersect.
 */
function getIntersectionNode(headA, headB) {
  // Step through both linked lists to record their lengths
  const [tailA, lengthA] = getTailAndLength(headA);
  const [tailB, lengthB] = getTailAndLength(headB);

  // Early catch:
  // If both lists do not have the same tail node then we can conclude the lists never intersect.
  if (tailA !== tailB) return null;

  // Find the difference in length between the two linked lists
  const lengthDiff = Math.abs(lengthA - lengthB);
  // This difference is the minimum number of nodes that the longer list can be "out of sync" with the shorter list.
  // Thus, we can safely advance the longer lists's pointer by this minimum number of nodes,
  // knowing the intersection cannot be one of these skipped nodes.
  let pointerA = lengthA > lengthB ? getNthNode(headA, lengthDiff) : headA;
  let pointerB = lengthB > lengthA ? getNthNode(headB, lengthDiff) : headB;

  // Compare the nodes between the two lists
  while (pointerA !== null && pointerB !== null) {
    if (pointerA === pointerB) {
      // Return once we find the node where they intersect
      return pointerA;
    }
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  // If no intersection was found, return null
  return null;
}
