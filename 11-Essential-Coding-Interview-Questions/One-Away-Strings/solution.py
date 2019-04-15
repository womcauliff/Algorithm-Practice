def is_one_away(s1, s2):
    maxDiff = 1  # The maximum number of char differences allowed
    mismatchCount = 0  # The current number of char differences found
    ptr1 = 0
    ptr2 = 0

    if (len(s1) > len(s2)):
        # This may be a deletion change
        while (ptr2 < len(s2)):
            if (s1[ptr1] != s2[ptr2]):
                # When a mismatch occurs, only increment s1 pointer
                ptr1 += 1
                # Record another a mismatch occurence
                mismatchCount += 1

                # Check if we reached the maximum allowed differences
                if mismatchCount > maxDiff:
                    return False
            else:
                # When a match occurs, increment both pointers
                ptr1 += 1
                ptr2 += 1

        # Check if there are any additional characters at the end of s1
        # that have been deleted
        if (ptr1 < len(s1)):
            missingEndChars = len(s1) - ptr2
            mismatchCount += missingEndChars

        # Check if we reached the maximum allowed differences
        if mismatchCount > maxDiff:
            return False

    elif (len(s1) < len(s2)):
        # this may be an addition change
        while (ptr1 < len(s1)):
            if s1[ptr1] != s2[ptr2]:
                # When a mismatch occurs, only increment s2 pointer
                ptr2 += 1
                # Record another a mismatch occurence
                mismatchCount += 1

                # Check if we reached the maximum allowed differences
                if mismatchCount > maxDiff:
                    return False
            else:
                # When a match occurs, increment both pointers
                if ptr1 < len(s1):
                    ptr1 += 1
                if ptr2 < len(s2):
                    ptr2 += 1

        # Check if there are any additional characters at the end of s2
        # that have been added
        if (ptr2 < len(s2)):
            addedEndChars = len(s2) - ptr1
            mismatchCount += addedEndChars

        # Check if we reached the maximum allowed differences
        if mismatchCount > maxDiff:
            return False

    else:
        # This may be a modification change.
        while (ptr1 < len(s1) and ptr2 < len(s2)):
            if (s1[ptr1] != s2[ptr2]):
                mismatchCount += 1

                # Check if we reached the maximum allowed differences
                if (mismatchCount > maxDiff):
                    return False

            ptr1 += 1
            ptr2 += 1

    return True
