// https://school.programmers.co.kr/learn/courses/30/lessons/150370

// today: 오늘 날짜, terms: 약관의 유효기간 -> [약관종류, 유효기간], privacies: 수집된 개인정보 [날짜, 약관 종류]
function solution(today, terms, privacies) {
  const getDay = (date) => {
    const [year, month, day] = date.split(".").map(Number);

    return year * 12 * 28 + month * 28 + day;
  };

  const termsObj = terms.reduce((acc, cur) => {
    const [type, month] = cur.split(" ");
    acc[type] = Number(month);
    return acc;
  }, {});

  const answer = privacies
    .map((privacy, index) => {
      const [date, type] = privacy.split(" ");
      return getDay(date) + termsObj[type] * 28 <= getDay(today)
        ? index + 1
        : null;
    })
    .filter((index) => index !== null);

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]
