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
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[currentIndex]) break;

      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let currentIndex = 0;

    while (true) {
      let smallest = currentIndex;
      const leftChild = 2 * currentIndex + 1;
      const rightChild = 2 * currentIndex + 2;

      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (smallest === currentIndex) break;

      [this.heap[currentIndex], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[currentIndex],
      ];
      currentIndex = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  // 모든 스코빌 지수를 힙에 넣기
  scoville.forEach((s) => minHeap.push(s));

  let mixCount = 0;

  // 가장 작은 스코빌 지수가 K보다 작고, 힙에 두 개 이상의 요소가 있는 동안
  while (minHeap.peek() < K && minHeap.size() > 1) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + second * 2;

    minHeap.push(newScoville);
    mixCount++;
  }

  return minHeap.peek() >= K ? mixCount : -1;
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
