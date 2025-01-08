package 피보나치;

public class Fibonacci {
    public static int solution(int n) {

        return fibonacci(0, 1, 2, n);
    }
    public static int fibonacci(int prev1, int prev2, int count, int n) {
        int sum = (prev1 % 1234567) + (prev2 % 1234567);
        if(count == n) {
            return sum;
        }

        return fibonacci(prev1, prev2, count + 1, n);
    }

    public static void main(String[] args) {
        int n = 5;
        int result = solution(n);
        System.out.println(result);
    }
}
