# Finds the most-frequently occuring value in O(n) Time.
def most_frequent(given_list):
    max_item = None
    highest_freq_amount = 0
    seen = {}

    for element in given_list:
        # Increment by one if the value was seen previously.
        # A never-before-seen value will start at 1.
        seen[element] = seen.get(element, 0) + 1

        # Check if this makes the value the most-frequent
        if seen.get(element) > highest_freq_amount:
            highest_freq_amount = seen.get(element)
            max_item = element

    return max_item
