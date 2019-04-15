# Find Duplicate Files

## Problem Description

> Your friend copied a bunch of files and put them in random places around your hard drive. Write a function that returns an array of duplicate files.
> To help us confirm that two files are actually duplicates, return an array of arrays where:
>
> - the **first** item is the **duplicate** file
> - the **second** item is the **original** file
>
> You can assume each file was only duplicated once.

## Implementation

My solution takes advantage of the fact that, on Mac OS, duplicating a file will result in a copy which has a [`birth time`](https://nodejs.org/api/fs.html#fs_stat_time_values) that matches the original file.
My solution returns a result in the worst-case in `O(n)` time and `O(n)` space, where `n` is the number of files in the file system.

- Node.js
  - [Solution](./findDuplicateFiles.js)
  - [Test File](./findDuplicateFiles.test.js)
