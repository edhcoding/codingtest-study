// https://school.programmers.co.kr/learn/courses/30/lessons/42627

// 우선순위 큐를 사용하여 문제를 해결
// 우선순위 큐 : 우선순위가 높은 순서대로 처리하는 큐
// 큐 : 선입선출(FIFO) 자료구조
function solution(jobs) {
  let total = jobs.length;
  let answer = 0;
  let tick = 0;
  let queue = [];

  while (true) {
    // 1. (jobs가 있을 때) tick보다 같거나 작은 작업 모두 추출 후 queue에 삽입
    let index = 0;
    while (true) {
      if (index >= jobs.length) break;
      if (jobs[index][0] <= tick) {
        // 요청이 들어온 작업
        queue.push(jobs.splice(index, 1)[0]);
      } else {
        // 요청 전 작업
        index++;
      }
    }

    // 3. queue와 jobs가 0이면 끝
    if (queue.length === 0) {
      if (jobs.length === 0) {
        break;
      } else {
        tick++;
      }
    } else {
      // 2. (queue가 있을 때) queue에서 작업량이 가장 작은 작업 수행
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[minIndex][1] > queue[i][1]) minIndex = i;
      }

      // 2.1 수행한 시간 만큼 tick 증가
      tick += queue[minIndex][1];

      // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간
      answer += tick - queue[minIndex][0];

      // 2.3 queue에서 해당 job 삭제
      queue.splice(minIndex, 1);
    }
  }

  return Math.floor(answer / total);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [3, 5],
  ])
); // 8
