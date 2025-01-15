package 게임_맵_최단거리;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

public class ShortestDistanceRoute {

    public static int solution(int[][] maps) {
        Queue<int[]> queue = new LinkedList<>();
        HashSet<String> set = new HashSet<>();
        int col = 0, row = 0, distance = 1;

        queue.offer(new int[]{row, col, distance});
        set.add(row + "," + col);

        int count = 0;

        while (!queue.isEmpty()) {

            int[] curr = queue.poll();
            int r = curr[0];
            int c = curr[1];
            int d = curr[2];

            if (r == maps.length - 1 && c == maps[0].length - 1) {
                return d;
            }

            if (c + 1 < maps[0].length && maps[r][c + 1] == 1 && !set.contains(r + "," + (c + 1))) {
                queue.offer(new int[]{r, c + 1, d + 1});
                set.add(r + "," + (c + 1));
            }
            if (c - 1 >= 0 && maps[r][c - 1] == 1 && !set.contains(r + "," + (c - 1))) {
                queue.offer(new int[]{r, c - 1, d + 1});
                set.add(r + "," + (c - 1));
            }
            if (r - 1 >= 0 && maps[r - 1][c] == 1 && !set.contains((r - 1) + "," + c)) {
                queue.offer(new int[]{r - 1, c, d + 1});
                set.add((r - 1) + "," + c);
            }
            if (r + 1 < maps.length && maps[r + 1][c] == 1 && !set.contains((r + 1) + "," + c)) {
                queue.offer(new int[]{r + 1, c, d + 1});
                set.add((r + 1) + "," + c);
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[][] maps = {{1, 0, 1, 1, 1}, {1, 0, 1, 0, 1}, {1, 0, 1, 1, 1}, {1, 1, 1, 0, 1}, {0, 0, 0, 0, 1}};
        int result = solution(maps);
        System.out.println(result);
    }
}
