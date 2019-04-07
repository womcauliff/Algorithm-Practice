import isRotation from "./solution";

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2a = [4, 5, 6, 7, 8, 1, 2, 3];
const array2b = [4, 5, 6, 7, 1, 2, 3];
const array2c = [4, 5, 6, 9, 1, 2, 3];
const array2d = [4, 6, 5, 7, 1, 2, 3];
const array2e = [4, 5, 6, 7, 0, 2, 3];
const array2f = [1, 2, 3, 4, 5, 6, 7];

// is_rotation(array1, array2a) should return false.
console.assert(isRotation(array1, array2a) === false, "Failed Test a");
// is_rotation(array1, array2b) should return true.
console.assert(isRotation(array1, array2b) === true, "Failed Test b");
// is_rotation(array1, array2c) should return false.
console.assert(isRotation(array1, array2c) === false, "Failed Test c");
// is_rotation(array1, array2d) should return false.
console.assert(isRotation(array1, array2d) === false, "Failed Test d");
// is_rotation(array1, array2e) should return false.
console.assert(isRotation(array1, array2e) === false, "Failed Test e");
// is_rotation(array1, array2f) should return true.
console.assert(isRotation(array1, array2f) === true, "Failed Test f");
