function isOneAway(str1, str2) {
  const maxDiff = 1; // The maximum number of char differences allowed
  let mismatchCount = 0; // The current number of char differences found
  let ptr1 = 0;
  let ptr2 = 0;

  if (str1.length > str2.length) {
    // This may be a deletion change

    while (ptr1 < str1.length) {
      if (str1[ptr1] !== str2[ptr2]) {
        // When a mismatch occurs, only increment str1 pointer
        ptr1++;
        // Record another a mismatch occurence
        mismatchCount++;

        // Check if we reached the maximum allowed differences
        if (mismatchCount > maxDiff) {
          return false;
        }
      } else {
        // When a match occurs, increment both pointers
        ptr1++;
        ptr2++;
      }
    }
  } else if (str1.length < str2.length) {
    // this may be an addition change

    while (ptr2 < str2.length) {
      if (str1[ptr1] !== str2[ptr2]) {
        // When a mismatch occurs, only increment str2 pointer
        ptr2++;
        // Record another a mismatch occurence
        mismatchCount++;

        // Check if we reached the maximum allowed differences
        if (mismatchCount > maxDiff) {
          return false;
        }
      } else {
        // When a match occurs, increment both pointers
        ptr1++;
        ptr2++;
      }
    }
  } else {
    // This may be a modification change.

    while (ptr1 < str1.length) {
      if (str1[ptr1] !== str2[ptr2]) {
        mismatchCount++;

        if (mismatchCount > maxDiff) {
          return false;
        }
      }
      ptr1++;
      ptr2++;
    }
  }

  return true;
}

export default isOneAway;
