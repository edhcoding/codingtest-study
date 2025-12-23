// https://school.programmers.co.kr/learn/courses/30/lessons/12927

// function solution(n, works) {
//   // 모든 작업량의 합이 n 이하면 야근 지수는 0
//   const totalWork = works.reduce((sum, work) => sum + work, 0);
//   if (totalWork <= n) return 0;

//   const maxHeap = works.map((work) => -work); // 음수로 변환해 최대 힙으로 사용
//   maxHeap.sort((a, b) => a - b); // ex. [4, 3, 3] -> [-4, -3, -3], [2, 1, 2] -> [-2, -2, -1]

//   for (let i = 0; i < n; i++) {
//     const maxWork = maxHeap[0]; // 가장 큰 작업량
//     maxHeap[0] = maxWork + 1; // 작업량 1 감소
//     maxHeap.sort((a, b) => a - b); // 힙 재정렬
//   }

//   // 야근 지수 계산 (제곱의 합)
//   return maxHeap.reduce((sum, work) => sum + work * work, 0);
// }

// sort로 인한 정확도, 효율성 문제 해결
function solution(n, works) {
  var answer = 0;
  let len = works.length;
  works.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    if (works[0] === 0) break;
    works[0]--;

    let j = 0;
    while (j < works.length - 1 && works[j] < works[j + 1]) {
      [works[j], works[j + 1]] = [works[j + 1], works[j]];
      j++;
    }
  }

  answer = works.reduce((acc, cur) => (acc += cur * cur), 0);

  return answer;
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
