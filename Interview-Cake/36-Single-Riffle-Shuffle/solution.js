/**
 * Checks if the shuffled deck is a single riffle of the halves
 * @param {Number[]} half1 The first half of cards
 * @param {Number[]} half2 The second half of cards
 * @param {Number[]} shuffledDeck The shuffled deck of cards
 * @return {Boolean} Returns true if the shuffledDeck can be derived by performing
 * a riffle shuffle on the two halves.
 */
function isSingleRiffle(half1, half2, shuffledDeck) {
  //  Criteria that must be true for a riffle shuffle:
  // - All cards in half1 and half2 must be present in shuffledDeck.
  // - No additional cards may appear in shuffledDeck that are not present in half1 or half2.
  // - The shuffledDeck may pull cards from half1 and half2 in any order.
  // - The cards in shuffledDeck may not re-order the cards from a particular half.

  // If shuffledDeck has new cards added or cards removed, it cannot be a riffle.
  if (shuffledDeck.length !== half1.length + half2.length) {
    return false;
  }

  // Add index pointers to start of half1 and half2
  let ptr1 = 0;
  let ptr2 = 0;
  // Scan each card of the the shuffledDeck once,
  // verifying that no re-ordering of cards has occurred,
  // and that no new cards have been introduced.
  for (let i = 0; i < shuffledDeck.length; i++) {
    const shuffledDeckCard = shuffledDeck[i];

    if (ptr1 < half1.length && shuffledDeckCard === half1[ptr1]) {
      // If shuffledDeck card matches half1's current card,
      // advance pointer
      ptr1 += 1;
    } else if (ptr2 < half2.length && shuffledDeckCard === half2[ptr2]) {
      // Else if shuffledDeck card matches half2's current card,
      // advance pointer
      ptr2 += 1;
    } else {
      // Else, card does not match either card from the two halves.
      // This cannot be a riffle shuffle.
      return false;
    }
  }

  // shuffledDeck passes all criteria of a riffle shuffle
  return true;
}

export default isSingleRiffle;
