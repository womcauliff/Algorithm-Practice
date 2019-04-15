const fs = require("fs");
const os = require("os");
const findDuplicateFiles = require("./findDuplicateFiles");

/**
 * Assumes the existence of the following directory structure and files on the Desktop.
 * - `Desktop/`
 *   - `test/`
 *     - `testing.txt`
 *     - `testing copy.txt`
 *     - `helloworld.txt`
 *     - `test2/`
 *       - `helloworld copy.txt`
 *
 */

test(`finds duplicate files in test folders on Desktop`, () => {
  const username = os.userInfo().username;
  const rootFolder = "Desktop/test";
  const fullPath = `/Users/${username}/${rootFolder}`;
  const fullPath2 = `/Users/${username}/${rootFolder}/test2`;

  const actual = findDuplicateFiles(fullPath);
  console.log(actual);
  const expected = [
    [`${fullPath}/testing copy.txt`, `${fullPath}/testing.txt`],
    [`${fullPath2}/helloworld copy.txt`, `${fullPath}/helloworld.txt`]
  ];
  expect(actual).toEqual(expected);
});
