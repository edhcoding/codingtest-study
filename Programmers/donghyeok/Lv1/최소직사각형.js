// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let i = 0; i < sizes.length; i++) {
    // 배열 분리
    const w = sizes[i][0];
    const h = sizes[i][1];

    // 큰 값과 작은 값 구하기
    const big = Math.max(w, h);
    const small = Math.min(w, h);

    // 가로 큰 값중 최댓값, 세로 작은 값중 최댓값 갱신
    maxW = Math.max(maxW, big);
    maxH = Math.max(maxH, small);
  }

  return maxW * maxH;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
