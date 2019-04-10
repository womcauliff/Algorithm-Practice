class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    // Count the frequency of each word
    // Divide up sentence into words
    // Make each word lowercase
    // hyphenated words are considered one word
    // apostrophes should be considered just as a character within a word

    // a word starter
    let word = "";
    for (let char of inputString) {
      char = char.toLowerCase();

      switch (char) {
        // word breaking characters
        case " ":
        case ".":
        case ",":
        case ":":
        case "?":
        case "!":
        case "(":
        case ")":
          if (word.length > 0) {
            this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1 || 1);
            word = "";
          }
          break;
        case "-":
          // Ignore dashes, but allow hyphens to fall through
          if (word.length === 0) {
            break;
          }
        // valid characters for a word
        default:
          word += char;
      }
    }
    // Sentence may have ended with a word
    if (word.length > 0) {
      this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1 || 1);
      word = "";
    }
  }
}

export default WordCloudData;
