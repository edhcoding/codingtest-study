package min;

import java.util.Arrays;

public class MakingMin {
    // 한 쪽은 오름차순, 한 쪽은 내림차순으로 정렬
    //
    public static int solution(int[] A, int[] B) {
        Arrays.sort(A);
        Arrays.sort(B);

        int result = 0;

        for(int i = 0; i <A.length; i++) {
            result = result + B[i] * A[A.length - i - 1];
        }

        return result;
    }
    public static void main(String[] args) {
        int[] a = {1, 4, 2};
        int[] b = {5, 4, 4};
        int result = solution(a, b);
        System.out.println(result);
    }
}
