// https://school.programmers.co.kr/learn/courses/30/lessons/12950

// 문제: 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환
// 문제해결: map을 2번 중첩해서 2차원 배열의 같은 위치 요소끼리 더함
function solution(arr1, arr2) {
  // 행렬의 같은 위치 요소끼리 더하기
  var answer = arr1.map((row, i) => row.map((val, j) => val + arr2[i][j]));

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4, 6], [7, 9]]

console.log(solution([[1], [2]], [[3], [4]])); // [[4], [6]]
