package 큰_수_만들기;

import java.util.Stack;

public class BigNumber {

    public static String solution(String number, int k) {
        StringBuilder answer = new StringBuilder();
        int length = number.length() - k;
        Stack<Character> stack = new Stack<>();

        for (char digit : number.toCharArray()) {
            while (!stack.isEmpty() && k > 0 && stack.peek() < digit) {
                stack.pop();
                k--;
            }
            stack.push(digit);
        }

        for (int i = 0; i < length; i++) {
            answer.append(stack.get(i));
        }

        return answer.toString();
    }

    public static void main(String[] args) {
        String number = "1231234";
        int k = 3;

        String result = solution(number, k);
        System.out.println(result);
    }
}
