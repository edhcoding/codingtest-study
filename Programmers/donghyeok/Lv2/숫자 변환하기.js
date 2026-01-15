// https://school.programmers.co.kr/learn/courses/30/lessons/154538

// 문제 풀이: 방문 여부를 확인하는 visit을 객체로 처리하고, y에서 나눌 시 나누어 떨어지지 않는 케이스는 제외하도록 처리
function solution(x, y, n) {
  const calc = (a, num) => {
    switch (num) {
      case 0:
        return a - n;
      case 1:
        if (a % 2 === 0) {
          return a / 2;
        } else {
          return 0;
        }
      case 2:
        if (a % 3 === 0) {
          return a / 3;
        } else {
          return 0;
        }
    }
  };

  const bfs = () => {
    let queue = [[y, 0]];
    let visit = {};
    visit[y] = 1;

    while (queue.length) {
      let [cur, count] = queue.shift();

      if (cur === x) return count;

      for (let i = 0; i < 3; ++i) {
        let next = calc(cur, i);
        if (next >= x && !visit[next]) {
          visit[next] = 1;
          queue.push([next, count + 1]);
        }
      }
    }

    return -1;
  };

  return bfs();
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 30, 30)); // 1
console.log(solution(2, 5, 4)); // -1
