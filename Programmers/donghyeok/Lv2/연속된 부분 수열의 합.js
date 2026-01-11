// https://school.programmers.co.kr/learn/courses/30/lessons/178870

function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let left = 0;
  let right = 0;
  let mem = sequence[left];

  // right 포인터가 배열 범위 내에 있는 동안만 반복
  while (right < sequence.length) {
    // 합이 k와 같고 구간 길이가 기존 구간 길이보다 짧을 경우 구간 갱신
    if (mem == k && right - left < answer[1] - answer[0]) {
      answer = [left, right];
    }

    // 합이 k보다 작을 경우 right 포인터 증가, 합에 추가
    if (mem < k) {
      right++;
      mem += sequence[right];
    } else {
      // 합이 k보다 크거나 같을 경우 left 포인터 증가, 합에서 제외
      mem -= sequence[left];
      left++;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]
