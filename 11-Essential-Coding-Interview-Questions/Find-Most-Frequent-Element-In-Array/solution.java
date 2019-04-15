import java.util.HashMap;

public class MF {
  public static void main(String[] args) {

    // mostFrequent(array1) should return 1.
    int[] array1 = { 1, 3, 1, 3, 2, 1};
    // mostFrequent(array2) should return 3.
    int[] array2 = { 3, 3, 1, 3, 2, 1};
    // mostFrequent(array3) should return null.
    int[] array3 = {};
    // mostFrequent(array4) should return 0.
    int[] array4 = { 0};
    // mostFrequent(array5) should return -1.
    int[] array5 = { 0, - 1, 10, 10, -1, 10, -1, -1, -1, 1};
  }

  public static Integer mostFreqent(int[] givenArray) {
    Integer maxItem = null;
    Integer highestFreqAmount = 0;
    HashMap <Integer, Integer> seenValues = new HashMap<Integer, Integer>();

    for (int i = 0; i < givenArray.length; i++) {
      Integer currentValue = seenValues.get(givenArray[i]);
      
          
      // A never-before-seen value will start at 1.
      if (currentValue == null) {
        seenValues.put(givenArray[i], 1);
      }
      // Increment by one if the value was seen previously.
      else {
        seenValues.put(givenArray[i], seenValues.get(givenArray[i]) + 1);
      }

      // Check if this makes the value the most-frequent
      if (seenValues.get(givenArray[i]) > highestFreqAmount) {
        highestFreqAmount = seenValues.get(givenArray[i]);
        maxItem = givenArray[i];
      }
    }
    return maxItem;
  }
}
