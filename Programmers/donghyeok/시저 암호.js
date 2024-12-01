// 문자열 s, 거리 n
// 'A' = 65, 'Z' = 90, 'a' = 97, 'z' = 122
function solution(s, n) {
  return s
    .split("") // 문자열을 배열로 변환하고 각 문자를 변환한 후 다시 문자열로 합침
    .map((char) => {
      // 공백은 아무리 밀어도 공백입니다.라는 제한조건이 있으므로 공백인 경우 그대로 반환
      if (char === " ") return " ";

      // 문자의 ASCII 코드 얻기
      const code = char.charCodeAt(0);

      // 대문자인 경우 (65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
        // 26으로 나눈 이유는 Z 다음에 A로 돌아가기 위해서 임
      }

      // 소문자인 경우 (97-122)
      return String.fromCharCode(((code - 97 + n) % 26) + 97);
    })
    .join("");
}
