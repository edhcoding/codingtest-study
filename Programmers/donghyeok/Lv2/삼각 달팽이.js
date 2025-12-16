// https://school.programmers.co.kr/learn/courses/30/lessons/68645

// 문제: 밑변, 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후,
// 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return

function solution(n) {
  // 삼각형 배열 생성
  const triangle = Array.from({ length: n }, (_, i) =>
    Array.from({ length: i + 1 }, () => 0)
  );

  let num = 1;
  let row = 0,
    col = 0;
  let direction = 0; // 0 => 아래, 1 => 오른쪽, 2 => 위

  // 삼각형의 총 요소 수
  const total = (n * (n + 1)) / 2;

  while (num <= total) {
    triangle[row][col] = num++;

    if (direction === 0) {
      // 아래로
      if (row + 1 < n && triangle[row + 1][col] === 0) {
        row++;
      } else {
        direction = 1;
        col++;
      }
    } else if (direction === 1) {
      // 오른쪽으로
      if (col + 1 < triangle[row].length && triangle[row][col + 1] === 0) {
        col++;
      } else {
        direction = 2;
        row--;
        col--;
      }
    } else {
      // 위로
      if (row - 1 >= 0 && col - 1 >= 0 && triangle[row - 1][col - 1] === 0) {
        row--;
        col--;
      } else {
        direction = 0;
        row++;
      }
    }
  }

  // flat() 메서드로 2차원 배열을 1차원으로 변환
  return triangle.flat();
}

console.log(solution(4)); // [1,2,9,3,10,8,4,5,6,7]
console.log(solution(5)); // [1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
console.log(solution(6)); // [1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]
