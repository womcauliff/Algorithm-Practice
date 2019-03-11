/**
 * Given a first string which is longer than the second string, determines if the second string
 * is within a given number of character deletion operations.
 * @param {string} str1 The longer of the two given strings
 * @param {string} str2 The shorter of the two given strings
 * @param {number} maxDiff The maximum number of character deletion operations allowed.
 * @return {boolean} Returns true if the character deletion operations are within the
 * maximum-allowed limit.
 */
function isNDeletionsAway(str1, str2, maxDiff) {
  // The current number of char differences found
  let mismatchCount = 0;
  let ptr = 0;
  while (ptr < str1.length) {
    // Use pointer to compare characters of the two strings.
    // Use mismatchCount to offset the pointer for str2, the shorter string.
    if (str1[ptr] !== str2[ptr - mismatchCount]) {
      // Record another a mismatch occurence
      mismatchCount++;

      // Check if we reached the maximum allowed differences
      if (mismatchCount > maxDiff) {
        return false;
      }
    }

    ptr++;
  }

  return true;
}

/**
 * Given **equal** length strings, determines if the second string has within a given number of
 * character modifications from the first string.
 * @param {string} str1 The first given string
 * @param {string} str2 The second given string
 * @param {number} maxDiff The maximum number of character differences allowed
 * @return {boolean} Returns true if the character modification operations are within the
 * maximum-allowed limit.
 */
function isNModsAway(str1, str2, maxDiff) {
  // The current number of char differences found
  let mismatchCount = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      // Record another a mismatch occurence.
      mismatchCount++;
      // Check if we reached the maximum allowed differences.
      if (mismatchCount > maxDiff) {
        return false;
      }
    }
  }
  // One or fewer modifications, return true.
  return true;
}

/**
 * Determines if two strings are different within a certain number of operations.
 * @param {string} str1 Given string 1
 * @param {string} str2 Given string 2
 * @param {number} maxDiff The maximum number of character differences allowed
 * @return {boolean} Returns true if the two given strings have character differences within the
 * maximum-allowed limit.
 */
export function isNAway(str1, str2, maxDiff) {
  // Check if the difference in string lengths is greater than the maximum-allowed character
  // modification operations,
  if (Math.abs(str1.length - str2.length) > maxDiff) {
    // Exit -- it is not necessary to sweep through
    // the strings to check for character differences.
    return false;
  }

  if (str1.length > str2.length) {
    // This may be a deletion operation
    return isNDeletionsAway(str1, str2);
  } else if (str1.length < str2.length) {
    // This may be an addition operation
    return isNDeletionsAway(str2, str1, maxDiff);
  } else {
    // This may be a modification operation.
    return isNModsAway(str1, str2, maxDiff);
  }
}

/**
 * Checks if given strings are within one character operation of each other.
 * @param {string} str1 Given string 1
 * @param {string} str2 Given string 2
 * @returns {(str1: string, str2: string) => boolean} a function returning true if the two strings
 * are within one operation of each other.
 */
export function isOneAway(str1, str2) {
  return isNAway(str1, str2, 1);
}
