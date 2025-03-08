/**
 * 행렬의 곱셈 - https://school.programmers.co.kr/learn/courses/30/lessons/12949
 *
 * [문제 설명]
 * 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.
 *
 * [제한 사항]
 * 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
 * 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
 * 곱할 수 있는 배열만 주어집니다.
 */

// arr1의 가로 행과 arr2의 세로 행의 곱셈!!
function solution(arr1, arr2) {
  const answer = []; // 결과 2차원 배열

  // i: 결과 행렬의 행 선택 (arr1의 행)
  for (let i = 0; i < arr1.length; i++) {
    const row = []; // 결과에 추가할 1차원 배열

    // j: 결과 행렬의 열 선택 (arr2의 열)
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      // k: 각 원소끼리의 곱셈과 덧셈 (이 부분이 필수!)
      for (let k = 0; k < arr1[0].length; k++) sum += arr1[i][k] * arr2[k][j];
      row.push(sum);
    }
    answer.push(row);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
