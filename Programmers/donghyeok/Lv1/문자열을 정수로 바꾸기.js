/**
 * 시간 복잡도 : O(n)
 * - 문자열을 한 번만 순회하기 때문에
 * 공간 복잡도 : O(1)
 * - 변수 하나만 사용하기 때문에
 */

function solution(s) {
  var answer = Number(s);

  console.log("내가 푼 풀이 : ", answer);

  return answer;
}

solution("1234");
solution("-1234");

function solution2(s) {
  var answer = +s;

  console.log("더 좋은 풀이1 : ", answer);

  return answer;
}

solution2("1234");
solution2("-1234");

function solution3(s) {
  // parseInt() 함수는 문자열을 정수로 변환하는 함수
  // 두번째 인자는 진수를 나타내는 숫자
  // 10진수로 변환하기 때문에 10을 넣어줌
  var answer = parseInt(s, 10);

  console.log("더 좋은 풀이2 : ", answer);

  return answer;
}

solution3("1234");
solution3("-1234");

function solution4(s) {
  // parseFloat() 함수는 문자열을 실수로 변환하는 함수
  var answer = parseFloat(s);

  console.log("더 좋은 풀이3 : ", answer);

  return answer;
}

solution4("1234");
solution4("-1234");

// 1. Number() 객체 사용
// Number(): 가장 명시적인 방법
// let num1 = Number("1234");

// 2. 단항 연산자(+) 사용
// + 연산자: 가장 간단하고 짧은 방법
// let num2 = +"1234";

// 3. parseInt() 함수 사용
// parseInt(): 진수 지정 가능, 정수만 변환
// let num3 = parseInt("1234", 10);

// 4. parseFloat() 함수 사용
// parseFloat(): 소수점이 있는 숫자도 변환 가능
// let num4 = parseFloat("1234");
