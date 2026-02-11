// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 문제 : 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 내 풀이
function solution(n, lost, reserve) {
  // set 객체 사용해서 lost에서 reserve와 중복된 학생 제거
  const lostSet = new Set(lost.filter((x) => !reserve.includes(x)));
  // reserve에서 lost와 중복된 학생 제거 후 정렬
  const reserveArr = reserve
    .filter((x) => !lost.includes(x))
    .sort((a, b) => a - b);

  // 여벌 학생이 앞순서부터 빌려주기
  for (const r of reserveArr) {
    if (lostSet.has(r - 1)) lostSet.delete(r - 1);
    else if (lostSet.has(r + 1)) lostSet.delete(r + 1);
  }

  return n - lostSet.size; // 체육 수업 들을 수 있는 학생 최댓값
}

// 다른 사람 풀이
function solution2(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
