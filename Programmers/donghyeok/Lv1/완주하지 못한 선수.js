// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 문제 : 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 내 풀이 - 정렬 후 비교하는 방식
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  // 같은 인덱스끼리 비교해서 다른 경우 바로 반환
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }

  return participant[participant.length - 1];
}

// 다른 사람 풀이 - Map으로 카운트하는 방식
function solution2(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    const a = participant[i];
    const b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"

console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"],
  ),
); // "vinko"

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]),
); // "mislav"
