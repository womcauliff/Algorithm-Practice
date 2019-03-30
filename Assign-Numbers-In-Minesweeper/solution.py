# Implement your function below.
def mine_sweeper(bombs, num_rows, num_cols):
    # NOTE: field = [[0] * num_cols] * num_rows would not work
    # because you need to create a new list for every row,
    # instead of copying the same list.
    field = [[0 for i in range(num_cols)] for j in range(num_rows)]

    for bomb in bombs:
        bombRow = bomb[0]
        bombCol = bomb[1]
        rowAbove = bombRow - 1
        rowBelow = bombRow + 1
        colBefore = bombCol - 1
        colAfter = bombCol + 1

        # mark bomb location
        field[bombRow][bombCol] = -1

        # row above bomb
        if (rowAbove >= 0):
            if (colBefore >= 0 and field[rowAbove][colBefore] != -1):
                field[rowAbove][colBefore] += 1
            if (field[rowAbove][bombCol] != -1):
                field[rowAbove][bombCol] += 1
            if (colAfter < num_cols and field[rowAbove][colAfter] != -1):
                field[rowAbove][colAfter] += 1

        # same row as bomb
        if (colBefore >= 0 and field[bombRow][colBefore] != -1):
            field[bombRow][colBefore] += 1
        if (colAfter < num_cols and field[bombRow][colAfter] != -1):
            field[bombRow][colAfter] += 1

        # row below bomb
        if (rowBelow < num_rows):
            if (colBefore >= 0 and field[rowBelow][colBefore] != -1):
                field[rowBelow][colBefore] += 1
            if (field[rowBelow][bombCol] != -1):
                field[rowBelow][bombCol] += 1
            if (colAfter < num_cols and field[rowBelow][colAfter] != -1):
                field[rowBelow][colAfter] += 1

    return field
