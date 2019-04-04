/**
 * Defines the Node of a Linked List
 */ class Node {
  /**
   * @param {Number} value The value maintained by this Node
   * @param {Node} nextNode A reference to the next Node in the list
   */
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default Node;
