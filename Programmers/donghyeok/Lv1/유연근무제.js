// https://school.programmers.co.kr/learn/courses/30/lessons/388351

// schedules: 출근 희망 시각, timelogs: 일주일 동안 출근한 시각, startday: 이벤트 시작 요일 (1부터 월요일)
// 모든 시각 = 시 * 100 + 분
function solution(schedules, timelogs, startday) {
  let answer = 0;

  /**
   * 주의! - 출근 제한 시각 계산
   * ex)
   * 730(7시 30분)의 경우:
   * 30 < 50 이므로 730 + 10 = 740(7시 40분)까지 허용
   * 855(8시 55분)의 경우:
   * 55 >= 50 이므로 855 + 50 = 905(9시 05분)까지 허용
   */
  const dream = schedules.map((a) => (a % 100 < 50 ? a + 10 : a + 50));

  for (let i = 0; i < schedules.length; i++) {
    const timelog = timelogs[i];
    let validDays = 0;

    for (let j = 0; j < 7; j++) {
      const day = ((startday + j - 1 + 7) % 7) + 1;
      if (day === 6 || day === 7) continue;

      const time = timelog[j];
      if (time > dream[i]) continue;

      validDays++;
    }

    if (validDays === 5) answer++;
  }

  return answer;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5
  )
); // 3

console.log(
  solution(
    [730, 855, 700, 720],
    [
      [710, 700, 650, 735, 700, 931, 912],
      [908, 901, 805, 815, 800, 831, 835],
      [705, 701, 702, 705, 710, 710, 711],
      [707, 731, 859, 913, 934, 931, 905],
    ],
    1
  )
); // 2
