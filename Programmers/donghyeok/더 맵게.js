// 처음 풀었던 풀이 방법인데 정확도는 통과했지만 효율성에서 통과하지 못했다
function solution(scoville, K) {
  var answer = 0;

  scoville.sort((a, b) => a - b); // 오름차순 정렬

  while (scoville[0] < K && scoville.length > 1) {
    answer++;

    const newScoville = scoville.shift() + scoville.shift() * 2;

    scoville.push(newScoville);
    scoville.sort((a, b) => a - b);
  }

  if (scoville[0] < K) {
    return -1;
  }

  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));

/**
 * 시간 복잡도
 * 1) 초기 정렬 : O(n log n)
 *
 * 2) while 루프 내부
 * - shift() 연산: O(n)
 * - sort() 연산: O(n log n)
 * - 최대 n번 반복
 *
 * 총 시간 복잡도: O(n^2 log n)
 *
 * 공간 복잡도
 * - O(n) (저장하기 위한 배열 공간)
 */

// 효율성 통과 풀이 방법 (이게 Lv.2 난이도라고?)
// MinHeap 클래스를 정의하는 코드입니다. 이 클래스는 최소 힙을 구현합니다.
class MinHeap {
  // constructor는 클래스의 생성자 메서드로, 힙을 저장할 빈 배열 heap을 초기화합니다.
  constructor() {
    this.heap = [];
  }

  // getParentIndex 메서드는 주어진 인덱스의 부모 노드 인덱스를 계산하여 반환합니다.
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
    // 부모 노드의 인덱스는 (index - 1) / 2의 내림 값입니다.
  }

  // getLeftChildIndex 메서드는 주어진 인덱스의 왼쪽 자식 노드 인덱스를 계산하여 반환합니다.
  getLeftChildIndex(index) {
    return 2 * index + 1;
    // 왼쪽 자식 노드의 인덱스는 2 * index + 1입니다.
  }

  // getRightChildIndex 메서드는 주어진 인덱스의 오른쪽 자식 노드 인덱스를 계산하여 반환합니다.
  getRightChildIndex(index) {
    return 2 * index + 2;
    // 오른쪽 자식 노드의 인덱스는 2 * index + 2입니다.
  }

  // swap 메서드는 힙의 두 노드의 값을 교환합니다.
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
    // 임시 변수 temp를 사용하여 index1의 값을 저장합니다.
    // 그리고 index1에 index2의 값을 할당한 후 index2에 temp의 값을 할당합니다.
  }

  // push 메서드는 새로운 요소를 힙에 삽입합니다.
  push(value) {
    this.heap.push(value);

    // currentIndex는 삽입된 요소의 인덱스이고, parentIndex는 부모 노드의 인덱스입니다.
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    // 삽입된 요소가 루트 노드가 아니고, 부모 노드의 값이 삽입된 요소의 값보다 크다면 교환합니다.
    // 교환 후에는 currentIndex를 parentIndex로 업데이트하고, 다시 parentIndex를 구합니다.
    while (
      currentIndex > 0 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
    // 이 과정을 반복하여 힙의 속성을 유지합니다.
  }

  // pop 메서드는 힙에서 가장 작은 요소(루트 노드)를 꺼내고 제거합니다.
  pop() {
    // 힙이 비어있다면 null을 반환합니다.
    if (this.isEmpty()) return null;

    // 힙에 요소가 하나밖에 없다면 해당 요소를 제거하고 반환합니다.
    if (this.heap.length === 1) return this.heap.pop();

    // 루트 노드의 값을 root 변수에 저장하고, 힙의 마지막 요소를 루트 노드로 이동시킵니다.
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    // currentIndex는 현재 노드의 인덱스이고, leftChildIndex와 rightChildIndex는 각각 왼쪽과 오른쪽 자식 노드의 인덱스입니다.
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);

    // 현재 노드의 값이 왼쪽 자식이나 오른쪽 자식보다 크다면 교환이 필요합니다.
    while (
      (leftChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[leftChildIndex]) ||
      (rightChildIndex < this.heap.length &&
        this.heap[currentIndex] > this.heap[rightChildIndex])
    ) {
      // 왼쪽 자식과 오른쪽 자식 중 더 작은 값을 가진 노드와 교환합니다.
      const smallerChildIndex =
        rightChildIndex >= this.heap.length ||
        this.heap[leftChildIndex] < this.heap[rightChildIndex]
          ? leftChildIndex
          : rightChildIndex;
      this.swap(currentIndex, smallerChildIndex);

      // 교환 후에는 currentIndex를 교환한 자식 노드의 인덱스로 업데이트하고, 다시 leftChildIndex와 rightChildIndex를 구합니다.
      currentIndex = smallerChildIndex;
      leftChildIndex = this.getLeftChildIndex(currentIndex);
      rightChildIndex = this.getRightChildIndex(currentIndex);

      // 이 과정을 반복하여 힙의 속성을 유지합니다.
    }

    // 마지막으로 제거된 루트 노드의 값 root를 반환합니다.
    return root;
  }

  // isEmpty 메서드는 힙이 비어있는지 확인합니다.
  isEmpty() {
    // 힙의 길이가 0이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
    return this.heap.length === 0;
  }
}

// solution 함수는 주어진 스코빌 지수 배열 scoville과 목표 스코빌 지수 K를 받습니다.
// 그리고 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 반환합니다.
function solution(scoville, K) {
  // 먼저 MinHeap 클래스의 인스턴스 minHeap을 생성합니다.
  const minHeap = new MinHeap();

  // for 반복문을 사용하여 scoville 배열의 모든 요소를 minHeap에 삽입합니다.
  for (let i = 0; i < scoville.length; i++) {
    minHeap.push(scoville[i]);
  }

  // count 변수를 초기화하여 섞은 횟수를 저장합니다.
  let count = 0;

  // while 반복문을 사용하여 minHeap의 루트 노드(가장 작은 스코빌 지수)가 K 미만인 동안 반복합니다.
  while (minHeap.heap[0] < K) {
    // 만약 minHeap에 요소가 1개밖에 없다?
    // 그러면 합할 개수 부족으로 모든 음식을 K 이상으로 만들 수 없으므로 -1을 반환합니다.
    if (minHeap.heap.length === 1) return -1;

    // minHeap에서 가장 작은 스코빌 지수 first와 두 번째로 작은 스코빌 지수 second를 꺼냅니다.
    const first = minHeap.pop();
    const second = minHeap.pop();

    // 섞은 음식의 스코빌 지수 mixed를 계산합니다.
    const mixed = first + second * 2;

    // mixed를 다시 minHeap에 삽입합니다.
    minHeap.push(mixed);

    // 섞은 횟수 count를 1 증가시킵니다.
    count++;
  }

  // while 반복문이 종료되면 모든 음식의 스코빌 지수가 K 이상이 된 것입니다.
  // 그러므로 섞은 횟수 count를 반환합니다.
  return count;
}

/**
 * 시간 복잡도
 * 1) 힙 생성: O(n)
 * 2) push/pop 연산: O(log n)
 * 3) while 루프: 최대 n-1번 반복
 * - 전체 시간 복잡도: O(n log n)
 *
 * 공간 복잡도
 * - O(n) (힙을 저장하기 위한 배열 공간)
 */

/**
 * !결론
 * 효율성 테스트를 통과하지 못한 이유
 * 1) 매 반복마다 수행되는 sort() 연산이 O(n log n)의 시간 복잡도를 가짐
 * 2) shift() 연산이 O(n)의 시간 복잡도를 가짐
 *
 * 두 번째 풀이는 MinHeap을 사용하여:
 * 1) 정렬된 상태를 유지하면서 삽입/삭제가 O(log n)으로 가능
 * 2) 전체적으로 더 효율적인 O(n log n)의 시간 복잡도를 달성
 *
 * 따라서 두 번째 풀이가 훨씬 더 효율적인 해결책입니다.
 */
