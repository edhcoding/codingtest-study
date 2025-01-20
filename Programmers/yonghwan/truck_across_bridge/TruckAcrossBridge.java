package truck_across_bridge;

import java.util.LinkedList;
import java.util.Queue;

public class TruckAcrossBridge {
    public static int solution(int bridge_length, int weight, int[] truck_weights) {
        Queue<Integer> bridge = new LinkedList<>();
        int currentWeight = 0;
        int time = 0;
        int nextTruck = 0;

        // 초기화: 다리를 0으로 채우기
        for (int i = 0; i < bridge_length; i++) {
            bridge.offer(0);
        }

        while (!bridge.isEmpty()) {
            time++;
            // 다리를 건넌 트럭 제거
            currentWeight -= bridge.poll();

            // 다음 트럭이 대기 중이고, 다리에 올라갈 수 있으면 추가
            if (nextTruck < truck_weights.length) {
                if (currentWeight + truck_weights[nextTruck] <= weight) {
                    bridge.offer(truck_weights[nextTruck]);
                    currentWeight += truck_weights[nextTruck];
                    nextTruck++;
                } else {
                    // 올라갈 수 없으면 0 추가 (빈 자리 유지)
                    bridge.offer(0);
                }
            }
        }

        return time;
    }

    public static void main(String[] args) {
        int bridge_length = 100;
        int weight = 100;
        int[] truck_weight = {10, 10, 10, 10, 10, 10, 10, 10, 10, 10};

        int result = solution(bridge_length, weight, truck_weight);
        System.out.println(result);
    }
}
