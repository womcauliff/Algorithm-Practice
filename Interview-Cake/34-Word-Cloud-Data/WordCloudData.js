class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  /**
   * Count the frequency of each word
   */
  populateWordsToCounts(inputString) {
    // Divide up sentence into words
    // make each word lowercase

    let wordStartIndex = 0;
    let wordEndIndex = 0;
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString.charAt(i).toLowerCase();

      switch (char) {
        // word-breaking characters
        case " ":
        case ".":
        case ",":
        case ":":
        case "?":
        case "!":
        case "(":
        case ")":
        case "\u2014":
          // If this character has broken a word, update Map
          if (wordEndIndex - wordStartIndex > 0) {
            const word = inputString
              .slice(wordStartIndex, wordEndIndex)
              .toLowerCase();
            this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1 || 1);
          }
          // Start word pointers after this non-letter character
          wordStartIndex = i + 1;
          wordEndIndex = i + 1;
          break;
        case "-": {
          // Hyphen characters are considered part of a word.
          // Dash characters within sentence are not considered words.
          if (wordEndIndex - wordStartIndex === 0) {
            // Break for dashes.
            break;
          }
          // Fall-through for hyphens.
        }

        // All other characters are valid for a word
        default:
          wordEndIndex += 1;
      }
    }
    // Sentence may have ended with a word
    if (wordEndIndex - wordStartIndex > 0) {
      const word = inputString
        .slice(wordStartIndex, wordEndIndex)
        .toLowerCase();
      this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1 || 1);
    }
  }
}

export default WordCloudData;
