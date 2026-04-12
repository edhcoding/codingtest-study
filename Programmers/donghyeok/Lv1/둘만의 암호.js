// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  const usableLetters = [];
  for (let code = "a".charCodeAt(0); code <= "z".charCodeAt(0); code++) {
    const ch = String.fromCharCode(code);
    if (!skip.includes(ch)) usableLetters.push(ch);
  }
  let answer = "";
  for (const ch of s) {
    const currentIndex = usableLetters.indexOf(ch);
    if (currentIndex === -1) continue;
    const nextIndex = (currentIndex + index) % usableLetters.length;
    answer += usableLetters[nextIndex];
  }
  return answer;
}

// 신기한 풀이
function solution(s, skip, index) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                    "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));
  return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}

// 다른 사람 풀이
function getNextChar(curChar, interval, skipSet){
  const nextChars = []
  let n = curChar.charCodeAt()
  while (nextChars.length < interval){
      n = n === 122 ? 97 : n + 1
      if (!(skipSet.has(String.fromCharCode(n)))){
          nextChars.push(String.fromCharCode(n))
      }
  }
  return nextChars[interval - 1]
}

function solution(s, skip, index) {
  return [...s].map(char => getNextChar(char, index, new Set([...skip]))).join("")
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
