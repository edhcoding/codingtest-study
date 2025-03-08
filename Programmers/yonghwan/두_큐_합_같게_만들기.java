import java.util.LinkedList;
import java.util.Queue;

public class 두_큐_합_같게_만들기 {
    public static void main(String[] args) {
        int[] q1 = {1, 3, 5, 7};
        int[] q2 = {2, 4, 6, 8};
        int result = solution(q1, q2);
        System.out.println(result);
    }

    public static int solution(int[] q1, int[] q2) {
        Queue<Integer> queue1 = new LinkedList<>();
        Queue<Integer> queue2 = new LinkedList<>();

        long total = 0;
        long q1Sum = 0;
        long q2Sum = 0;
        int move = 0;
        int maxMove = (q1.length + q2.length) * 2; // 최대 이동 횟수 제한

        for (int num : q1) {
            queue1.add(num);
            q1Sum += num;
            total += num;
        }

        for (int num : q2) {
            queue2.add(num);
            q2Sum += num;
            total += num;
        }

        if (total % 2 != 0) return -1; // 합이 홀수이면 불가능

        long target = total / 2;
        while (move <= maxMove) {
            if (q1Sum == target) return move;

            if (q1Sum > target) {
                int moveNum = queue1.poll();
                queue2.add(moveNum);
                q1Sum -= moveNum;
                q2Sum += moveNum;
            } else {
                int moveNum = queue2.poll();
                queue1.add(moveNum);
                q2Sum -= moveNum;
                q1Sum += moveNum;
            }
            move++;
        }

        return -1;
    }
}
