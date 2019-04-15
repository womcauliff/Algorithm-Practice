# Returns the lesser of the two numbers, or num1 if the two numbers are equal.
def returnLesser(num1, num2):
    minimum = num1
    if num1 - num2 >= 0:
        minimum = num2
    return minimum

# Returns the array of integers that the two arrays have in common.
# If none are found, returns an empty array.
def common_elements(list1, list2):
    result = []
    # Start the search at the lesser of the two first elements.
    currentVal = returnLesser(list1[0], list2[0])
    list1Index = 0  # index - pointer for list 1
    list2Index = 0  # index - poiner for list 2

    # Stop the search when * both * of the index - pointer variables
    # hit the end of their list length.
    while list1Index < len(list1) and list2Index < len(list2):

        # Search using the lesser of the two current values
        currentVal = returnLesser(list1[list1Index], list2[list2Index])

        # Determine if this is a value in common
        if list1[list1Index] == list2[list2Index]:
            result.append(currentVal)

        # Each time a list DOES contain the current value we are looking for,
        # advance the list's corresponding index-pointer variable.
        if list1[list1Index] == currentVal:
            list1Index += 1
        if list2[list2Index] == currentVal:
            list2Index += 1

    return result

list_a1 = [1, 3, 4, 6, 7, 9]
list_a2 = [1, 2, 4, 5, 9, 10]
# common_elements(list_a1, list_a2) should return [1, 4, 9] (a list).
print(common_elements(list_a1, list_a2))

list_b1 = [1, 2, 9, 10, 11, 12]
list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
# common_elements(list_b1, list_b2) should return [1, 2, 9, 10, 12] (a list).
print(common_elements(list_b1, list_b2))

list_c1 = [0, 1, 2, 3, 4, 5]
list_c2 = [6, 7, 8, 9, 10, 11]
# common_elements(list_c1, list_c2) should return [] (an empty list).
print(common_elements(list_c1, list_c2))
