// https://school.programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
  // 플로이드 - 와샬 알고리즘

  // 모든 선수의 승패를 기록하는 배열
  // a[i][j] : i 선수와 j 선수의 실력차
  // null : 알 수 없음

  const a = [];
  for (let i = 0; i < n; i++) {
    a[i] = [];
    for (let j = 0; j < n; j++) {
      a[i][j] = null;
    }
  }

  // results의 내용 반영
  // a[i][j] === true : i 선수가 j 선수보다 강함
  results.forEach((v) => {
    a[v[0] - 1][v[1] - 1] = true;
  });

  //console.log(1, JSON.parse(JSON.stringify(a)));

  // 추정 시작
  // 0 ~ n-1인 k 선수에 대해,
  // i가 k보다 강하고 k가 j보다 강하다면
  // i가 j보다 강함

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        a[i][j] = a[i][j] || (a[i][k] && a[k][j]);
      }
    }
  }

  //console.log(2, JSON.parse(JSON.stringify(a)));

  let answer = n;

  // 순위를 가늠할 수 없는 선수의 수를 줄여나간다
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }

      // i와 j선수의 차이를 알 수 없다면 감소
      if (a[i][j] === null && a[j][i] === null) {
        answer--;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ]),
); // 2
