const fs = require("fs");

/**
 * Searches a file system for duplicate files.
 * @param {String} startingDirectory The directory path to begin the search
 * @return {String[][]} Returns a 2-dimensional array, where each array is a pair
 * of strings,
 */
function findDuplicateFiles(startingDirectory) {
  // Search stack, starting with root directory
  const searchStack = [startingDirectory];

  // Maps to track previously seen files
  const filesSeenByBirth = {};

  // Output array
  const duplicates = [];

  // While there are still directories to search
  while (searchStack.length > 0) {
    // Pop current directory from search stack
    const currentPath = searchStack.pop();
    // Retrieve file information
    const currentFile = fs.statSync(currentPath);

    // If current file is actually a directory
    if (currentFile.isDirectory()) {
      // Add its contents to search stack
      fs.readdirSync(currentPath).forEach(path =>
        searchStack.push(`${currentPath}/${path}`)
      );

      // else, this is a file
    } else {
      // Retrieve the currentFile's birth time and access time
      const { birthtimeMs, atimeMs } = currentFile;
      // If existingFile's birth matches currentFile's birth
      if (filesSeenByBirth.hasOwnProperty(birthtimeMs)) {
        const existingFile = filesSeenByBirth[birthtimeMs];

        // If existingFile was accessed later than currentFile
        if (existingFile.accessTime > atimeMs) {
          // currentFile is the original
          // push [duplicate, original] to the duplicates array
          duplicates.push([existingFile.path, currentPath]);
        } else {
          // currentFile is the copy
          // push [duplicate, original] to the duplicates array
          duplicates.push([currentPath, existingFile.path]);
        }
        // else
      } else {
        // add file's path and accesstime to Map
        filesSeenByBirth[birthtimeMs] = {
          path: currentPath,
          accessTime: atimeMs
        };
      }
    }
  }

  return duplicates;
}

module.exports = findDuplicateFiles;
