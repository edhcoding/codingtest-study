// https://school.programmers.co.kr/learn/courses/30/lessons/12913

// 주의: 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 존재
function solution(land) {
  return Math.max(
    ...land.reduce((prevRow, currentRow) => {
      // prevRow: 이전 행까지 각 열에서 최대 합
      // currentRow: 현재 행의 값

      return currentRow.map((value, colIndex) => {
        // 현재 열(colIndex)이 아닌 이전 행의 열들 중 최댓값
        const maxFromPrev = Math.max(
          ...prevRow.filter((_, idx) => idx !== colIndex)
        );
        // 현재 값 + 이전 행의 최댓값
        return value + maxFromPrev;
      });
    })
  );
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
