// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];

    const sliced = array.slice(start - 1, end);

    sliced.sort((a, b) => a - b);

    answer.push(sliced[k - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
