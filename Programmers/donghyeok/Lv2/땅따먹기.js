// https://school.programmers.co.kr/learn/courses/30/lessons/12913

// 주의: 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 존재
function solution(land) {
  return Math.max(
    ...land.reduce((prevRow, currentRow) => {
      return currentRow.map((value, colIndex) => {
        const maxFromPrev = Math.max(
          ...prevRow.filter((_, idx) => idx !== colIndex) // 같은 열 제외
        );
        return value + maxFromPrev;
      });
    })
  );
}
// ++)
// reduce 초기값 안주면 currenRow의 첫번째 값이 prevRow로 들어가서 초기값이됨

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
