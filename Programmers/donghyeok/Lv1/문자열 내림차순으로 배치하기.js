function solution(s) {
  // 문자열을 배열로 변환 후 내림차순 정렬, 다시 문자열로 합치기
  var answer = s
    .split("")
    .sort((a, b) => (b > a ? 1 : -1)) // 내림차순 정렬
    .join("");

  return answer;
}

console.log(solution("Zbcdefg")); // "gfedcbZ"
