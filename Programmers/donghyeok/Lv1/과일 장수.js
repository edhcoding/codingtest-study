// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i = i + m) {
    const min = score[i + m - 1];
    if (min) answer += min * m;
  }
  return answer;
}

// 다른 사람 풀이
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}

function solution(k, m, score) {
  var answer = 0;
  // 한 상자에 넣을 수 있는 사과 갯수로 전체 사과 갯수를 나눠 만들 수 있는 박스 수를 구한다.
  const boxCount = Math.floor(score.length / m);

  // 버릴 사과 갯수를 구한다.
  const inavailableApple = score.length % m;
  // 점수를 오름차순으로 정리해서 앞에서부터 불필요한 사과 갯수만큼 제거한다.
  const apples = [...score].sort();
  apples.splice(0, inavailableApple);

  // 트럭에 뒤에서부터 count만큼씩 잘라서 박스에 넣은다음 트럭에 싣는다.
  const packing = (array, box, count) => {
    const truck = [];
    for (let i = 0; i < box; i++) {
      const miniBox = array.splice(array.length - count, count);
      truck.push(miniBox);
    }
    return truck;

    /*
      0 [4, 4, 4] [[4, 4, 4]]
      1 [4, 4, 4] [[4, 4, 4], [4, 4, 4]]
      2 [2, 2, 2] [[4, 4, 4], [4, 4, 4], [2, 2, 2]]
      3??

      0 [2, 2, 3, 3], [[2, 2, 3, 3]]
      1 []
      2
      3
      4??
       */
  };

  const truck = packing(apples, boxCount, m);
  // 완성!
  const result = truck.forEach((box) => {
    const findMinScore = Math.min(...box) ?? 0;
    answer += findMinScore * m * 1;
  });

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
