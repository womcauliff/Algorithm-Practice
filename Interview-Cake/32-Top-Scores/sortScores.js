/**
 * Sorts a set of scores in descending order in O(n) time.
 */
function sortScores(unorderedScores, highestPossibleScore) {
  // An array datastructure, in which each index represents a possible score,
  // and the value represents the frequency of the score.
  const scoreFrequencies = new Array(highestPossibleScore + 1).fill(0);

  // Update array to include the frequency for each score.
  unorderedScores.forEach(score => (scoreFrequencies[score] += 1));

  // Sweep through scoreFrequencies array starting at the end (for desc order),
  const sortedScores = [];
  for (
    let currentScore = highestPossibleScore;
    currentScore >= 0;
    currentScore--
  ) {
    const currentScoreFreq = scoreFrequencies[currentScore];

    // Push this score into sortedScores, matching the frequency of its occurrences.
    for (let freq = 0; freq < currentScoreFreq; freq++) {
      sortedScores.push(currentScore);
    }
  }

  return sortedScores;
}

export default sortScores;
