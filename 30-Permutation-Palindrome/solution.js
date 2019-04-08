/**
 * Checks if any permutation of the input is a palindrome
 * @param {String} theString
 * @returns {Boolean} Returns true if the input string has at least one
 * permutation that is also a palindrome.
 */
function hasPalindromePermutation(theString) {
  // Palindromes require that character frequencies appear in multiples of two.
  // ONLY one character may appear an odd number of times (placed as the middle
  // character in palindrome)

  // Sweep through the input string, and use a Map to track the characters that
  // appear an odd number of times (as a space consideration, we use the Map to
  // track existence of odd-numbered characters, rather than track the actual
  // character frequency values themselves).
  const oddFreqChars = new Set();

  for (let char of theString) {
    // If the character was previously stored in the Set
    if (oddFreqChars.has(char)) {
      // An additional appearance makes the frequency an even number.
      // Remove the character from the Set.
      oddFreqChars.delete(char);
    } else {
      // An additional appearance makes the frequency an odd number.
      // Save the character into the Set.
      oddFreqChars.add(char);
    }
  }

  // If input string has 1 or fewer odd-numbered character frequencies,
  // then at least one of its permutations can be a palindrome.
  return oddFreqChars.size <= 1;
}

export default hasPalindromePermutation;
