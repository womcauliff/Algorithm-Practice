function nonRepeating(str) {
  // A hashmap where each character will map to a value representing
  // its frequency in the string.
  // The order of the map's keys reflects the order the characters were encountered.
  const charFreq = {};

  // Sweep through the given string **once**,
  // adding each character to the hashmap.
  Array.prototype.forEach.call(
    str.split(""),
    // Increment by one if the character was seen previously.
    // A never-before-seen character will start at 1.
    char => (charFreq[char] = charFreq[char] + 1 || 1)
  );

  // Go through the hashmap, and return the character which maps to 1.
  // Return null if no character has frequency of 1
  let nonRepeatingChar = null;
  const characters = Object.keys(charFreq);
  for (let index = 0; index < characters.length; index++) {
    let char = characters[index];
    if (charFreq.hasOwnProperty(char) && charFreq[char] === 1) {
      nonRepeatingChar = char;
      // Escape once the first non-repeating character is found
      break;
    }
  }

  return nonRepeatingChar;
}

export default nonRepeating;
