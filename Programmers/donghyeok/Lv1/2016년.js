// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  var answer = "";
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let months = {
    29: [2],
    30: [4, 6, 9, 11],
    31: [1, 3, 5, 7, 8, 10, 12],
  };
  let sum = 0;
  for (let key in months) {
    months[key].forEach((el) => {
      if (el < a) {
        sum = sum + Number(key);
      }
    });
  }
  let checkedNum = (sum + b) % 7;
  answer = days[checkedNum];
  return answer;
}

// 다른 사람 풀이
function solution2(a, b) {
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let days = b;
  for (let i = 0; i < a - 1; i++) days += monthDay[i];

  return weekDay[days % 7];
}

function solution3(a, b) {
  var answer = "";

  const now = new Date(`2016-${a}-${b}`);

  answer = now.toString().split(" ")[0].toUpperCase();

  return answer;
}

console.log(solution(5, 24)); // "TUE"
