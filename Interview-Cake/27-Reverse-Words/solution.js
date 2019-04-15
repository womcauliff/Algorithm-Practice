/**
 * Decodes the message by reversing the words
 * @param {String[]} message An array of single character Strings.
 * @return {String[]} Returns the input array, with words in reverse order.
 */
function reverseWords(message) {
  // First, swap all letters in *entire message* so that words
  // are moved toward their destination locations.
  swapLetters(message, 0, message.length - 1);

  // The *words* are now in the correct locations,
  // but the *letters* of each word are in reverse order.
  // Now we will fix the letter order of each word.

  // Start a pointer 1 at the beginning of the message.
  let ptr1 = 0;
  // Use pointer 2 to save the starting location of a word.
  let ptr2 = ptr1;

  // While pointer 1 is not at the end of the message.
  while (ptr1 <= message.length) {
    // If we find single space string " ", or reach the end of the message
    if (message[ptr1] === " " || ptr1 === message.length) {
      // We have reached the end of a single word
      // Swap the characters of this single word
      swapLetters(message, ptr2, ptr1 - 1);

      // Save the location for the start of the next word
      ptr2 = ptr1 + 1;
    }

    // Advance through the message
    ptr1++;
  }
}

/**
 * Swaps the letters between the given index locations, in place.
 * @param {String[]} message An array of single character Strings.
 * @param {Number} startIndex The index location to begin the swap.
 * @param {Number} endIndex The index location to end the swap.
 */
function swapLetters(message, startIndex, endIndex) {
  while (startIndex < endIndex) {
    const temp = message[startIndex];
    message[startIndex] = message[endIndex];
    message[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
}

export default reverseWords;
