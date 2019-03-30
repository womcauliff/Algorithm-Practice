from solution import mine_sweeper


def to_string(given_array):
    list_rows = []
    for row in given_array:
        list_rows.append(str(row))
    return '[' + ', '.join(list_rows) + ']'


result = mine_sweeper([[0, 2], [2, 0]], 3, 3)
print(to_string(result))
# prints True when actual matches expected output
print(to_string(result) == "[[0, 1, -1], [1, 2, 1], [-1, 1, 0]]")
