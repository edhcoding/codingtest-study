// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  let answer = [];

  // ICN 시작, 다음 공항까지 DFS 탐색
  function DFS(tickets, start, plan) {
    if (tickets.length === 0) {
      answer.push(plan);
      return;
    }

    // 항공권의 출발지가 현재 공항과 같다면 항공권을 사용하여 다음 공항으로 이동
    tickets.map((contry, i) => {
      if (contry[0] === start) {
        let copiedTicket = [...tickets];
        copiedTicket.splice(i, 1);
        DFS(copiedTicket, contry[1], [...plan, contry[1]]);
      }
    });
  }

  DFS(tickets, "ICN", ["ICN"]);

  return answer.sort()[0];
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
); // ["ICN", "JFK", "HND", "IAD"]

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
