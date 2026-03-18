// https://school.programmers.co.kr/learn/courses/30/lessons/43163
// 문제
// begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾자 -> BFS 사용 -> queue 사용
// 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return
// 조건
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.

function solution(begin, target, words) {
  if (!words.includes(target)) return 0; // target -> words에 포함x 0
  const visited = new Array(words.length).fill(false);
  const queue = [[begin, 0]];

  // 한 글자만 다른지 확인 함수
  // a: 현재 단어, b: 비교할 단어
  function diffOne(a, b) {
    let diff = 0; // 다른 글자 수
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  }

  while (queue.length > 0) {
    const [cur, step] = queue.shift(); // cur: 현재 단어, step: 변환 횟수
    if (cur === target) return step;

    for (let i = 0; i < words.length; i++) {
      // 방문하지 않았고, 한 글자만 다른 단어라면 큐에 추가
      if (!visited[i] && diffOne(cur, words[i])) {
        visited[i] = true;
        queue.push([words[i], step + 1]);
      }
    }
  }

  return 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
