// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  times.sort((a, b) => a - b);
  let right = n * times[0];
  let left = 0;
  let mid;
  let person = 0;

  while (right >= left) {
    mid = Math.floor((right + left) / 2);
    person = 0;
    for (t of times) {
      person += Math.floor(mid / t);
    }
    if (person >= n) {
      // 시간을 줄여야하는 경우
      right = mid - 1;
    } else if (person < n) {
      left = mid + 1;
    }
  }

  return left;
}

// 다른 사람 풀이
function solution(n, times) {
  var answer = 0;

  let left = 0;
  let right = Math.max(...times) * n;
  let mid = Math.floor((right + left) / 2);

  while (right !== left) {
    const count = times.reduce((acc, t) => acc + Math.floor(mid / t), 0);

    if (count >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((right + left) / 2);
  }

  return mid;
}

console.log(solution(6, [7, 10])); // 28
