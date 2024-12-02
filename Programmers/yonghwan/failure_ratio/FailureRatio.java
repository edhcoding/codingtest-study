package failure_ratio;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class FailureRatio {
    public static void main(String[] args) {
        int[] stages = {2, 1, 2, 6, 2, 4, 3, 3};
        int[] result = solution(5, stages);
        System.out.println(Arrays.toString(result));
    }

    public static int[] solution(int N, int[] stages) {
        HashMap<Integer, Integer> map = new HashMap<>();
        HashMap<Integer, Integer> reachedStagePlayer = new HashMap<>();

        for (int stage : stages) {
            map.put(stage, map.getOrDefault(stage, 0) + 1);
        }

        for (int i = 1; i <= N; i++) {
            int reachedCount = 0;
            for (int stage : stages) {
                if (stage >= i) {
                    reachedCount++;
                }
            }
            reachedStagePlayer.put(i, reachedCount);
        }

        List<int[]> failureRates = new ArrayList<>();
        for (int i = 1; i <= N; i++) {
            int failed = map.getOrDefault(i, 0);
            int reached = reachedStagePlayer.getOrDefault(i, 0);
            double failureRate = (reached == 0) ? 0.0 : (double) failed / reached;

            failureRates.add(new int[]{i, (int)(failureRate * 1000000)});
        }

        failureRates.sort((a, b) -> b[1] == a[1] ? a[0] - b[0] : b[1] - a[1]);

        return failureRates.stream().mapToInt(a -> a[0]).toArray();
    }
}
