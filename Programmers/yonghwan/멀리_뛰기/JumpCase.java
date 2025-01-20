package 멀리_뛰기;

public class JumpCase {
    public static long solution(int n) {
        long[] answer = new long[2000];
        answer[1] = 1;
        answer[2] = 2;

        for(int i = 3; i < answer.length; i++) {
            answer[i] = answer[i - 1] + answer[i - 2] % 1234567;
        }

        return answer[n];
    }

    public static void main(String[] args) {
        int n = 4;
        long result = solution(n);
        System.out.println(result);
    }
}
