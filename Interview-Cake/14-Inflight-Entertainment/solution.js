/**
 * Determines if two movie runtimes add up to the flight length.
 * @param {Number[]} movieLengths The length of each film available to stream.
 * @param {Number} flightLength The length of the flight.
 * @returns {Boolean} Returns true if an acceptable pair of film runtimes is found.
 */
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  // Create Set to contain encountered movieLengths
  const lengthsSeen = new Set();

  // Sweep through all movieLengths
  for (let i = 0; i < movieLengths.length; i++) {
    const currentFilmLength = movieLengths[i];

    // Do not consider films that are as long or longer than the flight.
    if (currentFilmLength >= flightLength) {
      continue;
    }

    // Calculate the time leftover if this current film is watched.
    const remainingLength = flightLength - currentFilmLength;

    // If Set contains another film that can be viewed in the remaining time
    if (lengthsSeen.has(remainingLength)) {
      // An acceptable pair of film lengths has been found.
      return true;
    }
    // Else, save this currentFilmLength as seen.
    lengthsSeen.add(currentFilmLength);
  }

  // If no pair of films was found, return false
  return false;
}

export default canTwoMoviesFillFlight;
