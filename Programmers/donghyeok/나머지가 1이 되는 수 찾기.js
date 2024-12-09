function solution(n) {
  var answer = 0;

  // for문으로 나머지가 1이 나올때까지 돌리고 나오면 그때의 i를 반환
  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  console.log("내가 푼 풀이 : ", answer);

  return answer;
}

/**
 * 내가 푼 문제
 * 시간 복잡도 : O(n)
 * - n번 반복문을 돌리기 때문에 시간 복잡도는 O(n)
 * 공간 복잡도 : O(1)
 * - 변수 i 하나만 사용하기 때문에 공간 복잡도는 O(1)
 */

solution(10);
solution(12);

// 더 좋은 풀이
function solution2(n, x = 1) {
  // while문에서 증감연산자를 사용하여 무한루프를 돌리고 나머지가 1이 나오면 그때의 x를 반환
  while (x++) {
    if (n % x === 1) {
      console.log("더 좋은 풀이 : ", x);
      return x;
    }
  }
}

/**
 * 내가 푼 문제
 * 시간 복잡도 : O(n)
 * - n번 반복문을 돌리기 때문에 시간 복잡도는 O(n)
 * 공간 복잡도 : O(1)
 * - 변수 x 하나만 사용하기 때문에 공간 복잡도는 O(1)
 */

solution2(10);
solution2(12);
