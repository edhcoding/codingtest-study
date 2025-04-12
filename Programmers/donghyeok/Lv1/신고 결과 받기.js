// https://school.programmers.co.kr/learn/courses/30/lessons/92334

// id_list: 이용자의 id가 담긴 문자열 배열
// report: 각 이용자가 신고한 이용자의 id 정보가 담긴 문자열 배열
// k: 정지 기준이 되는 신고 횟수
function solution(id_list, report, k) {
  // 중복 신고 제거 Set
  const uniqueReport = [...new Set(report)];

  // 각 유저별 신고 당한 횟수 저장할 Map
  const reportedCount = new Map();
  // 각 유저가 신고한 사람들 저장할 Map
  const reporterToReported = new Map();

  id_list.forEach((id) => {
    reportedCount.set(id, 0);
    reporterToReported.set(id, new Set());
  });

  uniqueReport.forEach((r) => {
    const [reporter, reported] = r.split(" ");
    reportedCount.set(reported, reportedCount.get(reported) + 1);
    reporterToReported.get(reporter).add(reported);
  });

  const bannedUsers = id_list.filter((id) => reportedCount.get(id) >= k);

  const answer = id_list.map((id) => {
    const reportedUsers = reporterToReported.get(id);
    return bannedUsers.filter((banned) => reportedUsers.has(banned)).length;
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2, 1, 1, 0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0, 0]
