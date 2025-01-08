/**
 * 다리를 지나는 트럭 - https://school.programmers.co.kr/learn/courses/30/lessons/42583
 *
 * [문제 설명]
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다.
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다.
 * 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 *
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 *
 * 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
 * 0	[]	[]	[7,4,5,6]
 * 1~2	[]	[7]	[4,5,6]
 * 3	[7]	[4]	[5,6]
 * 4	[7]	[4,5]	[6]
 * 5	[7,4]	[5]	[6]
 * 6~7	[7,4,5]	[6]	[]
 * 8	[7,4,5,6]	[]	[]
 *
 * 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 *
 * solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 * 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 *
 * [제한 조건]
 * - bridge_length는 1 이상 10,000 이하입니다.
 * - weight는 1 이상 10,000 이하입니다.
 * - truck_weights의 길이는 1 이상 10,000 이하입니다.
 * - 모든 트럭의 무게는 1 이상 weight 이하입니다.
 */

// bridge_length: 다리 길이 (최대 올라갈 수 있는 트럭 수), weight: 다리 무게 (최대 트럭의 무게가 다리 무게보다 이하), truck_weights: 트럭 무게
function solution(bridge_length, weight, truck_weights) {
  let answer = 0; // answer = time (시간)
  let currentWeight = 0; // 현재 다리위의 트럭 무게
  const bridge = Array(bridge_length).fill(0); // 다리 길이만큼 0으로 초기화 (0kg) - 이미 건넌 트럭

  while (truck_weights.length > 0 || currentWeight > 0) {
    // truck_weights.length = 0 이라면 이미 트럭이 다리를 건넜다는 뜻
    // currentWeight = 0 이라면 다리 위에 트럭이 없다는 뜻 (다리 위에 트럭무게가 0kg)
    answer++;

    currentWeight -= bridge.shift(); // 다리 맨 앞의 트럭이 나감 [0, 0] => [0]
    // 새 트럭이 들어갈 수 있는지 확인
    if (currentWeight + truck_weights[0] <= weight) {
      const newTruck = truck_weights.shift();
      bridge.push(newTruck); // 맨 뒤에 새 트럭 추가 [0] => [0, 7]
      currentWeight += newTruck; // 현재 다리위의 트럭 무게 추가 0 + 7 = 7
    } else {
      bridge.push(0); // 다리 무게를 초과했으므로 한 번 더 대기하기 위해 0을 추가 [0, 7] => [7, 0]
    }
  }

  return answer;
}

/**
 * 시간 복잡도
 * O(N L)
 * - N: 트럭의 개수 (truck_weights.length)
 * - L: 다리의 길이 (bridge_length)
 *
 * 공간 복잡도
 * O(L)
 * - L: 다리의 길이 (bridge_length)
 * - bridge 배열이 다리 길이만큼의 고정된 크기를 가짐
 */

solution(2, 10, [7, 4, 5, 6]); // 8
// solution(100, 100, [10]); // 101
// solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]); // 110
