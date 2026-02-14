// https://school.programmers.co.kr/learn/courses/30/lessons/181940

function solution(my_string, k) {
  return my_string.repeat(k);
}

console.log(solution("string", 3)); // "stringstringstring"
console.log(solution("love", 10)); // "lovelovelovelovelovelovelovelovelovelove"
