// AB-> 1 ->BC
// z->1->a
// 대소문자 구분으로 아스키코드
// A = 65, Z = 90, a= 97, z = 122
// https://velog.io/@ovzip/아스키코드-자바스크립트에서-아스키코드-활용하기
// 각 문자들을 따로 밀어서 합치기

// 문자열 s 거리 n
function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return char;
      let code = char.charCodeAt();
      if (code <= 122 && code >= 97) {
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
      if (code <= 97 && code >= 65) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      }
    })
    .join("");
}
// 아는 메서드가 제한적이라 해당 방법으로 풀었다.
// 인덱스를 이용해서 푸는 방법도 해보면 좋을 듯

// function solution(s, n) {

//     return Array.from(
//       s.split("").map((char) => {
//         if (char === " ") return char;
//         let code = char.charCodeAt() + n;
//         if ((code > 122) | (code > 90 && code < 97)) {
//           code -= 26;
//         }
//         return String.fromCharCode(code);
//       })
//     ).join("");
//   }
//=> 이럴경우 소문자에서 대문자로 변경되는 경우가 생긴다. => 따로 적용해야함
