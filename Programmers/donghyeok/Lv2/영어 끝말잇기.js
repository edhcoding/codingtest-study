/**
 * 영어 끝말잇기 - https://school.programmers.co.kr/learn/courses/30/lessons/12981
 *
 * [문제 설명]
 * 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다.
 * 규칙은 다음과 같습니다.
 * ```
 * 1. 끝말잇기는 첫 번째 사람부터 시작합니다.
 * 2. 마지막 사람이 말한 단어는 첫 번째 사람이 말한 단어의 마지막 문자로 시작해야 합니다.
 * 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 새로운 단어를 말합니다.
 * 4. 이전에 등장했던 단어는 사용할 수 없습니다.
 * 5. 한 글자인 단어는 사용할 수 없습니다.
 * ```
 * 다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.
 * tank → kick → know → wheel → land → dream → mother → robot → tank
 * 위 끝말잇기는 다음과 같이 진행됩니다.
 * 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
 * 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
 * 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
 * 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
 * (계속 진행)
 *
 * 끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.
 * 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 가장 먼저 탈락하는 사람의 번호와
 * 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.
 *
 * [제한 조건]
 * 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
 * words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
 * 단어는 알파벳 소문자로만 이루어져 있으며, 길이는 2 이상 50 이하입니다.
 * 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
 * 끝말잇기에 사용되는 단어의 뜻(의미)은 신경 쓰지 않으셔도 됩니다.
 * 정답은 [번호, 차례] 형태로 return 해주세요.
 * 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
 */

// n: 사람수
// words: 단어 배열
// 결과값: [번호, 차례]
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];

    // 1. 이미 사용된 단어인지 체크
    if (words.indexOf(currentWord) !== i) [(i % n) + 1, Math.floor(i / n) + 1];

    // 2. 끝말잇기 규칙이 맞는지 체크
    const prevWordLast = words[i - 1].slice(-1);
    if (prevWordLast !== currentWord[0]) [(i % n) + 1, Math.floor(i / n) + 1];
  }

  return [0, 0];
}

/**
 * 시간 복잡도 - O(n^2)
 * - 반복문이 두 번 돌기 때문에 O(n^2) (for, indexOf 둘 다 O(n))
 * - slice는 O(1)
 * 공간 복잡도 - O(1)
 * - 결과 배열을 저장하는 변수 하나만 사용하므로 O(1)
 */

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]); // [3,3]
// solution(5, [
//   "hello",
//   "observe",
//   "effect",
//   "take",
//   "either",
//   "recognize",
//   "encourage",
//   "ensure",
//   "establish",
//   "hang",
//   "gather",
//   "refer",
//   "reference",
//   "estimate",
//   "executive",
// ]);
// [0,0]
// solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
// [1,3]
