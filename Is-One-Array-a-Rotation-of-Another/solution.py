
def is_rotation(list1, list2):
    # lists must be equal in length in order to be a rotation.
    if len(list1) != len(list2):
        return False

    # Set two list pointers
    ptr1 = 0
    ptr2 = 0

    startingPointFound = False
    # Sweep through list2, looking for the starting point of list1
    while ptr2 < len(list2):
        if list1[ptr1] == list2[ptr2]:
            startingPointFound = True
            break
        ptr2 += 1

    # If no starting point is found, return False
    if startingPointFound == False:
        return False

    # Sweep through list 1 and 2, verifying that each element matches.
    # If a mismatch is found, return False.
    while ptr1 < len(list1):
        if list1[ptr1] != list2[ptr2]:
            return False

        ptr1 += 1

        # list2's pointer can wrap around back to the beginning.
        if ptr2 < (len(list2) - 1):
            ptr2 += 1
        else:
            ptr2 = 0

    return True

# Tests
list1 = [1, 2, 3, 4, 5, 6, 7]
list2a = [4, 5, 6, 7, 8, 1, 2, 3]
list2b = [4, 5, 6, 7, 1, 2, 3]
list2c = [4, 5, 6, 9, 1, 2, 3]
list2d = [4, 6, 5, 7, 1, 2, 3]
list2e = [4, 5, 6, 7, 0, 2, 3]
list2f = [1, 2, 3, 4, 5, 6, 7]

# is_rotation(list1, list2a) should return False.
print(is_rotation(list1, list2a) == False)
# is_rotation(list1, list2b) should return True.
print(is_rotation(list1, list2b) == True)
# is_rotation(list1, list2c) should return False.
print(is_rotation(list1, list2c) == False)
# is_rotation(list1, list2d) should return False.
print(is_rotation(list1, list2d) == False)
# is_rotation(list1, list2e) should return False.
print(is_rotation(list1, list2e) == False)
# is_rotation(list1, list2f) should return True.
print(is_rotation(list1, list2f) == True)
