// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  // 숫자 객체
  const words = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let result = s;
  // Object.entries() - key value 쌍으로 배열로 만들어서 반환하는 메서드
  // ex. { a: 1, b: 2 } -> [["a", 1], ["b", 2]]
  for (const [word, num] of Object.entries(words)) {
    // replaceAll() - 문자열을 찾아서 모두 바꿔주는 메서드
    // ex. "hello world".replaceAll("l", "L") -> "heLLo worLd"
    result = result.replaceAll(word, num); // word -> num
  }

  // parseInt() - 문자열을 숫자로 변환하는 함수
  // ex. parseInt("123") -> 123
  return parseInt(result, 10);
}

// 다른 사람 풀이
function solution2(s) {
  // 배열사용해서 나중에 배열 인덱스를 사용해 join() 해주면 됨
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    // split() - 문자열을 찾아서 배열로 만들어주는 메서드
    // ex. "hello world".split("l") -> ["he", "", "o world"]
    const arr = answer.split(numbers[i]);
    // join() - 배열을 문자열로 합쳐주는데 인자로 넣은 값을 구분자로 사용해서 합쳐줌
    // ex. ["he", "", "o world"].join("l") -> "hello world"
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution2("one4seveneight")); // 1478
console.log(solution2("23four5six7")); // 234567
console.log(solution2("2three45sixseven")); // 234567
console.log(solution2("123")); // 123
