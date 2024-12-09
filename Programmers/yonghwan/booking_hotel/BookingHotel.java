package skill_level_test.level1;

import java.util.Arrays;
import java.util.PriorityQueue;

public class Problem13 {
    public static void solution(String[][] book_times) {
        int[][] booked = new int[book_times.length][2];
        for (int i = 0; i < book_times.length; i++) {
            int start = Integer.parseInt(book_times[i][0].substring(0, 2)) * 60 + Integer.parseInt(book_times[i][0].substring(3, 5));
            int end = Integer.parseInt(book_times[i][1].substring(0, 2)) * 60 + Integer.parseInt(book_times[i][1].substring(3, 5));
            booked[i] = new int[]{start, end + 10};
        }

        Arrays.sort(booked, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<Integer> roomEndTimes = new PriorityQueue<>();
        for (int[] time : booked) {
            if (!roomEndTimes.isEmpty() && roomEndTimes.peek() <= time[0]) {
                roomEndTimes.poll();
            }
            roomEndTimes.add(time[1]);
        }

        System.out.println(roomEndTimes.size());
    }

    public static void main(String[] args) {
        String[][] book_time = {{"15:00", "17:00"}, {"16:40", "18:20"}, {"14:20", "15:20"}, {"14:10", "19:20"}, {"18:20", "21:20"}};
        solution(book_time);
        System.out.println();
    }
}
