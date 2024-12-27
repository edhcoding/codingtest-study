import java.util.Arrays;
import java.util.HashSet;

public class SumOfTwoNumbers {

    public static int[] solution(int[] numbers) {
        HashSet<Integer> sums = new HashSet<>();
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                sums.add(numbers[i] + numbers[j]);
            }
        }
        int[] result = new int[sums.size()];
        int i = 0;
        for (int sum : sums) {
            result[i] = sum;
            i++;
        }
        Arrays.sort(result);
        return result;
    }

    public static void main(String[] args) {
        int[] numbers = {2, 1, 3, 4, 1};
        int[] result = solution(numbers);
        System.out.println(Arrays.toString(result));
    }
}
