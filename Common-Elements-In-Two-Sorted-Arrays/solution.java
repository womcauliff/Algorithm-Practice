import java.util.ArrayList;
import java.util.Arrays;

public class CE {
    public static void main(String[] args) {
        int[] array1A = { 1, 3, 4, 6, 7, 9 };
        int[] array2A = { 1, 2, 4, 5, 9, 10 };
        // commonElements(array1A, array2A) should return [1, 4, 9] (an array).
        Integer[] resultA = CE.commonElements(array1A, array2A);
        System.out.println(Arrays.toString(resultA));

        int[] array1B = { 1, 2, 9, 10, 11, 12 };
        int[] array2B = { 0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15 };
        // commonElements(array1B, array2B) should return [1, 2, 9, 10, 12] (an array).
        Integer[] resultB = CE.commonElements(array1B, array2B);
        System.out.println(Arrays.toString(resultB));

        int[] array1C = { 0, 1, 2, 3, 4, 5 };
        int[] array2C = { 6, 7, 8, 9, 10, 11 };
        // common_elements(array1C, array2C) should return [] (an empty array).
        Integer[] resultC = CE.commonElements(array1C, array2C);
        System.out.println(Arrays.toString(resultC));
    }

    /**
     * @param array1 The first array
     * @param array2 The second array
     * @return The array of Integers that the two arrays have in common. If none are
     *         found, returns an empty ArrayList.
     */
    public static Integer[] commonElements(int[] array1, int[] array2) {
        Integer[] resultInArray = new Integer[0];
        ArrayList<Integer> result = new ArrayList<Integer>();

        int index1 = 0; // index-pointer for array1
        int index2 = 0; // index-pointer for array2
        // Start the search at the lesser of the two first elements.
        int currentValue = CE.returnLesser(array1[0], array2[0]);

        // Loop through the two arrays.
        // Stop the search when one of the index-pointer variables
        // hit the end of their array length.
        while (index1 < array1.length && index2 < array2.length) {

            // Search for the lesser of the two current values
            currentValue = CE.returnLesser(array1[index1], array2[index2]);

            // Determine if this is a value in common
            if (array1[index1] == array2[index2]) {
                result.add(Integer(currentValue));
            }

            // Each time an array DOES contain the current value we are looking for,
            // advance the array's corresponding index-pointer variable.
            if (currentValue == array1[index1]) {
                index1++;
            }
            if (currentValue == array2[index2]) {
                index2++;
            }
        }

        resultInArray = new Integer[result.size()];
        for (int i = 0; i < result.size(); i++) {
            resultInArray[i] = result.get(i);
        }
        return resultInArray;
    }

    /**
     * @param num1 The first number
     * @param num2 The second number
     * @return The lesser of the two numbers, or num1 if the two numbers are equal.
     */
    private static int returnLesser(int num1, int num2) {
        return num1 - num2 < 0 ? num1 : num2;
    }

}
