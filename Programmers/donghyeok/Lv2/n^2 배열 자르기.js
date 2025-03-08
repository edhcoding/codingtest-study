/**
 * n^2 배열 자르기 - https://school.programmers.co.kr/learn/courses/30/lessons/87390
 *
 * [문제 설명]
 * 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.
 *
 * 1. n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
 * 2. i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
 * - 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
 * 3. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
 * 4. 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
 * 정수 n, left, right가 매개변수로 주어집니다.
 * 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 사항]
 * 1 ≤ n ≤ 107
 * 0 ≤ left ≤ right < n2
 * right - left < 105
 */

function solution(n, left, right) {
  const array = new Array(n).fill(0).map(() => new Array(n).fill(0)); // n X n 배열 생성

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        array[i][j] = i + 1; // i행 i열까지는 i+1로 채움 (대각선과 그 아래)
      } else {
        array[i][j] = j + 1; // i행 i열 이후는 열 번호 + 1로 채움 (대각선과 그 위)
      }
    }
  }

  return array.flat().slice(left, right + 1);
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]

// 위 방법이 너무 느리기에 더 효율적인 코드 작성

function solution2(n, left, right) {
  const answer = [];

  // left부터 right까지만 순회하면서 값을 계산
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n); // 현재 위치의 행 번호
    const col = i % n; // 현재 위치의 열 번호

    // 행과 열 중 큰 값 + 1이 해당 위치의 값
    answer.push(Math.max(row, col) + 1);
  }

  return answer;
}

console.log(solution2(3, 2, 5)); // [3,2,2,3]
console.log(solution2(4, 7, 14)); // [4,3,3,3,4,4,4,4]

// 1 2 3    // 인덱스: 0 1 2
// 2 2 3    // 인덱스: 3 4 5
// 3 3 3    // 인덱스: 6 7 8

// 1 2 3 4    // 인덱스: 0 1 2 3
// 2 2 3 4    // 인덱스: 4 5 6 7
// 3 3 3 4    // 인덱스: 8 9 10 11
// 4 4 4 4    // 인덱스: 12 13 14 15
