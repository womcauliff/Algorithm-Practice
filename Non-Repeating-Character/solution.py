# Returns the first instance of a non-repeating character in a given string,
# or None if no non-repeating character exists.
def non_repeating(given_string):
    charFreq = {}

    for char in given_string:
        # Increment by one if the character was seen previously.
        # A never-before-seen character will start at 1.
        charFreq[char] = charFreq.get(char, 0) + 1

    # Sweep through string again, and return the first character
    # that has a total frequency of 1
    # This will be 2 * n comparisons in worst case, which is still
    # equivalent to O(n)
    for char in given_string:
        if (charFreq.get(char) == 1):
            return char

    # Return None if there are no non-repeating characters
    return None


# should return 'c'
print(non_repeating("abcab"))

# should return None
print(non_repeating("abab"))

# should return 'c'
print(non_repeating("aabbbc"))

# should return 'd'
print(non_repeating("aabbdbc"))
