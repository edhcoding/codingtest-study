//package stemina;
//
//import java.util.Stack;
//
//// 완전 탐색
//// O(!N)
//public class Stemina {
//
//    int maxCount = 0;
//
//    public static int solution(int k, int[][] dungeons) {
//        int maxCount = 0;
//
//        // 스택: 현재 피로도, 탐험 횟수, 방문 상태
//        Stack<State> stack = new Stack<>();
//        stack.push(new State(k, 0, new boolean[dungeons.length]));
//
//        while (!stack.isEmpty()) {
//            State current = stack.pop();
//            int currentK = current.k;
//            int count = current.count;
//            boolean[] visited = current.visited;
//
//            // 최대 탐험 횟수 갱신
//            maxCount = Math.max(maxCount, count);
//
//            // 모든 던전 탐험 시도
//            for (int i = 0; i < dungeons.length; i++) {
//                if (!visited[i] && currentK >= dungeons[i][0]) {
//                    // 새로운 상태 생성
//                    boolean[] newVisited = visited.clone();
//                    newVisited[i] = true;
//
//                    stack.push(new State(currentK - dungeons[i][1], count + 1, newVisited));
//                }
//            }
//        }
//
//        return maxCount;
//    }
//
//    static class State {
//        int k; // 현재 피로도
//        int count; // 탐험 횟수
//        boolean[] visited; // 방문 여부
//
//        State(int k, int count, boolean[] visited) {
//            this.k = k;
//            this.count = count;
//            this.visited = visited;
//        }
//    }
//
//    public static void main(String[] args) {
//        int[][] dungeons = {{80, 20}, {50, 40}, {30, 10}};
//        int result = solution(80, dungeons);
//        System.out.println(result);
//    }
//}
