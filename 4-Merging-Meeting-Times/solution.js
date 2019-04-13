/**
 * The meeting object in the calendar system.
 * @typedef {Object} Meeting
 * @property {Number} startTime
 * @property {Number} endTime
 */

/**
 * Merges all meetings that overlap into a single timeslot.
 * @param {Meeting[]} meetings An array of Meeting objects with no guaranteed order.
 * @return {Meeting[]} Returns the array of Meeting objects so that overlapping meetings are merged.
 */
function mergeRanges(meetings) {
  // Sort the meetings by their start times.
  let ascMeetings = meetings.sort((a, b) => a.startTime - b.startTime);

  // Sweep through sorted meetings array, merging all possible *adjacent* time slots

  // Using a while loop instead of a for loop, because the index counter should not increment if a merge operation is performed.
  // The while loop's conditional stops early, since we "merge forward" and we must have at least two elements to retrieve.
  let i = 0;
  while (i < ascMeetings.length - 1) {
    const T1 = ascMeetings[i];
    const T2 = ascMeetings[i + 1];
    // Check if meetings overlap.(No need to check T1's start, because the array is sorted.)
    if (T2.startTime <= T1.endTime) {
      // How to merge?
      // We know with certainty that T2 starts after T1, so keep the T1 start time.
      // For the merged end time, choose the larger end time between the two.
      ascMeetings = [
        ...ascMeetings.slice(0, i),
        // merging element i and element i + 1 into one meeting
        { startTime: T1.startTime, endTime: Math.max(T1.endTime, T2.endTime) },
        ...ascMeetings.slice(i + 2)
      ];
    } else {
      // Only increment if no merging was done
      i++;
    }
  }

  return ascMeetings;
}

export default mergeRanges;
