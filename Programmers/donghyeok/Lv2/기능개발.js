// 기능개발 - https://school.programmers.co.kr/learn/courses/30/lessons/42586

// progresses: 각 기능의 진도율
// speeds: 각 기능의 개발 속도
function solution(progresses, speeds) {
  var answer = [];
  // 각 기능별 완료까지 걸리는 시간 배열
  let days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  ); // [7, 3, 9]

  let count = 1; // 배포되는 기능 개수
  let maxDay = days[0]; // 기준일

  for (let i = 1; i < days.length; i++) {
    // 기준일보다 다음 기능이 더 빨리 완료되면 배포되는 기능 개수 증가 (같은 날 배포)
    if (maxDay >= days[i]) {
      count++;
    } else {
      // 기준일보다 다음 기능이 더 오래 걸리면 배포 불가능
      answer.push(count);
      count = 1; // 새로운 배포 그룹 시작
      maxDay = days[i]; // 새로운 기준일은 현재 기능의 완료일
    }
  }

  // 마지막 기능 배포
  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
