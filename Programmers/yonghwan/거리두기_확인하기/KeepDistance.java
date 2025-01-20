package 거리두기_확인하기;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

public class KeepDistance {
    //문제: 거리두기 확인하기
    //p일때, 다음 오른쪽, 왼쪽, 위, 아래 확인

    public static int[] solution(String[][] places) {
        int[] answer = new int[places.length];
        for (int i = 0; i < places.length; i++) {
            String[] p = places[i];
            boolean isAvailable = true;

            for (int r = 0; r < 5 && isAvailable; r++) {
                for (int c = 0; c < 5 && isAvailable; c++) {
                    if (p[r].charAt(c) == 'P') {
                        if (!isValid(r, c, p)) {
                            isAvailable = false;
                        }
                    }
                }
            }
            answer[i] = isAvailable ? 1 : 0;
        }
        return answer;
    }

    private static boolean isValid(int r, int c, String[] p) {
        int[] mr = {-1, 1, 0, 0};
        int[] mc = {0, 0, -1, 1};

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{r, c});

        while (!queue.isEmpty()) {
            int[] position = queue.poll();

            for (int i = 0; i < 4; i++) {
                int nr = position[0] + mr[i];
                int nc = position[1] + mc[i];

                if (nr < 0 || nc < 0 || nr >= 5 || nc >= 5 || (nr == r && nc == c)) {
                    continue;
                }

                int d = Math.abs(nr - r) + Math.abs(nc - c);

                if (p[nr].charAt(nc) == 'P' && d <= 2) {
                    return false;
                } else if (p[nr].charAt(nc) == 'O' && d < 2) {
                    queue.offer(new int[]{nr, nc});
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String[][] places = {{"POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"},
                {"POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"}, {"PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"},
                {"OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"}, {"PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"}};
        int[] result = solution(places);
        System.out.println(Arrays.toString(result));
    }


}
